import React    from 'react';
import Category from './Category.jsx';


class CategoryList extends React.Component {

    showCategories() {
        const { selectCategory, categories, selectedCategory } = this.props;

        if (!categories) {
            return;
        }

        return categories.map(category => {
            const { id, title } = category;
            return (
                <Category
                    key={id}
                    title={title}
                    id={id}
                    selectCategory={selectCategory}
                    selectedCategory={selectedCategory}/>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.showCategories()}
                </div>
            </div>
        );
    }
}

export default CategoryList;
