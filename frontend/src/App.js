import Header from "./Component/Header";
import Addorder from "./Component/Addorder"
import Allorder from "./Component/Allorder";
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"


//import Editcustomerinfo from "./Component/Edit";

function App() {
  return (
<Router>
    
    <nav>
     <Header/> 
     </nav>
     <Routes>
       <Route path = "/add" element ={<Addorder/>} />
       
       <Route path = "/" element = {<Allorder/>} />



       </Routes> 
       
</Router>

  );
  
}

export default App;