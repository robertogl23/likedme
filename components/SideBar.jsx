import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
const SideBarLayout = styled.div`
	position: fixed;
	transform: translateZ(0px);
	display: grid;
	grid-template-rows: 10% 80% 10%;
	z-index: 1;
	left: 0px;
	top: 60px;
	bottom: 0px;
	right: auto;
	width: 16.6667rem;
	box-sizing: border-box;
	background: ${(props) => props.colorBG};
	${(props) =>
		props.transition && "transform: translateZ(-16.6667rem) !important"};
	transform: translateZ(0px);
	transition: transform 150ms ease-out 0s;
	@media (max-width: 967px) {
		transform: translateX(-16.6667rem);
		grid-template-rows: 90% 10%;
	}
`;
const SideBarBody = styled.div``;
const SideBarNav = styled.div`
	display: none;
	@media (max-width: 967px) {
		display: block;
	}
`;
const NavFooter = styled.nav`

	display: none;
	@media (max-width: 967px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;
const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 20px;
`;
const ItemNav = styled.a`
	color: #fff;
	margin-left: 10px;
	height: 50px;
`;
const Title = styled.div`
	@media (max-width: 967px) {
		display: none;
	}
`;
export default function SideBar({ theme, sideBarShow, type, handleSelect }) {
	return (
		<SideBarLayout colorBG={theme} transition={sideBarShow}>
			<Title>
				<h2 style={{ marginLeft: 20, color: "#fff" }}>{type}</h2>
			</Title>
			<SideBarBody>
				<details open>
					<summary>Subscripciones</summary>
					<ul>
						<AppContext.Consumer>
							{(context) => {
								const { getProductsFilter } = context;
								const filterSubs = getProductsFilter(type).filter(
									(e) => e.nameProduct === "Subscripciones"
								);
								console.log(filterSubs);
								return filterSubs ? (
									filterSubs.map((e, i) => (
										<li onClick={() => handleSelect(e)} key={i}>
											{e.quantity}
										</li>
									))
								) : (
									<h3>ho hay</h3>
								);
							}}
						</AppContext.Consumer>
					</ul>
				</details>
				<details open>
					<summary>Likes</summary>
					<ul>
						<AppContext.Consumer>
							{(context) => {
								const { getProductsFilter } = context;
								const filterLikes = getProductsFilter(type).filter(
									(e) => e.nameProduct === "Likes"
								);
								return filterLikes ? (
									filterLikes.map((e, i) => (
										<li onClick={() => handleSelect(e)} key={i}>
											{e.quantity}
										</li>
									))
								) : (
									<h3>ho hay</h3>
								);
							}}
						</AppContext.Consumer>
					</ul>
				</details>
				<SideBarNav>
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
				</SideBarNav>
			</SideBarBody>
			<div>
				<NavFooter>
					<Link href='/'>
						<ItemNav>Ayuda</ItemNav>
					</Link>
				</NavFooter>
			</div>
		</SideBarLayout>
	);
}
