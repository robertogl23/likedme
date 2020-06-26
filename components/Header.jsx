import React from "react";
import Link from "next/link";
import styled from "styled-components";
import TitleLikedMed from "./TitleLikedMed";
import Cart from "./Cart";
import HamburgeSvg from "./svg/HamburgeSvg";
const HeaderLayout = styled.header`
	height: 60px;
	background: ${(props) => props.colorBG};
	display: grid;
	grid-template-columns: 20% 60% 20%;
	position: fixed;
	width: 100%;
	z-index: 3;
	box-sizing: border-box;
	@media (max-width: 967px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
const OptionsLayout = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 967px) {
		grid-template-columns: repeat(1fr);
	}
`;
const Help = styled.a`
	color: #fff;
	@media (max-width: 967px) {
		display: none;
	}
`;
const TitleMobile = styled.div`
	@media (max-width: 967px) {
		display: none;
	}
`;
const TitleMobileLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Hamburge = styled.div`
	display: none;
	@media (max-width: 967px) {
		display: block;
	}
`;

import Navegation from "./Navegation";
export default function Header({ theme }) {
	return (
		<HeaderLayout colorBG={theme}>
			<TitleMobileLayout>
				<TitleMobile>
					<Link href='/'>
						<a>LikedMe</a>
					</Link>
				</TitleMobile>
				<Hamburge>
					<HamburgeSvg />
				</Hamburge>
			</TitleMobileLayout>
			<Navegation />
			<OptionsLayout>
				<Cart />
				<Link href='/ayuda'>
					<Help>Ayuda</Help>
				</Link>
			</OptionsLayout>
		</HeaderLayout>
	);
}
