const About = () => {
    return ( 
        <>
           <div className="container" id="about">
    <h1>ABOUT US</h1>
    <div className="row" style={{marginTop: "50px;"}}>
        <div className="col-md-6 py-3 py-md-0">
            <div className="card">
                <img src="./image/about.png" alt=""/>
            </div>
        </div>
        <div className="col-md-6 py-3 py-md-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vitae numquam aspernatur repellendus autem sint beatae, facilis quas deserunt iure natus minus ab deleniti eveniet neque quasi ullam id in alias consectetur quia nesciunt. Exercitationem vitae atque commodi architecto tenetur! Fugit necessitatibus nesciunt, eligendi tempora reprehenderit suscipit doloribus animi mollitia maiores? Numquam, est laborum dicta aperiam nobis deserunt libero non dolorem cum dolorum distinctio commodi iure, tenetur animi? Nam similique culpa consequuntur itaque quasi ipsa placeat ea perferendis est quo, ut eaque quis dolorem, aliquam iste reprehenderit provident neque magnam voluptatibus. Eaque provident omnis reiciendis ducimus, magni qui voluptatem quibusdam.</p>
        </div>
    </div>
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
 
export default About;