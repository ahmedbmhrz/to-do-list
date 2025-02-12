import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LoginPage from './pages/loginpage';
import SigmInPage from './Pages/SignInPage';
import ToDoListPage from './Pages/ToDoListPage';


function App() {
  const [count, setCount] = useState(0)
//test with jira
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />}/>
          <Route path="/LoginPage" element={<LoginPage /> } />
          <Route path="/SignInPage" element={<SigmInPage />} />
          <Route path="/ToDoListPage" element={<ToDoListPage />} />
        </Routes>
      </BrowserRouter>
      </div>

  )
}

export default App
