import {Link} from "react-router-dom"
import carImage from "../../Asset/img_car (1).png"
import "../../components/Banner/style.css"

const Banner = () => {

    return (
            <div className="banner-container">
                <div>
                    <h1> Sewa & Rental Mobil Terbaik di kawasan Sidoarjo</h1>
                    <p> Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. </p>
                    <Link to = "carimobil">
                            <button className="button-mobil"> Mulai Sewa Mobil </button>
                    </Link>
                </div>
                <div> 
                    <img src={carImage} />
                </div>
            </div>
    )
}

export default Banner;