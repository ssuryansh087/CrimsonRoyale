import './App.css';
import Navbar from  './components/Navbar.js';
import HomepageImages from './components/HomepageImages.js';
import HomepageContent from './components/HomepageContent.js';
import Footer from './components/Footer.js'
import DiscoverMenu from './components/DiscoverMenu.js';
import Privileges from './components/Privileges.js'
import BottomThree from './components/BottomThree.js';
import Concierge from './components/Concierge.js';

function App() {

  return (    
    <div>
      <Navbar />
      <HomepageImages />
      <HomepageContent />
      <DiscoverMenu />
      <Privileges />
      <BottomThree />
      <Footer />
      <Concierge />
    </div>
  );
}

export default App;