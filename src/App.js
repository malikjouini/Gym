import Main from './Components/Main'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Home from './Pages/Home';
import { Gymobj } from './Gymobj';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Home Gymobj={Gymobj}/>
      <Footer />


    </div>
  );
}

export default App;
