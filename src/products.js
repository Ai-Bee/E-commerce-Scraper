import './stylesheets/products.scss'
import Nav from './componentParts/topNav'
import {useState, useEffect} from 'react'
import Konga from './componentParts/konga'
import Jiji from './componentParts/jiji'
import Amazon from './componentParts/amazon'
import AliExpress from './componentParts/aliExpress'
import Jumia from './componentParts/jumia'

function ProductsPage() {
    let [userMood, setUserMood] = useState(true)
    let [jiji, setJiji] = useState([])
    let [amazon, setAmazon] = useState([])
    let [jumia, setJumia] = useState([])
    let [aliexpress, setAliexpress] = useState([])
    let [konga, setKonga] = useState([])
    let getUserMood = (mood) => {
      setUserMood(mood)
    }
    
    let formatPrice = (usd, amazon) => {
      let digits
      let seperate
      if(amazon){
        digits = usd.slice(1)
        return `₦${Math.round(digits*413)} (${usd})`
      } else {
        seperate = usd.split(' ')
        digits = seperate[1].slice(1)
        return `₦${Math.round(digits*413)} (${seperate[1]})`
      }
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

    let classifyData = (input, store) => {
      let final = []
      let len = input.items.length
      for (let index = 0; index < len; index++) {
        let temp = {}
        input.items.map((element, ind, array) => {
          temp.name = array[index]
          })
          input.prices.map((element, ind, array) => {
              temp.price = array[index]
          })
          input.links.map((element, ind, array) => {
              temp.link = array[index]
          })
          input.imgLinks.map((element, ind, array) => {
              temp.imgLink = array[index]
          })
          if(store == 'jiji'){
            input.location.map((element, ind, array) => {
              temp.location = array[index]
          })
          }
          if(store == 'amazon'){
            temp.prevLink = input.prevBtnLink
            temp.nextLink = input.nextBtnLink
          }
          if(input.ratings){
            input.ratings.map((element, ind, array) => {
              temp.rating = array[index]
          })
          }
          final.push(temp)
      }
      
      return final.filter(el => el.name != '')
  }

    useEffect(() => {
      setJiji(JSON.parse(localStorage.getItem('jiji')).data)
      setJumia(JSON.parse(localStorage.getItem('jumia')).data)
      // return () => {
      //   cleanup
      // }
    }, [])
    return (
        <div >
            <Nav getUserMood={getUserMood} />
            <div className={`pb-4 container-general ${userMood?'productsContainer-light':'productsContainer-dark'}`}>
            <Jumia formatSearchText={formatSearchText} jumiaData={jumia} classifyData={classifyData}/>
           <hr/>
           {/* /// Amazon */}
          <Amazon classifyData={classifyData} formatSearchText={formatSearchText} formatPrice={formatPrice}/>
           <hr/>
           {/* Konga */}
            <Konga classifyData={classifyData} formatSearchText={formatSearchText}/>
           <hr/>
            <AliExpress formatPrice={formatPrice} formatSearchText={formatSearchText}/>
           <hr/>
            <Jiji jijiData={jiji} formatSearchText={formatSearchText} classifyData={classifyData}/>
           </div>
        </div>
    );
  }
  
  export default ProductsPage;