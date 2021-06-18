import ghana from './../images/ghana.JPG';
import nigeria from './../images/nigeria.PNG';
import kenya from './../images/kenya.JPG';
import horizon from './../images/horizon.PNG';



const Navbar = () => {
    return ( 
        <div className="row">
            <nav>  
               <div className="col-md-3">
                   <img src={horizon} className="img-responsive brand" /> 
               </div>
               <div className="col-md-6 flag-cont">
                   <img src={ghana} className="img-responsive flag" />
                   <img src={nigeria} className="img-responsive flag" />
                   <img src={kenya} className="img-responsive flag" />
               </div>
               <div className="col-md-3">
                   <a href="#" className="text-right">About Us</a>
               </div>
           </nav>         
       </div>
     );
}
 
export default Navbar;