import React       from 'react';


class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const { name, description } = this.props;
        return (
            <div>
                {this.state.isToggleOn && <strong>
                    <div
                        id={name} onClick={this.handleToggle}>
                        {name}
                    </div>
                </strong>
                }

                {!this.state.isToggleOn &&
                <div
                    id={name} onClick={this.handleToggle}>
                    {name}
                </div>
                }

                {this.state.isToggleOn ? <div>{description}
                    <hr></hr>
                </div> : ''}
            </div>
        );
    }
}

export default Product;
