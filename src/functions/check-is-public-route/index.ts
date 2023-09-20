import { APP_ROUTES } from "@/constants/app-routes";

/**
 * 
 * @param asPath string
 * @returns boolean
 */
export const checkIsPulicRoute = (asPath: string) =>{
    const appPublicRoute = Object.values(APP_ROUTES.public)
    return appPublicRoute.includes(asPath)
}