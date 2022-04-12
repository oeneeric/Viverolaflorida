import products from "./products";
const Items = ({ id, name, price, image }) => {

    return (
        <div key={id}>
            <img src={image} alt="" className="card__img" />
            <h2>{name}</h2>
            <h3>$ {price}</h3>
        </div>
    )
}

export default Items;