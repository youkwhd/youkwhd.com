import Link from "next/link"

export default (): JSX.Element => {
    return (
        <ul className="navigation-bar">
            <span className="navigation-bar--opener">{'['}</span>
                <li>
                    <Link href="/">Home</Link> |
                </li>
                <li>
                    <Link href="/posts">Web Articles</Link> |
                </li>
                <li>
                    <Link href="/pgp-public-key">PGP Key</Link>
                </li>
            <span className="navigation-bar--closer">{']'}</span>
        </ul>
    )
}