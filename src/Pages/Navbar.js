
import { Link, NavLink} from "react-router-dom";




const Navbar = () => {
      

       return(
              <nav className="navbar">
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="/about">About</NavLink>
                   <NavLink to="/contact">Contact</NavLink>
                   <NavLink to="/blog">Blog</NavLink>
                            
              </nav>
       )



}

export default Navbar













// HTML Way: 

// const Navbar = () => {
//      let navStyle = {
//         backgroundColor: "black",
//         color: "white",
//         padding: "10px",
//         display: "flex",
//         justifyContent: "space-around"

//      }
//         let links = {
//             textDecoration: "none",
//             color: "white"
//         }

//     return (
//         <nav style={navStyle}>
//                 <a style={links}  href="/">Home</a>
//                 <a style={links} href="/about">About</a>
//                 <a  style={links} href="/contact">Contact</a>
//                 <a style={links} href="/blog">Blog</a>
//         </nav>
//     )
// }

// export default Navbar