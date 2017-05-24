import React       from 'react';
import ReactDOM    from 'react-dom';

import CategoryList from './CategoryList.jsx';
import ProductList from './ProductList.jsx';

import { CATEGORIES_ENDPOINT, PRODUCTS_ENDPOINT } from './Endpoints.js';

import $ from 'jquery';

import '../../../react-webpack-template/node_modules/bootstrap/dist/css/bootstrap.css';


class Main extends React.Component {

    constructor() {
        super();

        this.state = {
            categories      : [],
            products        : [],
            selectedCategory: null
        };

        this.selectCategory = this.selectCategory.bind(this);
    }

    selectCategory(category) {
        this.setState({
            selectedCategory: category
        });
    }

    componentDidMount() {

        let categoriesResponse, productsResponse;

        $.get(CATEGORIES_ENDPOINT, function (data) {
            categoriesResponse = data.data;
            this.setState({
                categories: categoriesResponse,
            })
        }.bind(this));
        $.get(PRODUCTS_ENDPOINT, function (data) {
            productsResponse = data.data;
            this.setState({
                products: productsResponse
            })
        }.bind(this));

    }

    render() {
        const { categories, products, selectedCategory } = this.state;

        return (
            <div className="container">
                <CategoryList
                    categories={categories}
                    selectCategory={this.selectCategory}
                    selectedCategory={selectedCategory}/>
                <ProductList
                    products={products}
                    selectedCategory={selectedCategory}/>
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('app'));
