import React, { useState } from 'react';
import '../style/navigation.css';
import { FaBook, FaBookmark, FaCartArrowDown, FaHome, FaMagic, FaMale, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import img from '/solvebuddy1.png'
import NewUpload from './upload';

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };




    return (
        <div className="navbar">
            

            <img src={img} alt="logo" className="logo" />
            <div className="section">
                <Link to="/">Home</Link>
                <Link to="/recipes">Notes</Link>
                <Link to="/menu-planner">University</Link>
                <Link to="/about">Ebook</Link>
            </div>

            

            <div className="corner">
                <div className="wishlist" ><FaCartArrowDown  size={30}/></div>
                <div className="wishlist"><FaBookmark size={25}/></div>

                <div className="profile" onClick={toggleMenu}>
                    <FaUserCircle size={40} color="black" />
                </div>
            </div>

            {/* handle dropdown section */}
            <div className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
                {/* name of person */}
                <p>Name of person</p> 
            {/* New Upload Button */}
                <NewUpload/>
            

                <Link to="/login" onClick={toggleMenu} >Login</Link>
                <Link to="/" onClick={toggleMenu}><FaHome/> Home</Link>
                <Link to="/recipes"onClick={toggleMenu}><FaBook/> My Library</Link>
                <Link to="/menu-planner" onClick={toggleMenu}><FaWhatsapp/> Chats</Link>
                <Link to="/precipe" onClick={toggleMenu}><FaMagic/> Ask Ai</Link>
                <Link to="/about" onClick={toggleMenu}><FaMale/> About</Link>
                
            </div>
        </div>
    );
}




//upload image as a profile pic code



/*import React, { useState } from 'react';

export default function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); // Display image preview
        }
    };

    return (
        <div className="image-upload-container">
            <h2>Upload Profile Picture</h2>
            
            <div className="upload-button">
                <label htmlFor="upload-input" className="upload-label">
                    + Upload Image
                </label>
                <input
                    id="upload-input"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />
            </div>

            {selectedImage && (
                <div className="image-preview">
                    <img src={selectedImage} alt="Preview" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                </div>
            )}
        </div>
    );
}
 */