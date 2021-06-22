import React, { useState } from "react";
import facebook from "../../../../assets/images/icons/facebook.svg";
import search from "../../../../assets/images/icons/search.svg";
// import bed from "../../../../assets/images/icons/bed.svg";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import axiosInstance from "../../axiosInstance";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    width: "100%",
  },
}));
function Register({ handleToggle }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const handleErrors = (property, value) => {
    const { errors } = data;
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
      } else if (property === "username") {
        errors.username = "";
        result = true;
      } else if (property === "password") {
        if (value.length < 8) {
          errors.password = "Password must be atleast 8 characters long";
          result = false;
        } else {
          errors.password = "";
          result = true;
        }
      } else if (property === "confirmPassword") {
        if (value !== data.password) {
          errors.confirmPassword = "Passwords do not match";
          result = false;
        } else {
          errors.confirmPassword = "";
          result = true;
        }
      }
    }

    setData({
      ...data,
      errors,
    });
    return result;
  };

  const handleChange = ({ target: { value } }, property) => {
    handleErrors(property, value);
    setData({
      ...data,
      [property]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, errors } = data;
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    setLoading(true);
    setData({
      ...data,
      confirmationEmail: "",
    });
    axiosInstance
      .post("user/register/", formData)
      .then(() => {
        setLoading(false);
        setConfirmationEmail("Confirmation link has been sent to your email");
        // window.location = "/login";
        setData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          errors: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          },
        });
      })
      .catch((err) => {
        // console.log(err.response);
        const { email, username } = err.response.data;
        if (email) {
          errors.email = "Email already exist";
        }
        if (username) {
          errors.username = "Username already exist";
        }

        setData({
          ...data,
          errors,
        });
        setLoading(false);
      });
  };

  const { username, email, password, confirmPassword, errors } = data;
  const {
    username: usernameErr,
    email: emailErr,
    password: passwordErr,
    confirmPassword: confirmPasswordErr,
  } = errors;
  return (
    <div className="sm:w-96 flex flex-col py-10 px-5 lg:px-0 lg:pl-16  mx-auto">
      <div className="mx-auto text-3xl font-semibold tracking-wider">
        REGISTER
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full"
        autoComplete="off"
      >
        {/* username  */}
        <div className="mt-5">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">Username</InputLabel>
            <OutlinedInput
              type="text"
              value={username}
              id="username1"
              label="Username"
              autoComplete="off"
              onChange={(e) => handleChange(e, "username")}
            />
          </FormControl>
          {usernameErr && (
            <div className="error text-red-600">{usernameErr}</div>
          )}
        </div>
        {/* email  */}
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
              id="email1"
              label="Email"
              autoComplete="off"
              onChange={(e) => handleChange(e, "email")}
            />
          </FormControl>
          {emailErr && <div className="error text-red-600">{emailErr}</div>}
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
              id="password1"
              value={password}
              label="Password"
              type="password"
              autoComplete="off"
              onChange={(e) => handleChange(e, "password")}
            />
          </FormControl>
          {passwordErr && (
            <div className="error text-red-600">{passwordErr}</div>
          )}
        </div>
        {/* confirmPassword  */}
        <div className="mt-5">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="confirmPassword"
              value={confirmPassword}
              label="Confirm Password"
              type="password"
              autoComplete="off"
              onChange={(e) => handleChange(e, "confirmPassword")}
            />
          </FormControl>
          {confirmPasswordErr && (
            <div className="error text-sm text-red-600">
              {confirmPasswordErr}
            </div>
          )}
        </div>
        {confirmationEmail && (
          <div className="text-green-600 text-sm">{confirmationEmail}</div>
        )}
        {/* login with  */}
        <div className="flex space-x-4 mt-3">
          {/* facebook  */}
          <div
            className="animation transform hover:scale-110 shadow-md w-1/2 flex justify-center py-2 rounded-md cursor-pointer"
            style={{
              backgroundColor: "#1976D2",
            }}
          >
            <img src={facebook} className="w-5 h-5" alt="" />
          </div>
          {/* google  */}
          <div className="animation transform hover:scale-110 bg-white w-1/2 flex justify-center py-2 rounded-md cursor-pointer  shadow-md">
            <img src={search} className="w-5 h-5" alt="" />
          </div>
        </div>
        {/* signin button  */}
        <div className="w-full my-5 flex justify-center items-center">
          <button
            className={`${
              loading ? "" : "border-2"
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
      <div
        className="mx-auto text-xs font-semibold text-gray-400 cursor-pointer animation hover:text-gray-600"
        onClick={handleToggle}
      >
        ALREADY HAVE AN ACCOUNT?
      </div>
    </div>
  );
}

export default Register;
