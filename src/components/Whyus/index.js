import '../../components/Whyus/style.css';
import Icon1 from '../../Asset/icon_complete.png';
import Icon2 from '../../Asset/icon_price.png';
import Icon3 from '../../Asset/icon_24hrs.png';
import Icon4 from '../../Asset/icon_professional.png';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <div className= "card-container">
        <div id="Whyus">
            <h2> Why Us? </h2>
            <p> Mengapa harus pilih Binar Car Rental? </p>
        </div>
    <div className= "card-list">
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia>
            <img src={Icon1} />
            </CardMedia>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Mobil Lengkap
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
            </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia>
            <img src={Icon2} />
            </CardMedia>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Harga Murah
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
            </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia>
            <img src={Icon3} />
            </CardMedia>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Layanan 24 Jam
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
            </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia>
            <img src={Icon4} />
            </CardMedia>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Sopir Profesional
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
            </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    </div>
    </div>
  );
}
