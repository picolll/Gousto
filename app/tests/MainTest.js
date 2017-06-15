import React from "react";
import ReactDOM    from 'react-dom';
import sinon from "sinon";
import { expect } from "chai";
import { mount } from "enzyme";
import {createWaitForElement} from "enzyme-wait";
import $ from 'jquery';

import Main  from "./../components/Main.jsx";
import CategoryList  from "./../components/CategoryList.jsx";
import ProductList  from "./../components/ProductList.jsx";
import Category  from "./../components/Category.jsx";
import Product  from "./../components/Product.jsx";
import { CATEGORIES_ENDPOINT, PRODUCTS_ENDPOINT } from "./../components/Endpoints.js";

describe('<Main>', () => {

    let callback, target = null;

    beforeEach(() => {
        callback = sinon.spy();

        sinon.stub($, 'ajax', function (options) {
            var dfd = $.Deferred();

            if (options.url == CATEGORIES_ENDPOINT) {
                dfd.done(
                    options.success(
                        {
                            status_code: 200,
                            dataType   : {"Content-Type": "application/json"},
                            data       : [{"id": 1, "title": "First Category"}, {"id": 2, "title": "Second Category"}]
                        }
                    )
                );
            }
            if (options.url == PRODUCTS_ENDPOINT) {
                dfd.done(
                    options.success(
                        {
                            status_code: 200,
                            dataType   : {"Content-Type": "application/json"},
                            data       : [{
                                "id"         : 1,
                                "title"      : "Product1",
                                "description": "First Product Description",
                                "categories" : [{"id": 1}]
                            }]
                        }
                    )
                );
            }

            if (options.error) dfd.fail(options.error);
            dfd.success = dfd.done;
            dfd.error   = dfd.fail;

            return dfd;
        });

    });

    afterEach(() => {
        $.ajax.restore();
    });

    it('Render Main application', () => {

        target = mount(
            <Main />
        );

        const waitForCategoryList = createWaitForElement(Category);

        waitForCategoryList(target)
            .then(target => {
                      expect(target.find(Category).length).to.be.equal(2);
                      expect(target.find(Product).length).to.be.equal(0);

                  });

        expect($.ajax.calledTwice).to.be.true;

    });


});
