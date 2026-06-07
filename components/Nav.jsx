"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "home", href: "/" },
    { name: "about", href: "/resume" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
];

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-7">
            {links.map((link, index) => (
                <Link
                    href={link.href}
                    key={index}
                    className={`
                        capitalize text-sm font-medium transition-colors relative pb-0.5
                        ${link.href === pathname
                            ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent"
                            : "text-zinc-400 hover:text-zinc-50"
                        }
                    `}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
