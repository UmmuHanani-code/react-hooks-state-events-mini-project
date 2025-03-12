import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);


  const handleSubmit = (e) => {
    e.preventDefault();


    const newTask = {
      text: taskText,
      category: selectedCategory,
    };


    onTaskFormSubmit(newTask);

    setTaskText("");
    setSelectedCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <h3>Add a new task</h3>


      <label>
        Details:
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
      </label>


      <label>
        Category:
        <select
          name="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(
            (category) =>
              category !== "All" && (
                <option key={category} value={category}>
                  {category}
                </option>
              )
          )}
        </select>
      </label>


      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;

