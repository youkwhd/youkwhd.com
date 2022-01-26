import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { convertToHTML } from '../utils/convertToHTML';

const Home: NextPage = () => {
	const [htmd, setHtmd] = useState(null);
	
	useEffect(async () => {
		const data = await convertToHTML("hello, world");
		setHtmd(data);
	}, [htmd]);

	if (htmd) return <>{htmd}</>;

	return <>converting markdown...</>;
}

export default Home;

