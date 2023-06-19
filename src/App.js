import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';


function App() {
  return (
    <>
<Navbar title="TechGPT"aboutText="Explore"/>
<div className="container my-3" >

<TextForm  heading="Enter The Data to Analyze"/>
</div>

    </>
  );
}

export default App;
 