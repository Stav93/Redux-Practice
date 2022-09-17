import classes from "./CartButton.module.css";
import { uiSliceActions } from "../../store/ui-slice"
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch()

  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggle()) // we execute it because it returns action object which we dispatch here
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
