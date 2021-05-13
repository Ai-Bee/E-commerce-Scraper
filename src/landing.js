import './stylesheets/landing.scss'
import Nav from './componentParts/topNav'
import Loader from './componentParts/loader'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'

function Landing() {
  const history = useHistory()
  let [userMood, setUserMood] = useState(true)
  let [searchQuery, setSearchQuery] = useState('')
  let [loading, setLoadingState] = useState(false)

  let getUserMood = (mood) => {
    setUserMood(userMood = mood)
  }
  let resetValue = () => {
    setSearchQuery('') 
  }

  const formatSearchText = (text) => {
    /**
     * This method converts multiword search
     * queries into the right format required
     * by the urls, and still handles it otherwise 
     */
    let splitText = text.split(' ')
    if(splitText.length > 1){
      return splitText.join('+')
    } else {
      return text
    }
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    if(searchQuery !== ''){
      let out = formatSearchText(searchQuery)  
      setLoadingState(true)
      setTimeout(() => {
        history.push('/products')
      }, 2000);
       // make API call
       // when it returns, 
       // navigate to the new route
       // then setLoadingState(false)
    } 
    resetValue()
  }
    return (
      <div className={`container-local  ${userMood?'light':'dark'}`}>
         <Nav getUserMood={getUserMood} />
         <div className={`${loading?'showing':'hiding'}`}>
          <Loader />
         </div>
         <div>
         <div id="particle-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
         </div>
       <div id="mainLanding" className={`mt-4 pt-4 ${loading?'hiding':'showing'}`}>
         <div>
          <h1>
            <span>S</span>
            <span>E</span>
            <span>A</span>
            <span>R</span>
            <span>C</span>
            <span>H</span>
          </h1>
          <form onSubmit={handleSubmit}>
          <input placeholder="Type in a product, eg Bath Towel"
           style={{ backgroundImage: `url(./search-icon.png)` }} 
           type="text"
           value={searchQuery}
           onChange={e => setSearchQuery(e.target.value)}
           />
          </form>
          <div className="siteNames">
            <img src={'./jumia-logo1.png'} alt="Jumia Logo"/>
            <img src={'./konga-logo.png'} alt="Konga Logo"/>
            <img src={'./Jiji_Logo.png'} alt="Jiji Logo"/> 
            <img src={'./Aliexpress-Logo.png'} alt="AliExpress Logo"/>
           <img src={'./amazon-Logo.png'} alt="Amazon Logo"/>
           
          </div>
         </div>
       </div>
      </div>
    );
  }
  
  export default Landing;