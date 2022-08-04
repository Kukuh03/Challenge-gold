import {Link} from "react-router-dom"
import "../../components/CarList/style.css"

const CarList = (props) => {
    const {data} = props;
    return ( 
        <div className="card-container">
            <div className="card-wrapper">
                {!!data.length && (
                    data.map(item => (
                    <div className="card">
                    <img src={item.image}/>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <Link to={`/detailcar/${item.id}`}>
                        <button className="button">Pilih Mobil</button>
                    </Link>
                    </div>
                    ))
                )}
            </div>
        </div>
     );

}
 
export default CarList;