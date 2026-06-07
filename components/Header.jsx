"use client";

import Link from "next/link";
import { Button } from './ui/button';
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (y) => {
        setScrolled(y > 24);
    });

    return (
        <header className={`
            sticky top-0 z-50 py-5 text-zinc-50
            transition-all duration-300 ease-out
            ${scrolled
                ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
                : "bg-transparent border-b border-transparent"
            }
        `}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className={`
                        text-3xl font-semibold tracking-tight transition-colors duration-300
                        ${scrolled ? "text-zinc-50" : "text-zinc-100"}
                    `}>
                        Giang<span className="text-accent">.</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;
