import "../style/home.css";
import a from '../assets/upload (1).png';
import b from '../assets/upload.png'    ;
import c from '../assets/upload (2).png';
import d from '../assets/upload (3).png';
import e from '../assets/upload (4).png';
import f from '../assets/upload (5).png';
import g from '../assets/upload (6).png';
import h from '../assets/upload (7).png';
import i from '../assets/upload (8).png';
import j from '../assets/upload (9).png';
import { Link } from 'react-router-dom' ;




const cardData = [
    { id: 101, name: 'UploadPdf', image: a },
    { id: 301, name: 'Chat', image: c },
    { id: 401, name: 'Edit', image: d },
    { id: 501, name: 'Ask AI', image: e },
    { id: 1101, name: 'Shop', image: j },
    { id: 701, name: 'Save', image: g },
    { id: 801, name: 'Ebook', image: h },
    { id: 901, name: 'Community', image: i },
    { id: 201, name: 'Notes', image: b },
    { id: 601, name: 'Summary', image: f },

];




const Card = ({id, name, image }) => {
    return (
        <Link to={`/recipe/${id}`}>
        <div className="total">
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <p>{name}</p>
        </div>
        </div>
        </Link>
    );
};


export default function Home() {
    return (
        <div id="home">
            <div class="header_box">
                <h1 class="header">Discover, Share, and Build Your Learning Community</h1>
                <p class="header_foot">We help you organize, share, and access academic notes easily from Top university.</p>
            </div>
            <div class="InputContainer">
                <input placeholder="Search.." id="input" class="input" name="text" type="text"/>
            </div>
            <div class="search_foot">
                <button class="click">Physics</button>
                <button class="click">Chemistry</button>
                <button class="click">Math</button>
                <button class="click">DBMS</button>
                <button class="click">CS</button>
                <button class="click">AI ML</button>
                <button class="click">OS</button>
                <button class="click">JAVA</button>
            </div>
            <div className="header">
                <h1>Our Feautures..</h1>
            </div>
            <div className="card-container">
                {cardData.map(card => (
                    <Card key={card.id} id={card.id} name={card.name} image={card.image} />
                ))}
            </div>
            
        </div>

    )

}


           

              

