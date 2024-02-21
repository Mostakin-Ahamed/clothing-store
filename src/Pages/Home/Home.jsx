import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Carouse from "../../Components/Carousel/Carouse";


import Types from "../../Components/Swiper/Types";
import Discount from "../../Components/Discount/Discount";
import FeedBack from "../../Components/Feedback/Feedback";
import Features from "../../Components/Features/Features";
import Contact from "../../Components/Contact/Contact";
import AllProducts from "../../Components/AllProducts/AllProducts";


const Home = () => {
    return (
        <div>
            <Helmet><title>Clothing Store || Home</title></Helmet>
            <Carouse></Carouse> 
            <Features></Features>      
            <Banner></Banner> 
            <Discount></Discount>  
            <AllProducts></AllProducts>
            <Types></Types>
            <FeedBack></FeedBack>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;