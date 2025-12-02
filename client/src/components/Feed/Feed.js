import React, { useContext, useEffect, useState } from "react";
import Post from "../Post/Post";
import CreatePost from "../Post/CreatePost";
import { AuthContext } from "../../App";
import { logout } from "../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Feed.css";

// Optionally you can add left sidebar profile preview in this file for LinkedIn-type layout.

function Feed() {
  const { user, setUser } = useContext(AuthContext);
  const nav = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // Fetch all posts
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch {
        setErr("Couldn't load posts");
      }
      setLoading(false);
    })();
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    nav("/login");
  };

  // Add new post to top when created
  const addPost = (post) => setPosts([post, ...posts]);

  // Update post list after edit/delete
  const updatePost = (id, updated) =>
    setPosts((posts) => posts.map((p) => (p._id === id ? updated : p)));
  const removePost = (id) =>
    setPosts((posts) => posts.filter((p) => p._id !== id));

  return (
    <div className="ln-root-feed">
      <div className="ln-navbar">
        <Link
          to="/"
          className="ln-logo"
          onClick={() => window.location.reload()}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className="logo-icon">&#128188;</span>
          <span className="logo-text">LinkedMERN</span>
        </Link>
        <nav>
          <Link to="/profile">
            <span className="nav-link">Me</span>
          </Link>
          <button className="nav-link" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>
      <div className="ln-content-main">
        <aside className="ln-sidebar">
          <div className="ln-sidebar-profile">
            <div className="profile-avatar">
              <span>{user.name[0]}</span>
            </div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Link className="profile-link" to="/profile">
              View profile
            </Link>
          </div>
        </aside>
        <main className="ln-feed-main">
          <CreatePost addPost={addPost} />
          {loading ? (
            <div className="center-feed">Loading feed...</div>
          ) : err ? (
            <div className="center-feed error">{err}</div>
          ) : posts.length === 0 ? (
            <div className="center-feed">No posts yet.</div>
          ) : (
            posts.map((post) => (
              <Post
                key={post._id}
                post={post}
                isOwner={post.userId === user._id}
                updatePost={updatePost}
                removePost={removePost}
              />
            ))
          )}
        </main>
        <aside className="ln-rightbar">
          <div className="ln-rightbar-card">
            <h4>Welcome to LinkedMERN 👋</h4>
            <p>Connect, share, and grow like on LinkedIn!</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
export default Feed;
