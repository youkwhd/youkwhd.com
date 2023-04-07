import Link from "next/link"

export default (): JSX.Element => {
    return (
        <ul className="navigation__bar">
            <li>
                <span>{'['}</span>
                <Link href="/">Home</Link> |
            </li>
            <li>
                <Link href="/posts/tags">Tags</Link> |
            </li>
            <li>
                <Link href="/posts">Posts</Link> |
            </li>
            <li>
                <Link href="/pgp-public-key">PGP Key</Link>
                <span>{']'}</span>
            </li>
        </ul>
    )
}