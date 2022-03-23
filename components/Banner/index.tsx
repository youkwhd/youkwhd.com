import Link from "next/link";

type Props = {
    imageSrc: string;
    index?: number;
    href: string;
};

const Banner = ({ imageSrc, index, href }: Props): JSX.Element => {
    return (
        <Link href={href}>
            <a>
                {/* https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=lr#images-without-dimensions */}
                <img src={imageSrc} alt={href} width={88} height={31} />
            </a>
        </Link>
    );
};

export default Banner;
