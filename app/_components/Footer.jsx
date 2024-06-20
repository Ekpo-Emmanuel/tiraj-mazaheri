import React from 'react'
import { Playfair_Display, Gilda_Display } from "next/font/google";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { FaInstagram, FaFacebookF, FaLinkedin,  FaYoutube } from "react-icons/fa";



const playfair = Playfair_Display({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })


export default function Footer() {
    const FooterLinks = [
        {
            title: 'Navigation',
            links: [
                { name: 'HOME', href: '/' },
                { name: 'ABOUT', href: '/about' },
                { name: 'GUIDE', href: '/guide' },
            ] 
        },
        {
            title: 'Contact',
            links: [
                { name: '1-xxx-xxx-xxxx', href: '#/call' },
                { name: 'tirajeh@___.com', href: '#/ig' },
            ] 
        },
        {
            title: 'Address',
            links: [
                { name: 'Vancouver, BC Canada', href: '/' },
            ] 
        },
    ];

    const socialLinks = [
        { name: 'Instagram', href: '#', icon: FaInstagram },
        { name: 'Linkedin', href: '#', icon: FaLinkedin },
        { name: 'Facebook', href: '#', icon: FaFacebookF },
        { name: 'Youtube', href: '#', icon: FaYoutube },
    ] 
  return (
    <footer className="bg-cream">
        <div className="px-8 py-12 mx-auto md:px-12 lg:px-8 max-w-7xl">
            <div className="w-full xl:grid xl:grid-cols-4 xl:gap-8">
                <div>
                    <Link href="/" className={`text-2xl font-bold uppercase ${playfair.className}`}>Tirajeh Mazaheri</Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-12 align-top text-sm font-medium text-gray-500 lg:grid-cols-4 lg:mt-0 xl:col-span-3">
                    {FooterLinks.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-base text-black uppercase cursor-default">{item.title}</h3>
                            <ul role="list" className="mt-4 space-y-2">
                                {item.links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="text-gray-500 hover:text-black text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="">
                        <Button variant="creamDark" className={playfair.className} size="light">contact us</Button>
                        <ul role="list" className="mt-4 flex items-end gap-2">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        target="_blank"
                                        className="text-black"
                                    >
                                        <link.icon size={20} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

