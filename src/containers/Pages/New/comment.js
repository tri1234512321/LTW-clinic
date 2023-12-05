import React, { useState,useEffect } from "react";
import {jwtClient} from "../../../utilities/JWTClient.js";

import viemmui from '../../../assets/new/viem-mui.jpg'

function Comment() {
    var formData = new FormData();
    formData.append('id', 1000001);

    const [Data,setData] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            await jwtClient.fetch('/api/v1/dev/articles?id=1000001', {
                method: 'GET',
                credentials: 'include',
            })
            .then(response => console.log(response.json()))
                // .then(data => {
                //     console.log(data);
                //     setData(data.articleComments);
                //     }
                // )
        }
        fetchData()
    });

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage  = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(Data.length/recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    return (
        <div>
            {/* {records.map((data,index)=>(
                <div className='border-solid border-y-2 border-slate-300 h-fit py-6 mb-6 w-full'>
                <div className='border-solid border border-slate-200 h-fit rounded-md p-4 mb-3 w-full'>
                    <div className='flex'>
                        <img className='w-[40px] h-[40px] rounded-full' src={viemmui} alt=''/>
                        <div className='text-sm text-justify text-gray-600 pl-3'>
                            <p className='self-start font-semibold'>{data.userId}</p>
                            <p className='self-end text-sm'> {data.createedAt}</p>
                        </div>
                    </div>
                    <p className='text-lg  text-justify text-gray-600 mt-3'>
                        {data.content}
                    </p>
                </div>
            </div>
            ))} */}
            <nav className="nav">
                <ul className="ul">
                    <li className="li">
                        <button className="buttonLeft"
                        onClick={prePage}> Prev </button>
                    </li>
                    {
                        numbers.map((n,i)=> (
                            <li className="li" key ={i}>
                                <button className="button"
                                onClick={()=>changeCPage(n)}>{n}</button>
                            </li>
                        ))
                    }
                    <li className="li">
                        <button className="buttonRight"
                        onClick={nextPage}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )

    function prePage() {
        if(currentPage !== firstIndex) {
          setCurrentPage(currentPage - 1)
        }
    }
      
      function changeCPage(id) {
        setCurrentPage(id)
    }
      
      function nextPage() {
        if(currentPage !== lastIndex) {
          setCurrentPage(currentPage + 1)
        }
    }
}

export default Comment