import React from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
const ListLayoutGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 15px;
	margin-top: 15px;
	height: 100%;
	@media (max-width: 1547px) {
		height: 100%;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 670px) {
		height: 100%;
		grid-template-columns: repeat(1, 1fr);
	}
`;
export default function ListI({ theme,handleSelect }) {
	return (
		<ListLayoutGrid>
			<AppContext.Consumer>
				{(context) => {
					const { productsI } = context;
					return productsI.length ? (
						productsI.map((p, i) => <Card key={i} product={p} theme={theme} handleSelect={handleSelect}/>)
					) : (
						<h2>Cargando productos</h2>
					);
				}}
			</AppContext.Consumer>
		</ListLayoutGrid>
	);
}
