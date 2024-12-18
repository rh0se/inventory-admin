import './App.css';
import { FormProvider } from './FormContext';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import AdminTable from './components/AdminTable';
import InventoryForm from './components/InventoryForm';
import { TableProvider } from './TableContext';

function App() {
  return (
    <FormProvider>
      <div className="App">
        <NavBar />
        <TableProvider>
          <div className='flex'>
            <SideBar />
            <AdminTable />
          </div>
          <InventoryForm />

        </TableProvider>
      </div>
    </FormProvider>

  );
}

export default App;
