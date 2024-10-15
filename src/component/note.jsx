import "../style/home.css";
import {Link} from 'react-router-dom';
import a from '../assets/upload (1).png';
import b from '../assets/upload.png'    ;
import c from '../assets/upload (2).png';
import d from '../assets/upload (3).png';
import e from '../assets/upload (4).png';
import f from '../assets/upload (5).png';
import g from '../assets/upload (6).png';
import h from '../assets/upload (7).png';
import Topuniversity from "./topuniversityfolder";



const cardData = [
    { id: 1, name: 'Spicy Thai Peanut Salad',       rating: '⭐⭐⭐⭐☆', image: a },
    { id: 2, name: 'Zucchini Noodles with Pesto',   rating: '⭐⭐⭐☆☆', image: b },
    { id: 3, name: 'Vegan Buddha Bowl',             rating: '⭐⭐⭐⭐☆', image: c },
    { id: 4, name: 'Keto-Friendly Cauliflower Pizza',rating: '⭐⭐⭐☆☆', image: d },
    { id: 5, name: 'Avocado Toast with Poached Eggs',rating: '⭐⭐⭐⭐☆', image: e },
    { id: 6, name: 'Pumpkin Spice Latte',           rating: '⭐⭐⭐☆☆', image: f },
    { id: 7, name: 'Blueberry Overnight Oats',         rating: '⭐⭐⭐⭐☆', image: g },
    { id: 8, name: 'Matcha Green Tea Pancakes',         rating: '⭐⭐⭐⭐☆', image: h },
   
];

const Card = ({ id,name,rating, image }) => {
  
    return (
        <Link to={`/recipe/${id}`}>
        <div className="card2">
            <img src={image} alt={name} className="card-image" />
            <div className="card-overlay">
                <div className="card-title">{name.toUpperCase()}</div>
                <div className="card-rating">{rating}</div>
            
            </div>
        </div>
        </Link>
    );
};

export default function Allcard(){
    return(
        <>
        <h1 className="headersecond">Continuous Learning..</h1>
        
        <div className="card-container2">
             {cardData.map(card => (
                <Card key={card.id} id={card.id} name={card.name} rating={card.rating} image={card.image} />
            ))}
        </div>
        <h1 className="header2">Top University Folder..</h1>
        <Topuniversity/>
        </>
    )
}