import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Carouse from "../../Components/Carousel/Carouse";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Helmet><title>Clothing Store || Home</title></Helmet>
            <Navbar></Navbar> 
            <Carouse></Carouse>       
            <Banner></Banner>   
            <Footer></Footer>
        </div>
    );
};

export default Home;