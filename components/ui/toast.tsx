'use client'

import * as React from "react"
import { Toast as ToastPrimitive } from "@base-ui/react/toast"
import { cn } from "@/lib/utils"

export const ToastProvider = ToastPrimitive.Provider
export const useToastManager = ToastPrimitive.useToastManager

export function ToastViewport({
  className,
  ...props
}: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Portal>
      <ToastPrimitive.Viewport
        className={cn(
          "fixed bottom-4 right-4 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:max-w-[380px] gap-2 outline-none pointer-events-none",
          className
        )}
        {...props}
      />
    </ToastPrimitive.Portal>
  )
}

export function Toast({
  className,
  ...props
}: ToastPrimitive.Root.Props) {
  return (
    <ToastPrimitive.Root
      className={cn(
        "pointer-events-auto group relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-xl border border-border bg-card p-4 pr-8 text-card-foreground shadow-apple outline-none transition-all duration-200 animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:slide-in-from-right-full data-[state=closed]:animate-out data-[state=closed]:fade-out-80",
        className
      )}
      {...props}
    />
  )
}

export function ToastTitle({
  className,
  ...props
}: ToastPrimitive.Title.Props) {
  return (
    <ToastPrimitive.Title
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
}

export function ToastDescription({
  className,
  ...props
}: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description
      className={cn("text-xs text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  )
}

export function ToastClose({
  className,
  ...props
}: ToastPrimitive.Close.Props) {
  return (
    <ToastPrimitive.Close
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-muted-foreground opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2",
        className
      )}
      toast-close=""
      {...props}
    />
  )
}
