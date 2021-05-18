import { useState, useEffect } from 'react'

function Jiji(props) {
    const [data, setData] = useState([])

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
        // let ali = props.classifyData(sampleData)
        // setData(ali)
    }, [])

    return (
      <div>
            <section className="resultsSection container mb-4 pb-4" id="Jiji">
            <div className='top'>
                <img src="./Jiji_logo.png" alt="Jiji Logo"/>
                <div className="controls row mx-auto my-2 justify-content-between">
                    <div className='col-sm-5 row'>
                        <input type="text" className='col form-control' placeholder="Search In Aliexpress..." />
                        <button type="submit" className='col-sm-3 btn btn-outline-success'>Search</button>
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