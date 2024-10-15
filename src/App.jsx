import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Recipe from './Recipe';
// import MenuPlanner from './Menuplanner';
// import About from './About';
import Layout from './component/layout';
import Login from './component/login';
// import Detailrecipe from './Detailrecipe';
import Signup from "./component/signup";
import Pdf from './component/pdf';
// import Precipe from "./Precipe";
// import './style/Responsive.css';

function App() {
  return (
    <Router>
    {/* <Navigation /> */}
      <Routes>
        <Route path="/home" element={<Layout />} />
        {/* <Route path="/recipes" element={<Recipe />} /> */}
        {/* <Route path="/recipe/:id" element={<Detailrecipe />} />
        <Route path="/menu-planner" element={<MenuPlanner />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        {/* <Route path="/precipe" element={<Precipe/>}/> */}
        <Route path="/pdf" element={<Pdf/>} />

      </Routes>
     
    </Router>
  );
}

export default App;
