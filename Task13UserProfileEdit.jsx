// src/FullStack_Sample/Task13UserProfileEdit.jsx
import React, { useState } from "react";

const Task13UserProfileEdit = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    role: "User",
    bio: "",
  });
  const [errors, setErrors] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!profile.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email))
      e.email = "Invalid email";
    if (!/^\d{10}$/.test(profile.phone))
      e.phone = "Phone must be 10 digits";
    if (profile.bio.length < 10) e.bio = "Min 10 characters";
    return e;
  };

  const handleSave = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setShowConfirm(true);
  };

  const confirmSave = () => {
    setShowConfirm(false);
    setShowSuccess(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Edit Profile</h1>

        <input style={styles.input} placeholder="Name"
          value={profile.name}
          onChange={(e)=>setProfile({...profile,name:e.target.value})}/>
        {errors.name && <span style={styles.error}>{errors.name}</span>}

        <input style={styles.input} placeholder="Email"
          value={profile.email}
          onChange={(e)=>setProfile({...profile,email:e.target.value})}/>
        {errors.email && <span style={styles.error}>{errors.email}</span>}

        <input style={styles.input} placeholder="Phone"
          value={profile.phone}
          onChange={(e)=>setProfile({...profile,phone:e.target.value})}/>
        {errors.phone && <span style={styles.error}>{errors.phone}</span>}

        <select style={styles.input}
          value={profile.role}
          onChange={(e)=>setProfile({...profile,role:e.target.value})}>
          <option>User</option>
          <option>Admin</option>
          <option>Editor</option>
        </select>

        <textarea style={styles.textarea} placeholder="Bio"
          value={profile.bio}
          onChange={(e)=>setProfile({...profile,bio:e.target.value})}/>
        {errors.bio && <span style={styles.error}>{errors.bio}</span>}

        <button style={styles.button} onClick={handleSave}>
          Save Profile
        </button>
      </div>

      {showConfirm && (
        <div style={styles.overlay}>
          <div style={styles.dialog}>
            <h3>Confirm Changes?</h3>
            <button style={styles.dBtn} onClick={confirmSave}>Confirm</button>
            <button style={styles.dBtnAlt} onClick={()=>setShowConfirm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {showSuccess && (
        <div style={styles.overlay}>
          <div style={styles.dialog}>
            <h3>Profile Updated Successfully ✅</h3>
            <button style={styles.dBtn} onClick={()=>setShowSuccess(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container:{
    height:"100vh",width:"100vw",
    background:"linear-gradient(135deg,#6a11cb,#8e2de2)",
    display:"flex",justifyContent:"center",alignItems:"center",
    fontFamily:"Arial"
  },
  card:{
    background:"#fff",padding:"35px",borderRadius:"14px",
    width:"420px",boxShadow:"0 10px 30px rgba(0,0,0,.25)"
  },
  title:{textAlign:"center",color:"#000",marginBottom:"20px"},
  input:{width:"100%",padding:"10px",marginBottom:"10px"},
  textarea:{width:"100%",height:"80px",padding:"10px"},
  button:{width:"100%",padding:"14px",background:"#6a11cb",
    color:"#fff",border:"none",borderRadius:"8px",marginTop:"10px"},
  error:{color:"red",fontSize:"12px"},
  overlay:{
    position:"fixed",top:0,left:0,height:"100%",width:"100%",
    background:"rgba(0,0,0,0.4)",
    display:"flex",justifyContent:"center",alignItems:"center"
  },
  dialog:{
    background:"#120b0bff",padding:"30px",
    borderRadius:"10px",textAlign:"center"
  },
  dBtn:{padding:"10px 20px",margin:"10px",
    background:"#6a11cb",color:"#fff",border:"none"},
  dBtnAlt:{padding:"10px 20px",margin:"10px"}
};

export default Task13UserProfileEdit;
