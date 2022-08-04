import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import { navList, image, stList } from "../../components/Const/staticData";
import "../../components/Navbar/style.css";
import "../../components/Banner/style.css";
import Footer from "../../components/Footer";
import Strength from "../../components/Strength/Index";
import "../../components/Strength/style.css";
import Whyus from "../../components/Whyus";
import Testimonial from "../../components/Testimonial"
import Sewamobil from "../../components/Sewamobil"
import FAQ from "../../components/FAQ";


const Home = () => {

    const props = {
        image,
        stList,
        }

    return (
        <div>
            <Navbar {...props}/>
            <Banner />
            <Strength {...props} />
            <Whyus />
            <Testimonial />
            <Sewamobil />
            <FAQ {...props}/>
            <Footer />
        </div>
    )
}

export default Home;