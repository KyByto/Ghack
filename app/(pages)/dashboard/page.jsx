import { Plus_Jakarta_Sans } from 'next/font/google'
import React from 'react'
const jakrata = Plus_Jakarta_Sans({weight:"700",subsets: ["latin"]});

export default function page() {
  return (
    <main className="flex flex-col  bg-white ">
      <div className="flex ">
      <div className={`w-[20%]  ${jakrata.className} p-4 bg-[#8964E221]`}>
      <div className='flex gap-5  '>
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
    Dashboard
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
Purchases
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
 Stock
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
 Production
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
 Sales
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
 Bills
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
 Activity
</button>
<button className="bg-[#66666626] px-9 py-3 rounded-xl text-[#190041] w-[90%]">
 Subscription
</button>

      </div>
      <div class="mt-5 bg-[#190041] h-px w-full"></div>
      <div className="flex flex-col items-center mt-4 mb-4 gap-5">
      <h1 className="text-[#190041] text-[25px] self-start ">Our IA</h1>
<button className="bg-[#66666626] py-3 rounded-xl w-[85%] whitespace-nowrap text-[#190041]">
Predict analytics
</button>
<button className="bg-[#66666626]  py-3 rounded-xl w-[85%] text-[#190041]">
Help managing
</button>
</div>
<div class="mt-5 bg-[#190041] h-px w-full"></div>
      <div className="flex flex-col items-center mt-4 mb-4 gap-5">
      <h1 className="text-[#190041] text-[25px] self-start ">Options</h1>
<button className="bg-[#66666626]  py-3 rounded-xl w-[85%] text-[#190041]">
Report a problem
</button>
<button className="bg-[#66666626] px-9 py-3 w-[85%] rounded-xl text-[#190041]">
Contact us
</button>
</div>
    </div>
      <div className="w-[80%] flex flex-col   p-5">
    
    <h1 className={`text-[#190041] text-[35px] items-center ${jakrata.className}`}>My dashboard : “GearCycle”</h1>
    <div class="mt-5 bg-[#190041] h-px w-[90%]   "></div>

  <div className='flex   '>
   <div className='flex flex-col   w-[50%]'>
<div className="bg-[#E1CCEB99] p-6 mt-7 w-[90%] rounded-lg text-[#190041] flex  flex-col items-center">
<h1 className=' text-[20px] font-bold '>
Your last purchase is on the way !
Arriving in :
</h1>
<img src="/dashboard/maps.png " className='w-[60%]' />
<h1 className="self-start text-[20px] font-semibold">Your order  :</h1>
<div className="self-center font-medium ml-1 list-disc ">
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
<div className="mt-4 px-6 py-2 bg-[#190041] text-white rounded-xl w-[30%] text-center text-[20px] ">All</div>
<p className='text-[20px] self-start font-semibold mt-4'>Total cost : 6.300 DZD.</p>
</div>


<div className="bg-[#E1CCEB99] p-6 mt-7 flex-grow w-[40%] rounded-lg text-[#190041] flex  flex-col items-center w-[90%]">
<h1 className=' text-[20px] font-bold '>
GearCycle’s sales (last month) :
</h1>
<img src="/dashboard/cercle.png " className='w-[60%] m-4' />
<div className="self-center font-medium ml-1 list-disc     ">
  
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
      
      <div className=" w-[40%]   flex  flex-col">
        <div className='bg-[#E1CCEB99] p-6 mt-7  text-[#190041  flex  flex-col items-center rounded-lg'>

        <h1 className={`text-[#190041] text-[25px] ${jakrata.className}`}>What GearCycle still have in stock :</h1>
<img src="/dashboard/dessin.png" />
<div className="mt-4 px-6 py-2 bg-[#190041] text-white rounded-xl w-[30%] text-center text-[20px] ">All</div>
</div>
<div className={`bg-[#E1CCEB99] p-6 mt-7  text-[#190041] flex gap-3  flex-col items-center rounded-lg ${jakrata.className}`}>
  <h1 className={` text-[22px] self-start `}>GearCycle’s production :</h1>
  <div className='flex flex-col items-center'>
    <h1 className='text-[21px] ml-5 self-start'>
    Components - Gear Sets
    </h1>
    <img src="/dashboard/Pourcentage.png" className='w-[80%] mt-3 ml-6' />
    <ul className="opacity-[70%]  ml-6 mt-4 flex flex-col gap-2   ">
  <li className='flex'> 
 

    - Quantity: 1,000 units

  </li>
    <li className='flex '> - Description: Seamless steel tubes for bicycle frame construction.</li>
    <li className='flex'> - Specification: Grade A steel, diameter 1.5 inches, length 6 feet.</li>
    <li className='flex'>- Supplier: XYZ Steel Suppliers.</li>
    <li className='flex'> - Price: 2.30 DZD per unit.</li>
  </ul>
  <div className="mt-4 px-6 py-2 bg-[#190041] text-white rounded-xl w-[30%] text-center text-[20px] ">All</div>
  <p className='text-[20px] self-start font-semibold mt-4 ml-3'>Total cost : 6.300 DZD.</p>

  </div>
  
</div>
<div className={`bg-[#E1CCEB99] p-6 mt-7  text-[#190041] flex gap-3  flex-col items-center rounded-lg ${jakrata.className}`}>
  <h1 className={` text-[22px] self-start `}>GearCycle’s last activities :</h1>
  <div className='flex flex-col items-center'>
   
    <ul className="opacity-[70%]  ml-6 mt-4 flex flex-col gap-2   ">
  <li className='flex flex-col'> 
 

  Building more than 120 bicycle
  <div class="mt-2 bg-[#190041] h-[2px] w-[100%]   "></div>
  </li>
    <li className='flex flex-col '>     
Ordering 32 order last month
<div class="mb-2 mt-1 bg-[#190041] h-[2px] w-[100%]   "></div>
</li>
    <li className='flex flex-col'>   
 Customizing  28 bicycle last month
 <div class="mb-2 bg-[#190041] h-[2px] mt-1 w-[100%]   "></div>
 </li>
    
  </ul>
  <div className="mt-4 px-6 py-2 bg-[#190041] text-white rounded-xl w-[30%] text-center text-[20px] ">More</div>

  </div>
  
</div>


        </div>


</div>

      </div>
      </div>
      <footer className=' text-[#190041] flex flex-col px-32 py-12 '>
      <div class="mb-2 bg-[#190041] h-px mt-1 w-[100%]   "></div>
      <div className='text-[#190041] text-[30px]'>JeTT</div>
<div className='my-3'>Where business takes off and success lands</div>
<div class="mb-2 bg-[#190041] h-px mt-1 w-[100%]   "></div>
<div className='flex justify-between'>
<p>© Dovetail Research Pty. Ltd.</p>
<div className='flex gap-4'>
  <p>Terms</p>
  <p>Privacy Policy</p>
</div>
</div>
      </footer>
    </main>
  )
}
