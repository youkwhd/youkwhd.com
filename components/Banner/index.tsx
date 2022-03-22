type Props = {
    imageSrc: string;
    index?: number;
    href: string;
};

const Banner = ({ imageSrc, index, href }: Props): JSX.Element => {
    return (
        <a href={href}>
            {/* https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=lr#images-without-dimensions */}
            <img src={imageSrc} alt={href} width={88} height={31} />
        </a>
    );
};

export default Banner;
