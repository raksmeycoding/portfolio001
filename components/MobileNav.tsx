'use client'

import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {CiMenuFries} from "react-icons/ci";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ScrollArea} from "@/components/ui/scroll-area";


const MobileNav = () => {
    const pathname = usePathname()

    const links = [
        {name: "home", path: "/"},
        {name: "services", path: "/services "},
        {name: "work", path: "/work "},
        {name: "resume", path: "/resume "},
        {name: "contact", path: "/contact "},
        {
            name: "login/signup",
            path: '/auth',
        }
    ]
    return (
        <Sheet>
            <SheetTrigger className={`flex justify-center items-center `}>
                <CiMenuFries className={`text-[32px] text-accent`}/>
            </SheetTrigger>
            <SheetContent className={`flex flex-col`}>
                <SheetTitle></SheetTitle>
                {/*    Logo*/}
                <div className={`mt-20 mb-16 text-center text-2xl`}>
                    <Link href="/">
                        <h1 className={`text-4xl font-semibold`}>Raksmey<span className={`text-accent`}>.</span></h1>
                    </Link>
                </div>

                {/*    nav*/}
                <ScrollArea
                    className={`h-[400px]`}
                >
                    {
                        <div className={`grid grid-cols-1 gap-[30px] text-center pb-[300px]`}>
                            {
                                links.map((link, i) => {
                                    return (
                                        <div key={i}>
                                            <Link

                                                href={link.path}
                                                className={`${link.path === pathname && "text-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                                {link.name}
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </ScrollArea>

            </SheetContent>
        </Sheet>

    );
};

export default MobileNav;