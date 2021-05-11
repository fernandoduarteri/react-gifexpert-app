import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setcategories}) => {

    const [InputValue, setInputValue] = useState('');

    const handleValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(InputValue.trim().length >2){
            setcategories(cats =>[InputValue, ...cats]);
            setInputValue('');
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Pon aca la categoria"
                    value={InputValue}
                    onChange={handleValue}
                />
            </form>
        </div>
    )
}
AddCategory.propTypes={
    setcategories: PropTypes.func.isRequired
}
export default AddCategory
