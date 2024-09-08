// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const titleTextColor = isDarkTheme ? 'title-dark' : 'title-light'
      const bgColor = isDarkTheme ? 'home-dark-bg' : 'home-light-bg'

      return (
        <>
          <Navbar />
          <div className={`home-cont ${bgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
            />
            <h1 className={titleTextColor}>Lost your Way?</h1>
            <p className={titleTextColor}>
              We cannot seem to find the page you are lokking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
