import React, {useState} from 'react'
import Link from "next/link"
import {motion} from "framer-motion"
import LeftToRight from "./Transition/LeftToRight"
import RightToLeft from './Transition/RightToLeft'

type Props = {}

const Nav = (props: Props) => {
    const [isActive, setIsActive] = useState(true)

    function openNav() {
        setIsActive(prevOpen => !prevOpen)
    }

    const NavItems = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "Top attractions",
            link: "/attractions"
        },
        {
            id: 3,
            name: "Cuisine",
            link: "/cuisine"
        },

    ]

    return (
        <div>
            <nav className='hidden sm:flex place-content-between items-center 
                            fixed right-8 left-8 lg:left-16 top-4'
            >
                <LeftToRight>
                    <Link href={"/"}>
                        <p className="logo">Danang Travels</p>
                    </Link>
                </LeftToRight>

                <RightToLeft>
                    <div className='nav-container'>
                        {NavItems.map(({id, name, link}: any) => (
                            <Link
                                key={id}
                                href={link}
                                className='underline-teal'
                            >
                                <span>0{id}.</span> {name}
                            </Link>

                        ))}
                    </div>
                </RightToLeft>
            </nav>

            <i onClick={openNav} className={`text-2xl fixed top-8 right-8 bx ${isActive ? "bx-menu" : "bx-x"} sm:hidden z-40`}></i>

            <div className={`sm:hidden ${isActive ? "-translate-x-full" : "-translate-x-0"} 
                            bg-zinc-900 opacity-90 z-30
                            duration-700 transition-transform 
                            fixed bottom-0 top-0 left-0 w-full`}
            >
                <Link href={"/"}>
                    <p className="logo px-16 pt-10">Danang Travels</p>
                </Link>
                <div className="flex flex-col gap-8 fixed bottom-20 px-16 w-full">
                    {NavItems.map(({id, name, link}: any) => (
                        <div key={id}>
                            <Link
                                href={link}
                                onClick={() => setIsActive(true)}
                            >
                                <span>0{id}.</span> {name}
                            </Link>
                            <hr className="bg-zinc-900 border-[0.01]" />
                        </div>
                    ))}
                </div>
            </div>
    </div>

    
  )
}

export default Nav