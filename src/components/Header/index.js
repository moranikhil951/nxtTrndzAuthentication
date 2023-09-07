// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-name"
      />
      <ul className="nav-menu">
        <li className="listed-items">
          <p className="nav-link">Home</p>
        </li>
        <li className="listed-items">
          <p className="nav-link">Products</p>
        </li>
        <li className="listed-items">
          <p className="nav-link">Cart</p>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
      <button type="button" className="btn">
        <img
          alt="nav logout"
          className="logout-btn"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        />
      </button>
    </div>
    <div className="icons-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="icon"
      />
    </div>
  </nav>
)

export default Header
