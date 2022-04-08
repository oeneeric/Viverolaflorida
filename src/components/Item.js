const Item = ({ title, price, pictureUrl }) => {

    return (
        <div>
            <div src={pictureUrl}></div>
            <div>{title}</div>
            <div>$ {price}</div>
        </div>
    )
}

export default Item;