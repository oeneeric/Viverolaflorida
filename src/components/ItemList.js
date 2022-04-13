import Items from "./Items";

const ItemList = ({ items }) => {
    console.log(items, "desde itemList");
    return (
        <div className="row">
            {
                items.length > 0
                ? items.map((items) => <Items key={items.id} id={items.id} name={items.name} price={items.price} description={items.description} image={items.image} />)
                : <p>Cargando productos...</p>
            }
        </div>
    )
}

export default ItemList;