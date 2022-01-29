import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../utils/getPosts';

const Home: NextPage = ({ recentPosts }: any) => {
	return (
		<>
            <Image
                src={"/images/profile.jpeg"}
                alt="a webcam picture of youkwhd"
                width={150}
                height={150}
            />
			<h1>youkwhd</h1>
            <p>
                I'm an undergraduate student majoring Computer Science, but also known as Informatics in my country, Indonesia. What a lovely smile i have.
                I love programming at every aspect of it, it has been my hobby since i know the programming way to solve problems. I mean, it looks cool to 
                write such program with Vim and seeing people thinking that you're some kind of a hackerman. I'm currently working with web apps, usually 
                with React, and i primarily use Typescript as my go-to language alongside with Next.js, i'm also comfortable developing the backend using Node.js.
            </p>
            <p>
                As a GNU/Linux enthusiast, I use Arch Linux as my daily drive operating system. I wanted to use Gentoo cuz i'm a geek myself, plus arch is 
                a rolling release distribution, i'm lazy. But it would be a pain in the ass to compile things. I do love free and open source softwares (FOSS).
                Indeed, as most of, if not, all of my projects are free and open source. You have to note that the term "free" and "open source" is different.
            </p>
            <h2>take a look at my blog</h2>
            <p>
                Writing articles has also been one of my hobby. Some articles that i've wrote isn't guaranteed to be perfect in terms of writing. You can find 
                all of my articles <Link href={"/blog"}><a>here</a></Link>, or find it by <Link href={"/tags"}><a>tags</a></Link>, you can always help me
                by contributing to this site and fix some problems i have on this site. Speaking of blog, here are some of my recent blog posts:
            </p>
			<ul>
	    		{recentPosts.map((post: any) => {
	    			return (
	    					<li key={post.slug}>
	    						<Link as={`/blog/${post.slug}`} href="/blog/[slug]">
	    							{post.title}
	    						</Link>
	    					</li>
	    	 		);
		    	})}
			</ul>
		</>
	);
}

export default Home;

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'tags',
		'parsedTags',
		'date',
		'slug',
	]);

    const recentPosts = allPosts.slice(0, 3);

	return {
		props: {
			recentPosts	
		},
	};
}
