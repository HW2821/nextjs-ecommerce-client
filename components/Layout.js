import Head from "next/head"
import React from "react"
import Annoucement from "./Annoucement"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>首页 - HW</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Annoucement />
      {children}
      <Footer />
    </>
  )
}
