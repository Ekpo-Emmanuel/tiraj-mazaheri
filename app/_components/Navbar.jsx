import Link from "next/link";
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Playfair_Display, Gilda_Display } from "next/font/google";


const playfair = Playfair_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })



export default function Navbar() {
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Guide', href: '/guide' },
    ]
  return (
    // <header className="bg-cream">
    <header className="bg-cream fixed top-0 z-50 w-full">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <Link href="/">
                    <h1 className={`text-md sm:text-2xl uppercase font-semibold text-gray-900 ${playfair.className}`}>
                        Tirajeh Mazaheri
                    </h1>
                </Link>
            </div>
            <div className="hidden sm:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                className="text-black text-sm leading-tight uppercase transition hover:text-gray-500/75"
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </li>                        
                    ))}
                </ul>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <Link href="#">
                        <Button variant="creamDark" className={playfair.className} size="darkSm">contact us</Button>
                    </Link>
                </div>
                <div className="block sm:hidden">
                    <Menu />
                </div>
            </div>
            </div>
        </div>
    </header>

  )
}
