import { Playfair_Display, Gilda_Display } from "next/font/google";
import { Button } from "@/components/ui/button"
import Link from "next/link";



const playfair = Playfair_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })

export default function Hero() {
  return (
    <div
        className='h-[100%] mt-14 bg-cover sm:bg-center bg-no-repeat relative' 
        style={{
            backgroundImage: `url('/assets/background.png')`,
        }}
    >
        <section>
            <div className="px-4 py-32 mx-auto md:px-12  max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 md:gap-24">
                    <div className="">
                        <h1 className={`font-semibold leading-[70px] text-white text-6xl text-balance uppercase ${playfair.className}`}>
                            Leading 
                            <span className="text-gray-100"> canadians to </span>
                            <span className="text-gray-200"> a better home</span>
                        </h1>
                        <p className="mt-4 text-base text-gray-100 sm:text-balance">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl mi. Vestibulum et enim eros. Maecenas ut laoreet augue. Duis in dignissim mi.
                        </p>
                        <div className="mx-auto mt-8">
                            <Link href="#"
                                className="inline-flex text-black font-bold items-center justify-center w-full h-12 sm:h-12 gap-3 px-3 sm:px-6 py-[5px] sm:py-5 font-medium  duration-200 bg-cream md:w-auto rounded-md hover:bg-[#1e1e1e] hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                aria-label="Primary action"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="p-2 rounded-3xl lg:order-first"></div>
                </div>
            </div>
        </section>
    </div>
  )
}
