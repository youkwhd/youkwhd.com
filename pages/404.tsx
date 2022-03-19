import { PageConfig } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { MainLayout } from "../components/Layout";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

const NotFound = (): JSX.Element => {
    return (
        <>
            <NextSeo
                title="404 not found"
            />
            <MainLayout>
                <h1>404 not found</h1>
                <p>The page you are requesting is sadly not present. Are you lost? consider going back to the <Link href="/"><a>homepage</a></Link>.</p>
            </MainLayout>
        </>
    );
};

export default NotFound;
