import { Route,Routes,BrowserRouter, Link } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import { useState } from 'react';
import Landing from './pages/Landing';

function App() {

  let [users,setusers]=useState([
    {username:"arun",password:"1234"
    }
  ])
  return ( 
    <div className="">
      <BrowserRouter>
      {/* <Link to="/signup">Home</Link>
      <Link to="/login">login</Link> */}
      <Routes>
        <Route path="/signup" users={users} setusers={setusers} element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path="/"   element={<Login users={users} setusers={setusers}/>}></Route>
        <Route path="/landing" element={<Landing/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
   );
}

export default App;
