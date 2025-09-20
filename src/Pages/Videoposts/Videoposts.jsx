// import React, { useEffect, useState } from 'react';
// import './Video.css';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import {
//   FacebookShareButton,
//   WhatsappShareButton,
//   FacebookIcon,
//   WhatsappIcon,
// } from 'react-share';

// const VideoHero = () => {
//   const { id } = useParams();
//   const [seevideo, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://zozacbackend.onrender.com/admin/video/post/${id}`);
//         setVideo(response.data);
//       } catch (error) {
//         toast.error('Failed to load video');
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchVideo();
//   }, [id]);

//   if (loading) return <p>Loading video...</p>;
//   if (!seevideo) return <p>Video not found.</p>;


//    const shareUrl = `https://zozacommunity.vercel.app/picturepost/${id}`;
//   const shareText = seevideo.title || "Check this post from PEFSCOM!";
//   const content = seevideo.content;
//   return (
//     <div className="kiwifruit">
//       <div className="lychee">
//         <video
//           src={seevideo.VidUrl}
//           controls
//           autoPlay
//           loop
//           muted={false}
//           className="mulberry"
//         >
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div className="rambutan">
//         <div className="jabuticaba">
//           <h1>{seevideo.title}</h1>
//           <p>{seevideo.content}</p>
//           <span style={{ fontWeight: 'bold', color: '#222' }}>Share:</span>
//           <WhatsappShareButton url={shareUrl} title={`${shareText} - ${content}`}>
//             <WhatsappIcon size={40} round />
//           </WhatsappShareButton>

//           <FacebookShareButton url={shareUrl} quote={`${shareText} - ${content}`}>
//             <FacebookIcon size={40} round />
//           </FacebookShareButton>
    

//         </div>

//         <div className="santol">
//           <h1>{seevideo.date}</h1>
//           <p>{seevideo.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoHero;
















import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const VideoHero = () => {
  const { id } = useParams();
  const [seevideo, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://zozacbackend.onrender.com/admin/video/post/${id}`
        );
        setVideo(response.data);
      } catch (error) {
        toast.error("Failed to load video");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchVideo();
  }, [id]);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "#666" }}>
        <h2>Loading video...</h2>
      </div>
    );

  if (!seevideo)
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "#e74c3c" }}>
        <h2>Video not found.</h2>
      </div>
    );

  const shareUrl = `https://zozacommunity.vercel.app/picturepost/${id}`;
  const shareText = seevideo.title || "Check this video from PEFSCOM!";
  const content = seevideo.content;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "white",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Video Section */}
        <div
          style={{
            flex: "2",
            background: "#000",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
          }}
        >
          <video
            src={seevideo.VidUrl}
            controls
            autoPlay
            loop
            muted={false}
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Info Section */}
        <div
          style={{
            flex: "1",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "16px",
            padding: "20px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              marginBottom: "10px",
              color: "#00ffcc",
            }}
          >
            {seevideo.title}
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            {seevideo.content}
          </p>

          {/* Share Buttons */}
          <div style={{ marginTop: "20px" }}>
            <span style={{ fontWeight: "bold", color: "#ccc" }}>Share: </span>
            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              <WhatsappShareButton
                url={shareUrl}
                title={`${shareText} - ${content}`}
              >
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
              <FacebookShareButton
                url={shareUrl}
                quote={`${shareText} - ${content}`}
              >
                <FacebookIcon size={40} round />
              </FacebookShareButton>
            </div>
          </div>

          {/* Extra Info */}
          <div
            style={{
              marginTop: "30px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: "12px",
              padding: "15px",
            }}
          >
            <p style={{ margin: "0", fontSize: "14px", color: "#bbb" }}>
              <strong>Release Date:</strong> {seevideo.date}
            </p>
            <p style={{ margin: "0", fontSize: "14px", color: "#bbb" }}>
              <strong>Price:</strong> {seevideo.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;


