import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<>
			<h1>youkwhd</h1>
			<Link href="/blog">
				<a>blog</a>
			</Link>
		</>
	);
}

export default Home;
