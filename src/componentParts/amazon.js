import { useState, useEffect } from 'react'
import sampleData from './sample'
function Amazon(props) {
    const [data, setData] = useState([])
    let [page, setPage] = useState(1)
    useEffect(() => {
        let ali = props.classifyData(sampleData)
        setData(ali)
    }, [])

    return (
      <div>
           <section className="resultsSection container mt-4" id="Amazon">
            <div className='top'>
                <img src="./Amazon-logo-full.png" className='darken' alt='Amazon Logo' style={{maxWidth:'400px'}} />
                <div className="controls row mx-auto my-2 justify-content-between">
                    <div className='col-sm-5 row'>
                        <input type="text" className='col form-control' placeholder="Search In Amazon..." />
                        <button type="submit" className='col-sm-3 btn btn-outline-warning'>Search</button>
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