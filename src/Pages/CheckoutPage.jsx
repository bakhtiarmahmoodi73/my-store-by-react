import BasketCard from "../Components/BasketCard";
import BasketSidebar from "../Components/BasketSidebar";
import { useCart } from "../Conext/CartContext";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });
  if (!state.itemsCounter) {
    return (
      <div className={styles.container} >
        <p>Empty</p>
      </div>
    );
  }
  return (
    <div className={styles.container} >
      <BasketSidebar state={state} clickHandler={clickHandler} />

      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
