import './App.css';
import Navbar from  './components/Navbar.js';
import HomepageImages from './components/HomepageImages.js';
import HomepageContent from './components/HomepageContent.js';
import Footer from './components/Footer.js'

function App() {

  return (
    <div>
      <Navbar />
      <HomepageImages />
      <HomepageContent />
      <Footer />
    </div>
  );
}

export default App;