import React from "react";
import styled from "styled-components";
import Link from "next/link";
import IconProduct from "./svg/IconProduct";
import ButtonAddCart from "./ButtonAddCart";
import ButtonBuyNow from "./ButtonBuyNow";
const SelectLayout = styled.div`
	width: 100%;
	height: 100%;
`;
const DisplayNameProduct = styled.h1`
	margin-left: 30px;
	@media (max-width: 670px) {
		margin: 0px;
	}
`;
const LayoutDisplayNameProduct = styled.div`
	@media (max-width: 670px) {
		text-align: center;
	}
`;
const DisplayIconProduct = styled.div`
	@media (max-width: 670px) {
		margin-left: -35px;
		width: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const LayoutDescipcionProduct = styled.div`
@media (max-width: 670px) {
	text-align: center;
	margin-left: 30px;
}
`;
const LayoutProduct = styled.div`
	margin-left: 30px;

	display: flex;
	@media (max-width: 670px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0px;
	}
`;
const LayoutProductOrden = styled.div`
	margin-left: 90px;
	width: 190px;
	@media (max-width: 670px) {
		margin: 0px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 18px;
		padding-right: 18px;
		box-sizing: border-box;
	}
`;
const LayoutInf = styled.div`
	@media (max-width: 670px) {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const Label = styled.label`
	font-size: 18px;
	font-weight: 600;
`;
const Input = styled.input`
	border: 1px solid blue;
	font-size: 12px;
	font-weight: 300;
	border-radius: 8px;
	box-sizing: border-box;

	width: 100%;
	height: 28px;
	margin-top: 10px;
	@media (max-width: 670px) {
	}
`;
const Back = styled.p`
	margin-left: 30px;
	font-size: 16px;
	font-weight: 600;
`;

export default function SelectedProduct({ product, handleSelect }) {
	return (
		<SelectLayout>
			<Back onClick={() => handleSelect(false)}>{"<-"} Regresar</Back>
			<LayoutDisplayNameProduct>
				<DisplayNameProduct>
					{product.quantity}
					<span> </span>
					{product.nameProduct}
					<span> </span>
					{product.type}
				</DisplayNameProduct>
			</LayoutDisplayNameProduct>
			<LayoutProduct>
				<LayoutInf>
					<DisplayIconProduct>
						<IconProduct type={product.type} />
					</DisplayIconProduct>
					<LayoutDescipcionProduct>
						<h3>Descripcion del producto</h3>
						<p>Estabiblidad 100%</p>
						<p>Sin riesgo de baneo</p>
						<p>20-30 suscriptores por dia</p>
						<p>Garantía total</p>
					</LayoutDescipcionProduct>
				</LayoutInf>
				<LayoutProductOrden>
					<div style={{ marginTop: 15 }}>
						<Label>Precio: {product.price}USD</Label>
					</div>
					<div style={{ marginTop: 15 }}>
						<Label>Ingrese su url: </Label>
						<Input placeholder='Url'></Input>
					</div>
					<div style={{ marginTop: 25 }}>
						<ButtonAddCart product={product}/>
					</div>
					<div style={{ marginTop: 25 }}>
						<Label>Sub Total: {product.price}$</Label>
					</div>
					<div style={{ marginTop: 25 }}>
						<Label>Total: 0</Label>
					</div>
					<div style={{ marginTop: 25 }}>
						<ButtonBuyNow />
					</div>
				</LayoutProductOrden>
			</LayoutProduct>
		</SelectLayout>
	);
}
