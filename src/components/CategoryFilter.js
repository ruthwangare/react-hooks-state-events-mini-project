import React from "react";

function CategoryFilter(props) {
  function handleCategoryClick(category) {
    const buttons = document.querySelectorAll(".category");
    buttons.forEach((button) => {
      if (button.textContent === category) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    });

    if (category === "All") {
      props.setFilteredTasks(props.tasks);
    } else {
      const filtered = props.tasks.filter((task) => task.category === category);
      props.setFilteredTasks(filtered);
    }
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {props.categories.map((category) => (
        <button key={category} className="category" onClick={() => handleCategoryClick(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
