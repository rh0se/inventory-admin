import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import AdminTable from './components/AdminTable';
import InventoryForm from './components/InventoryForm';
import { useState } from 'react';

function App() {
  const [tableData, setTableData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSubmit = (entry) => {
    if (editData) {
      // Update existing row
      setTableData((prevData) =>
        prevData.map((row) =>
          row.sn === editData.sn ? { ...row, ...entry } : row
        )
      );
    } else {
      // Add new row
      setTableData((prevData) => [
        ...prevData,
        { sn: prevData.length + 1, ...entry },
      ]);
    }
    setEditData(null); // Reset editData after submission
    toggleForm(); // Close the form
  };

  const toggleForm = () => {
    setEditData(null); // Clear editData when toggling the form
    setIsFormVisible(!isFormVisible);
  };
  const handleEdit = (row) => {
    setEditData(row); // Set the data for the selected row
    setIsFormVisible(true); // Open the form
  };
  const handleDelete = (sn) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setTableData((prevData) => prevData.filter((row) => row.sn !== sn));
    }
  };




  return (

    <div className="App">
      <NavBar />
      <div className="flex">
        <SideBar />
        <AdminTable
          setIsFormVisible={setIsFormVisible}
          isFormVisible={isFormVisible}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          toggleForm={toggleForm}
          tableData={tableData}
        />
      </div>
      {isFormVisible && (
        <InventoryForm
          handleSubmit={handleSubmit}
          editData={editData}
          toggleForm={toggleForm}
          setTableData={setTableData}
        />
      )}
    </div>



  );
}

export default App;
