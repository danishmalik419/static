import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const Post = (props) => {
  const { data, bgColor, color } = props;
  return (
    <>
      <div className="post_container" style={{
      backgroundColor: `${bgColor}`,
      color:`${color}`
     }
     }>
        <div className="person">
            <div className="author">
                <div className="img">
                    <img src={data.pImg} alt="" />
                </div>
                <div className="text">
                    <h3>{data.userName}</h3>
                    <p>{data.title}</p>
                </div>
            </div>
            <div className="dot">
                <BsThreeDotsVertical/>
            </div>
        </div>
      
      <p>
       {data.description}
      </p>

        <div className="post_img">
            <img src={data.mImg} alt="" />
        </div>
      <div className="like_comment">
        <div className="items">
            <BiSolidLike/> {data.like} {" "}k
        </div>
        <div className="items">
            <FaCommentDots/> {data.comment} {" "}k
        </div>
        <div className="items">
            <FaShare/> {data.share} {" "}k
        </div>
      </div>
      </div>
    </>
  )
}

export default Post
