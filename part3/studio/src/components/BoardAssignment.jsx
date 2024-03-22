import { useState } from "react";

export default function BoardAssignment() {
  const boards = [
    { label: "Comfort Food", value: 1 },
    { label: "Holiday Food", value: 2 },
    { label: "Italian Dish", value: 3 },
  ];

  let boardOptions = boards.map(function (board) {
    return <option value={board.value}>{board.label}</option>;
  });

  const [boardName, setName] = useState('no boards yet');

  const handleChange = (event) => {
   setName(event.target.value);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>{boardOptions}</select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
