import '../App.css';
import Navigation from './navigation';
import Home from './home';
import Notes from './note';
import Askai from './AskAi';
import About from './About';


import '../style/Responsive.css';

function Layout() {
  return (
    <div>
      <Navigation />
      <Home />
      <Notes />
      <Askai />
      <About />
    </div>

  );
}

export default Layout;
