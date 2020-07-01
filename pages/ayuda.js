import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import LayoutContent from "../components/LayoutContent";
import { useState } from "react";
export default function Home() {
	const themeColor = "#DB3875";
	const [sideBarShow, setSideBarShow] = useState(false);
	const [selectProduct, setSelectProduct] = useState(false);
	const handleSelect = (p) => setSelectProduct(p);
	const handleSideBar = () => setSideBarShow(!sideBarShow);
	return (
		<div className='container'>
			<Head>
				<title>LikedMe Ayuda</title>
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
                    <div style={{displa:'flex',marginTop:20}}>
                        <div>
                            <h1>¿Que es LikedMe?</h1>
                        </div>
                        <br/>
                        <div>
                            <h2>Español</h2>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AdZqEGO9dNg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div>
                            <h2>Ingles</h2>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/WMOlPHpv-30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                    </div>
				</LayoutContent>
			</main>
		</div>
	);
}
