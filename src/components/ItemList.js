import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div>
            {
                items.length > 0
                ? items.map(item => <Item key={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} />)
                : <p>Cargando...</p>
            }
        </div>
    )
}

export default ItemList;