// import "../index.css";
import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef(); // for user input, allow us to set the focus to it when the component loads.
  const errRef = useRef(); // for error reference, if we get an error then we need to shift the focus back to it, and will be announced by a Screen Reader for accessibiltiy.

  const [user, setUser] = useState(""); // this is the user state and it'll be tied to the user input.
  const [validName, setValidName] = useState(false); // validates if the name is valid is not.
  const [userFocus, setUserFocus] = useState(false); // validates if the focus is the set to the component or not.

  const [pwd, setPwd] = useState(""); // this is the password state and it'll be tied to the pwd input.
  const [validPwd, setValidPwd] = useState(false); // validates if the pwd is valid is not.
  const [pwdFocus, setPwdFocus] = useState(false); // validates if the focus is the set to the component or not.

  const [matchPwd, setMatchPwd] = useState(""); // this is the pwd state and it'll check if the password matches or not.
  const [validMatch, setValidMatch] = useState(false); // validates if the pwd match is valid is not.
  const [matchFocus, setMatchFocus] = useState(false); // validates if the focus is the set to the component or not.

  const [errMsg, setErrMsg] = useState(""); // it'll check if their is any error and it'll handle that.
  const [success, setSuccess] = useState(false); // validates if everything is valid.

  useEffect(() => {
    userRef.current.focus(); // setting the userRef into focus when the page loads.
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user); // checking the valid username against the regex i created.
    console.log(result);
    console.log(user);
    setValidName(result); //  is result is true then we will set the user input to valid name.
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const Match = pwd === matchPwd;
    setValidMatch(Match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg(""); // when ever user starts to adjust the error by interacting with any of these field error message should be empty.
  }, [user, pwd, matchPwd]);

  // * on submit function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if button was enabled any how
    const v1 = USER_REGEX.test(user);
    const v2 = USER_REGEX.test(pwd);
    if (v1 || v2) setErrMsg("Invalid Entry");

    setSuccess(true);
  };

  const goBack = async (e) => {
    e.preventDefault();

    setSuccess(false);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Successfuly Loged In!</h1>
          <p>
            <a href="#" onClick={goBack}>
              Sign in
            </a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <h1>Register</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              UserName:
              <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validName || !user ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>

            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, Numbers, UnderScores, Hyphens allowed.
            </p>

            {/* // ? password */}
            <label htmlFor="password">
              Password:
              <span className={validPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validPwd || !user ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>

            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letter, a number and a
              special character.
              <br />
              Allowed special characters :{" "}
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbal">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percentage sign">%</span>
            </p>

            {/* // ? confirm password */}
            <label htmlFor="confirm_pwd">
              confirm Password:
              <span className={validMatch && matchPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={
                  (validMatch && matchPwd) || !user ? "hide" : "invalid"
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>

            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            {/* //? Submit button */}
            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default Register;
