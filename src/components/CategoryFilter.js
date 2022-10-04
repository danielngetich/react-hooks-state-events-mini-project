import React from "react";

function CategoryFilter({categories,select,selectedCategory}) {
  const categoryToDisplay=categories.map((category)=>{
    const className=category===select? "selected":null;
    return (<button 
    key={category}
    className={className}
    onClick={()=>selectedCategory(category)}
    >{category}</button>)
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryToDisplay}
    </div>
  );
}

export default CategoryFilter;
