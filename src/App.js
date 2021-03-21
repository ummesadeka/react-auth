// import React, { createContext, useState } from 'react';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


// import Header from './Components/Header/Header';
// import Home from './Components/Home/Home';
// import Login from './Components/Login/Login';



// function App() {
//   return (
//       <Router>
//           <Header/>
//           <Switch>
//             <Route path="/home">
//               <Home />
//             </Route>
//             {/* <Route path="/home">
//               <Destination />
//             </Route>
//             <Route path="/home">
//               <Home />
//             </Route>
//             <Route path="/home">
//               <Home />
//             </Route> */}
//             <Route path="/login">
//               <Login />
//             </Route>
//             {/* <Route path="/book/:bedType">
//               <Book />
//             </Route> */}
//             <Route exact path="/">
//               <Home />
//             </Route>
//           </Switch>
//       </Router>
//   );
// }


// export default App;

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';
import Contact from './Components/Contact/Contact';

export const UserContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destination/bk1">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/destination/:key">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
            </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
