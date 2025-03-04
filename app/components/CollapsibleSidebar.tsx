import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

function CollapsibleSidebar() {
  return (
    <SidebarProvider>
      <Sidebar></Sidebar>
    </SidebarProvider>
  );
}

export default CollapsibleSidebar;
