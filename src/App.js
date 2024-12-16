import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import AdminTable from './components/AdminTable';
import InventoryForm from './components/InventoryForm';

function App() {
  return (
    <div className="App">
      <InventoryForm />
      {/* <NavBar />
      <div className='flex'>
        <SideBar />
        <AdminTable />
      </div> */}
    </div>
  );
}

export default App;
