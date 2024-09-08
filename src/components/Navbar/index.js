// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const textColor = isDarkTheme ? 'nav-item-dark' : 'nav-item-light'

      const navBg = isDarkTheme ? 'nav-dark-bg' : 'nav-light-bg'

      const onToggleTheme = () => toggleTheme()

      return (
        <div className={`navbar-cont ${navBg}`}>
          <ul className="navbar-list-cont">
            <li className="icon-cont">
              <img
                src={websiteLogo}
                alt="website logo"
                className="website-logo"
              />
            </li>
            <li className="home_about-list-cont">
              <Link to="/" className="link">
                <p className={textColor}>Home</p>
              </Link>
              <Link to="/about" className="link">
                <p className={textColor}>About</p>
              </Link>
            </li>
            <li className="icon-cont">
              <button type="button" onClick={onToggleTheme} data-testid="theme">
                <img src={themeLogo} alt="theme" className="theme-logo" />
              </button>
            </li>
          </ul>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
