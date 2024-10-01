import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import {Link} from 'react-router-dom';

function Leftmenu(){
    return(
        <div className="left-menu-container">
            <div className="top-container">
                <img src="instagram.png" width={20} height={20} />
                <h4>Instagram</h4>
            </div>
            <div className="bottom-container">
                <div className="item">
                    <Link to={'/instagram'}>
                    <GoHomeFill size={26}/>
                    </Link>
                    
                    <small>Home</small>
                </div>
                <div className="item">
                    <FaSearch size={26}/>
                    <small>Search</small>
                </div>
                <div className="item">
                    <Link to={'/videos'}>
                    <MdOutlineExplore size={26}/>
                    </Link>
                
                <small>Explore</small>
                </div>
                <div className="item">
                <RiMessengerLine size={26}/>
                <small>Messages</small>
                </div>
                <div className="item">
                    <FaRegHeart size={26}/>
                    <small>Notification</small>
                </div>
                <div className="item">
                   <Link to={'/create'}>
                   <MdOutlineAddBox size={26}/></Link> 
                    <small>Create</small>
                </div>
                <div className="item">
                    <img src="egide.jpg" width={30} height={30} style={{borderRadius:'50px'}}/>
                    <small>Profile</small>
                </div>
                <div className="item">
                    <IoIosMenu size={26}/>
                    <small>More</small>
                </div>
            </div>
        </div>
    )
}


export default Leftmenu