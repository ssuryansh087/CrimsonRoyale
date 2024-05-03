function MainChefs(props){
    return(
        <div className="MainChefs">
                <img src={props.img} alt="" className='ChefImages'/>
                <h1 className='ChefName'>Chef {props.name}</h1>
                <p className='ChefDesc'>{props.desc}</p>
                <p className="Specials">{props.name}'s Specials</p>
                <div className="SpecialContainer">
                    <img src={props.special1} alt="" className="SpecialImages"/>
                    <h2 className="SpecialTitle">{props.title1}</h2>
                    <p className="SpecialDesc">{props.desc1}</p>
                </div>
                <div className="SpecialContainer">
                    <img src={props.special2} alt="" className="SpecialImages"/>
                    <h2 className="SpecialTitle">{props.title2}</h2>
                    <p className="SpecialDesc">{props.desc2}</p>
                </div>
                <br/>
            </div>
    )
}

export default MainChefs;