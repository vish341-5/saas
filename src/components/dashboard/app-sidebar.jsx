import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"

import { LayoutDashboard,History,ChartNoAxesCombined,Settings,ChevronDown, ChevronRight } from "lucide-react"

export default function AppSidebar() {

  return (
    <Sidebar collapsible="offcanvas" className="bg-black text-white border-[#1A1A1A] md:!bg-black md:!text-white md:" >
      <SidebarHeader className="px-3 py-3 bg-black text-white">
        <div className="h-8 w-18 text-lg font-bold">
          X Not
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-3 bg-black text-white">
        <SidebarMenu className="gap-3">
          <SidebarMenuItem>
            <SidebarMenuButton className="h-12 text-lg font-bold">
              <LayoutDashboard className="!h-5 !w-5"/>
              <p>Dashboard</p>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}