import React, { useEffect, useState } from "react";
import "./picture.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const Picturepost = () => {
  const { id } = useParams();
  const [picture, setpicture] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchPicture = async () => {
      try {
        setloading(true);
        const picturein = await axios.get(
          `https://zozacbackend.onrender.com/admin/picture/post/${id}`
        );
        setpicture(picturein.data);
      } catch (error) {
        toast.error(error.message || "Failed to fetch picture");
      } finally {
        setloading(false);
      }
    };
    fetchPicture();
  }, [id]);

  const shareUrl = picture._id
    ? `https://zozacommunity.vercel.app/picturepost/${picture._id}`
    : "";

  const shareText = picture.title || "Check this post from PEFSCOM!";
  const content = picture.content || "";

  return (
    <div className="owefui">
      {loading && <ClipLoader />}
      {!loading && picture && (
        <div className="banana">
          {/* Badge */}
          <div className="pineapple">zozac</div>

          {/* Image */}
          <div className="kiwi">
            <div className="mango">
              <img src={picture.ImageUrl} alt={picture.title || "Post"} />
            </div>
          </div>

          {/* Content */}
          <div className="papaya">
            <div className="grape">{picture.title}</div>
            <h2 className="orange">{picture.date}</h2>
            <p className="apple">{picture.content}</p>

            {/* Share Buttons */}
            {shareUrl && (
              <div className="pear share-bar">
                <span className="share-label">Share:</span>
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
            )}

            {/* Tags */}
            <div className="pear">
              <span className="peach">innovating</span>
              <span className="plum">lives</span>
              <span className="cherry">at ZOZAC</span>
            </div>

            {/* Price + Button */}
            <div className="watermelon">
              <div className="lemon">
                <span className="newPrice">{picture.price} frs</span>
              </div>
              <button className="blueberry">
                <span>ZOZAC COMMUNITY</span>
                <svg
                  className="raspberry"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </button>
            </div>

            {/* Rating */}
            <div className="coconut">
              <div className="blackberry">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    stroke="#FFD700"
                    strokeWidth="0.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className="strawberry">245 Reviews</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Picturepost;
