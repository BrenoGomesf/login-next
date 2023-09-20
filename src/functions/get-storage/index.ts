export const getStorage = () => {
    if (typeof window !== 'undefined'){
        const storage = localStorage.getItem('token')
        const user_id = localStorage.getItem('user_id')
        if(storage){
            return {
                user_id: user_id,
                token: storage
            }
        }else{
            return {
                isAuthenticated: null,
                token: null
            }
        }
    }else{
        return {
            isAuthenticated: false,
            token: null
        }
    }
}