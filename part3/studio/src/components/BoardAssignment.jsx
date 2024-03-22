import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setBoardName] = useState('no boards yet!'); // Pt. 3 Declare boardName as a state variable


   const handleChange = (event) => {
      setBoardName(event.target.value); // Update boardName with the selected value
   }

   const boards = [
      { label: 'Salad Recipes', value: 'salad-recipes' },
      { label: 'Healthy Eats', value: 'healthy-eats' },
      { label: 'Quick Meals', value: 'quick-meals' }
   ];

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>


      {boards.map((board) => (
               <option key={board.value} value={board.value}>{board.label}</option>
            ))}


      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
