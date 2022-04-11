const Items = ({ id, name, price, image }) => {

    return (
        <div key={id}>
            <div src={image}></div>
            <h2>{name}</h2>
            <h3>$ {price}</h3>
        </div>
    )
}

export default Items;