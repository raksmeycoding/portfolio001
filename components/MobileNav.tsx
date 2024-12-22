'use client'

import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {CiMenuFries} from "react-icons/ci";
import Link from "next/link";
import {usePathname} from "next/navigation";


const MobileNav = () => {
    const pathname = usePathname()

    const links = [
        {name: "home", path: "/"},
        {name: "services", path: "/services "},
        {name: "work", path: "/work "},
        {name: "resume", path: "/resume "},
        {name: "contact", path: "/contact "},
    ]
    return (
        <Sheet>
            <SheetTrigger className={`flex justify-center items-center`}>
                <CiMenuFries className={`text-[32px] text-accent`}/>
            </SheetTrigger>
            <SheetContent className={`flex flex-col`}>
                <SheetTitle></SheetTitle>
                {/*    Logo*/}
                <div className={`mt-32 mb-40 text-center text-2xl`}>
                    <Link href="/">
                        <h1 className={`text-4xl font-semibold`}>Raksmey<span className={`text-accent`}>.</span></h1>
                    </Link>
                </div>

                {/*    nav*/}
                <nav className={`flex flex-col justify-center items-center gap-8`}>
                    {
                        links.map((link, i) => {
                            return (
                                <Link
                                    key={i}
                                    href={link.path}
                                    className={`${link.path === pathname && "text-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                    {link.name}
                                </Link>
                            )
                        })
                    }
                </nav>

            </SheetContent>
        </Sheet>

    );
};

export default MobileNav;