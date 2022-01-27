import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { convertToHTML } from '../utils/convertToHTML';

const Home: NextPage = () => {
	const [htmd, setHtmd] = useState("");
	
	useEffect(() => {
		const getData = async () => {
			const data = await convertToHTML("hello, world");
			setHtmd(data);
		};

		getData();
	}, [htmd]);

	if (htmd) return <div dangerouslySetInnerHTML={{ __html: htmd }}></div>;

	return <>converting markdown...</>;
}

export default Home;

