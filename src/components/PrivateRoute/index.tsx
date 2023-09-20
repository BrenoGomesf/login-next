import { APP_ROUTES } from "@/constants/app-routes"
import { ckeckUserAuthenticated } from "@/functions/check-is-authenticated"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"

type PrivateRouteProps = {
    children: ReactNode
}
const PrivateRoute = ({ children }:PrivateRouteProps ) =>{
    const { push } = useRouter();

    const isAuthenticated = ckeckUserAuthenticated()
    useEffect(() =>{
        if(!isAuthenticated.isAuthenticated){
            push(APP_ROUTES.public.login)
        }
    }, [isAuthenticated.isAuthenticated, push])
    return (
        <>
        {!isAuthenticated.isAuthenticated && null}
        { isAuthenticated.isAuthenticated && children }
        </>
    )
}
export default PrivateRoute