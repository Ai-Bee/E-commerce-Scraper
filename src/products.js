import './stylesheets/products.scss'
import Nav from './componentParts/topNav'
import {useState} from 'react'
import Konga from './componentParts/konga'
import Jiji from './componentParts/jiji'
import Amazon from './componentParts/amazon'
import AliExpress from './componentParts/aliExpress'
import Jumia from './componentParts/jumia'

function ProductsPage() {
    let [userMood, setUserMood] = useState(true)
    let getUserMood = (mood) => {
      setUserMood(mood)
    }

    return (
        <div >
            <Nav getUserMood={getUserMood} />
            <div className={`pb-4 container-general ${userMood?'productsContainer-light':'productsContainer-dark'}`}>
            <Jumia />
           <hr/>
           {/* /// Amazon */}
          <Amazon />
           <hr/>
           {/* Konga */}
            <Konga />
           <hr/>
            <AliExpress />
           <hr/>
            <Jiji />
           </div>
        </div>
    );
  }
  
  export default ProductsPage;