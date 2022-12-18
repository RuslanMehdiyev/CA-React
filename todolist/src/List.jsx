import { useState } from "react";
function List({ item, id, allTodo, setAllTodo }) {
  const [edit, setEdit] = useState(false);
  const [editedData, setEditedData] = useState("");

  const handleInput = (e) => {
    setEditedData(e.target.value);
  };

  const handleSave = () => {
    setEdit(!edit);
    editItem(editedData);
  };

  const editItem = (data) => {
    let el = data;
    let temp = [...allTodo];
    temp.splice(id, 1, el);
    setAllTodo(temp);
  };

  return (
    <div className="list">
      {edit ? (
        <input
          type="text"
          defaultValue={item}
          onChange={(e) => handleInput(e)}
        />
      ) : (
        <p>{item}</p>
      )}
      <div className="liBtn">
        {edit ? (
          <button onClick={() => handleSave()}>Save</button>
        ) : (
          <>
            <button onClick={() => setEdit(!edit)}>Edit</button>
            <button
              style={{ color: "red" }}
              onClick={() => {
                setAllTodo([...allTodo.filter((a, b) => b !== id)]);
              }}
            >
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default List;
