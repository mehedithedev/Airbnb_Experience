const Card= (props)=>{
    return(

        <div className="card">
            <h1>{props.name}</h1>
            <img src={props.img}
            alt="Doramenon.png"

            />
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>

    )
}
export default Card