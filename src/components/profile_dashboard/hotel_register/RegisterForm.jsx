import React, { useState, useRef } from "react";
// import bed from "../../../../assets/images/icons/bed.svg";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import axiosInstance from "../../authentication/axiosInstance";
import TextField from "@material-ui/core/TextField";
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
function RegisterForm({ handleToggle }) {
  const classes = useStyles();
  const selectedImageName = useRef();
  const [imageError, setImageError] = useState("");
  const [userFile, setUserFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    address: "",
    phone_no: "",
    tele_no: "",
    pan_no: "",
    description: "",
    confirmPassword: "",
    errors: {
      name: "",
      address: "",
      phone_no: "",
      tele_no: "",
      pan_no: "",
      description: "",
    },
  });
  const [error, setError] = useState("");
  const handleErrors = (property, value) => {
    setError("");
    const { errors } = data;
    let result;
    if (value.trim() === "") {
      errors[property] = `${property[0].toUpperCase()}${property.slice(
        1,
        property.length
      )} cannot be left empty`;
      result = false;
    } else {
      if (property === "name") {
        if (value === "") {
          errors.name = "Hotel name cannot be left empty.";
          result = false;
        } else {
          errors.name = "";
          result = true;
        }
      } else if (property === "address") {
        if (value === "") {
          errors.address = "Address cannot be left empty.";
          result = false;
        } else {
          errors.address = "";
          result = true;
        }
      } else if (property === "tele_no") {
        if (value === "" || isNaN(value) || value.length < 9) {
          errors.tele_no = "Invalid telephone number.";
          result = false;
        } else {
          errors.tele_no = "";
          result = true;
        }
      } else if (property === "phone_no") {
        if (value === "" || isNaN(value) || value.length < 10) {
          errors.phone_no = "Invalid phone number.";
          result = false;
        } else {
          errors.phone_no = "";
          result = true;
        }
      } else if (property === "description") {
        if (value === "") {
          errors.description = "Discription cannot be left emppty";
          result = false;
        } else {
          errors.description = "";
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
    const { name, pan_no, address, phone_no, tele_no, description, errors } =
      data;
    if (
      name === "" ||
      pan_no === "" ||
      address === "" ||
      tele_no === "" ||
      description === "" ||
      phone_no === ""
    ) {
      setError("Please fill the above fields completely.");
    } else {
      setError("");
      const formData = new FormData();
      formData.append("name", name);
      formData.append("address", address);
      formData.append("phone_no", phone_no);
      formData.append("tele_no", tele_no);
      formData.append("pan_no", pan_no);
      formData.append("description", description);
      formData.append("pan_doc", userFile);
      setLoading(true);
      setData({
        ...data,
        confirmationEmail: "",
      });
      axiosInstance
        .post("user/register/", formData)
        .then(() => {
          setLoading(false);
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
    }
  };
  const handleImageSet = (file) => {
    if (file) {
      const fileName = file.name;
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = function () {
        let arr = fileName.split(".");
        console.log(arr);
        let extension = arr[arr.length - 1];
        console.log(extension);
        const extensions = ["png", "jpg", "jpeg", "webp"];
        let bool = false;
        for (let i = 0; i < extensions.length; i++) {
          if (extensions[i] === extension) {
            bool = true;
            i = extensions.length;
          }
        }
        if (bool) {
          setUserFile(file);
          // handleImageChange(file);
          setImageError("");
        } else {
          setUserFile("");
          setImageError("Invalid file");
        }
      };
      image.onerror = function () {
        // setuserImage("");
        setImageError("Invalid file");
      };
      selectedImageName.current.innerHTML = fileName;
    }
  };
  const { name, pan_no, address, phone_no, tele_no, description, errors } =
    data;
  const {
    name: nameErr,
    pan_no: pan_noErr,
    phone_no: phone_noErr,
    tele_no: tele_noErr,
    description: descriptionErr,
    address: addressErr,
  } = errors;
  return (
    <div className=" flex flex-col p-5 mx-auto  flex-1">
      <div className="mx-auto text-3xl font-semibold tracking-wider">
        HOTEL REGISTER
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-5"
        autoComplete="off"
      >
        {/* name  */}
        <div className="">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">Hotel Name</InputLabel>
            <OutlinedInput
              type="text"
              value={name}
              id="name1"
              label="Hotel Name"
              autoComplete="off"
              onChange={(e) => handleChange(e, "name")}
            />
          </FormControl>
          {nameErr && <div className="error text-red-600">{nameErr}</div>}
        </div>
        {/* address  */}
        <div className="">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">Address</InputLabel>
            <OutlinedInput
              type="text"
              value={address}
              label="Address"
              autoComplete="off"
              onChange={(e) => handleChange(e, "address")}
            />
          </FormControl>
          {addressErr && <div className="error text-red-600">{addressErr}</div>}
        </div>
        {/* telephone  */}
        <div className="">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">
              Telephone Number
            </InputLabel>
            <OutlinedInput
              type="text"
              value={tele_no}
              label="Telephone Number"
              autoComplete="off"
              onChange={(e) => handleChange(e, "tele_no")}
            />
          </FormControl>
          {tele_noErr && <div className="error text-red-600">{tele_noErr}</div>}
        </div>
        {/* Phone  */}
        <div className="">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">Phone Number</InputLabel>
            <OutlinedInput
              type="text"
              value={phone_no}
              label="Phone Number"
              autoComplete="off"
              onChange={(e) => handleChange(e, "phone_no")}
            />
          </FormControl>
          {phone_noErr && (
            <div className="error text-red-600">{phone_noErr}</div>
          )}
        </div>
        {/* pan  */}
        <div className="">
          <FormControl
            variant="outlined"
            size="small"
            className={classes.input}
          >
            <InputLabel htmlFor="component-outlined">PAN Number</InputLabel>
            <OutlinedInput
              type="text"
              value={pan_no}
              label="PAN Number"
              autoComplete="off"
              onChange={(e) => handleChange(e, "pan_no")}
            />
          </FormControl>
          {pan_noErr && <div className="error text-red-600">{pan_noErr}</div>}
        </div>
        {/* pandoc  */}
        {/* image  */}
        <div className="flex flex-col space-y-2 relative ">
          <label
            htmlFor="input-file"
            className="bg-gray-50 border border-gray-300 rounded-md  p-2.5 w-full  pr-20 h-10  text-gray-500 text-sm overflow-hidden"
            ref={selectedImageName}
          >
            Select Image
          </label>
          <input
            type="file"
            id="input-file"
            onChange={(event) => {
              handleImageSet(event.target.files[0]);
            }}
            // className="hidden"
            hidden
          />
          <label
            htmlFor="input-file"
            className={`bg-gray-200 text-gray-600 -top-2 rounded-r-md  py-2 px-4 text-md absolute  right-0 cursor-pointer `}
          >
            Browse...
          </label>
          {imageError && <div className="error text-red-600">{imageError}</div>}
        </div>
        {/* description  */}
        <div className="my-5 md:col-span-2">
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={5}
            value={description}
            variant="outlined"
            className={classes.input}
            onChange={(e) => handleChange(e, "description")}
          />
          {descriptionErr && (
            <div className="error text-red-600">{descriptionErr}</div>
          )}
          {error && <div className="error text-red-600">{error}</div>}
        </div>
        {/* signin button  */}
        <div className="col-span-1 md:col-span-2 w-full my-5 flex justify-center items-center">
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

export default RegisterForm;
