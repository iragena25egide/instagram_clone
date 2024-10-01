import { useState } from "react"
import {storage} from './firebase'
import {ref,uploadBytes} from 'firebase/storage';
import { useNavigate } from "react-router-dom";
import {v4} from 'uuid';


function CreatePost(){

    const navigate=useNavigate();
    const [imageUpload,setimageUpload]=useState(null);
    const [loading,setLoading]=useState(false);

    const uploadImage=()=>{
        if(imageUpload == null) return;

        const imageRef=ref(storage,`posts/${uploadImage.name + v4()}}}`);

        uploadBytes(imageRef,imageUpload).then(()=>{
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                alert('image uploaded')
                navigate("/instagram");
            }, 3000);
           
        })
    }
    return(
        <div className="create-post">
            <div className="post-form">
                <small>Create Post</small>
                <input type="file" onChange={(e)=>{ setimageUpload(e.target.files[0])}}/>
                <button onClick={uploadImage}>Upload Image</button>
                {loading && (<div className="loading"></div>)}
            </div>
        </div>
    )
}

export default CreatePost