'use client'
import Footer from "@/components/Footer"
import Hero from "@/components/Hero/Hero"
import Hero2 from "@/components/Hero/Hero2"
import Hero3 from "@/components/Hero/Hero3"
import NavBar from "@/components/Navbar/NavBar"
import Recent from "@/components/Recent"
import SpotLight from "@/components/SpotLight"
import Top from "@/components/Top"

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />   
      <Hero2 />
      <Hero3  />
      <Top />
      <SpotLight />
      <Recent />
      <Footer />
    </main>
  )
}
