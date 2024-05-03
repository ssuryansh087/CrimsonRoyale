import Chefs from './Chefs.js'
import Chef1 from './assets/Chefs/Chef1.jpeg'
import Chef2 from './assets/Chefs/Chef2.jpeg'
import Chef3 from './assets/Chefs/Chef3.jpeg'
import ComplaintForm from './ComplaintForm.js'

function BottomThree(){
    return(
        <div className='threeMusketeers'>
        <div id='firstMusk'>
          <h2 id='meetChefs'>Meet Our Chefs</h2>
          <hr/>
          <Chefs img = {Chef1} name = 'Phil Dunphy' des = 'Your fun-loving guide to global eats. Mexican & Thai flavors with a smile.'/>
          <Chefs img = {Chef2} name = 'Jay Pritchett' des = 'Crafting Indian culinary marvels, his dishes transport taste buds to the vibrant streets of the subcontinent.'/>
          <Chefs img = {Chef3} name = 'Lily Tucker' des = 'A culinary artist weaving the flavors of Vietnam and Southeast Asia into delightful creations that tantalize taste buds.'/>
        </div>
        <div id='secondMusk'>
          <h2 id='Locations'>Locations</h2>
          <hr/>
          <iframe title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9833477465!2d72.83328527597956!3d19.06446975233291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709401881419!5m2!1sen!2sin" id='GoogleFrame'/>
        </div>
        <ComplaintForm />
      </div>
    )
}

export default BottomThree;