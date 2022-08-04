import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CarList from "../../components/CarList";
import Banner from "../../components/Banner";
import "../../pages/Cars/style.css"

const Cars = () => {

    const [data, setData] = useState ([]);
    const [fdata,setFdata] = useState ([]);
    const [notFound, setNotFound] = useState(false)
    const [name, setName] = useState ("");

    console.log("data ini name", name)

    useEffect (() => {
        axios
        .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }, []);

    const options = [
        { value: "true", label: "true"},
        { value: "false", label: "false"},
    ]
    
    const handleChangeName = (e) => {
        setName(e.target.value);
        if (!e.target.value.length) {
            setFdata([]);
            setNotFound(false);
        }
    }

    const handleSearch = () => {
        const newArr = data.filter(e => e.name === name);
        setFdata(newArr);
        setNotFound(true);
        }

    const props = {
        handleSearch,
        }
    

    console.log("data", data);
    return ( 
        <div>
            <Navbar {...props}/>
            <Banner />
            <div className="search-container">
                <div>
                    <label> Nama Mobil </label>
                    <input onChange={(e)=>handleChangeName(e)} />
                </div>
                <div>
                    <label> Kategori </label>
                    <select name="kategori"> 
                    </select>
                </div> 
                <div>
                    <label> Harga </label>
                    <select name="harga"> 
                    </select>
                </div> 
                <div>
                    <label> Status </label>
                    <select name="status"> 
                    </select>
                </div> 
                <div>
                    <button type="submit" onClick={handleSearch}> Cari Mobil </button>
                </div>   
            </div>
            <CarList data={!fdata.length ? data : fdata} />
            <Footer />
        </div>
    )
}

export default Cars;

                