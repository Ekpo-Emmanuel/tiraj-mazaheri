import { Button } from "@/components/ui/button"
import { Playfair_Display, Gilda_Display } from "next/font/google";
import { VscWorkspaceTrusted } from "react-icons/vsc";

import { IoDiamondOutline } from "react-icons/io5";
import { FaBalanceScale } from "react-icons/fa";


const playfair = Playfair_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })
export default function WhoWeAre() {
    const items = [
        { title: 'Quality', description: "Founder and Top 1% Realtor with Elite Realtor's", svg: IoDiamondOutline},
        { title: 'Trust', description: "Owner of Coldwell Banker Real Estate", svg: VscWorkspaceTrusted},
        { title: 'Value', description: "#1 2023, 2023 Roomvu & PropertySpark", svg: FaBalanceScale},
    ]
  return (
    <section className="px-4 py-12 sm:py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
         <h1 className={`mx-auto text-center uppercase text-3xl sm:text-4xl font-medium text-black lg:text-5xl relative leading-[50px] tracking-tighter lg:leading-[70px] `}>
         {/* <h1 className={`font-bold sm:font-semibold md:text-center text-4xl tracking-tighter text-black md:text-6xl text-balance uppercase ${playfair.className}`}> */}
            Who we are 
        </h1>
        <div className="mt-10 sm:mt-20 grid grid-cols-1 text-sm font-medium  gap-x-6 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {items.map((item, index) => (
                 <div key={index} className="bg-cream p-5 flex gap-5 items-start">
                 <div className="flex items-center justify-center h-12 w-12">
                     <span className="text-xl">
                         <item.svg className="" />
                     </span>
                 </div>
                 <div className="flex flex-col">
                     <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>
                     <p className="text-sm text-gray-700">{item.description}</p>
                 </div>
             </div>
             
            ))}
        </div>
    </section>
  )
}
