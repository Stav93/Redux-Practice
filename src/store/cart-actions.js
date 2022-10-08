import { uiSliceActions } from "./ui-slice";
import { cartSliceActions } from "./cart-slice";

// thunk -> a function that returns a function that will return an action

// GET
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-redux-http-da244-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Couldn'nt fetch cart data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartSliceActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Cart Data Failed!",
        })
      );
    }
  };
};

// POST
export const sendingCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-http-da244-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Data Failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Cart Data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending Cart Data Failed!",
        })
      );
    }
  };
};
