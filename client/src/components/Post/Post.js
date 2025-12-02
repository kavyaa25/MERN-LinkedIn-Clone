import React, { useContext, useState } from "react";
import { AuthContext } from "../../App";
import { getToken } from "../../utils/auth";
import "./Post.css";

function Post({ post, isOwner, updatePost, removePost }) {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(post.postText);
  const [err, setErr] = useState("");
  const [likeLoading, setLikeLoading] = useState(false);

  const handleLike = async () => {
    setLikeLoading(true);
    try {
      const res = await fetch(`/api/posts/${post._id}/like`, {
        method: "PATCH",
        headers: { Authorization: "Bearer " + getToken() }
      });
      const updated = await res.json();
      if (res.ok) updatePost(post._id, updated);
    } catch {}
    setLikeLoading(false);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const res = await fetch(`/api/posts/${post._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getToken()
        },
        body: JSON.stringify({ postText: newText })
      });
      const updated = await res.json();
      if (res.ok) {
        updatePost(post._id, updated);
        setEditing(false);
      } else throw Error(updated.message);
    } catch (e) {
      setErr(e.message);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete post?")) return;
    try {
      const res = await fetch(`/api/posts/${post._id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + getToken() }
      });
      if (res.ok) removePost(post._id);
    } catch {}
  };

  return (
    <div className="ln-post-card">
      <div className="ln-post-header">
        <div className="ln-post-avatar">{post.userName[0]}</div>
        <div>
          <b className="ln-post-name">{post.userName}</b>
          <span className="ln-post-time">
            • {new Date(post.createdAt).toLocaleString()}
          </span>
        </div>
      </div>
      {editing ? (
        <form className="edit-form" onSubmit={handleEdit}>
          <textarea value={newText} onChange={e => setNewText(e.target.value)} rows="2" />
          <button type="submit">Save</button>
          <button type="button" style={{marginLeft:8}} onClick={() => setEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div className="ln-post-body">
            <p className="ln-post-text">{post.postText}</p>
            {post.imageUrl && (
              <img src={post.imageUrl} alt="attached" className="ln-post-img" />
            )}
          </div>
          <div className="ln-post-actions">
            <button
              className={post.likes.includes(user._id) ? "liked" : ""}
              onClick={handleLike}
              disabled={likeLoading}
              title="Like/Unlike"
            >
              <svg width="18" height="18" style={{marginBottom:'-3px',marginRight:"2px"}} viewBox="0 0 24 24"><path fill={post.likes.includes(user._id) ? "#e13c5b":"#555"} d="M12.1 8.64l-.1.09-.11-.09C10.14 7.16 7.21 7.41 5.5 9.13c-1.7 1.73-1.65 4.51.13 6.22l6.6 6.23c.52.51 1.36.51 1.88 0l6.6-6.23c1.78-1.71 1.83-4.49.13-6.22-1.71-1.72-4.64-1.96-6.59.49z"></path></svg>
              {post.likes.length}
            </button>
            {isOwner && (
              <>
                <button className="edit" onClick={() => setEditing(true)}>
                  Edit
                </button>
                <button className="delete" onClick={handleDelete}>
                  Delete
                </button>
              </>
            )}
          </div>
        </>
      )}
      {err && <div className="error">{err}</div>}
    </div>
  );
}

export default Post;