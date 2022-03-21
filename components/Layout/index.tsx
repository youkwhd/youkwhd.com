import Footer from "../Footer";

type Props = {
    children: JSX.Element | JSX.Element[],
};

export const MainLayout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

const Layout = {
    MainLayout,
};

export default Layout;
