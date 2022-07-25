import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingFunction = (props) => {

    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h1>
                    HELLO FROM GREETINGS FUNCTIONAL { props.name } !
                </h1>
                <h2>
                    YOU ARE { age } YEARS OLD
                </h2>
                <div>
                    <button onClick={birthday}>
                        ONE MORE YEAR!
                    </button>
                </div>
        </div>
    );
};


GreetingFunction.propTypes = {
    name: PropTypes.string,
};


export default GreetingFunction;
