import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Plan from './Components/Plan';
import Footer from './Components/Footer';

const title = 'Plan';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Carousel />
      <Plan  title={title} />
      <Footer />
    </div>
  );
}

export default App;
