
import { Link ,NavLink,useNavigate} from "react-router-dom";
import  "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faMotorcycle,faRightFromBracket ,faSignInAlt } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

  //logOut code
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem('isLoggedIn');
  navigate('/l');
};

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//logOut code end



  return (
    <nav className="navbar  text-white shadow-md px-6 py-4 " 
    
  
    >
     
     {
      isLoggedIn ? 
     (
     <>
      <div className="text-2xl font-bold "
      >
        
        <div
        style={{paddingBottom:"20px"}}
      >
        <Link className="logo" to="/">Bike<span style={{color:"green"}}><FontAwesomeIcon
        style={{fontSize:"30px"}} icon={faMotorcycle}/>Rental</span></Link>
        </div>
      </div>
      <ul
      className="nav-element"
       >
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/bookinghistory" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} >BookingHistroy</NavLink>
        </li>
        
        <li>
          <NavLink to="/book-bike" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >BookBike</NavLink>
        </li>
        
      </ul>

      
      { isLoggedIn &&
      
        <li className="nav-item text-center ">
  <button className="btn  "
  style={{
    color:"green",
    marginBottom:"18px",
    fontWeight:"500",
    fontSize:"25px",
    marginRight:"30px"

  }} 
  onClick={handleLogout}>
    <FontAwesomeIcon icon={faRightFromBracket} />
  
  </button>
</li>

}


     </> 
     )
     :
     (
      <
      
      >

      <div>
        <Link className="logo" >Bike<span style={{color:"green"}}><FontAwesomeIcon
        style={{fontSize:"30px"}}
         icon={faMotorcycle} />Rental</span></Link>
        </div>

      <ul style={{paddingRight:"10px",
        textDecoration :"none",
        
        
      }}>
       
        <li>
          <Link style={{color:"green", fontWeight:"bold"}} to="/Register" className="hover:text-gray-200">Register</Link>
        </li>

    
        <li>
          <Link style={{color:"green", fontWeight:"bold"}} to="/Login" className="hover:text-gray-200"> <FontAwesomeIcon icon={faSignInAlt} /> </Link>
        </li>

      </ul>
      
      </>)
}
       
    </nav>
  );
};

export default Navbar;





