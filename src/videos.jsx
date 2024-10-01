import { useState,useEffect } from "react"
import { storage } from "./firebase";
import {ref,uploadBytes,listAll,getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid'
import { useNavigate } from "react-router-dom";



function Videos(){

    const navigate=useNavigate();

    

    const [videoForm,setVideoForm]=useState(null);
    const [videoList,setVideolist]=useState([]);
    const [videopost,setVideo]=useState(null);

    const videoListRef=ref(storage,"videos/");
    const uploadVideo=()=>{

        if(videopost == null) return;

        const VideoRef= ref(storage,`videos/${uploadVideo.name + v4()}`);

        uploadBytes(VideoRef,videopost).then(()=>{
            alert('Videos Uploaded')
            setVideoForm(false);
            navigate("/videos");
        })
    }

    useEffect(()=>{
        listAll(videoListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setVideolist((prev)=>[...prev,url])
                })
            })
        })
    },[])
    return(
        <div className="video-container">
            <button onClick={()=>{setVideoForm(true)}}>post new videos</button>
           {videoForm && (<div className="video-form">
                <input type="file" onChange={(e)=>{setVideo(e.target.files[0])}}/>
                <button onClick={uploadVideo}>Upload Video</button>
            </div>)} 
            <div className="posted-videos">
                {videoList.map((url)=>{
                    return <div className="videos">
                  
                    <video controls width={200} height={250} style={{borderRadius:'10px'}}>
                      <source src={url}/>
                    </video>
                  </div>
                })}
                
               

            </div>
        </div>
    )
}

export default Videos