import Banner from "../../Components/Banner/Banner";
import Carouse from "../../Components/Carousel/Carouse";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Carouse></Carouse>       
            <Banner></Banner>   
            <h2>This is homepage</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;