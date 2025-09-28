import Header from "./headers";
import Footer from "./footer";

interface LayoutProps {
    isHeader: boolean;
    children: React.ReactNode;
    noFooter?: boolean;
}

const Layout = ({isHeader, children, noFooter}: LayoutProps) => {
    return (
        <div className="relative bg-white">
            {isHeader && (
                <header className={`fixed top-0 z-10 opacity-100`}>
                    <Header/>
                </header>
            )}
            <main className="overflow-hidden">{children}</main>
            {!noFooter && <Footer/>}
        </div>
    )
}

export default Layout;