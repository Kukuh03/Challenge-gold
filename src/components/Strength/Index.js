import peopleImage from '../../Asset/img_service.png'
import checklistImage from '../../Asset/Group 53.png'

const Strength = (props) => {
    const { stList, name } = props;
    return (
        <div id="Ourservices" className="Strength-container" >
            <div>
                <img src={peopleImage} />
            </div>
            <div className="Strength-list">
                <h1> Best Car Rental for any kind of trip in Sidoarjo! </h1>
                <p> Sewa mobil di Sidoarjo bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll. </p>
                {stList.map((item) => (
                    <div> 
                    <p><img src={checklistImage}/> {item} </p>
                    </div>
                ))
                }
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default Strength;