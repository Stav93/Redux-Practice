import classes from "./CartButton.module.css";
import { uiSliceActions } from "../../store/ui-slice"
import { useSelector , useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQuantitiy = useSelector(state => state.cart.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggle()) // we execute it because it returns action object which we dispatch here
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantitiy}</span>
    </button>
  );
};

export default CartButton;
