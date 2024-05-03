import Chef1 from '../components/assets/Chefs/Chef1.jpeg'
import Chef2 from '../components/assets/Chefs/Chef2.jpeg'
import Chef3 from '../components/assets/Chefs/Chef3.jpeg'
import Special1 from '../components/assets/Food/BreadOmlette-1.jpeg'
import Special2 from '../components/assets/Food/CassataIceCream-1.jpeg'
import Special3 from '../components/assets/Food/ChanaMasala-1.jpeg'
import Special4 from '../components/assets/Food/KulfiFalooda-1.jpeg'
import Special5 from '../components/assets/Food/ShahiPaneer-1.jpeg'
import Special6 from '../components/assets/Food/FrenchToast-1.jpeg'
import '../styles/OurChefs.css'
import MainChefs from './components/MainChefs'

function OurChefs(){
    return(
        <div className='Container'>
            <a href='/' id='BackToHome1'>&#60; Home</a>
            <h1 id='MeetOurChefs'>Meet Our Chefs</h1>
            <MainChefs img={Chef1} 
            special1={Special1} 
            title1='Bread Omlette' 
            desc1='In the elegant ambiance of our premium restaurant, we present the timeless classic: Bread Omelette elevated to new heights of sophistication. Handcrafted using artisanal bread, delicately folded around a velvety omelette infused with the finest herbs and spices, this dish is a symphony of texture and flavor. Served alongside a medley of roasted vegetables and drizzled with a savory reduction, each bite is a journey through culinary excellence, designed to delight the most discerning palate. Experience the epitome of indulgence with our interpretation of Bread Omelette, a culinary masterpiece crafted for the connoisseur in you.' 
            special2={Special2}
            title2='Cassata Ice Cream'
            desc2='Indulge in the epitome of frozen decadence with our exquisite Cassata Ice Cream, meticulously crafted for discerning palates in our premium restaurant setting. Layers of creamy vanilla, chocolate, and strawberry ice cream are interspersed with luscious candied fruits and nuts, creating a symphony of textures and flavors that dance across your taste buds. Encased in a delicate shell of rich dark chocolate, each spoonful reveals a harmony of sweetness and sophistication. Served with a garnish of fresh berries and a drizzle of artisanal fruit coulis, this opulent dessert is a celebration of elegance and indulgence, promising a sensory experience like no other.' 
            name = 'Phil Dunphy' 
            desc = "Phil Dunphy isn't your average chef. Forget stuffy kitchens and pretentious plates. Phil brings a smile to your face and a party to your palate. While he may not be a classically trained chef, Phil's passion lies in the fun and flavor of international cuisines. This self-proclaimed ambassador of deliciousness specializes in the crowd-pleasing cuisines of Mexico and Thailand. Imagine sizzling fajitas bursting with fresh flavors, followed by fragrant curries that tickle your taste buds. Phil's dishes are an explosion of textures and spices, guaranteed to leave you wanting more."
            />
            <MainChefs img={Chef2} 
            special1={Special3}
            title1='Chana Masala'
            desc1='Tender chickpeas, simmered to perfection in a rich and aromatic blend of spices, create the foundation of this dish. Each bite bursts with the flavors of cumin, coriander, and garam masala, intricately balanced to perfection. Served in an elegant bowl atop a bed of fragrant basmati rice, our Chana Masala is accompanied by freshly baked naan, warm and pillowy, ready to soak up every last drop of the flavorful sauce. Garnished with a sprinkle of fresh cilantro and a dollop of creamy yogurt, this dish embodies the essence of Indian cuisine in a luxurious and refined presentation.'
            special2={Special4}
            title2='Kulfi Falooda'
            desc2="Indulge in a regal dessert experience with our signature Kulfi Falooda, reimagined for the discerning palate in our premium restaurant setting. This opulent creation begins with artisanal Kulfi, handcrafted using traditional methods and infused with the essence of saffron, cardamom, and rosewater. Each creamy bite is a tribute to the rich heritage of Indian sweets. Accompanying the Kulfi is a delicate nest of falooda, crafted from fine vermicelli soaked in fragrant rose syrup and adorned with tender basil seeds for a burst of texture. As you delve deeper into this culinary marvel, you'll discover layers of freshly chopped nuts and vibrant fruit, adding complexity and nuance to each spoonful."
            name = 'Jay Pritchett' 
            desc = "Jay Pritchett is a culinary maestro renowned for his mastery in the art of Indian cuisine. With a passion for flavor and a deep understanding of traditional Indian cooking techniques, Chef Jay brings a unique and authentic touch to every dish he creates. Drawing inspiration from the rich and diverse culinary heritage of India, Chef Jay expertly blends spices, herbs, and fresh ingredients to craft dishes that tantalize the taste buds and evoke a sense of cultural richness. His dedication to preserving the authenticity of Indian cuisine while infusing it with his own creative twists sets him apart as a true culinary innovator."
            />
            <MainChefs img={Chef3} 
            special1={Special5}
            title1='Shahi Paneer'
            desc1='Tender cubes of paneer, marinated in a luscious blend of yogurt, cream, and exotic spices, are cooked to perfection in a velvety tomato-based gravy infused with saffron, cardamom, and fenugreek. Each spoonful of Shahi Paneer offers a symphony of flavors, with the richness of the paneer complemented by the subtle sweetness of the tomatoes and the warm notes of the spices. Presented in an exquisite serving dish, garnished with a drizzle of golden saffron-infused cream and a sprinkle of crushed nuts, this dish exudes elegance and sophistication.'
            special2={Special6}
            title2='French Toast'
            desc2='Crafted with artisanal brioche bread, soaked in a rich custard infused with Madagascar vanilla and hints of cinnamon, each golden slice is a symphony of flavor and texture. Indulge your senses as the French Toast graces your palate, offering a delicate crunch on the outside and a luxuriously soft interior. Accompanied by a medley of fresh seasonal fruits, a dollop of whipped cream, and a drizzle of pure maple syrup sourced from the finest groves, this dish transcends mere breakfast fare to become an experience of pure indulgence.'
            name = 'Lily Tucker' 
            desc = "Lily, a culinary virtuoso, wields her expertise to curate a delectable journey through the flavors of Vietnam and beyond. With a deft hand, she expertly blends the fragrant herbs and spices of Vietnamese cuisine, while also drawing inspiration from the diverse culinary landscapes of Thailand, Laos, and Cambodia. Each dish she crafts is a harmonious fusion of tradition and innovation, inviting diners to savor the vibrant colors and bold flavors of Southeast Asia. From aromatic pho to zesty papaya salad, Chef Lily's creations captivate the palate and ignite a passion for culinary exploration across borders."
            />
            <br/>
        </div>
    )
}

export default OurChefs;