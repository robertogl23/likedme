import React from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import IconProduct from "./svg/IconProduct";
import ButtonAddCart from "./ButtonAddCart";
const LayoutContentCart = styled.div`
	border: 1px solid blue;
	height: 600px;
	width: 400px;
	display: grid;
	grid-template-rows: 10% 80% 10%;
	box-sizing: border-box;
`;
const LayoutBodyCart = styled.div`
	margin-top: 20px;
	overflow-y: auto;
	box-sizing: border-box;
`;
const LayoutIconCart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	box-sizing: border-box;
`;
const LayoutItemCart = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 9px;
	box-sizing: border-box;
`;
const LayoutISubTotalCart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export default function LayoutCart() {
	return (
		<LayoutContentCart>
			<div style={{ textAlign: "center" }}>
				<h1>Carrito compras</h1>
			</div>
			<LayoutBodyCart>
				<AppContext.Consumer>
					{(context) => {
						console.log(context);
						const { cart, getQuantityById } = context;
						return cart.length ? (
							cart.map((p, i) => (
								<LayoutItemCart key={i}>
									<LayoutIconCart>
										<div>
											<IconProduct type={p.type} />
										</div>
									</LayoutIconCart>
									<div>
										<div>
											<p>
												{p.nameProduct} <span> </span>
												{p.quantity}
											</p>
										</div>
										<div>
											<p>{p.price}USD1</p>
										</div>
										<div>
											<ButtonAddCart product={p} />
										</div>
									</div>
									<LayoutISubTotalCart>
										<h3>Subtotal: {p.price * getQuantityById(p._id)}</h3>
									</LayoutISubTotalCart>
								</LayoutItemCart>
							))
						) : (
							<div>
								<h2>Vacio</h2>
							</div>
						);
					}}
				</AppContext.Consumer>
			</LayoutBodyCart>
			<div>
				<AppContext.Consumer>
					{(context) => {
						const { total } = context;
						return <h4>Total: {total}</h4>;
					}}
				</AppContext.Consumer>
			</div>
		</LayoutContentCart>
	);
}
