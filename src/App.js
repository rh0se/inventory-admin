import './App.css';
import { FormProvider } from './FormContext';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import AdminTable from './components/AdminTable';
import InventoryForm from './components/InventoryForm';

function App() {
  return (
    <FormProvider>
      <div className="App">
        <NavBar />
        <div className='flex'>
          <SideBar />
          <AdminTable />
        </div>
        <InventoryForm />
      </div>
    </FormProvider>

  );
}

export default App;
