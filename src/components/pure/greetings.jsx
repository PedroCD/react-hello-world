// CLASS TYPE COMPONENT
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greetings extends Component {

    constructor( props ) {
        super( props );
        this.state = {
           age: 29 
        }
    }

    render() {
        return (
            <div>
                <h1>
                    HELLO FROM GREETINGS { this.props.name } !
                </h1>
                <h2>
                    YOU ARE { this.state.age } YEARS OLD
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        ONE MORE YEAR!
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1,
            }
        ))
    }
}


Greetings.propTypes = {
    name: PropTypes.string,
};


export default Greetings;
