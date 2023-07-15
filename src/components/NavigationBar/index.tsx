import Link from "next/link"

export default (): JSX.Element => {
    return (
        <nav>
            <ul className="navigation-bar">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/articles">Articles</Link>
                </li>
                <li>
                    <Link href="/art">Art</Link>
                </li>
                <li>
                    <Link href="/photos">Photos</Link>
                </li>
                <li>
                    <Link href="/collections">Collections</Link>
                </li>
            </ul>
        </nav>
    )
}
