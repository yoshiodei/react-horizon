import office3 from './../images/office3.jpg';
import office2 from './../images/office2.jpg';
import office1 from './../images/office1.jpg';
import office5 from './../images/office5.jpg';


const Plan = ({title}) => {
    return ( 
    <div className="row">
           <h4 className="text-center">{title.toUpperCase()}</h4>
           <div className="col-md-3">
               <div className="thumbnail">
      <img src={office1}  className="office" />
      <div className="caption">
        <h3>VIRTUAL OFFICES</h3>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odio qui nesciunt, praesentium quae aliquam placeat fugit.</p>
                 </div>
                 </div>
           </div>
           <div className="col-md-3">
               <div className="thumbnail">
      <img src={office2}  className="office" />
      <div className="caption">
        <h3>CUSTOMIZED OFFICES</h3>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odio qui consectetur adipisicing.</p>
                 </div>
                 </div>
           </div>
           <div className="col-md-3">
           <div className="thumbnail">
      <img src={office3}  className="office" />
      <div className="caption">
        <h3>SERVICED OFFICES</h3>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odio qui nesciunt, praesentium quae aliquam placeat fugit.</p>
                 </div>
                 </div></div>
           <div className="col-md-3">
               <div className="thumbnail">
      <img src={office5}  className="office" />
      <div className="caption">
        <h3>MEETING OFFICES</h3>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odio qui nesciunt, praesentium quae ali adipisicing elit. Quibusdam odioq.</p>
                 </div>
                 </div>    
           </div>
       </div> );
}
 
export default Plan;