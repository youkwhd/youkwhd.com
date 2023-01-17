import Footer from "@/src/components/Footer"
import { type Banner } from "@/types"

type Props = { children: JSX.Element | JSX.Element[], banners: Banner[] }
export const MainLayout = ({ children, banners }: Props): JSX.Element => {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    )
}

export const __MainLayout = ({ children, banners }: Props): JSX.Element => {
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
    __MainLayout
}
