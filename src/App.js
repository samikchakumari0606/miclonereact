
import './App.css';
import Navbar from './Component/Navbar';
import PreNavbar from './Component/PreNavbar';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Slider from './Component/Slider';
import data from "./Data/data.json";
import Offers from './Component/Offers';
import Heading from './Component/Heading';
import StarProduct from './Component/StarProduct';
import HotAccessoriesMenu from './Component/HotAccessoriesMenu';
import HotAccessories from './Component/HotAccessories';


function App() {
  return (
    <BrowserRouter>
     <PreNavbar/>
     <Navbar/>
     <Slider start={data.banner.start} />
     <Offers offers={data.offer}/>
     <Heading text="STAR PRODUCT"/>
     <StarProduct starProduct={data.starProduct} />
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu/>

     <Routes>
      
     <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}/>
     
     <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDeviceCover} />}/>

     <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.homeCover} />}/>
     
     <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyleCover} />}/>

     <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}/>
     </Routes>

    
    </BrowserRouter>
  );
}

export default App;
