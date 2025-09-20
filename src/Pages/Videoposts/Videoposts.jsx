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
      <div style={{ textAlign: "center", padding: "80px", color: "#aaa" }}>
        <h2>Loading video...</h2>
      </div>
    );

  if (!seevideo)
    return (
      <div style={{ textAlign: "center", padding: "80px", color: "#e74c3c" }}>
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
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* Video Section */}
        <div
          style={{
            flex: "2 1 600px",
            background: "#000",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <video
            src={seevideo.VidUrl}
            controls
            autoPlay
            loop
            muted={false}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Info Section */}
        <div
          style={{
            flex: "1 1 350px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "30px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 6px 25px rgba(0,0,0,0.5)",
          }}
        >
          <h1
            style={{
              fontSize: "30px",
              marginBottom: "15px",
              color: "#00ffcc",
              fontWeight: "bold",
            }}
          >
            {seevideo.title}
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#eee" }}>
            {seevideo.content}
          </p>

          {/* Share Buttons */}
          <div style={{ marginTop: "25px" }}>
            <span style={{ fontWeight: "600", color: "#ccc" }}>Share:</span>
            <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <WhatsappShareButton
                url={shareUrl}
                title={`${shareText} - ${content}`}
              >
                <WhatsappIcon size={42} round />
              </WhatsappShareButton>
              <FacebookShareButton
                url={shareUrl}
                quote={`${shareText} - ${content}`}
              >
                <FacebookIcon size={42} round />
              </FacebookShareButton>
            </div>
          </div>

          {/* Extra Info */}
          <div
            style={{
              marginTop: "35px",
              background: "rgba(0,0,0,0.35)",
              borderRadius: "14px",
              padding: "18px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p style={{ margin: "0 0 10px 0", fontSize: "15px", color: "#bbb" }}>
              <strong>Release Date:</strong> {seevideo.date}
            </p>
            <p style={{ margin: 0, fontSize: "15px", color: "#bbb" }}>
              <strong>Price:</strong> {seevideo.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;

