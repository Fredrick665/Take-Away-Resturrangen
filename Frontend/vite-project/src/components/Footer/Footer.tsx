import './footer.css'
function Footer() {
  return (
    <footer className="footer">
      <section className='footer__logo'>
        <img src="/src/assets/restaurant-logo.png" alt="" />
        <h1>SwiftDeluxe Restaruant</h1>
      </section>
      <ul className='footer__contacts'>
        <li>SwiftDeluxeRestaurant@gmail.com</li>
        <li>Tel.: 073-251-739</li>
        <li>Sweden, Karlstad, Någonstans-Gata 6</li>
      </ul>
      <section className='footer__social-media'>
        <img className='footer__social-media-icon' src="/src/assets/facebook-logo.svg" alt="" />
        <img className='footer__social-media-icon' src="/src/assets/instagram-logo.svg" alt="" />
      </section>
    </footer>
  )
}

export default Footer