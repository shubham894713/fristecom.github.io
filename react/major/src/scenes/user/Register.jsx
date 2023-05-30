import React, {useState} from 'react';
import axios from 'axios';
import  toast  from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/useraction";
function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [securityQuestion, setSecurityQuestion] =useState();
  const [securityAnswer, setSecurityAnswer] = useState();
  const [mobile, setMobile] = useState();
  const [pic, setPic] = useState();
  const uploadImage = () => {
    const { files } = document.querySelector('input[type="file"]');
    const formObj = new FormData();
    formObj.append("file",files[0]);
    formObj.append("upload_preset",'cbpw9agi');
    return axios.post('https://api.cloudinary.com/v1_1/djkv2bowt/image/upload',formObj).then((response)=>{
      console.log(response);
      const imageUrl = response.data['secure_url'];
      setPic(imageUrl);
      toast.success('image upload successfull');
    }).catch((err)=>{
      console.log(err);
      toast.error('failed to upload try again');
    })
  }
  const EmailChange = (event) => {
    setEmail(event.target.value);
  };
  const mobileChange = (event) => {
    setMobile(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  }
  const nameChange = (event) =>{
    setName(event.target.value);
  }
  const securityQuestionChange = (event) =>{
    setSecurityQuestion(event.target.value);
  }
  const securityAnswerChange = (event) =>{
    setSecurityAnswer(event.target.value);
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerUser = (event) => {
    event.preventDefault();
    dispatch(register({ email, password, name, mobile, securityAnswer,securityQuestion, pic}));
    navigate(-1);
  };
  return (
    <div className="login">
      <div>
        <h1>New user</h1>
        <h3>Please enter your credentials to move forward</h3>
        <form onSubmit={registerUser}>
          <input
            placeholder="enter name"
            value={name}
            className="formInput"
            name="name"
            minlength="3"
            onChange={nameChange}
            type="string"
            required
          />
          <label>Profile pic</label>
          <input
            placeholder="select your profile photo"
            className="formInput"
            name="pic"
            minlength="3"
            onChange={uploadImage}
            type="file"
            accept="image/png, image/gif, image/jpeg"
            required
          />
          <input
            placeholder="enter email"
            value={email}
            className="formInput"
            name="email"
            minlength="3"
            onChange={EmailChange}
            type="email"
            required
          />
          <input
            placeholder="enter mobile"
            value={mobile}
            className="formInput"
            name="email"
            minlength="3"
            onChange={mobileChange}
            type="email"
            required
          />
          <input
            placeholder="enter password"
            value={password}
            className="formInput"
            name="password"
            minlength="3"
            type="password"
            onChange={passwordChange}
            required
          />
          <input
            placeholder="enter security Question"
            value={securityQuestion}
            className="formInput"
            name="name"
            minlength="40"
            onChange={securityQuestionChange}
            type="string"
            required
          />
          <input
            placeholder="enter security Answer"
            value={securityAnswer}
            className="formInput"
            name="name"
            minlength="3"
            onChange={securityAnswerChange}
            type="string"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register
