import { useState, useEffect } from 'react'
import Loader from './loader'
import axios from 'axios'

function Jiji(props) {
    const [data, setData] = useState([])
    let [rando, setRando] = useState(0)
    let [loading, setLoadingState] = useState(false)
    let [searchQuery, setSearchQuery] = useState('')
    let [sorter, setSorter] = useState('popularity')

    let extractLink = (element) => {
        let urlRegex = /(https?:\/\/[^ ]*)/;
        let url   = element.match(urlRegex);
       
        if(url){
            return url[1].slice(0,-2)
        } else {
            return './genericImage.jpg'
        }
    }
    useEffect(() => {
        let raw = JSON.parse(localStorage.getItem('jiji'))
        let all = props.classifyData(raw.data)
        setData(all)
    }, [rando])

    useEffect(() => {
        let raw = JSON.parse(localStorage.getItem('jiji'))
        let all = props.classifyData(raw.data)
        setData(all)
    }, [])

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
        localStorage.removeItem('jiji')
        axios.get(`https://fathomless-plains-52664.herokuapp.com/jiji/${query}&sort=${sorter}`).then(res => {
        
            localStorage.setItem('jiji', JSON.stringify(res))
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
           <div className={`${loading?'showing':'hiding'}`}>
            <Loader /> 
          </div>
            <section className="resultsSection container mb-4 pb-4" id="Jiji">
            <div className='top'>
                <img src="./Jiji_logo.png" alt="Jiji Logo"/>
                <div className="controls row mx-auto my-2 justify-content-between">
                    <div className='col-sm-6 row'>
                        <input type="text" className='col form-control' placeholder="Search In jiji..." value={searchQuery}
           onChange={e => setSearchQuery(e.target.value)} />
                        <button  onClick={handleSubmit} type="submit" className='col-sm-4 btn btn-outline-success'>Search</button>
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
                    <img className="card-img-top" src={extractLink(el.imgLink)} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{el.name}</h5>
                        <p className="card-text">{el.price}</p>
                        <p className="card-text location"><span className='mr-2'><img src="./location.png" />{el.location} </span></p>
                        <a href={`https://www.jiji.ng${el.link}`} target="_blank" className="btn btn-primary col-sm-12">View Product</a>
                    </div>
                    </div>
                })
            }
           
            </div> 
           </section>
      </div>
    );
  }
  
  export default Jiji;