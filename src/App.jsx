import './App.css';
import { Context } from "./context/Context";
import { useContext } from 'react';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import { Toaster } from 'react-hot-toast';

function App() {
  const { token } = useContext(Context);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false}/>
      {token ? <Dashboard /> : <Login />}
    </>
  );
}
export default App;
