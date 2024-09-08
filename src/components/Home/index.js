// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const titleTextColor = isDarkTheme ? 'title-dark' : 'title-light'
      const bgColor = isDarkTheme ? 'home-dark-bg' : 'home-light-bg'

      return (
        <>
          <Navbar />
          <div className={`home-cont ${bgColor}`}>
            <img src={homeImageUrl} alt="home" />
            <h1 className={titleTextColor}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
