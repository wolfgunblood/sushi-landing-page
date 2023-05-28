import React from 'react';
import "./TrendingFoods.scss";
import LeftSushi from "../../assets/sushi-5.png";
import RightSushi from "../../assets/sushi-4.png";
import Check from "../../assets/check.svg";


const TrendingFoods = () => {
    return (
        <section className='trending-foods'>
            <div className='upper'>
                <div className='upper__content'>
                    <p className="upper__subtitle">What’s Trending / トレンド</p>
                    <h3 className="upper__title">Japanese Sushi</h3>
                    <p className="upper__description">Feel the taste of the most delicious Sushi here.</p>
                    <ul className='upper__list'>
                        <li>
                            <img src={Check} alt="check" />
                        </li>
                        <li>
                            <img src={Check} alt="check" />
                        </li>
                        <li>
                            <img src={Check} alt="check" />
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='upper__image'>
                    <img src={LeftSushi} alt="sushi1" />
                </div>
            </div>
            <div className='lower'>
                <div className='lower__image'>
                    <img src={RightSushi} alt="sushi2" />
                </div>
                <div className='lower__content'>
                    <p className="lower__subtitle">What’s Trending / トレンド</p>
                    <h3 className="lower__title">Japanese Drinks</h3>
                    <p className="lower__description">Feel the taste of the most delicious Sushi here.</p>
                    <ul className='lower__list'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TrendingFoods