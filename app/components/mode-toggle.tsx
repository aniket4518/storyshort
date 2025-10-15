"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    // Set mounted first
    setMounted(true)
    
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme')
    
    // If no saved theme, default to light mode
    if (!savedTheme || savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      if (!savedTheme) {
        localStorage.setItem('theme', 'light')
      }
    } else if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])
  
  const toggleTheme = () => {
    console.log('Toggle clicked, current isDark:', isDark)
    
    if (isDark) {
      // Switch to light
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      console.log('Switched to light mode')
    } else {
      // Switch to dark
      setIsDark(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      console.log('Switched to dark mode')
    }
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <button className="whitespace-nowrap rounded-md text-sm font-medium transition-colors relative h-9 w-9 px-0 flex items-center justify-center border border-neutral-200 bg-white">
        <Sun className="h-[18px] w-[18px] text-black" />
      </button>
    )
  }

  return (
    <button 
      onClick={toggleTheme}
      className="whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-gray-800 relative h-9 w-9 px-0 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="h-[18px] w-[18px] text-white" />
      ) : (
        <Sun className="h-[18px] w-[18px] text-black" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}