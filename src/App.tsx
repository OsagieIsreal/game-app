import { RouterProvider} from "react-router-dom";
import { appRouter } from "./app-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
     <ToastContainer />
     <RouterProvider  router={appRouter}/>
    </>
  )
}

export default App
