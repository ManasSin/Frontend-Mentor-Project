import React, { useEffect, useRef, useState } from "react";

const Info = () => {
  // todo:- make a from taking user data : 1 name , 2 email address, 3 phone number

  // ? regex for confirmation
  const NAME_REGEX = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
  const EMAIL_REGEX =
    /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;
  const NUMBER_REGEX = /^[-+]?\d*$/;

  // ? hooks

  const nameRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFoucs, setNameFoucs] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFoucs, setEmailFoucs] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [validNumber, setValidNumber] = useState(false);
  const [phoneFoucs, setPhoneFoucs] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidNumber(NUMBER_REGEX.test(phoneNumber));
  }, [phoneNumber]);

  useEffect(() => {
    setErrMsg("");
  }, [name, email, phoneNumber]);

  return (
    <div>
      <h1 className="text-lg font-extralight">hello form info</h1>
    </div>
  );
};

export default Info;
