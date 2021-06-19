const Carousel = () => {
    return ( <div className="row carousel">
    <div className="col-md-12">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

<ol className="carousel-indicators">
<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
<li data-target="#carousel-example-generic" data-slide-to="1"></li>
<li data-target="#carousel-example-generic" data-slide-to="2"></li>
</ol>


<div className="carousel-inner" role="listbox">
<div className="item active">
<img src="#" className=" image img3" />
</div>
<div className="item">
<img src="#" className=" image img2" /> 
</div>
<div className="item">
<img src="#" className=" image img1" /> 
</div>
</div>


<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
<span className="sr-only">Previous</span>
</a>
<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
<span className="sr-only">Next</span>
</a>
</div>    
    </div>        
</div> );
}
 
export default Carousel;