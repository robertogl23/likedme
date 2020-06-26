import React from 'react'
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
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
export default function ListT({theme}) {
    return (
        <ListLayoutGrid>
			<AppContext.Consumer>
				{(context) => {
					const { productsT } = context;
					return productsT ? (
						productsT.map((p, i) => <Card key={i} product={p} theme={theme} />)
					) : (
						<h2>No hay productos</h2>
					);
				}}
			</AppContext.Consumer>
		</ListLayoutGrid>
    )
}
