import { Button } from "@/components/ui/button"
import { Playfair_Display, Gilda_Display } from "next/font/google";



const playfair = Playfair_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })
export default function WhoWeAre() {
    const items = [
        { title: 'Quality', description: "Founder and Top 1% Realtor with Elite Realtor's"},
        { title: 'Trust', description: "Owner of Coldwell Banker Real Estate"},
        { title: 'Value', description: "#1 2023, 2023 Roomvu & PropertySpark"},
    ]
  return (
    <section className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
         <h1 className={`font-bold sm:font-semibold md:text-center text-4xl tracking-tighter text-black md:text-6xl text-balance uppercase ${playfair.className}`}>
            Who we are 
        </h1>
        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {items.map((item, index) => (
                <div 
                    // className="px-8 py-8 md:py-20 lg:py-16 rounded-3xl bg-cream flex flex-col gap-2 justify-center"  //rounded edge  
                    className="px-8 py-8 md:py-20 lg:py-16 bg-cream flex flex-col gap-2 justify-center" 
                    key={index}
                >
                    <h1 className={`font-semibold text-3xl tracking-tighter text-gray-900 lg:text-5xl text-balance uppercase ${playfair.className}`}>
                        {item.title}
                    </h1>
                    <p className="mt-4 text-lg lg:text-xl font-medium text-gray-800 text-balance">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    </section>
  )
}
