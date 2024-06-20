import { Playfair_Display, Gilda_Display } from "next/font/google";
import { Button } from "@/components/ui/button"



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
            <div className="px-8 py-32 mx-auto md:px-12 lg:px-32 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 md:gap-24">
                    <div className="">
                        <h1 className={`font-semibold text-4xl tracking-tighter text-white md:text-6xl text-balance uppercase ${playfair.className}`}>
                            Leading 
                            <span className="text-gray-100"> canadians to </span>
                            <span className="text-gray-200"> a better home</span>
                        </h1>
                        <p className="mt-4 text-base font-medium text-gray-100 text-balance">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl mi. Vestibulum et enim eros. Maecenas ut laoreet augue. Duis in dignissim mi.
                        </p>
                        <div className="mx-auto mt-8">
                            <Button variant="cream" className={playfair.className} size="lg">contact us</Button>
                        </div>
                    </div>
                    <div className="p-2 rounded-3xl lg:order-first"></div>
                </div>
            </div>
        </section>
    </div>
  )
}
