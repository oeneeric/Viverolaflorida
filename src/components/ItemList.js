import Items from "./Items";

const ItemList = ({ items }) => {
    console.log(items, "desde itemList");
    return (
        <div>
            {
                items.length > 0
                ? items.map((item) => <Items key={item.id} name={item.name} price={item.price} image={item.image[0]} />)
                : <p>Cargando productos...</p>
            }
        </div>
    )
}

export default ItemList;