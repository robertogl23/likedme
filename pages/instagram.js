import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import LayoutContent from "../components/LayoutContent";
import ListI from "../components/ListI";
import SelectedProduct from "../components/SelectedProduct";
import { useState } from "react";
export default function Instagram() {
	const themeColor = "#833AB4";
	const [sideBarShow, setSideBarShow] = useState(false);
	const [selectProduct, setSelectProduct] = useState(false);
	const handleSelect = (p) => setSelectProduct(p);
	const handleSideBar = () => setSideBarShow(!sideBarShow);
	return (
		<div className='container'>
			<Head>
				<title>Instagram LikedMe</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='/style.css' />
				<meta name='theme-color' content={themeColor} />
			</Head>
			<Header theme={themeColor} handleSideBar={handleSideBar} />
			<main>
				<SideBar
					theme={themeColor}
					sideBarShow={sideBarShow}
					type={"Instagram"}
					handleSelect={handleSelect}
				/>
				<LayoutContent sideBarShow={sideBarShow}>
					{selectProduct ? (
						<SelectedProduct product={selectProduct} handleSelect={handleSelect}/>
					) : (
						<ListI theme={themeColor} handleSelect={handleSelect}/>
					)}
				</LayoutContent>
			</main>
		</div>
	);
}
