import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import LayoutContent from "../components/LayoutContent";
import ListT from "../components/ListT";
import { useState } from "react";
export default function Twitter() {
	const themeColor = '#00acee'
	const [sideBarShow, setSideBarShow] = useState(false);
	const handleSideBar = () => setSideBarShow(!sideBarShow);
	return (
		<div className='container'>
			<Head>
				<title>Twitter LikedMe</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='/style.css' />
				<meta name='theme-color' content={themeColor} />
			</Head>
			<Header theme={themeColor}/>
			<main>
			<SideBar theme={themeColor} sideBarShow={sideBarShow} />
				<LayoutContent sideBarShow={sideBarShow}>
					<ListT theme={themeColor} />
				</LayoutContent>
			</main>
		</div>
	);
}
