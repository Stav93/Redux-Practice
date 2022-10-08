import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { uiSliceActions } from "./store/ui-slice";
import { sendingCartData, fetchCartData } from "./store/cart-actions"

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartisVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

   // using Thunk - we return a function, not an object with a type and payload. with toolkit, redux will see that it is a function and will execute it for us, it will give us the dispatch action automatically, so that we can dispatch again.

  //Get cart data from backend
  useEffect(() => {
    dispatch(fetchCartData());
  }, [])

  //Put - update cart data to backend
  useEffect(() => {
     if (isInitial) {
      isInitial = false;
      return;
     }
    if (cart.changed === true) {
       dispatch(sendingCartData(cart))
    }
  }, [cart, dispatch]);

  // useEffect(() => {
    //  const sendingCartData = async () => {
    //   dispatch(
    //     uiSliceActions.showNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending Cart Data",
    //     })
    //   );
      // const response = await fetch(
      //   "https://react-redux-http-da244-default-rtdb.firebaseio.com/cart.json",
      //   { method: "PUT", body: JSON.stringify(cart) }
      // );
      // if (!response.ok) {
      //   throw new Error("Sending Data Failed");
      // }
      // const responseData = await response.json();
      // dispatch(
      //   uiSliceActions.showNotification({
      //     status: "success",
      //     title: "Success!",
      //     message: "Sent Cart Data Successfully!",
      //   })
      // );
    // };

    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }

    // sendingCartData().catch((error) => {
      // dispatch(
      //   uiSliceActions.showNotification({
      //     status: "error",
      //     title: "Error!",
      //     message: "Sending Cart Data Failed!",
      //   })
      // );
  //   });
  // }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
