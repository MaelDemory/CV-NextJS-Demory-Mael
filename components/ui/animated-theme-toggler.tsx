"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current
    if (!button) return

    const root = document.documentElement

    const { top, left, width, height } = button.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight
    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    )

    root.style.setProperty("--theme-transition-x", `${x}px`)
    root.style.setProperty("--theme-transition-y", `${y}px`)
    root.style.setProperty("--theme-transition-radius", `${maxRadius}px`)

    const applyTheme = () => {
      const newTheme = !isDark
      setIsDark(newTheme)
      root.classList.toggle("dark")
      localStorage.setItem("theme", newTheme ? "dark" : "light")
    }

    if (typeof document.startViewTransition !== "function") {
      root.classList.add("theme-switching")
      applyTheme()
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          root.classList.remove("theme-switching")
        })
      })
      return
    }

    root.classList.add("theme-switching")

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })

    const ready = transition?.ready
    if (ready && typeof ready.then === "function") {
      ready.then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: "ease-in-out",
            fill: "both",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      })
    }

    const finished = transition?.finished
    if (finished && typeof finished.finally === "function") {
      finished.finally(() => {
        root.classList.remove("theme-switching")
        root.style.removeProperty("--theme-transition-x")
        root.style.removeProperty("--theme-transition-y")
        root.style.removeProperty("--theme-transition-radius")
      })
    } else {
      window.setTimeout(() => {
        root.classList.remove("theme-switching")
        root.style.removeProperty("--theme-transition-x")
        root.style.removeProperty("--theme-transition-y")
        root.style.removeProperty("--theme-transition-radius")
      }, duration)
    }
  }, [isDark, duration])

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
