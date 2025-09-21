import CartItem from "./CartItem";

const CartList = ({ items }) => {
    return (
        <div className="flex flex-col items-center space-y-2">
            {items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartList;