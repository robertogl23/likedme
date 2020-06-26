import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
export default function Home() {
	const themeColor = "#c4302b";
	return (
		<div className='container'>
			<Head>
				<title>LikedMe</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='/style.css' />
				<meta name='theme-color' content={themeColor} />
			</Head>
			<Header theme={themeColor} />
			<main>
				<SideBar  theme={themeColor}/>
			</main>
		</div>
	);
}
