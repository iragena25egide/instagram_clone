import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaBookBookmark, FaRegBookmark } from "react-icons/fa6";
import { MdEmojiEmotions, MdOutlineEmojiEmotions } from "react-icons/md";
import { useEffect,useState } from "react";
import {ref,listAll,getDownloadURL} from 'firebase/storage';
import { storage } from "./firebase";

function Center(){


    const [imageList,setimageList]=useState([]);

    const imageListRef=ref(storage,"posts/");

    useEffect(()=>{
        listAll(imageListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setimageList((prev)=>[...prev,url])
                })
            })
        })
    },[])
    return(
        <div className="center-container">
            <div className="status-container">
                <div className="status">
                    <img src="diana.jpg" width={50} height={50} style={{borderRadius:'40px',border:'3px solid #E0479E'}}/>
                    <small>Diana_k</small>
                </div>
                <div className="status">
                <img src="edmond.jpg" width={50} height={50} style={{borderRadius:'40px',border:'3px solid #E0479E'}}/>
                <small>Edmond</small>
                </div>
                <div className="status">
                <img src="imena.jpg" width={50} height={50} style={{borderRadius:'40px',border:'3px solid #E0479E'}}/>
                <small>Imena</small>
                </div>
                <div className="status">
                <img src="pazzo.jpg" width={50} height={50} style={{borderRadius:'40px',border:'3px solid #E0479E'}}/>
                <small>Khalipha</small>
                </div>
                <div className="status">
                <img src="bruno.jpg" width={50} height={50} style={{borderRadius:'40px',border:'3px solid #E0479E'}}/>
                <small>Bruno</small>
                </div>
                <div className="status">
                <img src="bayern.jpeg" width={50} height={50} style={{borderRadius:'40px',border:'3px solid #E0479E'}}/>
                <small>FC BAYERN</small>
                </div>
                <div className="status">
                <img src="kid.jpg" width={50} height={50} style={{borderRadius:'40px',border:'3px solid #E0479E'}}/>
                <small>Kid</small>
                </div>
                <div className="status">
                <img src="instagram.png" width={50} height={50} style={{borderRadius:'40px',border:'3px solid #E0479E'}} title="Add Status"/>
                {/* <small>Diana_k</small> */}
                </div>
            </div>

            <div className="post-container">
                {imageList.map((url)=>{
                
                return     <div className="post-content">
                    <div className="post-top">
                    <div className="post-user">
                        <img src="egide.jpg" width={50} height={50} style={{borderRadius:'50px'}}/>
                        <small>Egide_kid</small>
                        <p>.8h</p>
                    </div>
                    <IoEllipsisHorizontalSharp cursor={'pointer'}/>
                    </div>
                    <div className="post-image">
                        <img src={url}  style={{borderRadius:'10px',border:'1px solid #ccc'}}/>
                    </div>
                    <div className="post-option">
                    <div className="left-option">
                    <FaRegHeart size={20} cursor={'pointer'} id="like"/>
                    <FaRegComment size={20} cursor={'pointer'} id="comment"/>
                    <FiSend size={20} cursor={'pointer'} id="send"/>
                    </div>
                    <FaRegBookmark size={20} cursor={'pointer'}/>
                    </div>
                    <div className="post-liked">
                        <img src="diana.jpg" width={30} height={30} style={{borderRadius:'50px'}} />
                    <small>liked by Diana_k and 120 others.</small>
                    </div>
                    <div className="post-add-comment">
                    <input type="text" placeholder="Add a comment" />
                    <MdEmojiEmotions cursor={'pointer'}/>
                    </div>
                </div>
                })}
               
            </div>
        </div>
    )
}

export default Center