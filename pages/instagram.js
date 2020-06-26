import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import LayoutContent from "../components/LayoutContent";
import ListI from "../components/ListI";
import { useState } from "react";
export default function Instagram() {
	const themeColor = "#833AB4";
	const [sideBarShow, setSideBarShow] = useState(false);
	const handleSideBar = () => setSideBarShow(!sideBarShow);
	return (
		<div className='container'>
			<Head>
				<title>Instagram LikedMe</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='/style.css' />
				<meta name='theme-color' content={themeColor} />
			</Head>
			<Header theme={themeColor} handleSideBar={handleSideBar}/>
			<main>
				<SideBar theme={themeColor} sideBarShow={sideBarShow} />
				<LayoutContent sideBarShow={sideBarShow}>
					<ListI theme={themeColor} />
				</LayoutContent>
			</main>
		</div>
	);
}
