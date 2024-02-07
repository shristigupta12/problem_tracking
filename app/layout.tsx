import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import { Navbar } from '@/components/sections/navbar'
import { Toaster } from '@/components/ui/toaster'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-57T2QPNW');
            `,
          }}
        />
      </Head>
      <body className={cn("bg-neutral-50 dark:bg-neutral-900", inter.className)}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-57T2QPNW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Toaster />  
        </ThemeProvider>
      </body>
    </>
  )
}
