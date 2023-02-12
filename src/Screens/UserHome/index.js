import React from 'react';
import { ReactDOM } from 'react';
import Header from '../../Components/Header';
import "../UserHome/userHome.css";
import cartIcon from "../../imagesAndIcons/cart-icon.png";
import mainImage from "../../imagesAndIcons/grocery-image.jpg"

function UserHome() {
    return (
        <div className='user-home'>
            <div className='top-header' >

                <div className='left-div' >
                    <h2 className='heading' >SAYLANI WELFARE</h2>
                    <h4 className='sub-heading' >  DISCOUNTED STORE </h4>
                </div>

                <img src={cartIcon} />
            </div>

            <div className='image-div' >
                <img src={mainImage
                } className="main-image" />
            </div>
        </div>
    )
}

export default UserHome;