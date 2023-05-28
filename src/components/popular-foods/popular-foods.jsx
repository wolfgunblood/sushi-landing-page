import "./popular-foods.scss";
import sushi from "../../assets/sushi-9.png"
import ramen from "../../assets/sushi-8.png"
import udon from "../../assets/sushi-7.png"
import danggo from "../../assets/sushi-6.png"
import ogsushi from "../../assets/sushi-11.png"
import czsushi from "../../assets/sushi-12.png"
import ramenBig from "../../assets/sushi-10.png"
import { BsArrowRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const popularFoods = () => {
    return (
        <section className='popularFoods'>
            <h2 className="popularFoods__title">Popular Food / 人気</h2>
            <div className='popularFoods__list'>
                <button className='popularFoods__btn'>All</button>
                <button className='popularFoods__btn'>
                    <img src={sushi} alt="sushi" />
                    Sushi
                </button>
                <button className='popularFoods__btn'>
                    <img src={ramen} alt="ramen" />
                    Ramen
                </button>
                <button className='popularFoods__btn'>
                    <img src={udon} alt="udon" />
                    Udon
                </button>
                <button className='popularFoods__btn'>
                    <img src={danggo} alt="danggo" />
                    Danggo
                </button>
            </div>
            <div className='popularFoods__catalogue'>
                <article className='popularFoods__catalogue-item'>
                    <img src={czsushi} alt="czsushi" />
                    <p className='popularFoods__catalogue-item-title'>Chezu Sushi</p>
                    <div className='popularFoods__catalogue-item-info'>
                        <p className='popularFoods__catalogue-item-info-rating'>
                            <AiFillStar size={20} color="#FFC700" />

                            4.5
                        </p>
                        <p className='popularFoods__catalogue-item-info-price'>$31.99</p>
                    </div>
                </article>
                <article className='popularFoods__catalogue-item active'>
                    <img src={ogsushi} alt="ogsushi" />
                    <p className='popularFoods__catalogue-item-title'>Original Sushi</p>
                    <div className='popularFoods__catalogue-item-info'>
                        <p className='popularFoods__catalogue-item-info-rating'>
                            <AiFillStar size={20} color="#FFC700" />
                            4.5
                        </p>
                        <p className='popularFoods__catalogue-item-info-price'>$12.99</p>
                    </div>
                </article>
                <article className='popularFoods__catalogue-item'>
                    <img src={ramenBig} alt="ramne" />
                    <p className='popularFoods__catalogue-item-title'>Ramen</p>
                    <div className='popularFoods__catalogue-item-info'>
                        <p className='popularFoods__catalogue-item-info-rating'>
                            <AiFillStar size={20} color="#FFC700" />
                            4.5
                        </p>
                        <p className='popularFoods__catalogue-item-info-price'>$9.99</p>
                    </div>
                </article>
            </div>

            <button className='explore-btn'>
                Explore Foods
                <BsArrowRight size={25} />
            </button>
        </section>
    )
}

export default popularFoods