import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../pages/DetailCar/style.css"

const DetailCar = () => {
    const [car, setCar] = useState([]);
    const param = useParams()
    const id = param.id;
    console.log(id);

    useEffect(() => {
        axios
        .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then((res) => setCar(res.data))
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Navbar />
            <div className="detail-container">
                <div className="list">
                    <h4>Tentang Paket</h4>
                    <h5> Include </h5>
                    <li> Apa saja yang termasuk dalam paket misal durasi max 12 jam </li>
                    <li> Sudah termasuk bensin selama 12 jam </li> 
                    <li>  Sudah termasuk Tiket Wisata </li>
                    <li>  Sudah termasuk pajak </li>
                    <h5> Exclude </h5>
                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari </li> 
                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li> Tidak termasuk akomodasi penginapan</li>
                    <h5> Refund, Reschedule, Overtime </h5>
                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari </li> 
                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam </li>
                    <li> Tidak termasuk akomodasi penginapan </li>
                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari </li> 
                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam </li>
                    <li> Tidak termasuk akomodasi penginapan </li>
                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li> 
                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam </li>
                    <li> Tidak termasuk akomodasi penginapan </li>
                </div>
                <div className="car">
                    <img src={car.image} />
                    <p>{car.name}</p>
                    <p>{car.price}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailCar;