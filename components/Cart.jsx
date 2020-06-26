import React from "react";
import styled from "styled-components";
import CartSvg from './svg/CartSvg'
const CartLayout = styled.div`
border:1px solid black;
    height: 60px;
    display: flex;
	align-items: center;
	box-sizing: border-box;
`;

export default function Cart() {
	return (
		<CartLayout>
			<CartSvg/>
		</CartLayout>
	);
}
