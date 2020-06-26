import React from "react";
import Link from "next/link";
import TitleLikedMed from "./TitleLikedMed";
import styled from "styled-components";
const Nav = styled.nav`
	border: 1px solid black;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	@media (max-width: 967px) {
		display: none;
	}
`;
const ItemNav = styled.a`
	color: #fff;
	margin-left: 10px;
`;
const MobileNav = styled.div`
	display: none;
	@media (max-width: 967px) {
		border: 1px solid red;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
export default function Navegation() {
	return (
		<>
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
			<MobileNav>
				<TitleLikedMed />
			</MobileNav>
		</>
	);
}
