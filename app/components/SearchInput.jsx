import React       from 'react';


class SearchInput extends React.Component {

    render() {
        const { handleFilter } = this.props;
        return (
            <div>
                <input type="search" placeholder="Search..." onChange={(e)=>handleFilter(e)}/>
            </div>
        );
    }
}

export default SearchInput;
