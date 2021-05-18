import { useState, useEffect } from 'react'


function AliExpress(props) {
    let [page, setPage] = useState(1)  
    const [data, setData] = useState([])

    useEffect(() => {
        //let ali = props.classifyData(sampleData)
        //setData(sampleData)
        // setData(sampleData.content)
        // console.log(data)
    }, [])

    return (
      <div>
                    <section className="resultsSection container mb-4" id="Aliexpress">
            <div className='top'>
                <img src="./Aliexpress-logo-full.png"  style={{maxWidth:'400px', maxHeight:'150px'}}  alt="Aliexpress Logo"/>
                <div className="controls row mx-auto my-2 justify-content-between">
                    <div className='col-sm-5 row'>
                        <input type="text" className='col form-control' placeholder="Search In Aliexpress..." />
                        <button type="submit" className='col-sm-3 btn btn-outline-danger'>Search</button>
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
                        <span>{el.evaluation.starWidth}%</span></p>
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