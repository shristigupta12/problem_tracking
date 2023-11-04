"use client"
import { Switch } from '@/components/ui/switch'
import { SideNav } from '@/components/ui/side-nav'
import { Sun } from "lucide-react"
import { Moon } from "lucide-react"
import { useState } from 'react'


const Navbar : React.FunctionComponent = () =>{
    const [theme, setTheme] = useState(true)
    return(
        <nav className=" px-[70px] py-[15px] flex justify-between shadow-neutral-200 shadow-md sticky top-0 bg-white">
            <div className='logo flex gap-2 items-center'>
                <p>{"</>"}</p>
                <p className='cursor-pointer'>Problem<span className='text-orange-500'>Tracker</span> </p>
            </div>
            <div className="rightNav flex gap-6 ">
                <div className='flex items-center gap-2'>
                    <span>{ theme? <Moon className='text-neutral-400 w-4 h-4 '/>
                    : <Sun className='text-neutral-400 w-4 h-4 '/>}</span>
                    <Switch onClick={()=>{setTheme(!theme)}}/>
                </div>
                
                <SideNav />
            </div>
        </nav>
    )
}

export {Navbar};