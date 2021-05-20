import { useState, useEffect } from 'react'
import Loader from './loader'
import axios from 'axios'


function AliExpress(props) {
    let [page, setPage] = useState(1)  
    const [data, setData] = useState([])
    let [rando, setRando] = useState(0)
    let [loading, setLoadingState] = useState(false)
    let [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        let all = JSON.parse(localStorage.getItem('aliexpress'))
        setData(all.data.content)
    }, [])
    useEffect(() => {
        let all = JSON.parse(localStorage.getItem('aliexpress'))
        setData(all.data.content)
    }, [rando])

    let handleSubmit = (e) => {
        e.preventDefault()
        if(searchQuery !== ''){
            let editedQuery = props.formatSearchText(searchQuery)  
            fetchData(editedQuery)
             // then setLoadingState(false)
          } 
          setSearchQuery('') 
    }

    let fetchData = (query) => {
        // setLoadingState(true)
        localStorage.removeItem('aliexpress')
        axios.get(`https://fathomless-plains-52664.herokuapp.com/aliexpress/${query}/${page}`).then(res => {
        
            localStorage.setItem('aliexpress', JSON.stringify(res))
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            console.log('done')
            setLoadingState(true)
            setRando(state => state + 1)
            setLoadingState(false)
        })
    }

    return (
      <div>
                    <section className="resultsSection container mb-4" id="Aliexpress">
            <div className='top'>
                <img src="./Aliexpress-logo-full.png"  style={{maxWidth:'400px', maxHeight:'150px'}}  alt="Aliexpress Logo"/>
                <div className="controls row mx-auto my-2 justify-content-between">
                    <div className='col-sm-5 row'>
                        <input type="text" value={searchQuery}
           onChange={e => setSearchQuery(e.target.value)}  className='col form-control' placeholder="Search In Aliexpress..." />
                        <button type="submit" onClick={handleSubmit} className='col-sm-3 btn btn-outline-danger'>Search</button>
                    </div>
                </div>
            </div>
            <div className="results row">
            {
                 data.map(el => {
                    return <div className="productCard py-3 col-sm-12" >
                    <img className="card-img-top" src={el.image.imageUrl} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{el.title.displayTitle}</h5>
                        <p className="card-text">{props.formatPrice(el.prices.sale_price.formattedPrice)}</p>
                        <p className="card-text rating">Rating: 
                        <span>{el.evaluation?.starWidth?`${el.evaluation.starWidth}%`:null}</span></p>
                        <a href={`https://www.aliexpress.com/item/${el.productId}.html`} target="_blank" className="btn btn-primary col-sm-12">View Product</a>
                    </div>
                    </div>
                })
            }
           
            </div>
            <div className='sectionNavigation row mt-3 justify-content-center'>
                <button disabled={page == 1?true:false} className='btn btn-outline-primary row col-md-2 p-0 py-2'>
                    <span className="col" ><img src='./right-arrow.png' style={{transform:'rotate(180deg)', maxWidth:'20px'}}/></span>
                    <span className='col'>Previous Page</span>
                </button>
                <button className='col-sm-1 btn btn-outline-primary mx-4 disabled'>{page}</button>
                <button className='btn btn-outline-primary row col-md-2 p-0 ml-2 py-2'>
                    <span className="col" ><img src='./right-arrow.png' style={{maxWidth:'20px'}}/></span>
                    <span className='col'>Next Page</span>
                </button>
              
            </div>
           </section>
      </div>
    );
  }
  
  export default AliExpress;