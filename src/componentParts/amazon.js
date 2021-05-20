import { useState, useEffect } from 'react'
import Loader from './loader'
import axios from 'axios'

function Amazon(props) {
    const [data, setData] = useState([])
    let [page, setPage] = useState(1)
    let [rando, setRando] = useState(0)
    let [loading, setLoadingState] = useState(false)
    let [searchQuery, setSearchQuery] = useState('')
    useEffect(() => {
        let raw = JSON.parse(localStorage.getItem('amazon'))
        let all = props.classifyData(raw.data)
        setData(all)
    }, [])
    useEffect(() => {
        let rawData = JSON.parse(localStorage.getItem('amazon'))
        let all = props.classifyData(rawData.data)
        setData(all)
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
        localStorage.removeItem('amazon')
        axios.get(`https://fathomless-plains-52664.herokuapp.com/amazon/${query}/${page}`).then(res => {
        
            localStorage.setItem('amazon', JSON.stringify(res))
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
          {/* <Loader/> */}
           <section className="resultsSection container mt-4" id="Amazon">
            <div className='top'>
                <img src="./Amazon-logo-full.png" className='darken' alt='Amazon Logo' style={{maxWidth:'400px'}} />
                <div className="controls row mx-auto my-2 justify-content-between">
                    <div className='col-sm-5 row'>
                        <input type="text" value={searchQuery}
           onChange={e => setSearchQuery(e.target.value)} className='col form-control' placeholder="Search In Amazon..." />
                        <button type="submit" className='col-sm-3 btn btn-outline-warning' onClick={handleSubmit}>Search</button>
                    </div>
                </div>
            </div>
            <div className="results row">
            {
                data.map(el => {
                    return <div className="productCard py-3 col-sm-12" >
                    <div className='text-center'>
                    <img className="card-img-top" src={el.imgLink} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <div className="card-title">{el.name}</div>
                        <p className="card-text">{props.formatPrice(el.price, true)}</p>
                        <p className="card-text rating">Rating: 
                        <span>{el.rating}</span></p>
                        <a href={el.link} target="_blank" className="btn btn-primary col-sm-12">View Product</a>
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
  
  export default Amazon;