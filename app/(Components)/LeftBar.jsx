import React from 'react'
import {Plus_Jakarta_Sans} from "next/font/google";
const jakrata = Plus_Jakarta_Sans({weight:"800",subsets: ["latin"]});
export default function LeftBar() {
  return (
    <div className={`w-[20%]  ${jakrata.className} p-4`}>
      <div className='flex gap-5 '>
      <button class="block  text-gray-800 focus:outline-none">
  <span class="block w-6 h-1 bg-gray-800 mb-1"></span>
  <span class="block w-6 h-1 bg-gray-800 mb-1"></span>
  <span class="block w-6 h-1 bg-gray-800"></span>
</button>
        <p className='text-[#190041] text-[30px]'>JeTT</p>
      </div>
      <div class="mt-5 bg-[#190041] h-px w-full"></div>
      <div className="flex flex-col items-center mt-4 mb-4 gap-5">
      <h1 className="text-[#190041] text-[25px] ">My Entreprise</h1>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
    My Dashboard
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
My purchases
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
My stock
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
My production
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
My sales
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
My bills
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
My activity
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
My subscription
</button>

      </div>
      <div class="mt-5 bg-[#190041] h-px w-full"></div>
      <div className="flex flex-col items-center mt-4 mb-4 gap-5">
      <h1 className="text-[#190041] text-[25px] ">Our IA</h1>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041]">
    ROSTOM  SAIT PAS QUOI METTRE
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041]">
    ROSTOM  SAIT PAS QUOI METTRE
</button>
</div>
<div class="mt-5 bg-[#190041] h-px w-full"></div>
      <div className="flex flex-col items-center mt-4 mb-4 gap-5">
      <h1 className="text-[#190041] text-[25px] ">Options</h1>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041]">
Report a problem
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041]">
Contact us
</button>
</div>
    </div>
  )
}
