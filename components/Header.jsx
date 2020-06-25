import React from "react";
import styled from "styled-components";
import TitleLikedMed from './TitleLikedMed'
import Cart from './Cart'
const HeaderLayout = styled.header`
	height:60px;
	background: ${(props) => props.colorBG};
	display:grid;
	grid-template-columns: 25% 15% 40% 20%;
`
import Navegation from './Navegation'
export default function Header({theme}) {
	return (
		<HeaderLayout colorBG={theme}>
			<TitleLikedMed/>
			<Cart/>
			<Navegation/>
		</HeaderLayout>
	);
}
