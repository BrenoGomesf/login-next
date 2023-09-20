'use client'
import './style.css'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { fetchWrapper } from '../../../functions/send-http/fetch';
import { useRouter } from 'next/navigation';

const schema = z.object({
  email: z.string().min(1, { message: 'Required' }).email({ message: 'Required' }),
  password: z.string().min(6),
});

export default function auth(){
const {
       register,
       handleSubmit,
       formState: { errors },
      } = useForm({
  resolver: zodResolver(schema)
});
const route = useRouter()

const onSubmit = (async (data: any)  =>{
  if(data){
    await fetchWrapper('/api/v1/access_tokens', 'POST', {data}).then((res:any) =>{
     if(res.data.token){
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user_id', res.data.user_id);
          route.push('/', { scroll: false})
     }
   }).catch((err:any) =>{
    alert('Ocorreu um erro')
   })
  }
});
    return (
   
        <div className="w-full max-w-xs">
  <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)} >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
         E-mail:
      </label>
      <input {...register('email')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="usuario@email.com"/>
    </div>
    <div className="mb-6">
      <label  className="block text-gray-700 text-sm font-bold mb-2">
        Senha:
      </label>
      <input {...register('password')} type="password"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Senha"/>
    </div>
    <div  className="flex items-center justify-between">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Entrar
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Esqueceu a senha?
      </a>
    </div>
  </form>
  <p className="text-center text-white-500 text-xs">
    &copy;2023 Anexo juridico.
  </p>
</div>
    )
}

