import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const[uploadVideo,setUploadVideo] = useState({
    caption:"",imageURL:"",youtubeLink:""
  })
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
    }
    const handleUpload = async () =>{
      //store upload video in http://localhost:3000/video
      const {caption,imageURL,youtubeLink} = uploadVideo
      if(caption && imageURL &&  youtubeLink){
        //proceed to store video from http://localhost:5173/home to http://localhost:3000/video
      const result = await uploadVideoAPI(uploadVideo)
      // console.log(result);
      if(result.status>=200 && result.status<300){
        alert(`Video '${result.data.caption}' uploaded successfully!!!`)
        setUploadVideoResponse(result.data)
        handleClose()
      }else{
        alert("API Call failed...Please try again after sometime!!!")
      }
      }else{
        alert("Please fill the form competely!!!")
      }
    }
    const handleShow = () => setShow(true);
    // console.log(uploadVideo);
    const getYoutubeEmbedLink = (link)=>{
      if(link.includes("v=")){
        let videoId = link.split("v=")[1].slice(0,11)
        setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      }else{
        setUploadVideo({...uploadVideo,youtubeLink:""})
        alert("Input proper youtube link!!!")
      }

    }
  return (
  <>
  <div className='d-flex'>
    <h5>Upload A Video</h5>
    <button onClick={handleShow} className='btn bg-secondary ms-2 rounded-cicle'><i className="fa-solid fa-plus"></i> </button>
  </div >
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please Fill the folloing details!!!</p>
      <div className=' border rounded border-secondary p-3 '>
      <FloatingLabel
        controlId="floatingInputCaption"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputImage"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image URL" />
      </FloatingLabel>


      <FloatingLabel
        controlId="floatingInputYoutube"
        label="Youtube Video Link"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube Video Link" />
      </FloatingLabel>
     
      
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
  
  
  </>
  )
}

export default Add