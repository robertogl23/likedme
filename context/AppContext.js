import React, { createContext, Component } from "react";
import { getFetch } from "../libs/fetch";
export const AppContext = createContext();
export class AppContextProvider extends Component {
	state = {
		products: [],
	};
	getProducts = () => {
		getFetch("get/all/products").then((resp) => {
			this.setState({ products: resp.productsDB });
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
