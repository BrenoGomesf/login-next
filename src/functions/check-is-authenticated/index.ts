export const ckeckUserAuthenticated = () => {
    if (typeof window !== 'undefined'){
        const storage = localStorage.getItem('token')
        if(storage){
            return {
                isAuthenticated: true,
                token: storage
            }
        }else{
            return {
                isAuthenticated: false,
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
