import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import { setBannerData, setImageURL } from "./store/movieSlice";


const App = () => {

  const dispatch = useDispatch()
  
  
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))

    } catch (exception) {
      console.log("exception",exception)
    }
  }

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration")
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    
    } catch (exception) {
      
    }
  }
  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  },[])
  return (
    
    <main className='pb-14 lg:pb-0'>
      <Header/>
      <div className="min-h-[90vh]">
      <Outlet />
      </div>
      <Footer />
      <MobileNavigation/>
    </main>
  );
}

export default App;
