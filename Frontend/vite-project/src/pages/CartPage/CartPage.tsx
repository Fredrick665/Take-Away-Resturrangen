import './cartPage.css';
import hamburger from '../../assets/hamburger.svg';
import logo from '../../assets/logo.svg';
import CartList from '../../components/CartList/CartList';
import { useCartStore } from '../../stores/cartStore';
import CartCounter from '../../components/CartCounter/CartCounter';

function CartPage() {
  const { items, addItem, subtractItem, updateNotes } = useCartStore();

  // beräknar den totala summan
  const totalPrice = items.reduce((sum: number, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="cart-page">
      <div className="header-cart">
        <img src={hamburger} alt="hamburger" className="hamburger-icon" />
        <img src={logo} alt="logo" className="logo-icon" />
        < CartCounter /> {/* antal varor  */}
      </div>

      <div className="main-cart">
        <p className='main-text'>Total: {totalPrice} kr</p> {/* totalpris */}
        <section className="main-filter">
          <h2 className='main-heading'>Cart</h2>
          <button className='btn-pris'>Price</button>
          <button className='btn-az'>A-Z</button>
          <div className='main-line'></div>
        </section>
        <CartList
          items={items}
          onAdd={addItem}
          onSubtract={subtractItem}
          onNotesChange={updateNotes}
        />
      </div>

      <div className="footer-cart">
        <button type="submit">Bekräfta beställning</button>
      </div>
    </div>
  );
}

export default CartPage;
