import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GrifGrid from './components/GrifGrid';

const GifExpertApp = () => {
const [categories, setcategories] = useState([])
const handleAdd = ()=>{
    setcategories([...categories,"Nueva Categoria"]);
}

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Add</button>
            <AddCategory setcategories={setcategories} />
            { categories.map((cat, index)=>{
                return(
                   <GrifGrid key ={index} category ={cat} />
                )
            })}
        </div>
    )
}

export default GifExpertApp
