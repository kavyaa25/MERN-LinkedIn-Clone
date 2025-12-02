import React, { useState } from "react";
import { getToken } from "../../utils/auth";
import "./CreatePost.css";

function CreatePost({ addPost }) {
  const [postText, setPostText] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    setLoading(true); setErr("");
    const formData = new FormData();
    formData.append("postText", postText);
    if (img) formData.append("image", img);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
        headers: { Authorization: "Bearer " + getToken() }
      });
      const post = await res.json();
      if (!res.ok) throw Error(post.message || "Can't post");
      addPost(post);
      setPostText(""); setImg(null);
    } catch (e) {
      setErr(e.message);
    }
    setLoading(false);
  };

  return (
    <form className="create-post-form" onSubmit={handlePost}>
      <textarea
        placeholder="Start a post..."
        value={postText}
        onChange={e => setPostText(e.target.value)}
        rows="3"
        maxLength={500}
        required
      />
      <div className="create-post-tools">
        <label>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={e => setImg(e.target.files[0])}
          />
          <span className="upload-btn">
            <svg width="19" height="19" style={{marginRight:"6px",verticalAlign:"middle"}} viewBox="0 0 20 20"><path fill="#0073b1" d="M16.8 6.61002L8.81 15.02C8.58 15.26 8.29 15.4 7.97 15.4C7.66 15.4 7.37 15.26 7.14 15.02L3.2 10.82C2.82 10.42 2.82 9.81 3.2 9.41C3.58 9.01 4.18 9.01 4.56 9.41L8.37 13.47L15.44 6.56002C15.82 6.16002 16.42 6.16002 16.8 6.61002Z"></path></svg>
            Image
          </span>
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
      {img && (
        <div className="preview">
          <img src={URL.createObjectURL(img)} alt="preview" height={54} />
        </div>
      )}
      {err && <div className="error">{err}</div>}
    </form>
  );
}

export default CreatePost;