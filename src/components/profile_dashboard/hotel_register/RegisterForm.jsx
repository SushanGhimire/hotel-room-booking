import React, { useState, useRef } from "react";
import axiosInstance from "../../authentication/axiosInstance";

function RegisterForm() {
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
      userFile === "" ||
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
        <div className="form-group">
          <label>Hotel Name</label>
          {/* Select Custom Dropdown */}
          <input
            placeholder="Your hotel name ..."
            type="text"
            value={name}
            label="hotelname"
            autoComplete="off"
            onChange={(e) => handleChange(e, "name")}
          />
          {nameErr && <div className="error text-red-600">{nameErr}</div>}
        </div>
        {/* address  */}
        <div className="form-group">
          <label>Address</label>
          {/* Select Custom Dropdown */}
          <input
            placeholder="Your address ..."
            type="text"
            value={address}
            autoComplete="off"
            onChange={(e) => handleChange(e, "address")}
          />
          {addressErr && <div className="error text-red-600">{addressErr}</div>}
        </div>
        {/* telephone  */}
        <div className="form-group">
          <label>Telephone Number</label>
          {/* Select Custom Dropdown */}
          <input
            placeholder="Your telephone number ..."
            type="text"
            value={tele_no}
            autoComplete="off"
            onChange={(e) => handleChange(e, "tele_no")}
          />
          {tele_noErr && <div className="error text-red-600">{tele_noErr}</div>}
        </div>
        {/* Phone  */}
        <div className="form-group">
          <label>Phone Number</label>
          {/* Select Custom Dropdown */}
          <input
            placeholder="Your phone number ..."
            type="text"
            value={phone_no}
            autoComplete="off"
            onChange={(e) => handleChange(e, "phone_no")}
          />
          {phone_noErr && (
            <div className="error text-red-600">{phone_noErr}</div>
          )}
        </div>
        {/* pan  */}
        <div className="form-group">
          <label>PAN Number</label>
          {/* Select Custom Dropdown */}
          <input
            placeholder="Your address ..."
            type="text"
            value={pan_no}
            autoComplete="off"
            onChange={(e) => handleChange(e, "pan_no")}
          />
          {pan_noErr && <div className="error text-red-600">{pan_noErr}</div>}
        </div>
        {/* pandoc  */}
        {/* image  */}
        <div className="">
          <div className="flex flex-col space-y-1 relative ">
            <label>Select PAN Document Image</label>
            <label
              htmlFor="input-file"
              className="bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-md  p-2.5  w-full  pr-20 h-11 flex justify-center items-center  text-gray-500 text-sm overflow-hidden"
              ref={selectedImageName}
            ></label>
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
              className={`bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400
             top-6 rounded  py-2 px-4 text-md absolute  right-1 cursor-pointer `}
            >
              Browse...
            </label>
          </div>
          {imageError && <div className="error text-red-600">{imageError}</div>}
        </div>
        {/* description  */}
        <div className="form-group md:col-span-2">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => handleChange(e, "description")}
            className="h-32 resize-none"
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
