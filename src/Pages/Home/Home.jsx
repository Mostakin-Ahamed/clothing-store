import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Carouse from "../../Components/Carousel/Carouse";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Types from "../../Components/Swiper/Types";
import Discount from "../../Components/Discount/Discount";
import FeedBack from "../../Components/Feedback/Feedback";
import Features from "../../Components/Features/Features";
import Contact from "../../Components/Contact/Contact";


const Home = () => {
    return (
        <div>
            <Helmet><title>Clothing Store || Home</title></Helmet>
            <Navbar></Navbar> 
            <Carouse></Carouse> 
            <Features></Features>      
            <Banner></Banner> 
            <Discount></Discount>  
            <Types></Types>
            <FeedBack></FeedBack>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;