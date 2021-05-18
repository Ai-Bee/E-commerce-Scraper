import { useEffect, useState } from 'react'

function Jumia(props) {
    let [page, setPage] = useState(1)
    const [data, setData] = useState([])
    useEffect(() => {
        // let format = props.classifyData(props.jumiaData)
       // setData(format)
    }, [props.jumiaData])

    // let formatRating = (val) => {

    // }

    return (
      <div>
                 <section className="resultsSection container mb-4" id="Jumia">
            <div className='top'>
                <img src="./jumia-logo-full.png" className='darken' style={{maxWidth:'400px'}}  alt="Jumia Logo"/>
                <div className="controls row mx-auto my-2 justify-content-between">
                    <div className='col-sm-5 row'>
                        <input type="text" className='col form-control' placeholder="Search In Jumia..." />
                        <button type="submit" className='col-sm-3 btn btn-outline-secondary'>Search</button>
                    </div>
                    <div className="col-sm-4 row justify-content-end">
                        <select className="col-sm-7">
                            <option className="mt-3" value="">Popularity</option>
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
                        <span>{el.rating}</span></p>
                        <a href={`https://www.jumia.com.ng${el.link}`} target="_blank" className="btn btn-primary col-sm-12">View Product</a>
                    </div>
                    </div>
                })
            }
            
           
            </div>
            <div className='sectionNavigation row mt-3 justify-content-center'>
                <button className='btn btn-outline-primary row col-md-2 p-0 py-2' disabled={page == 1?true:false}>
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
  
  export default Jumia;