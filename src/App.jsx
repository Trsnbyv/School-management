import './App.css';
import { Context } from "./context/Context";
import { useContext } from 'react';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';

function App() {
  const { token } = useContext(Context);
  return (
    <>
      {token ? <Dashboard /> : <Login />}
    </>
  );
}
export default App;
