import LeftBar from '@/Components/LeftBar'
import { Plus_Jakarta_Sans } from 'next/font/google'
import React from 'react'
const jakrata = Plus_Jakarta_Sans({weight:"700",subsets: ["latin"]});

export default function page() {
  return (
    <main className="flex bg-white">
      <LeftBar/>
      <div className="w-[80%]  p-5">
    <h1 className={`text-[#190041] text-[35px] items-center ${jakrata.className}`}>My dashboard : “GearCycle”</h1>
   <div className='flex flex-col'>
    <div class="mt-5 bg-[#190041] h-px w-[90%] "></div>
<div className="bg-[#E1CCEB99] p-6 mt-7 w-[40%] rounded-lg text-[#190041] flex  flex-col items-center">
<h1 className=' text-[20px] font-bold '>
Your last purchase is on the way !
Arriving in :
</h1>
<img src="/dashboard/maps.png " className='w-[60%]' />
<h1 className="self-start text-[20px] font-semibold">Your order  :</h1>
<div className="self-center font-medium ml-1 list-disc   ">
  <h1 className='text-[20px] font-semibold '>Raw Materials - Steel Tubes</h1>
  <ul className="opacity-[70%]   ">
  <li className='flex'> 
 

    - Quantity: 1,000 units

  </li>
    <li className='flex '> - Description: Seamless steel tubes for bicycle frame construction.</li>
    <li className='flex'> - Specification: Grade A steel, diameter 1.5 inches, length 6 feet.</li>
    <li className='flex'>- Supplier: XYZ Steel Suppliers.</li>
    <li className='flex'> - Price: 2.30 DZD per unit.</li>
  </ul>

  
</div>
<div className="mt-4 px-4 py-2 bg-[#190041] text-white rounded-xl">All</div>
<p className='text-[20px] self-start font-semibold mt-4'>Total cost : 6.300 DZD.</p>
</div>


<div className="bg-[#E1CCEB99] p-6 mt-7 w-[40%] rounded-lg text-[#190041] flex  flex-col items-center">
<h1 className=' text-[20px] font-bold '>
GearCycle’s sales (last month) :
</h1>
<img src="/dashboard/cercle.png " className='w-[60%] m-4' />
<div className="self-center font-medium ml-1 list-disc   ">
  
<ul className='flex flex-wrap gap-5 justify-center '>

<li className='flex gap-2 '>
<div className='w-4 h-4 bg-[#502C76] mt-1'></div>
<div>Components</div>
</li>

<li className='flex gap-2'>
<div className='w-4 h-4 bg-[#AB5FC7] mt-1'></div>
<div>Repair</div>
</li>

<li className='flex gap-2'>
<div className='w-4 h-4 bg-[#DE6E8E] mt-1'></div>
<div>Customization</div>
</li>

<li className='flex gap-2'>
<div className='w-4 h-4 bg-[#E28FD0] mt-1'></div>
<div>Training</div>
</li>

<li className='flex gap-2'>
<div className='w-4 h-4 bg-[#76BBE2] mt-1'></div>
<div>Accessories</div>
</li>


</ul>

  
</div>
<p className='text-[20px] font-semibold mt-4'>Total cost : 6.300 DZD.</p>

<div className="mt-4 px-4 py-2 bg-[#190041] text-white rounded-xl">More</div>
</div>


      </div>
      </div>
    </main>
  )
}
