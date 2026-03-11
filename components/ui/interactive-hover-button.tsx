import * as React from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean
  hoverLabel?: React.ReactNode
  leadingVisual?: React.ReactNode
  trailingVisual?: React.ReactNode
}

export function InteractiveHoverButton({
  asChild = false,
  children,
  className,
  hoverLabel,
  leadingVisual,
  trailingVisual,
  ...props
}: InteractiveHoverButtonProps) {
  const childLabel = asChild && React.isValidElement(children)
    ? children.props.children
    : children

  const content = (
    <>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative flex items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-x-10 group-hover:opacity-0">
        <span className="flex h-6 w-6 items-center justify-center text-primary">
          {leadingVisual ?? <span className="h-2.5 w-2.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-[100.8]" />}
        </span>
        <span className="whitespace-nowrap">
          {childLabel}
        </span>
      </span>
      <span className="text-primary absolute inset-0 z-10 flex translate-x-10 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span className="whitespace-nowrap">{hoverLabel ?? childLabel}</span>
        <span className="flex h-5 w-5 items-center justify-center">
          {trailingVisual ?? <ArrowRight className="h-4 w-4" />}
        </span>
      </span>
    </>
  )

  const resolvedClassName = cn(
    "group relative inline-flex h-12 min-w-fit cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border bg-background px-5 text-center font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md dark:bg-card dark:hover:shadow-[0_10px_30px_rgba(15,23,42,0.35)]",
    className
  )

  if (asChild) {
    if (!React.isValidElement(children)) {
      return null
    }

    const child = children as React.ReactElement<{ className?: string; children?: React.ReactNode }>

    return React.cloneElement(child, {
      ...props,
      className: cn(resolvedClassName, child.props.className),
      children: content,
    })
  }

  return (
    <button className={resolvedClassName} {...props}>
      {content}
    </button>
  )
}
