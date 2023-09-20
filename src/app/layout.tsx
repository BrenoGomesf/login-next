'use client';
import { checkIsPulicRoute } from '../functions/check-is-public-route';
import './globals.css'
import { usePathname } from 'next/navigation'
import PrivateRoute from '@/components/PrivateRoute';

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pahtname = usePathname();;
  const isPublic = checkIsPulicRoute(pahtname);
 
  return (
    <html lang="en">
      <body>   
        {  isPublic   && children }
        { !isPublic  && 
        <PrivateRoute>
          <main>
            { children }
          </main>
          </PrivateRoute>}
      </body>
    </html>
  )
}
