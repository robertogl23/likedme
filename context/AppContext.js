import React, { createContext, Component } from "react";
import { getFetch } from "../libs/fetch";
export const AppContext = createContext();
export class AppContextProvider extends Component {
	state = {
		products: [],
		productsYT:[],
		productsFB:[],
		productsI:[],
		productsT:[],
		productsTT:[],
	};
	getProducts = () => {
		getFetch("get/all/products").then((resp) => {
			this.setState({
				products: resp.productsDB,
				productsYT: resp.productsDB.filter(e => e.type === 'Youtube'),
				productsFB: resp.productsDB.filter(e => e.type === 'Facebook'),
				productsI: resp.productsDB.filter(e => e.type === 'Instagram'),
				productsT: resp.productsDB.filter(e => e.type === 'Twitter'),
				productsTT: resp.productsDB.filter(e => e.type === 'Tik-Tok'),
			});
		});
	};
	componentDidMount() {
		this.getProducts()
	}
	render() {
		return (
			<AppContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
