import './App.css';

function App() {
  return (
    <div className="App">
     <h1> Insert Customer </h1>

     <div className = "form">
        <label> Customer ID </label>
        <input type = "text" name="CustomerID" />

        <label> Room Number </label>
        <input type = "text" name="RoomNumber" />

        <label> Phone </label>
        <input type = "text" name="Phone" />

        <label> Email </label>
        <input type = "text" name="Email" />

        <label> First_Name </label>
        <input type = "text" name="FirstName" />

        <label> Middle_Name </label>
        <input type = "text" name="MiddleName" />

        <label> last_Name </label>
        <input type = "text" name="LastName" />

        <label> Building_id </label>
        <input type = "text" name="BuildingId" />

        <button> Submit </button>

     </div>
    
    </div>
  );
}

export default App;
