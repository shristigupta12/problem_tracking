"use client"
import { Switch } from '@/components/ui/switch'
import { SideNav } from '@/components/ui/side-nav'
import { Sun } from "lucide-react"
import { Moon } from "lucide-react"
import { useTheme } from 'next-themes'


const Navbar : React.FunctionComponent = () =>{
    const { systemTheme, theme, setTheme } = useTheme();
    return(
        <nav className=" px-[70px] py-[15px] flex justify-between shadow-neutral-200 shadow-md sticky top-0 bg-white dark:bg-neutral-800 dark:shadow-neutral-700 dark:text-neutral-50">
            <div className='logo flex gap-2 items-center'>
                <p>{"</>"}</p>
                <p className='cursor-pointer'>Problem<span className='text-orange-500'>Tracker</span> </p>
            </div>
            <div className="rightNav flex gap-6 ">
                <div className='flex items-center gap-2'>
                    <span>{ theme=="light" ? <Moon className='text-neutral-400 w-4 h-4 dark:text-neutral-200'/>
                    : <Sun className='text-neutral-400 w-4 h-4 dark:text-neutral-200'/>}</span>
                    <Switch onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} />
                </div>
                
                <SideNav />
            </div>
        </nav>
    )
}

export {Navbar};