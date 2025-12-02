import React, { useEffect, useState, useContext } from "react";
import { getToken, logout } from "../../utils/auth";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Post from "../Post/Post";
import "./Profile.css";

function Profile() {
  const {setUser } = useContext(AuthContext);
  const [profile, setProfile] = useState({ user: {}, posts: [] });
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/profile", {
        headers: { Authorization: "Bearer " + getToken() }
      });
      const data = await res.json();
      setProfile(data);
      setLoading(false);
    })();
  }, []);
  const handleLogout = () => {
    logout();
    setUser(null);
    nav("/login");
  };

  return (
    <div className="ln-profile-root">
      <div className="ln-profile-navbar">
        <div className="ln-logo">
          <span className="logo-icon">&#128188;</span>
          <span className="logo-text">LinkedMERN</span>
        </div>
        <nav>
          <span className="nav-link" onClick={() => nav("/")}>Feed</span>
          <button className="nav-link" onClick={handleLogout}>Logout</button>
        </nav>
      </div>
      <div className="ln-profile-main">
        <div className="ln-profile-card">
          <div className="profile-avatar">
            <span>{profile.user.name ? profile.user.name[0] : ""}</span>
          </div>
          <h2>{profile.user.name}</h2>
          <p>{profile.user.email}</p>
          <span className="profile-joined">
            Joined: {profile.user.createdAt && new Date(profile.user.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="profile-posts">
          <h3>My Posts</h3>
          {loading ? <div>Loading...</div> :
            profile.posts.length === 0 ? <div>No posts yet.</div> :
              profile.posts.map(post => <Post key={post._id} post={post} isOwner={true} updatePost={() => {}} removePost={() => {}} />)
          }
        </div>
      </div>
    </div>
  );
}
export default Profile;