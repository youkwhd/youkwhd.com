import Footer from "@/src/components/Footer"
import { type Banner } from "@/lib/banner"

type MainLayoutProps = { children: JSX.Element | JSX.Element[] }
export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
    return (
        <>
            <main>
                {children}
            </main>
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
            <Footer banners={banners}/>
        </>
    )
}

export default {
    MainLayout,
    __LegacyMainLayout
}
