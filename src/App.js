import './App.css';
import Jacob from './components/jacob';

function App() {
  return (
    <div className='bg-gray-300'>
      <h1 className='uppercase bg-blue-700 text-center text-2xl text-black'>Derivation of Jacobian Matrix for any N number of nodes</h1>
      <Jacob />
    </div>
  );
}

export default App;
