import { useSelector } from "react-redux";

const Cart = () => {
  const noCart = useSelector((state) => state.cart.items.length);

  return (
    <>
      <p> This is your cart Items...</p>
      <h3>It contains {noCart} items</h3>
    </>
  );
};

export default Cart;
