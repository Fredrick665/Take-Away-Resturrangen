
import './cartPage.css';
import hamburger from '../../assets/hamburger.svg';
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';

function CartPage() {
  return (
    <div className="cart-page">
      <div className="header-cart">
        <img src={hamburger} alt="hamburger" className="hamburger-icon" />
        <img src={logo} alt="logo" className="logo-icon" />
        <img src={cart} alt="cart" className="cart-icon" />
        <div className="cart-counter">7</div>
      </div>

      <div className="main-cart">
        <h2>Cart</h2>
        <button>Price</button>
        <button>A-Z</button>
        <p>Total: 2800 kr</p>
        <div className='line'></div>

        <section className='product'>
          <img src="#" alt="bild" />
          <h2>Shushi One</h2>
          <p>1500 kr</p>
          <article>
            <p>Anteckningar:</p>
          </article>
          <div className="sum">1</div>
          <button className='add'>+</button>
          <button className='subtract'>-</button>
        </section>

        <section className='product'>
          <img src="#" alt="bild" />
          <h2>Shushi Two</h2>
          <p>1500 kr</p>
          <article>
            <p>Anteckningar:</p>
          </article>
          <div className="sum">3</div>
          <button className='add'>+</button>
          <button className='subtract'>-</button>
        </section>

        <section className='product'>
          <img src="#" alt="bild" />
          <h2>Shushi Three</h2>
          <p>1500 kr</p>
          <article>
            <p>Anteckningar:</p>
          </article>
          <div className="sum">3</div>
          <button className='add'>+</button>
          <button className='subtract'>-</button>
        </section>

      </div>

      <div className="footer-cart">
        <button type="submit">Bekräfta beställning</button>
      </div>



    </div>
  )
}

export default CartPage;
