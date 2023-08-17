import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css';
import StudentRecord from './components/StudentRecord';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:< StudentRecord />
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
