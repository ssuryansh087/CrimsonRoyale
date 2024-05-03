import { Link } from 'react-router-dom'

const HomepageContent = () => {
    return (
        <div className="HomepageContent">
            <p id="ContentTitle">The Most Luxurious Restaurant In All of Mumbai</p>
            <p id="Content">Welcome to Crimson Royale, where Indian culinary heritage 
            meets global sophistication. Prepare to embark on a gastronomic journey that 
            tantalizes your taste buds and enthralls your senses. Step into an ambiance 
            that exudes elegance and whispers of royalty, crafted to pamper you from
            the moment you arrive.
            </p>
            <p id="Content">More than just a meal, Crimson Royale is a promise of an 
            unforgettable evening. It's a celebration of good food, great company, 
            and the finer things in life. Come, discover your own royal dining experience.
            </p>
            <br /><br />
            <Link to="/BookATable" id="BookATable">Book a Table</Link>
      </div>
    )
}

export default HomepageContent