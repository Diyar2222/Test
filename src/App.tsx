import {Header} from './components/Header'
import { Body } from './pages/Body';
import { Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='user/:id' element={<UserPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
