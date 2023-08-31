import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

//import SignUp from './signup';
import Page from './Page';
import MedicalForm from './form';
import Backdrop from './Backdrop';

function App(){
  return(
    <>
       <Router>
            <Routes>
                <Route path="/" element={<Page/>}/>
                <Route path='/patient' element={<MedicalForm/>}/>
                <Route path='/success' element={<Backdrop/>}/>

                
            </Routes>
        </Router>
    </>
  )
}

export default App;
