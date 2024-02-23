import NavBar from "@/Components/NavBar";
import {Plus_Jakarta_Sans} from "next/font/google";
const jakrata = Plus_Jakarta_Sans({weight:"700",subsets: ["latin"]});



export default function Home() {
  return (
    <main className="w-screen  bg-white">
      <NavBar/>
      <section className={`${jakrata.className} flex flex-col items-center`}>
        
        <h1 className={` text-[88px]  text-center px-20 py-5 text-[#190034]`}>
          All your
          <span className="bg-purple-200 mx-3 ">
customer insights
          </span>
          in one place
        </h1>
     
        <p className="text-[#190034] mt-2">Analyze customer data. Manage and share insights. Build products people love.</p>
     <div className="flex gap-3 mt-7">
     <button className="px-3 py-2 text-white rounded-md bg-[#190034]">Try for free</button>

<button className="py-2 px-3 border-2 rounded-md border-[#190034] text-[#190034]" >Contact Sales</button>


     </div>
       <div className="w-screen mt-20 ml-20">
        <img src="/landing/baseImage.png" className="w-screen" />
       </div>
       <div className="flex  ">
<div className="text-[#190034] flex flex-col  mx-20  justify-center   " >
<h1 className="text-[40px]">Speed up your analysis</h1>
<p>
Turn customer data into needs and pain points. 
Transcribe, analyze, and uncover themes fast.
</p>
<div className="flex gap-1 mt-10">
<button className="px-3 py-2 text-white rounded-md bg-[#190034]">Try for free</button>

<button className="py-2 px-3 border-2 rounded-md border-[#190034] text-[#190034]" >Explore Analysis</button>
</div>
</div>

<div>
<img src="/landing/secondImage.png" className="" />


</div>
        </div>
        <div className="flex mt-20  ">
<div className="text-[#190034] flex flex-col  mx-20  justify-center   " >
<h1 className="text-[40px]">Stop repeating research</h1>
<p>

Store and search years of research in one place. 
Give stakeholders everything they need to make 
better decisions.
</p>
<div className="flex gap-1 mt-10">
<button className="px-3 py-2 text-white rounded-md bg-[#190034]">Try for free</button>

<button className="py-2 px-3 border-2 rounded-md border-[#190034] text-[#190034]" >Explore Analysis</button>
</div>
</div>

<div className="mr-10">
<img src="/landing/thirdImage.png" className="" />


</div>
        </div>


        <div className="flex mt-20  ">
<div className="text-[#190034] flex flex-col  mx-20  justify-center   " >
<h1 className="text-[40px]">
A solution that 
actually scales
</h1>
<p>

Expand research across your organization with 
customization, security, and compliance features 
built with enterprise in mind.
</p>
<div className="flex gap-1 mt-10 ">
<button className="px-3 py-2 text-white rounded-md bg-[#190034]">Try for free</button>

<button className="py-2 px-3 border-2 rounded-md border-[#190034] text-[#190034]" >Explore Analysis</button>
</div>
</div>

<div className="mr-10">
<img src="/landing/fourthImage.png" className="" />


</div>
        </div>

  <h1 className=" text-[#190034] text-[50px]">
  Backed by speed 
  and security
    </h1>
 

  <div className="flex gap-5 p-20">
  <div className="text-[#190034] w-[200px@">
  <img src="/landing/fifth.png" />
  <h1 className="text-[25px] my-2">Speed up analysis</h1>
  <p>
  Let customer understanding come to with 
  automated reports about themes and trends 
  across all of your feedback.
  </p>
  <p>Explore automation</p>
</div>

<div className="text-[#190034]">
  <img src="/landing/six.png" />
  <h1 className="text-[25px] my-2">Connect your existing tools</h1>
  <p>
  Surface research insights in the tools your 
  stakeholders use with Slack, Atlassian, Notion,  and Zapier
  </p>
  <p>Explore automation</p>
</div>

<div className="text-[#190034]">
  <img src="/landing/seven.png" />
  <h1 className="text-[25px] my-2">Protect customer privacy</h1>
  <p>
  We’re committed to ensuring security and   automated reports about themes and trends 
  compliance. Dovetail is SOC 2 certified  </p>
  <p>Explore automation</p>
</div>



  </div>

  <h1 className=" text-[#190034] text-[50px]">
  You’re in good company
 
  </h1>
  <p className=" text-[#190034] "> 
  Thousands of teams across the globe are using Dovetail 
  to improve the quality of their thing.
  </p>
  <img src="/landing/ten.png" className="ml-32 mt-3 "/>
<div className="bg-[#FDF4E6] w-screen flex flex-col justify-center items-center p-20 text-[#190034] gap-3">
<img src="/icons/etoile.png" className="w-[100px] h-[100px]" />
<h1 className="text-[50px] w-[70%] text-center">
Join 10,000 teams building 
products people love
</h1>
<p className="text-[20px]">Get started for free, then upgrade from $30 USD / month.</p>

<div className="flex gap-4">
        <button className="text-white p-2 rounded-md bg-[#190034] p-1">Try for free</button>
        <button className="border-2 p-2 rounded-md p-1 border-[#190034]" >View pricing</button>

        </div>

</div>
</section>
    </main>
  );
}
