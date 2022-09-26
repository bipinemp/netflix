import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import "./login.css";

function Login() {
  const [signDesc, setSignDesc] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleDesc = (e) => {
    e.preventDefault();
    setSignDesc(true);
  };
  return (
    <>
      <div className="signimg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="formcontent">
        <img
          src={process.env.PUBLIC_URL + "/images/loginsignup.jpg"}
          style={{
            width: "100%",
            objectFit: "cover",
            filter: "brightness(50%)",
            height: "160vh",
          }}
        />
        {error && <p className="errormsg">{error}</p>}
        <form onSubmit={handleSubmit} className="form">
          <div className="formtitle">
            <h1>Sign In</h1>
          </div>
          <div className="forminputs">
            <div className="emailsign">
              <input
                type="email"
                placeholder="Email and phone number"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <span className="floating-label">Email and phone number</span> */}
            </div>
            <div className="emailsign">
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <span className="floating-label">Password</span> */}
            </div>
            <div className="formbtn">
              <button>Sign In</button>
            </div>
          </div>
          <div className="formbtn">
            <div className="formremember">
              <div>
                <p>
                  <span>
                    <input type="checkbox" className="checkmark" />
                  </span>
                  &nbsp;Remember me
                </p>
              </div>
              <div>
                <p className="needhelp">Need help?</p>
              </div>
            </div>
          </div>
          <div className="formsignnow">
            <div>
              <p>
                <span className="newnetflix">New to Netflix?</span>{" "}
                <Link to="/signup" className="signwhite">
                  Sign up now.
                </Link>
              </p>
            </div>
            <div>
              <p className="signdesc">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <a onClick={handleDesc}>Learn more.</a>
                {signDesc && (
                  <p className="toggledesc">
                    The information collected by Google reCAPTCHA is subject to
                    the Google <a>Privacy Policy</a> and <a>Terms of Service</a>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalized advertising by Google).
                  </p>
                )}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
