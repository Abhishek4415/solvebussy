
import "../style/home.css";
import { Link } from "react-router-dom";
import a from '../assets/upload (1).png';
import b from '../assets/upload.png'    ;
import c from '../assets/upload (2).png';
import d from '../assets/upload (3).png';
import e from '../assets/upload (4).png';
import f from '../assets/upload (5).png';
import g from '../assets/upload (6).png';
import h from '../assets/upload (7).png';



const cardData = [
    { id: 11,rating: '⭐⭐⭐⭐⭐', name: 'Chicken tikka', image: a },
    { id: 22,rating: '⭐⭐⭐⭐☆', name: 'Chhole bhature', image: b },
    { id: 33,rating: '⭐⭐⭐⭐☆', name: 'biryani',         image: c },
    { id: 44,rating: '⭐⭐⭐⭐⭐', name: 'panner tikka', image: d },
    { id: 55,rating: '⭐⭐⭐⭐☆', name: 'butter chicken', image: e },
    { id: 66,rating: '⭐⭐⭐⭐☆', name: 'Slice Cake',      image: f },
    { id: 77,rating: '⭐⭐⭐⭐☆', name: 'palak panner',    image: g },
    { id: 88,rating: '⭐⭐⭐⭐⭐', name: 'chicken lollipop', image: h },
   
   
];

const Card = ({ id,rating,name, image }) => {
    return (
        <Link to={`/recipe/${id}`}>
        <div className="card3">
            <img src={image} alt={name} className="card-image" />
            <div className="card-overlay">
                <div className="card-title">{name.toUpperCase()}</div>
                <div className="card-rating">{rating}</div>
            </div>
        </div>
        </Link>
    );
};


export default function Topuniversity(){
    return (
        <div className="card-container3">
             {cardData.map(card => (
                    <Card key={card.id} id={card.id} name={card.name} image={card.image} rating={card.rating}/>
            ))}

        </div>
    )
}