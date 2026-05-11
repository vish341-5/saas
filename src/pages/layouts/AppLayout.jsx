import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import  AppSidebar  from "@/components/dashboard/app-sidebar"
import React from "react"

export default function Layout({ children }) {
  return (
    <SidebarProvider 
      defaultOpen={false}
      style={{
        "--sidebar-width": "12rem",
        "--sidebar-width-mobile": "13.5rem"
      }}
    >
      <AppSidebar/>
      <main className="flex-1 p-4">
        <SidebarTrigger className="" />
        {children}
      </main>
    </SidebarProvider>
  )
}