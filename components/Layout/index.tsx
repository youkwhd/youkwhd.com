import Footer from "../Footer";

type Props = {
    children: JSX.Element | JSX.Element[];
    banners?: any;
};

export const MainLayout = ({ children, banners }: Props): JSX.Element => {
    return (
        <>
            <main>
                {children}
            </main>
            {banners && <Footer banners={banners}/>}
        </>
    );
};

const Layout = {
    MainLayout,
};

export default Layout;
