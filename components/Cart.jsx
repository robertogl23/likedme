import React from "react";
import styled from "styled-components";
import Link from "next/link";
import CartSvg from "./svg/CartSvg";
import { AppContext } from "../context/AppContext";
const CartLayout = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	box-sizing: border-box;
`;
const SpanQuantity = styled.span`
	position: absolute;
	width: 22px;
	height: 20px;
	font-size: 13px;
	border-radius: 50%;
	text-align: center;
	background: rgb(252, 175, 74);
	margin-left: 31px;
	margin-top: -15px;
`;
export default function Cart() {
	return (
		<Link href="/carrito">
		<a>
		<CartLayout>
			<CartSvg />
			<AppContext.Consumer>
				{(context) => {
					console.log(context);
					const { cart } = context;
					return cart.length ? (
						<SpanQuantity>{cart.length}</SpanQuantity>
					) : (
						<span></span>
					);
				}}
			</AppContext.Consumer>
		</CartLayout>
		</a>
		</Link>
	);
}
