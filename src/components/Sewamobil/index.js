import "../../components/Sewamobil/style.css";
import {Link} from "react-router-dom"
const Sewamobil = () => {
    return ( 
        <div className= "sewamobil-container">
                <div className= "sewamobil-card">
                    <h2>Sewa Mobil di Sidoarjo Sekarang</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to = "carimobil">
                        <button className="button"> Mulai Sewa Mobil </button>
                    </Link>
                </div>
        </div>
     );
}
 
export default Sewamobil;


