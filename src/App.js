import Header from "./Components/Header";
import Preview from "./Components/Preview";
import Footer from "./Components/Footer";
import Form from "./Components/Form"
import {useState} from 'react'


function App() {
  const [view, setView] = useState(true)

  function changeView(){
    setView(!view)
  }
  return (
    <div className="App">
      <button className="btn"onClick={changeView}>{view ? "Preview Mode" : "Edit Mode "}</button>
     {view ? <div>
       <Form />
      </div> :
      <>
          <Header />
          <Preview />
          <Footer />
        
      </> 
    }
    
    </div>
  );
}

export default App;
