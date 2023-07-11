import Link from "next/link"

export default (): JSX.Element => {
    return (
        <ul className="navigation-bar">
            <li>
                <span className="navigation-bar--opener">{'['}</span>
                <Link href="/">Home</Link> |
            </li>
            <li>
                <Link href="/articles">Articles</Link> |
            </li>
            <li>
                <Link href="/art">Art</Link> |
            </li>
            <li>
                <Link href="/photos">Photos</Link> |
            </li>
            <li>
                <Link href="/collections">Collections</Link> |
            </li>
            <li>
                <Link href="https://youkwhd.my.id" target="_blank" rel="noreferrer noopener">Portfolio</Link> |
            </li>
            <li>
                <Link href="/pgp-public-key">PGP Key</Link>
                <span className="navigation-bar--closer">{']'}</span>
            </li>
        </ul>
    )
}
