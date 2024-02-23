import React from 'react'
import {Plus_Jakarta_Sans} from "next/font/google";
const jakrata = Plus_Jakarta_Sans({weight:"700",subsets: ["latin"]});
export default function NavBar() {
  return (
    <nav className={`${jakrata.className} flex px-8 justify-between items-center h-16 bg-white text-[#190034] relative  font-mono" role="navigation`}>
       <p className={` text-[40px]`}>JeTT</p>
       <div className="flex gap-8 text-[25px] ">
        <p>Customers</p>
        <p>Community</p>

        <p>Enterprise</p>
        <p>Pricing</p>
       </div>
       <div className="flex gap-2">
        <button className="border-2 rounded-md p-1 border-[#190034]" >Log In</button>
        <button className="text-white rounded-md bg-[#190034] p-1">Try for free</button>
       </div>
    </nav>
  )
}
