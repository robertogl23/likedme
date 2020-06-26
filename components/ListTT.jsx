import React from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
const ListLayoutGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 15px;
	margin-top: 15px;
	@media (max-width: 1547px) {
		height: 100%;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 670px) {
		height: 100%;
		grid-template-columns: repeat(1, 1fr);
	}
`;
export default function ListTT({ theme,handleSelect }) {
	return (
		<ListLayoutGrid>
			<AppContext.Consumer>
				{(context) => {
					const { productsTT } = context;
					return productsTT.length ? (
						productsTT.map((p, i) => <Card key={i} product={p} theme={theme} handleSelect={handleSelect}/>)
					) : (
						<h2>No hay productos</h2>
					);
				}}
			</AppContext.Consumer>
		</ListLayoutGrid>
	);
}
