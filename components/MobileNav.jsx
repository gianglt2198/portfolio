"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: "home", href: "/" },
    { name: "about", href: "/resume" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger>
                <CiMenuFries className="text-[28px] text-zinc-400" />
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-primary border-l border-zinc-800">
                <div className="mt-24 mb-16 text-center">
                    <Link href="/">
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Giang<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col items-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`
                                capitalize text-lg transition-colors
                                ${link.href === pathname ? "text-accent" : "text-zinc-400 hover:text-zinc-50"}
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
