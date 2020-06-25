import React from "react";
import Link from "next/link";
import styled from "styled-components";
const Nav = styled.nav`
border:1px solid black;
display: flex;
justify-content: flex-end;
align-items: center;
` 
const ItemNav = styled.a`
	color: #fff;
	margin-left:10px;
`
export default function Navegation() {
	return (
		<Nav>
			<Link href='/'>
				<ItemNav>Youtube</ItemNav>
			</Link>
			<Link href='/facebook'>
				<ItemNav>Facebook</ItemNav>
			</Link>
			<Link href='/instagram'>
				<ItemNav>Instagram</ItemNav>
			</Link>
			<Link href='/twitter'>
				<ItemNav>Twitter</ItemNav>
			</Link>
			<Link href='/tiktok'>
				<ItemNav>Tik-Tok</ItemNav>
			</Link>

		</Nav>
	);
}
