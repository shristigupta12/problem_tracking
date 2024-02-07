import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import { Navbar } from '@/components/sections/navbar'
import { Toaster } from '@/components/ui/toaster'


const inter = Inter({ subsets: ['latin'] })

	@@ -22,8 +21,21 @@ export default function RootLayout({
  children: React.ReactNode
}) {
  return (
    <html lang="en" >  
      <body className={cn("bg-neutral-50 dark:bg-neutral-900", inter.className )}>
        <ThemeProvider attribute="class">
          <Navbar/>
          {children}
          <Toaster />  
        </ThemeProvider>
      </body>
    </html>
  )
}
