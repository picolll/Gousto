import React from "react";
import sinon from "sinon";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import  ProductList  from "./../components/ProductList.jsx";
import  Product  from "./../components/Product.jsx";
import  SearchInput  from "./../components/SearchInput.jsx";

describe('<ProductList>', () => {

    let target           = null;
    let selectedCategory = 1;

    it('Render Empty Product List', () => {

        const products = [];

        target = shallow(
            <ProductList
                products={products}
                selectedCategory={selectedCategory}/>
        );

        expect(target.find(Product).exists()).to.be.false;
    });


    it('Render Product List with 3 Products when te category is selected', () => {

        const products = [
            {
                "id"        : 1, "title": "Product1", "description": "First Product Description",
                "categories": [
                    {"id": 1}
                ]
            },
            {
                "id"        : 2, "title": "Product2", "description": "Second Product Description",
                "categories": [
                    {"id": 1}
                ]
            },
            {
                "id"        : 3, "title": "Product3", "description": "Third Product Description",
                "categories": [
                    {"id": 1}
                ]
            }
        ];

        target = shallow(
            <ProductList
                products={products}
                selectedCategory={selectedCategory}/>
        );

        expect(target.find(Product).exists()).to.be.true;
        expect(target.find(Product).length).to.be.equal(3);
    });

    it('Render Empty Product List with category is not selected', () => {

        selectedCategory = null;

        const products = [
            {
                "title"     : "Product1", "description": "First Product Description",
                "categories": [
                    {"id": 1}
                ]
            },
            {
                "title"     : "Product2", "description": "Second Product Description",
                "categories": [
                    {"id": 1}
                ]
            },
            {
                "title"     : "Product3", "description": "Third Product Description",
                "categories": [
                    {"id": 1}
                ]
            }
        ];

        target = shallow(
            <ProductList
                products={products}
                selectedCategory={selectedCategory}/>
        );

        expect(target.find(Product).exists()).to.be.false;
        expect(target.find(Product).length).to.be.equal(0);
    });


    it('Render Product List with 1 Products when te category is selected and SearchBox contains title of the product', () => {

        selectedCategory = 2;

        const products = [
            {
                "id"        : 1, "title": "Product1", "description": "First Product Description",
                "categories": [
                    {"id": 1}
                ]
            },
            {
                "id"        : 2, "title": "Product2", "description": "Second Product Description",
                "categories": [
                    {"id": 2}
                ]
            },
            {
                "id"        : 3, "title": "Product3", "description": "Third Product Description",
                "categories": [
                    {"id": 2}
                ]
            }
        ];

        target = mount(
            <ProductList
                products={products}
                selectedCategory={selectedCategory}/>
        );

        target.find('input').simulate('change', {target: {value: "Product2"}});

        expect(target.find(Product).exists()).to.be.true;
        expect(target.find(Product).length).to.be.equal(1);
    });

    it('Render Empty Product List when different category is selected and SearchBox contains title of some product', () => {

        selectedCategory = 3;

        const products = [
            {
                "id"        : 1, "title": "Product1", "description": "First Product Description",
                "categories": [
                    {"id": 1}
                ]
            },
            {
                "id"        : 2, "title": "Product2", "description": "Second Product Description",
                "categories": [
                    {"id": 2}
                ]
            },
            {
                "id"        : 3, "title": "Product3", "description": "Third Product Description",
                "categories": [
                    {"id": 2}
                ]
            }
        ];

        target = mount(
            <ProductList
                products={products}
                selectedCategory={selectedCategory}/>
        );

        target.find('input').simulate('change', {target: {value: "Product2"}});

        expect(target.find(Product).exists()).to.be.false;
        expect(target.find(Product).length).to.be.equal(0);
    });


});
