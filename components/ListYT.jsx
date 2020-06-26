import React from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import styled from "styled-components";
const ListLayoutGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap:15px;
    @media (max-width: 1547px) {
        height: 100%;
		grid-template-columns: repeat(2, 1fr);
	}
    @media (max-width: 670px) {
        height: 100%;
		grid-template-columns: repeat(1, 1fr);
	}
`;
export default function ListYT({theme}) {
	return (
		<ListLayoutGrid>
			<AppContext.Consumer>
				{(context) => {
					const { productsYT } = context;
					return productsYT ? (
						productsYT.map((p, i) => <Card key={i} product={p} theme={theme} />)
					) : (
						<h2>No hay productos</h2>
					);
				}}
			</AppContext.Consumer>
		</ListLayoutGrid>
	);
}
