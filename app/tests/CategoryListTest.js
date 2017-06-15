import React from "react";
import sinon from "sinon";
import { expect } from "chai";
import { shallow } from "enzyme";
import  CategoryList  from "./../components/CategoryList.jsx";
import  Category  from "./../components/Category.jsx";

describe('<CategoryList>', () => {

    let target             = null;
    const selectCategory   = sinon.spy();
    const selectedCategory = null;

    it('Render Empty Categories List', () => {

        const categories = [];

        target = shallow(
            <CategoryList
                categories={categories}
                selectCategory={selectCategory}
                selectedCategory={selectedCategory}
                />
        );

        expect(target.find(Category).exists()).to.be.false;
    });


    it('Render Category List with 2 Categories', () => {

        const categories = [
            {"id": 1, "title": "First Title"},
            {"id": 2, "title": "Second Title"}
        ];

        target = shallow(
            <CategoryList
                categories={categories}
                selectCategory={selectCategory}
                selectedCategory={selectedCategory}
                />
        );

        expect(target.find(Category).exists()).to.be.true;
        expect(target.find(Category).length).to.be.equal(2);
    });

});
