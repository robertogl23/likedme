import Head from "next/head";
import Header from "../components/Header";
export default function Facebook() {
	const themeColor = '#3b5998'
	return (
		<div className='container'>
			<Head>
				<title>Facebook LikedMe</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='/style.css' />
				<meta name='theme-color' content={themeColor} />
			</Head>
			<Header theme={themeColor}/>

			<main></main>
		</div>
	);
}
