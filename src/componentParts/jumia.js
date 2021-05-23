import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from './loader'

function Jumia(props) {
    let [page, setPage] = useState(1)
    let [rando, setRando] = useState(0)
    const [data, setData] = useState([])
    let [loading, setLoadingState] = useState(false)
    let [searchQuery, setSearchQuery] = useState('')
    let [sorter, setSorter] = useState('popularity')

    useEffect(() => {
        let rawData = JSON.parse(localStorage.getItem('jumia'))
        let all = props.classifyData(rawData.data)
        setData(all)
    }, [])
    useEffect(() => {
        let rawData = JSON.parse(localStorage.getItem('jumia'))
        let all = props.classifyData(rawData.data)
        setData(all)
    }, [rando])
    let formatRating = (text) => {
        if(text){
            let one = text.slice(0,-1)
            return `${Math.round(one)}%`
        } else {
            return null
        }
    }
    let gotoNextPage = () => {
        setPage(state => state + 1)
        fetchData()
    }

    let gotoPrevPage = () => {
        setPage(state => state - 1)
        fetchData()
    }
    let fetchData = (query) => {
        setLoadingState(true)
        setPage(1)
        localStorage.removeItem('jumia')
        axios.get(`https://fathomless-plains-52664.herokuapp.com/jumia/${query}/${page}/${sorter}`).then(res => {
        
            localStorage.setItem('jumia', JSON.stringify(res))
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            console.log('done')
            setRando(state => state + 1)
            setLoadingState(false)
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        if(searchQuery !== ''){
            let editedQuery = props.formatSearchText(searchQuery)  
            fetchData(editedQuery)
             // then setLoadingState(false)
          } 
          setSearchQuery('') 
    }

    return (
      <div>
         <div className={`${loading?'showing':'hiding'}`}>
          <Loader />
         </div>
                 <section className="resultsSection container mb-4" id="Jumia">
            <div className='top'>
                <img src="./jumia-logo-full.png" className='darken' style={{maxWidth:'400px'}}  alt="Jumia Logo"/>
                <div className="controls row mx-auto my-2 justify-content-between">
                    <div className='col-sm-6 row'>
                       
                        <input type="text" className='col form-control' placeholder="Search In Jumia..."   value={searchQuery}
           onChange={e => setSearchQuery(e.target.value)}/>
                        <button type="submit" onClick={handleSubmit} className='col-sm-4 btn btn-outline-secondary'>Search</button>
                    </div>
                    <div className="col-sm-5 row justify-content-end">
                        <select className="col-sm-7" value={sorter} onChange={e => setSorter(e.target.value)}>
                            <option className="mt-3" value="popularity">Popularity</option>
                            <option value="highest-price">Price: High to low</option>
                            <option value="lowest-price">Price: Low to High</option>
                            <option value="newest">Newest Arrivals</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="results row">
                
            {
                data.map(el => {
                    return <div className="productCard py-3 col-sm-12" >
                    <img className="card-img-top" src={el.imgLink} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{el.name}</h5>
                        <p className="card-text">{el.price}</p>
                        <p className="card-text rating">Rating: 
                        <span>{formatRating(el.rating)}</span></p>
                        <a href={`https://www.jumia.com.ng${el.link}`} target="_blank" className="btn btn-primary col-sm-12">View Product</a>
                    </div>
                    </div>
                })
            }
            
           
            </div>
            <div className='sectionNavigation row mt-3 justify-content-center'>
                <button onClick={gotoPrevPage} className='btn btn-outline-primary row col-md-2 p-0 py-2' disabled={page == 1?true:false}>
                    <span className="col" ><img src='./right-arrow.png' style={{transform:'rotate(180deg)', maxWidth:'20px'}}/></span>
                    <span className='col'>Previous Page</span>
                </button>
                <button className='col-sm-1 btn btn-outline-primary mx-4 disabled'>{page}</button>
                <button onClick={gotoNextPage} className='btn btn-outline-primary row col-md-2 p-0 ml-2 py-2'>
                    <span className="col" ><img src='./right-arrow.png' style={{maxWidth:'20px'}}/></span>
                    <span className='col'>Next Page</span>
                </button>
              
            </div>
           </section>
      </div>
    );
  }
  
  export default Jumia;