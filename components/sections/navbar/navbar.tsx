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
                    { 
                    theme=="light"
                    ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon text-neutral-500 w-5 h-5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun text-neutral-400 w-5 h-5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    } 
                    
                    <Switch onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} />
                </div>
                
                <SideNav />
            </div>
        </nav>
    )
}

export {Navbar};