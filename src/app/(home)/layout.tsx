import {HomeLayout} from "@/modules/home/ui/layouts/homeLayout";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default Layout;