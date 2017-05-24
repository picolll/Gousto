import React       from 'react';


class Category extends React.Component {
    render() {
        const { id, title, selectCategory, selectedCategory } = this.props;

        const bold = id === selectedCategory;
        return (

            <div className="btn-navbar btn ">
                { bold &&
                <strong>
                    <a href="#" onClick={() => selectCategory(id)}>
                        {title}
                    </a>

                </strong> }
                { !bold &&
                <a href="#" onClick={() => selectCategory(id)}>
                    {title}
                </a>
                }
            </div>

        );
    }
}

export default Category;
