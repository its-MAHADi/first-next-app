import Link from "next/link";

export default function DashBoardLayout({ children }) {
  return (
   
      <div className="grid grid-cols-12 gap-10 p-5">
           <div className="col-span-2 bg-indigo-500 h-[calc(100vh-40px)] p-5 rounded text-white">
           <ul className='flex flex-col  gap-5'>
                <Link href= "/">Earnings </Link>
                <Link href= "/blog">Orders </Link>
                 <Link href= "/foods">Foods </Link>
                 <Link href= "/about">About </Link>
                 <Link href= "/login"> LogOut </Link>
      </ul>
           </div>
      <div className="col-span-10 bg-green-500 rounded p-5">
          {children}
      </div>
      </div>
  )
}

