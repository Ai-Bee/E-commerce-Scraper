import './stylesheets/landing.scss'
import Nav from './componentParts/topNav'
import Loader from './componentParts/loader'
import {useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux';
// import {jijiAction, amazonAction, aliexpressAction, kongaAction, jumiaAction} from './actions/allActions'
import axios from 'axios'

function Landing() {
  const history = useHistory()
  // let jijiData = useSelector(state => state.jijiReducer);
  // let amazonData = useSelector(state => state.amazonReducer)
  // let kongaData = useSelector(state => state.kongaReducer)
  // let jumiaData = useSelector(state => state.jumiaReducer)
  // let aliexpressData = useSelector(state => state.aliexpressReducer)
  // // let amazonData = useSelector(state => state.amazonAction)
  // const dispatch = useDispatch();
  let [userMood, setUserMood] = useState(true) // use redux globals
  let [searchQuery, setSearchQuery] = useState('')
  let [loading, setLoadingState] = useState(false)
  // let [jiji, setJiji] = useState([])
  // let [amazon, setAmazon] = useState([])
  // let [jumia, setJumia] = useState([])
  // let [aliexpress, setAliexpress] = useState([])
  // let [konga, setKonga] = useState([])

  const [rootUrl] = useState('https://fathomless-plains-52664.herokuapp.com/')

  useEffect(() => {
  //  dispatch(amazonAction(JSON.parse(localStorage.getItem('amazon'))))
  //   dispatch(jijiAction(JSON.parse(localStorage.getItem('jiji'))))
  //   dispatch(aliexpressAction(JSON.parse(localStorage.getItem('aliexpress'))))
  //   dispatch(kongaAction(JSON.parse(localStorage.getItem('konga'))))
  //   dispatch(jumiaAction(JSON.parse(localStorage.getItem('jumia'))))
  }, [])
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
  let getUserMood = (mood) => {
    setUserMood(userMood = mood)
  }
  let resetValue = () => {
    setSearchQuery('') 
  }
  let jijiGetter = (query) => {
    return axios.get(`${rootUrl}jiji/${query}/popularity`)
  }
  let amazonGetter = (query) => {
    return axios.get(`${rootUrl}amazon/${query}/1`)
  }
  let jumiaGetter = (query) => {
    return axios.get(`${rootUrl}jumia/${query}/1/popularity`)
  }
  let kongaGetter = (query) => {
    return axios.get(`${rootUrl}konga/${query}/1/relevance`)
  }
  let aliexpressGetter = (query) => {
    return axios.get(`${rootUrl}aliexpress/${query}/1`)
  }
  let fetchData = (query) => {
    setLoadingState(true)
    axios.all([
      jijiGetter(query),
      amazonGetter(query),
      jumiaGetter(query), 
      kongaGetter(query), 
      aliexpressGetter(query)
    ]).then(res => {
      // dispatch(jijiAction(res[0]))
      // dispatch(amazonAction(res[1]))
      // dispatch(jumiaAction(res[2]))
      // dispatch(kongaAction(res[3]))
      // dispatch(aliexpressAction(res[4]))
      localStorage.removeItem('amazon') 
      localStorage.removeItem('jumia') 
      localStorage.removeItem('konga')  
      localStorage.removeItem('jiji')
      localStorage.removeItem('aliexpress')
      ///////////
      console.log(res)
      localStorage.setItem('amazon', JSON.stringify(res[1])) 
      localStorage.setItem('jumia', JSON.stringify(res[2])) 
      localStorage.setItem('konga', JSON.stringify(res[3]))  
      localStorage.setItem('jiji', JSON.stringify(res[0]))
      localStorage.setItem('aliexpress', JSON.stringify(res[4]))
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoadingState(false)
      history.push('/products')
    })
  }
 
  let handleSubmit = (e) => {
    e.preventDefault()
    if(searchQuery !== ''){
      let editedQuery = formatSearchText(searchQuery)  
      fetchData(editedQuery)
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