import './style.css'
import Router from './router'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='app'>
      <Router/>
      <ToastContainer autoClose={3000} hideProgressBar={true} newestOnTop={true} position='top-center'/>
    </div>
  );
}
//api = https://sujeitoprogramador.com/r-api/?api=filmes/
export default App;
