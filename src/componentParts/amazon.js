function Amazon() {

    return (
      <div>
           <section className="resultsSection container mt-4" id="Amazon">
            <div className='top'>
                <img src="./Amazon-logo-full.png" className='darken' alt='Amazon Logo' style={{maxWidth:'400px'}} />
                <div className="controls row mx-auto my-2 justify-content-between">
                    <div className='col-sm-5 row'>
                        <input type="text" className='col form-control' placeholder="Search In Amazon..." />
                        <button type="submit" className='col-sm-3 btn btn-outline-danger'>Search</button>
                    </div>
                </div>
            </div>
            <div className="">
            <div className="row productCard">
                <img className="mr-3 align-self-center col-md-3" src="./logo192.png" alt="Generic placeholder image"/>
                <div className="align-self-center media-body col">
                    <h5 className="mt-0 card-title">Product Name</h5>
                    <p className="card-text">#2,300</p>
                    <a href="#" className="btn btn-primary col-sm-3">View Product</a>
                </div>
            </div>
            <div className="row productCard">
                <img className="mr-3 align-self-center col-md-3 " src="./logo192.png" alt="Generic placeholder image"/>
                <div className="align-self-center media-body col">
                    <h5 className="mt-0">Product Name</h5>
                    <p className="card-text">#2,300</p>
                    <a href="#" className="btn btn-primary col-sm-3">View Product</a>
                </div>
            </div>
            <div className="row productCard">
                <img className="mr-3 align-self-center col-md-3" src="./logo192.png" alt="Generic placeholder image"/>
                <div className="align-self-center media-body col">
                    <h5 className="mt-0">Product Name</h5>
                    <p className="card-text">#2,300</p>
                    <a href="#" className="btn btn-primary col-sm-3">View Product</a>
                </div>
            </div>
            </div>
            <div className='sectionNavigation row mt-3 justify-content-center'>
                <button className='btn btn-outline-warning row col-md-2 p-0 py-2'>
                    <span className="col" ><img src='./right-arrow.png' style={{transform:'rotate(180deg)', maxWidth:'20px'}}/></span>
                    <span className='col'>Previous Page</span>
                </button>
                <div className='col-sm-1'></div>
                <button className='btn btn-outline-warning row col-md-2 p-0 ml-2 py-2'>
                    <span className="col" ><img src='./right-arrow.png' style={{maxWidth:'20px'}}/></span>
                    <span className='col'>Next Page</span>
                </button>
              
            </div>
           </section>
      </div>
    );
  }
  
  export default Amazon;