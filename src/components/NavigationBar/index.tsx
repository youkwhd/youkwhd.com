import Link from "next/link"

export default (): JSX.Element => {
    return (
        <ul className="navigation-bar">
            <li>
                <span className="navigation-bar--opener">{'['}</span>
                <Link href="/">Home</Link> |
            </li>
            <li>
                <Link href="/posts">Web Articles</Link> |
            </li>
            <li>
                <Link href="/pgp-public-key">PGP Key</Link>
                <span className="navigation-bar--closer">{']'}</span>
            </li>
        </ul>
    )
}