import React, { useState } from "react";
import facebook from "../../../../assets/images/icons/facebook.svg";
import search from "../../../../assets/images/icons/search.svg";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
// import bed from "../../../../assets/images/icons/bed.svg";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { GoogleLogin } from "react-google-login"
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    width: "100%",
    fontSize: 2,
  },
  customTextField: {
    "& input::placeholder": {
      fontSize: "20px",
    },
  },
}));
function Login({ handleToggle }) {
  const classes = useStyles();
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState("");
  const handleChange = ({ target: { value } }, property) => {
    handleErrors(property, value);
    setAuthData({
      ...authData,
      [property]: value,
    });
  };
  const handleErrors = (property, value) => {
    setInvalid("");
    const { errors } = authData;
    value = value === undefined ? authData[property] : value;
    errors.login = errors.login && "";
    let result;
    if (value.trim() === "") {
      errors[property] = `${property[0].toUpperCase()}${property.slice(
        1,
        property.length
      )} cannot be left empty`;
      result = false;
    } else {
      if (property === "email") {
        if (
          !value.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi
          )
        ) {
          errors.email = "Invalid email";
          result = false;
        } else {
          errors.email = "";
          result = true;
        }
      } else {
        if (value.length < 8) {
          errors.password = "Password must be atleast 8 characters long";
          result = false;
        } else {
          errors.password = "";
          result = true;
        }
      }
    }

    setAuthData({
      ...authData,
      errors,
    });
    return result;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, errors } = authData;
    const credentials = ["email", "password"];
    let goAhead;
    for (let i = 0; i < credentials.length; i++) {
      const result = handleErrors(credentials[i]);
      if (goAhead !== false) {
        goAhead = result;
      }
    }

    if (goAhead) {
      // submitting the form if all input fields are validated
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      setLoading(true);
      axiosInstance
        .post("user/login/", formData)
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          const { access, refresh } = res.data;
          localStorage.setItem("access", access);
          localStorage.setItem("refresh", refresh);
          localStorage.setItem("role", res.data.user_type);
          window.location = "/";
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response);
          const { detail } = err.response.data;
          if (detail) {
            setInvalid("Invalid login credentials");
          }

          setAuthData({
            ...authData,
            errors,
          });
        });
    }
  };
  const responseGoogle = (response) => {
    console.log(response);
    const google = {
      auth_token: response.tokenId
    }
    axiosInstance.post(`/social/google/`, google).then((res) => {
      setLoading(false);
      console.log(res.data);
      const { access, refresh } = res.data;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("role", res.data.user_type);
      window.location = "/";
    }).catch((err) => {
      console.log(err);
    })
  }
  const {
    email,
    password,
    errors: { email: emailError, password: passwordError, login: loginError },
  } = authData;

  return (
    <div className="sm:w-96 flex flex-col py-10 px-5 lg:px-0 lg:pr-16  mx-auto">
      {/* <div className="py-5 ">
        <img src={bed} className="w-16 h-16 mx-auto " alt="" />
      </div> */}
      <div className="mx-auto text-3xl font-semibold tracking-wider">LOGIN</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full"
        autoComplete="off"
      >
        {/* Email  */}
        <div className="mt-5">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput
              type="text"
              value={email}
              id="email"
              label="Email"
              autoComplete="off"
              onChange={(e) => handleChange(e, "email")}
            />
          </FormControl>
          {emailError && <div className="error text-red-600">{emailError}</div>}
        </div>
        {/* password  */}
        <div className="mt-5">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
              id="password"
              value={password}
              label="Password"
              type="password"
              autoComplete="off"
              onChange={(e) => handleChange(e, "password")}
            />
          </FormControl>
          {passwordError && (
            <div className="error text-red-600">{passwordError}</div>
          )}
          {loginError && <div className="error text-red-600">{loginError}</div>}
        </div>
        {invalid && <div className="error text-red-600">{invalid}</div>}
        {/* login with  */}
        <div className="flex space-x-4 mt-3">
          <GoogleLogin
            clientId="939925324136-qclm9ubn4lroha2r50utm6712ibpdn0h.apps.googleusercontent.com"
            buttonText="Login with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="shadow-sm w-full"
          />
        </div>
        {/* signin button  */}
        <div className="w-full my-5 flex justify-center items-center">
          <button
            className={`${loading ? "" : "border-2"
              } p-4 rounded-xl cursor-pointer animation transform hover:scale-110 hover:border-gray-300 group flex space-x-1 focus:outline-none`}
          >
            {/* <span className="text-gray-600 ">Sign In</span> */}

            {!loading ? (
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-gray-600 animation"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </button>
        </div>
      </form>
      {/* cant signin  */}
      <Link
        to="/confirmemail"
        className="mx-auto text-xs font-semibold text-gray-400 cursor-pointer animation hover:text-gray-600 font-subHeader"
      >
        FORGOT PASSWORD?
      </Link>
      <div
        className="mx-auto text-xs font-semibold text-gray-400 mt-2 cursor-pointer animation hover:text-gray-600 font-subHeader"
        onClick={handleToggle}
      >
        CREATE ACCOUNT
      </div>
    </div>
  );
}

export default Login;
