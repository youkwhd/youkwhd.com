import Footer from "@/src/components/Footer"
import NavigationBar from "@/src/components/NavigationBar" 
import { type Banner } from "@/lib/banner"

type Title = {
    name: string,
    image?: string,
}

type MainLayoutProps = {
    title: Title,
    children: JSX.Element | JSX.Element[]
}

export const MainLayout = ({ children, title }: MainLayoutProps): JSX.Element => {
    return (
        <>
            <header>
                <h1>
                    {title.name}
                    {title.image && (
                        <aside>
                            <img src={title.image} alt="" />
                        </aside>
                    )}
                </h1>
                <NavigationBar />
            </header>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

type __LegacyMainLayoutProps = { children: JSX.Element | JSX.Element[], banners: Banner[] }
export const __LegacyMainLayout = ({ children, banners }: __LegacyMainLayoutProps): JSX.Element => {
    return (
        <>
            <main>
                {children}
            </main>
            {/* <Footer banners={banners}/> */}
        </>
    )
}

export default {
    MainLayout,
    __LegacyMainLayout
}
