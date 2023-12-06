import React, { useState,useEffect } from "react";
import {jwtClient} from "../../../utilities/JWTClient.js";

import {useNavigate} from 'react-router-dom'; 

import member from '../../../assets/new/member.png'


export default function CommentSection({
    articleId
}) {
    const navigate = useNavigate();
    const [comments,setComments] = useState([])
    const [content,setContent] = useState("")

    useEffect(()=>{
        fetchData("/api/v1/content/articlecomments?articleId="+articleId,setComments)
    },[articleId])


    return (
        <div>
            <Title 
                contentCount={comments.length}
            />

            <CommentInput 
                content={content} 
                handleCommentInputChanged={(e)=>handleCommentInputChanged(e,setContent)}

                // handleSubmitButtonPressed={(e)=>handleSubmitButtonPressed(e,articleId, content, setComments)}
                handleSubmitButtonPressed={async (e)=>{
                    e.preventDefault()
                    // if(!await jwtClient.stillHasTokenAfter(7200)){
                    //     navigate("/login");
                    // }
                    handleSubmitButtonPressed(e,articleId, content, setComments)
                }}
            />

            {comments.map(comment => 
                <Comment content={comment.content} userFullName={comment.userFullName} commentedAt={comment.commentedAt}
            />
            )}
        </div>
    )
}

function Title({
    contentCount
}) {
    return(
        <div>
            <div className='pb-5 border-solid border-b-2 border-slate-300'>
                <p className='text-2xl font-semibold  text-justify text-gray-600 mb-5 mt-6'>
                    Bình Luận Người Dùng
                </p>
                <div className="">
                    <p className='text-lg font-semibold  text-justify text-gray-600'>
                        {contentCount}    bình luận
                    </p>
                </div>
            </div>

        </div>
    )
}

function CommentInput({
    content,
    handleCommentInputChanged,
    handleSubmitButtonPressed
}) {
    return(
        <form className='w-full mx-0 bg-white mb-10' >
            <div className='w-full'>
                <div className="grid grid-cols-2">
                    <label className="self-center">Bình Luận</label>
                    <button className='justify-self-end border w-[50px] h-[35px] my-3 bg-indigo-600 hover:bg-indigo-500 text-white'
                        type="submit"
                        onClick={(e)=>handleSubmitButtonPressed(e)}
                    >
                        Gửi
                    </button>
                </div>
                <input className='border p-2 w-full h-[70px]' type="text" 
                    value={content}
                    onChange={(e)=>handleCommentInputChanged(e)}
                    />
            </div>
        </form>
    )
}

function Comment({
    userFullName,
    content,
    commentedAt
}) {
    return (
        <div className='border-solid border border-slate-200 h-fit rounded-md p-4 mb-3 w-full'>
            <div className='flex'>
                <img className='w-[40px] h-[40px] rounded-full' src={member} alt=''/>
                <div className='text-sm text-justify text-gray-600 pl-3'>
                    <p className='self-start text-lg font-semibold'>{userFullName}</p>
                    <p className='self-end text-sm'> {commentedAt}</p>
                </div>
            </div>
            <p className='text-lg  text-justify text-gray-600 mt-3'>
                {content}
            </p>
        </div>
    )
}

function fetchData(urlPath, callback) {
    jwtClient.fetch(urlPath)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            callback(data)
        })
        .catch(error => {
            console.log(error)
        });
}

function handleCommentInputChanged(e, setContent) {
    setContent(e.target.value)
    console.log("Handle content input changed!")
} 

async function handleSubmitButtonPressed(e, articleId, content, setComments) {
    e.preventDefault()

    

    jwtClient.fetch("/api/v1/content/articlecomments",{
        method:"POST",
        header: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            content: content,
            articleId: articleId
        })
    })
    .then(response=>{
        if(response.status===200) {
            fetchData("/api/v1/content/articlecomments?articleId="+articleId,setComments)
            console.log("Handle submit success!")
        }
    })
    .catch(error => {
        console.log(error)
    });
}

// function handleSubmitButtonPressed(e, articleId, content, setComments) {
//     e.preventDefault()

//     jwtClient.stillHasTokenAfter(7200)
//         .then(isOk => {
//             if(isOk){
//                 jwtClient.fetch("/api/v1/dev/articlecomments",{
//                     method:"POST",
//                     header: {
//                         "Content-Type":"application/json"
//                     },
//                     body: JSON.stringify({
//                         content: content,
//                         articleId: articleId
//                     })
//                 })
//                 .then(response=>{
//                     if(response.status===200) {
//                         fetchData("/api/v1/dev/articlecomments?articleId="+articleId,setComments)
//                         console.log("Handle submit success!")
//                     }
//                 })
//             } else {
//                 useNavigate("login")
//             }
//         }) 
// }