import React, { createContext, Component } from "react";
import { getFetch } from "../libs/fetch";
export const AppContext = createContext();
export class AppContextProvider extends Component {
	state = {
		products: [],
		productsYT: [],
		productsFB: [],
		productsI: [],
		productsT: [],
		productsTT: [],
		cart: [],
		ids: [],
		total: 0,
	};
	getProducts = () => {
		getFetch("get/all/products").then((resp) => {
			this.setState({
				products: resp.productsDB,
				productsYT: resp.productsDB.filter((e) => e.type === "Youtube"),
				productsFB: resp.productsDB.filter((e) => e.type === "Facebook"),
				productsI: resp.productsDB.filter((e) => e.type === "Instagram"),
				productsT: resp.productsDB.filter((e) => e.type === "Twitter"),
				productsTT: resp.productsDB.filter((e) => e.type === "Tik-Tok"),
			});
		});
	};
	getProductsFilter = (type) => {
		const {
			productsI,
			productsFB,
			productsT,
			productsTT,
			productsYT,
		} = this.state;
		switch (type) {
			case "Instagram":
				return productsI;
			case "Facebook":
				return productsFB;
			case "Twitter":
				return productsT;
			case "Tik-Tok":
				return productsTT;
			case "Youtube":
				return productsYT;

			default:
				console.log("no");
				break;
		}
	};
	getQuantityById = (id) => {
		return this.state.ids[id] || 0;
	};
	removeProduct = (id,price) => {
		const {total } = this.state;
		const idDecrement = this.state.ids[id] - 1;
		const indexProduct = this.state.cart.findIndex((a) => a._id === id);
		this.setState({ total: total - price });
		console.log(indexProduct);
		if (idDecrement === 0) {
			return this.setState({
				cart: this.state.cart.filter((e, i) => i !== indexProduct),
				ids: { ...this.state.ids, [id]: this.state.ids[id] - 1 },
			});
		}
		this.setState({
			ids: {
				...this.state.ids,
				[id]: this.state.ids[id] - 1,
			},
		});
	};
	addToCart = (product) => {
		const { cart, ids, total } = this.state;
		const findProduct = cart.find((p) => p._id === product._id);
		const priceProduc = parseFloat(product.price);
		const sumarTotal = total + priceProduc;
		this.setState({ total: sumarTotal });
		if (!findProduct) {
			this.setState({
				cart: [...this.state.cart, product],
				ids: {
					...this.state.ids,
					[product._id]: (this.state.ids[product._id] || 0) + 1,
				},
			});
		}

		return this.setState({
			ids: {
				...this.state.ids,
				[product._id]: (this.state.ids[product._id] || 0) + 1,
			},
		});
	};
	saveLocalStorage = () => {
		localStorage.setItem("cart", JSON.stringify(this.state.cart));
		localStorage.setItem("ids", JSON.stringify(this.state.cart));
	};
	componentDidMount() {
		const ids = JSON.parse(localStorage.getItem("ids"));
		const cart = JSON.parse(localStorage.getItem("cart"));
		this.getProducts();
		if (!ids && !cart) {
			return console.log("no existe");
		}
		this.setState({
			cart: JSON.parse(localStorage.getItem("cart")),
			ids: JSON.parse(localStorage.getItem("ids")),
		});
	}

	render() {
		return (
			<AppContext.Provider
				value={{
					...this.state,
					getProductsFilter: this.getProductsFilter,
					addToCart: this.addToCart,
					getQuantityById: this.getQuantityById,
					removeProduct: this.removeProduct,
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
