'use client'

import { MantineProvider, ColorSchemeScript, useMantineColorScheme } from '@mantine/core'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css';
import businessConfig from './businessConfig'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="auto">
          <Header />
          <main style={{ minHeight: '100vh', paddingTop: '60px' }}>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}



import './globals.css'