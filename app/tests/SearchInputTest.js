import React from "react";
import sinon from "sinon";
import { shallow } from "enzyme";
import  SearchInput  from "./../components/SearchInput.jsx";

describe('<SearchInput>', () => {

    let target            = null;
    const handleFilterSpy = sinon.spy();

    beforeEach(() => {


        target = shallow(
            <SearchInput
                handleFilter={handleFilterSpy}
                />);
    });

    it('Trigger handleFilter function on change', () => {
        target.childAt(0).simulate('change');

        sinon.assert.calledOnce(handleFilterSpy);
    });


});
