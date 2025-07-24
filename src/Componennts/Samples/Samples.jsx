import React, { useEffect, useState } from 'react';
import './Sample.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { BarLoader, ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';


const Samples = () => {
    // Increment count on button click or page load — here's example for page load:
  useEffect(() => {
    const incrementCount = async () => {
      try {
        const res = await axios.post('https://zozacbackend.onrender.com/api/pageview');
        
      } catch (error) {
        console.error('Failed to increment page views', error);
      }
    };

    incrementCount();
  }, []);

const [imagepost, setimagepost] = useState([])
const [videopost, setvideopost] = useState([])
const [loading, setloading] = useState(true)
useEffect(()=>{
  const fetchpictures = async ()=>{
  try {
    setloading(true)
     
    const allpictures = await axios.get("https://zozacbackend.onrender.com/admin/picture/post")
    setimagepost(allpictures.data)
   
  } catch (error) {
    toast.error(error)
  }finally{
    setloading(false)
  }
      }
       const fetchvideo = async ()=>{
  try {
    setloading(true)
     
    const allvideos = await axios.get("https://zozacbackend.onrender.com/admin/video/post")
    setvideopost(allvideos.data)
  
  } catch (error) {
    toast.error(error)
  }finally{
    setloading(false)
  }
      }
      fetchvideo()
fetchpictures()


},[])


  return (
    <>
    
    <section id="samples" className="samples">
      <div className="container">
        <div className="section-header">
          <h2>Picture Post</h2>
          <p>We post pictures of our project every day. we have posted {imagepost.length} posts so far</p>
        </div>

        <div className="samples-grid">
          {loading && <BarLoader/>}
          {imagepost.map((item, index) => (
            <div className="sample-card" key={index}>
              <div className="sample-image">
                <img src={item.ImageUrl} alt={item.title} />
              </div>
              <div className="sample-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <Link to={`/picturepost/${item._id}`}>
                <a  className="btn-text">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    <section id="samples" className="samples">
      <div className="container">
        <div className="section-header">
          <h2>Video post</h2>
          <p>We post videos of our works on a daily</p>
        </div>

        <div className="samples-grid">
              {loading && <BarLoader/>}
          {videopost.map((item, index) => (
            <div className="sample-card" key={index}>
              <div className="">
<video
  src={item.VidUrl}
  controls
  preload="metadata"
  style={{
    width: '100%',
    borderRadius: '10px',
    backgroundColor: '#000 ',
    outline: 'none',
  }}
  onContextMenu={(e) => e.preventDefault()} // disables right-click menu
></video>


              </div>
              <div className="sample-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <Link to={`/posts/${item._id}`}>
                <a  className="btn-text">
                 Read More <i className="fas fa-arrow-right"></i>
                </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Samples;
