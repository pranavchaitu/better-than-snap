import { SideBar } from "@/components/side-bar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-24">  
        <SideBar />
        <div className="sm:ml-36">
            {children}
        </div>
    </div>
  );
}
