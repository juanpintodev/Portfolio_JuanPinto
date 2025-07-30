'use client'
 
import { Box, Container } from '@mui/material'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh'}}>
      <Header />
      <Hero />
      <Container maxWidth="lg" sx={{ py: 0 }}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </Box>
  )
}