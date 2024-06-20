import React from 'react'
import { Playfair_Display, Gilda_Display } from "next/font/google";
import { Button } from "@/components/ui/button"



const playfair = Playfair_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })

export default function ExclusiveInsights() {
  return (
    <section>
  <div className="px-8 py-20 mx-auto md:px-12 lg:px-32 max-w-7xl">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="">
            <h1 className={`font-semibold text-4xl tracking-tighter text-black md:text-6xl text-balance uppercase ${playfair.className}`}>
                Exclusive Insights 
            </h1>
            <p className="mt-4 text-base sm:text-lg font-medium text-gray-700 text-balance">
                Benefit from expert insights and exclusive knowledge to master the upscale real estate of vancouver
            </p>
            {/* <div className="mx-auto mt-8 hidden sm:block"> */}
            <div className="mx-auto mt-8">
                <Button variant="creamDark" className={playfair.className} size="light">Read more</Button>
            </div>
        </div>
      <div className="order-first block mt-12 aspect-square lg:mt-0">
        <div className="h-full p-2 overflow-hidden border bg-gray-50">
          {/* <img
            alt="book"
            className="relative w-full rounded-2xl drop-shadow-2xl"
            src="/assets/bookurl"
          /> */}
        </div>
        {/* <div className="mx-auto mt-8 sm:hidden">
            <Button variant="creamLight" className={playfair.className} size="light">Read more</Button>
        </div> */}
      </div>
    </div>
  </div>
</section>

  )
}
