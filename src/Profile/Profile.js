import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Profile = (props) => {
  return (
    <div>
      <h1 style={{color:"red", fontSize:"40px", fontWeight:"bolder"}}>{props.fullName}</h1>
      <h1 style={{color:"grey", fontSize:"40px", fontWeight:"bolder"}}>{props.bio}</h1>
      <h1 style={{color:"green", fontSize:"40px", fontWeight:"bolder"}}>{props.profession}</h1>
      <h1>{props.children}</h1>
      <button onClick={() => props.alertMyInput}>
      ClickMe
      </button>
    </div>
  )
}

Profile.defaultProps={
    fullName: "maram",
    bio: "c maram",
    profession: "avocate"

}

export default Profile
