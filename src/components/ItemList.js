import Items from "./Items";

const ItemList = ({ items }) => {
    console.log(items, "desde itemList");
    return (
        <div className="row">
            {
                items.length > 0
                ? items.map((item) => <Items key={item.id} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} />)
                : <p>Cargando productos...</p>
            }
        </div>
    )
}

export default ItemList;