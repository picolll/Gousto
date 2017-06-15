import React from "react";
import sinon from "sinon";
import { expect } from "chai";
import { shallow } from "enzyme";
import  Product  from "./../components/Product.jsx";

describe('<Product>', () => {

    let target = null;
    beforeEach(() => {
        target = shallow(
            <Product
                name='ProductName'
                description='ProductDescription'
            />);
    });

    it('Collapse by default', () => {
        expect(target.children().length).to.deep.equal(1);
    });

    it('Expand after clicking on it', () => {
        target.childAt(0).simulate('click');
        expect(target.children().length).to.deep.equal(2);
    });

    it('text in bold after clicking on it', () => {
        target.childAt(0).simulate('click');
        expect(target.find('strong')).to.exist;
    });

    it('Double click collapse description', () => {
        target.childAt(0).simulate('click');
        target.childAt(0).childAt(0).simulate('click');
        expect(target.children().length).to.deep.equal(1);
    });

});
