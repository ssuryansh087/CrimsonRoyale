function Chefs(props){
    return (
        <div className='Chefs'>
            <a href="/OurChefs">
            <img src={props.img} alt="" id='ChefImage'/>
            <p id='ChefName'>Chef {props.name}</p>
            <p className='ChefDescription'>{props.des}</p>
            </a>
        </div>
    )
}

export default Chefs;