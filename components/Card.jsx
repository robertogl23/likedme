import React from "react";
import styled from "styled-components";
import IconProduct from "./svg/IconProduct";
import ButtonAddCart from "./ButtonAddCart";
import ButtonBuyNow from "./ButtonBuyNow";
const CardLayout = styled.div`
	border: 1px solid ${(props) => props.theme};
	box-sizing: border-box;
	width: 300px;
	height: 300px;
	display: grid;
	grid-template-rows: 50% 20% 30%;
`;
const IconLayoutCard = styled.div`
	display: flex;
	justify-content: center;
`;
const BodyLayaoutCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	box-sizing: border-box;
`;
const FooterLayoutCard = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 5px;
	align-items: center;
	padding-left: 8px;
	padding-right: 8px;
	background: ${(props) => props.theme};
`;
const PriceDisplay = styled.p`
	font-size: 18px;
	color: #fff;
`;
export default function Card({ product, theme }) {
	console.log(product);
	return (
		<CardLayout theme={theme}>
			<IconLayoutCard>
				<IconProduct type={product.type} />
			</IconLayoutCard>
			<BodyLayaoutCard>
				<h2>
					{product.quantity} <span> </span>
					{product.nameProduct}
				</h2>
			</BodyLayaoutCard>
			<FooterLayoutCard theme={theme}>
				<div style={{ textAlign: "center" }}>
					<PriceDisplay>{product.price} USD</PriceDisplay>
				</div>
				<div>
					<ButtonAddCart />
				</div>
				<div>
					<ButtonBuyNow />
				</div>
			</FooterLayoutCard>
		</CardLayout>
	);
}
