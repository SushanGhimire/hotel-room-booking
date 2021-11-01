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
function HRegister({ handleToggle }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {
      name: "",
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
      } else if (property === "name") {
        errors.name = "";
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
    const { name, email, password, errors } = data;
    const formData = new FormData();
    formData.append("name", name);
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
        window.location = "/login";
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          errors: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          },
        });
      })
      .catch((err) => {
        // console.log(err.response);
        const { email, name } = err.response.data;
        if (email) {
          errors.email = "Email already exist";
        }
        if (name) {
          errors.name = "name already exist";
        }

        setData({
          ...data,
          errors,
        });
        setLoading(false);
      });
  };

  const { name, email, password, confirmPassword, errors } = data;
  const {
    name: nameErr,
    email: emailErr,
    password: passwordErr,
    confirmPassword: confirmPasswordErr,
  } = errors;
  return (
    <div className=" flex flex-col py-10 px-5  mx-auto  flex-1">
      <div className="mx-auto text-3xl font-semibold tracking-wider">
        HOTEL REGISTER
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full"
        autoComplete="off"
      >
        {/* name  */}
        <div className="mt-5">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">name</InputLabel>
            <OutlinedInput
              type="text"
              value={name}
              id="name1"
              label="name"
              autoComplete="off"
              onChange={(e) => handleChange(e, "name")}
            />
          </FormControl>
          {nameErr && <div className="error text-red-600">{nameErr}</div>}
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
    </div>
  );
}

export default HRegister;
