
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
        <p className='main-text'>Total: 2800 kr</p>
        <section className="main-filter">
          <h2 className='main-heading'>Cart</h2>
          <button className='btn-pris'>Price</button>
          <button className='btn-az'>A-Z</button>
          <div className='main-line'></div>
        </section>
        <section className="product-list">
          <section className='product-item'>
            <div className="info-product">
              <img src="#" alt="bild" />
              <div className="product-details">
                <h2 className='text-product'>Shushi One</h2>
                <p>1500 kr</p>
              </div>
            </div>
            <article className='notes-container'>

              <textarea
                id='notes'
                name='notes'
                placeholder='Anteckningar:'
                className='notes-input'
              ></textarea>
            </article>
            <div className="product-sum">1</div>
            <div className="btn-quantity">
              <button className='btn-subtract'>-</button> <button className='btn-add'>+</button>
            </div>
          </section>

          <section className='product-item'>
            <div className="info-product">
              <img src="#" alt="bild" />
              <div className="product-details">
                <h2 className='text-product'>Shushi Two</h2>
                <p>800 kr</p>
              </div>
            </div>
            <article className='notes-container'>
              <textarea
                id='notes'
                name='notes'
                placeholder='Anteckningar:'
                className='notes-input'
              ></textarea>
            </article>
            <div className='product-sum'>3</div>
            <div className="btn-quantity">
              <button className='btn-subtract'>-</button>  <button className='btn-add'>+</button>
            </div>
          </section>

          <section className='product-item'>
            <div className="info-product">
              <img src="#" alt="bild" />
              <div className="product-details">
                <h2 className='text-product'>Shushi Three</h2>
                <p>500 kr</p>
              </div>
            </div>
            <article className='notes-container'>

              <textarea
                id='notes'
                name='notes'
                placeholder='Antecningar:'
                className='notes-input'
              ></textarea>
            </article>
            <div className="product-sum">3</div>
            <div className="btn-quantity">
              <button className='btn-subtract'>-</button> <button className='btn-add'>+</button></div>
          </section>
        </section>
      </div>

      <div className="footer-cart">
        <button type="submit">Bekräfta beställning</button>
      </div>



    </div>
  )
}

export default CartPage;
