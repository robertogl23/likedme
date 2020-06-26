import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import LayoutContent from "../components/LayoutContent";
import LayoutCart from "../components/LayoutCart";

import { useState } from "react";
export default function Carrito() {
	const themeColor = "#002";
	const [sideBarShow, setSideBarShow] = useState(false);
	const [selectProduct, setSelectProduct] = useState(false);
	const handleSelect = (p) => setSelectProduct(p);
	const handleSideBar = () => setSideBarShow(!sideBarShow);
	return (
		<div className='container'>
			<Head>
				<title>LikedMe Carrito</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='/style.css' />
				<meta name='theme-color' content={themeColor} />
			</Head>
			<Header theme={themeColor} handleSideBar={handleSideBar} />
			<main>
				<SideBar
					theme={themeColor}
					sideBarShow={sideBarShow}
					type={"Youtube"}
					handleSelect={handleSelect}
				/>
				<LayoutContent sideBarShow={sideBarShow}>
					<LayoutCart/>
				</LayoutContent>
			</main>
		</div>
	);
}
