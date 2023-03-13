import React from "react";

const TodoForm = () => {

  const handleSubmit = (data) => {
    console.log(data)
  }


  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="ml-16">
          <input
            className="p-3 border rounded mr-2"
            name="label"
            type="text"
            placeholder="Enter new to do"
          />
          <input
            className="bg-blue-500 p-3 text-white font-bold rounded hover:bg-blue-700"
            type="submit"
            value="ADD TO DO"
          />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
