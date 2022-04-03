import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div className='py-5'>
        <ItemListContainer greeting={'Bienvenido'} />
      </div>
    </>
  );
}

export default App;
