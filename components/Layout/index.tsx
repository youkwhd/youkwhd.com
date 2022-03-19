type Props = {
    children: JSX.Element | JSX.Element[],
};

export const MainLayout = ({ children }: Props): JSX.Element => {
    return (
        <main>
            {children}
        </main>
    );
};

const Layout = {
    MainLayout,
};

export default Layout;
