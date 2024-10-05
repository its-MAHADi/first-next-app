import Navbar from "@/components/shared/Navbar";
import "./globals.css" ;

export const metadata = {
  title: 'title',
  description: 'c',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
       <div>
       {children}
       </div>
        </body>
    </html>
  )
}
