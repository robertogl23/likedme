import Head from "next/head";
import Header from "../components/Header";
export default function Tiktok() {
	const themeColor = '#000'
	return (
		<div className='container'>
			<Head>
				<title>Tik-Tok LikedMe</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='/style.css' />
				<meta name='theme-color' content={themeColor} />
			</Head>
			<Header theme={themeColor}/>

			<main></main>
		</div>
	);
}
