'use client'
import { fetchLog } from '@/functions/send-http/fetch'
import './globals.css'
import { useCallback, useEffect, useState } from 'react'
import NavBar from '@/components/navBar';

const allUsers = (async () =>{
const response = await fetchLog('/api/v1/users')
return response?.data
});

export default function Home() {

  const [data, setData] = useState<any[] | null>([])
  
  const all = useCallback(async () =>{
    try {
      const response = await allUsers()
      setData(response)
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    }
  }, [])
  
  useEffect( ()=>{
    all()
  }, [all()])

return (
    <main>
      <NavBar/>
      {
        data?.map((el:any) => (
          <div>
            <pre>{ JSON.stringify(el, null, 2)}</pre>
          </div>
        ))
      }
    </main>
     )
}
