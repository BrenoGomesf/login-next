'use client'
import { fetchLog } from '@/functions/send-http/fetch'
import '../navBar/style.css'
import { useState } from 'react';


const NavBar= () =>{
    const [isSending, setIsSending] = useState(false);

    const send = (() =>{
        if(!isSending){
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        window.location.reload()
        }else{
            setIsSending(true);
        }
    })

    return (
        <button 
        onClick={send}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >Sair</button>
    )
}
export default NavBar