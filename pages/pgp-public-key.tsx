import { PageConfig } from "next";
import { NextSeo } from "next-seo";

import { MainLayout } from "../components/Layout";
import { getAllBanners } from "../utils/getBanners";
import { Banner } from "../types";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

const PGP_PUBLIC_KEY = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=3mHQ
-----END PGP PUBLIC KEY BLOCK-----
`;

type Props = {
    banners: Banner[];
};

const PGPPage = ({ banners }: Props): JSX.Element => {
    return (
        <>
            <NextSeo 
                title="pgp public key"
            />
            <MainLayout banners={banners}>
                <p>or download the <a href="/lolywk.pubkey.asc" download>public key</a> here.</p>
                <hr />
                <p>fingerprint: <code>30D9 E828 9864 A272 EC97  9E6A 1D41 EE2E 7C31 63AC</code></p>
                
                <pre>{PGP_PUBLIC_KEY}</pre>
            </MainLayout>
        </>
    );
};

export default PGPPage;

export const getStaticProps = async () => {
    const banners: Banner[] = getAllBanners();

    return {
        props: {
            banners
        }
    };
};
