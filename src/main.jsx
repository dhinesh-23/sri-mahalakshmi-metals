import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import "./style.css";
import Aboutpage from './aboutpage';
import Home from './Home'
import Collectionpage from './collectionpage';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
     <Routes>
         <Route path='/'   element= {<Home/>}/>
         <Route path='/collection'   element= {<Collectionpage/>}/>
         <Route path='/Aboutus'   element= {<Aboutpage/>}/>
      </Routes>
     </BrowserRouter>
  </StrictMode>
)
