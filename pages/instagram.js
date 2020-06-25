import Head from "next/head";

import Header from "../components/Header";
export default function Instagram() {
	const themeColor = '#833AB4'
	return (
		<div className='container'>
			<Head>
				<title>Instagram LikedMe</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='/style.css' />
				<meta name='theme-color' content={themeColor} />
			</Head>
			<Header theme={themeColor}/>

			<main></main>
		</div>
	);
}
