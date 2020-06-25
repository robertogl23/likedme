import React from "react";
import styled from "styled-components";
import CartSvg from './svg/CartSvg'
const CartLayout = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
`;

export default function Cart() {
	return (
		<CartLayout>
			<CartSvg/>
		</CartLayout>
	);
}
