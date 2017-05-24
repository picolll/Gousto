import React       from 'react';
import Product from './Product.jsx';
import SearchInput from './SearchInput.jsx';


class ProductList extends React.Component {
    constructor() {
        super();

        this.state = {searchText: ''};

        this.handleFilter = this.handleFilter.bind(this);
    }

    showProducts() {
        const { selectedCategory, products } = this.props;

        return products.filter(product => {
            return product.categories.some(category => {

                const productTitle = product.title.toLowerCase().trim();

                return (category.id === selectedCategory) && (productTitle.includes(this.state.searchText));
            });
        })
            .map(product => {
                     const { id, title, description } = product;
                     return (
                         <Product
                             key={id}
                             name={title}
                             description={description}/>
                     );
                 });
    }

    handleFilter(e) {
        this.setState({searchText: e.target.value.toLowerCase().trim()});
    }

    render() {
        return (
            <div>
                <SearchInput handleFilter={this.handleFilter}></SearchInput>
                <div className="container-fluid">
                    {this.showProducts()}
                </div>
            </div>
        );
    }

}

export default ProductList;
