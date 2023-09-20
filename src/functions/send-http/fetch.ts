'use client'
import { getStorage } from "../get-storage";

export async function fetchWrapper(url?: string, method?: string, body?:any){
    try {
        let send:string = `${process.env.NEXT_PUBLIC_BASE_URL}${url ? url : ''}`
        const data = await fetch(
            `${send}`,
            {
                method: method ? method : 'GET',
                headers: {   
                    'Content-Type': 'application/json',                
                    'Authorization': 'AnxJur-Token api_key=1:my_api_key'
                    
                }, 
                body: body ? JSON.stringify(body) : ''
            }) 

            if(data.status == 200 || data.status == 201) return data.json();
            else throw data      
    } catch (error) {
        throw new Error(`Erro na solicitação: ${error}`);
    }
}
export async function fetchLog(url?: string, method?: string, body?:any) {
    try {
        let send:string = `${process.env.NEXT_PUBLIC_BASE_URL}${url ? url : ''}`;
        const token = getStorage();
        if(token.user_id && token.token) { 
        const data = await fetch(
            `${send}`,
            {
                method: method ? method : 'GET',
                headers: {   
                    'Content-Type': 'application/json',                
                    'Authorization': `AnxJur-Token access_token=${token.user_id}:${token.token}`
                    
                }, 
                body: body ? JSON.stringify(body) : null,
            } ) 
            if(data.status == 200 || data.status <= 299) return data.json();
            else throw data   
        }   
    } catch (error) {
        throw new Error(`Erro na solicitação: ${error}`);
    }
}