const Home = () => {
    return ( 
        <>
            <section className="home">
                <div className="content">
                    <h3>Biggest Clothe Sale
                        <br/> <span>Up To 50% Off</span>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, totam sed maxime animi facilis!</p>
                    <button id="shopnow">Shop Now</button>
                </div>
                <div className="img">
                    <img src="./b2.png" alt=""/>
                </div>
            </section>


            <div className="container" id="top-cards">
                <div className="row">
                    <div className="col-md-5 py-3 py-md-0">
                        <div className="card" style={{backgroundColor: "#a9a9a926"}}>
                            <img src="topcard1.png" alt=""/>
                            <div className="card-img-overlay">
                                <h5 className="card-titel">Smart Watch</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ratione!</p>
                                <p><strong>$200.30 <strike>$250.10</strike></strong></p>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 py-3 py-md-0">
                        <div className="card" style={{backgroundCcolor: "#a9a9a926"}}>
                            <img src="topcard2.png" alt=""/>
                            <div className="card-img-overlay">
                                <h5 className="card-titel">Nike Shoes</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ratione!</p>
                                <p><strong>$150.10 <strike>$200.10</strike></strong></p>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card" style={{backgroundColor: "#a9a9a926"}}>
                            <img src="topcard3.png" alt=""/>
                            <div className="card-img-overlay">
                                <h5 className="card-titel">Bag</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <p><strong>$50.10 <strike>$60</strike></strong></p>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="banner">
                <div className="content">
                    <h1>Get Up To 50% Off</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, animi?</p>
                    <div id="bannerbtn"><button>SHOP NOW</button></div>
                </div>
            </div>


            <div className="container" id="product-cards">
                <h1 className="text-center">PRODUCT</h1>
                <div className="row" style={{marginTop: "30px"}}>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="p13.png" alt=""/>
                            <div className="card-body">
                                <h3>Men T-Shirt</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$32.60 <strike>$50</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="p14.png" alt=""/>
                            <div className="card-body">
                                <h3>Purple Heel</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$56.50 <strike>$60</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="p15.png" alt=""/>
                            <div className="card-body">
                                 <h3>Men Shoes</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$150.5 <strike>$160.50</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="p16.png" alt=""/>
                            <div className="card-body">
                                <h3>Men Jacket</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$50.60 <strike>$56.90</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "30px"}}>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="p17.png" alt=""/>
                            <div className="card-body">
                                <h3>Blue T-Shirt</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$5.60 <strike>$10.50</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="p18.png" alt=""/>
                            <div className="card-body">
                                <h3>Girls Sandal</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$2.30 <strike>$5</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="p19.png" alt=""/>
                            <div className="card-body">
                                <h3>Men Jacket</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$3.2 <strike>$5.60</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 py-3 py-md-0">
                        <div className="card">
                            <img src="p20.png" alt=""/>
                            <div className="card-body">
                                <h3>Men T-SHirt</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="star">
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                </div>
                                <h5>$10.50 <strike>$15.60</strike> <span><i className="fa-solid fa-cart-shopping"></i></span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="clothe.html" id="viewmorebtn">View More</a>
            </div>



            <div className="container" style={{marginTop: "100px"}}>
                <hr/>
            </div>
            <div className="container">
                <h3 style={{fontWeight: "bold;"}}>PRODUCT.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero eius ipsam incidunt illum totam nostrum quidem sit cumque fugit. Accusamus rem praesentium labore tempore ullam porro quaerat fugiat cum ipsum, sint perferendis voluptate ad, quod reiciendis officia! In voluptate quae expedita sunt eum placeat alias soluta. Rem commodi, impedit error doloribus ratione at provident beatae, aut doloremque sunt possimus voluptas recusandae nam aliquid eos quia minus harum repellat quae eveniet laborum dolore esse voluptate sed. Voluptate ullam dolor sapiente neque labore hic nam odio qui consectetur porro minima nesciunt suscipit vitae obcaecati reiciendis itaque ipsum unde, debitis nemo soluta!</p>

                <hr/>
            </div>
    



            <div className="container" id="offer">
                <div className="row">
                    <div className="col-md-4 py-3 py-md-0">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <h5>Free Shipping</h5>
                        <p>On order over $100</p>
                    </div>
                    <div className="col-md-4 py-3 py-md-0">
                        <i className="fa-solid fa-truck"></i>
                        <h5>Fast Delivery</h5>
                        <p>World wide</p>
                    </div>
                    <div className="col-md-4 py-3 py-md-0">
                        <i className="fa-solid fa-thumbs-up"></i>
                        <h5>Big Choice</h5>
                        <p>Of product</p>
                    </div>
                </div>
            </div>


        </>
     );
}
 
export default Home;