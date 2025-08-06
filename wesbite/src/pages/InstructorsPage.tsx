import React from "react"
import { Header } from '../components/header'
import { Instructors } from '../components/instructors'
import { ThemeProvider } from '../components/theme-provider'
import { SEO } from '../components/seo'

export function InstructorsPage() {
  return (
    <ThemeProvider>
      <SEO />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Instructors />
        </main>
      </div>
    </ThemeProvider>
  )
} 