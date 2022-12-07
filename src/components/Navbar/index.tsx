import Link from "next/link"

type Props = { links: string[] }
export default ({ links }: Props): JSX.Element => {
    return (
        <nav>
            <ul>
                Links around ::
                {links.map((link) => {
                    const linkSplit = link.split("/")
                    const lastLink = linkSplit[linkSplit.length - 1]

                    return (
                        <li>
                            <Link href={`/${link == "home" ? "" : link}`}>{lastLink}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
