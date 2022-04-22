import './App.css';
import ConsultaBB from './components/ConsultaBB';
import {CartProvider} from './context/CartProvider';
import Home from './pages/Home';

function App() {

  return (
    <>
      <CartProvider>
        <>
          <Home />
          {/* //breaking bad */}
          {/* <ConsultaBB /> */}
          {/* //breaking bad */}
        </>

      </CartProvider>
    </>
  );
}

export default App;
