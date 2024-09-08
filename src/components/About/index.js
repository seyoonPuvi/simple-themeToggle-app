// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const titleTextColor = isDarkTheme ? 'title-dark' : 'title-light'
      const bgColor = isDarkTheme ? 'home-dark-bg' : 'home-light-bg'

      return (
        <>
          <Navbar />
          <div className={`home-cont ${bgColor}`}>
            <img src={homeImageUrl} alt="about" />
            <h1 className={titleTextColor}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
