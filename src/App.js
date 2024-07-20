import './App.css';
import Home from './Components/Home/Home';
import AboutP from './Pages/AboutP';
import { Routes, Route } from 'react-router-dom';
import BranchesP from './Pages/BranchesP';
import ContactPage from './Pages/ContactPage';
import ServicePage from './Pages/ServicePage';
import serviceJson from "../src/Components/DropData/ServiceData"
import SocialMedia from './Components/Social-mid-icon/SocialMedia';
import NavigationBarr from './Components/Navigation/NavigationBarr';
import Navb from './Components/Header/Navb';




function App() {
  return (
   <>
  <NavigationBarr/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about-page' element= {<AboutP/>} />
 
    <Route path='/branches' element={<BranchesP/>}/>
    <Route path='/contact' element={<ContactPage/>}/>



    {serviceJson.map((v,i)=>{
      // console.log(v.slug)
      return(<>
      <Route 
      key={i}
      exact
      path={v.slug}
      element={<ServicePage/>}>
      </Route> 
      </>)
     })}
    
   </Routes>
   
 
  
  

   </>
  );
}

export default App;
