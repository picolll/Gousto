import React from "react";
import sinon from "sinon";
import { expect } from "chai";
import { shallow } from "enzyme";
import  Category  from "./../components/Category.jsx";

describe('<Category>', () => {

    let target = null;

    it('Display selected Category', () => {

        const categoryId       = 1;
        const selectCategory   = (id) => {};
        const selectedCategory = 1;

        target = shallow(
            <Category
                title='CategoryTitle'
                id={categoryId}
                selectCategory={selectCategory}
                selectedCategory={selectedCategory}
                />);


        expect(target.find('strong')).to.exist;

    });


    it('Display NOT selected Category', () => {

        const categoryId       = 1;
        const selectCategory   = (id) => {};
        const selectedCategory = 2;

        target = shallow(
            <Category
                title='CategoryTitle'
                id={categoryId}
                selectCategory={selectCategory}
                selectedCategory={selectedCategory}
                />);


        expect(target.find('strong')).to.not.true;

    });

    it('Trigger selectCategory function on click', () => {

        const categoryId       = 1;
        const selectCategory   = sinon.spy();
        const selectedCategory = 2;

        target = shallow(
            <Category
                title='CategoryTitle'
                id={categoryId}
                selectCategory={selectCategory}
                selectedCategory={selectedCategory}
                />);


        target.childAt(0).simulate('click');

        sinon.assert.calledOnce(selectCategory);
    });

});
