import React, { useState, useRef } from "react";
import axiosInstance from "../../authentication/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
function RoomForm() {
  const { id } = useParams();
  const [roomList, setRoomList] = useState([]);
  const selectedImageName = useRef();
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [userFile, setUserFile] = useState("");
  const [data, setData] = useState({
    room_type: "NR",
    guest_type: "1A",
    guest_number: "",
    check_in: "",
    check_out: "",
    room_feature: "",
    status: "AV",
    description: "",
    room_code: "",
    price: "",
    errors: {
      price: "",
      guest_number: "",
      check_in: "",
      check_out: "",
      room_feature: "",
      description: "",
      room_code: "",
    },
  });
  const [update, setUpdate] = useState(false);
  const [hId, setHId] = useState("");
  const [features, setFeatures] = useState([]);
  const [error, setError] = useState("");
  const [formFeature, setFormFeature] = useState([]);
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
      if (property === "room_code") {
        if (value === "") {
          errors.room_code = "cannot be left null";
          result = false;
        } else {
          errors.room_code = "";
          result = true;
        }
      } else if (property === "guest_number") {
        if (value === "" || isNaN(value)) {
          errors.guest_number = "Guest number cannot be left emppty";
          result = false;
        } else {
          errors.guest_number = "";
          result = true;
        }
      } else if (property === "price") {
        if (value === "" || isNaN(value)) {
          errors.price = "Guest number cannot be left emppty";
          result = false;
        } else {
          errors.price = "";
          result = true;
        }
      } else if (property === "check_in") {
        if (value === "") {
          errors.check_in = "Check in cannot be left emppty";
          result = false;
        } else {
          errors.check_in = "";
          result = true;
        }
      } else if (property === "check_out") {
        if (value === "") {
          errors.check_out = "Check out cannot be left emppty";
          result = false;
        } else {
          errors.check_out = "";
          result = true;
        }
      } else if (property === "room_feature") {
        if (value === "") {
          errors.room_feature = "Room feature cannot be left emppty";
          result = false;
        } else {
          errors.room_feature = "";
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
    const {
      room_type,
      guest_type,
      // guest_number,
      room_feature,
      status,
      description,
      price,
      room_code,
      errors,
    } = data;
    if (
      room_code === "" ||
      guest_type === "" ||
      // guest_number === "" ||
      price === "" ||
      room_feature === [] ||
      status === "" ||
      description === "" ||
      errors === "" ||
      description === ""
    ) {
      setError("Please fill the above fields completely.");
    } else {
      const formData = new FormData();
      formData.append("room_type", room_type);
      formData.append("guest_type", guest_type);
      formData.append("price", price);
      formData.append("room_code", room_code);
      formData.append("hotel", hId);
      formData.append("room_image", userFile);
      formData.append("room_status", status);
      formData.append("status", "PU");
      formData.append("description", description);
      // setLoading(true);
      if (id) {
        setError("");
        axiosInstance
          .patch(`/hotel/room/${id}/`, formData)
          .then((res) => {
            updateFeature(res.data.id);
          })
          .catch((err) => {
            setLoading(false);
          });
      } else {
        let stop = false;
        for (let i = 0; i < roomList.length; i++) {
          if (roomList[i].room_code === room_code) {
            stop = true;
            setError("Room already exist.");
            return;
          }
        }
        if (!stop) {
          setError("");
          axiosInstance
            .post("/hotel/room/create/", formData)
            .then((res) => {
              updateFeature(res.data.id);
            })
            .catch((err) => {
              setLoading(false);
            });
        }
      }
    }
  };
  const updateFeature = (id) => {
    let val = {
      room_id: id,
      feature: formFeature,
    };
    axiosInstance
      .post(`/hotel/room/feature/add/`, val)
      .then((res) => {
        setLoading(false);
        toast.success("Room added sucessfully", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleImageSet = (file) => {
    if (file) {
      const fileName = file.name;
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = function () {
        let arr = fileName.split(".");
        let extension = arr[arr.length - 1];
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
  const handleFeature = (index, checked) => {
    let array = [...features];
    if (checked) {
      array[index].checked = false;
    } else {
      array[index].checked = true;
    }
    let newFeature = [];
    array.forEach((data) => {
      data.checked && newFeature.push(data.id);
    });
    setFormFeature(newFeature);
    setFeatures(array);
  };
  React.useEffect(() => {
    axiosInstance
      .get(`/hotel/`)
      .then((res) => {
        setHId(res.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance
      .get(`/hotel/user-room-feature/`)
      .then((res) => {
        // console.log(res.data);
        let arr = [];
        res.data.forEach((data) => {
          arr.push({
            id: data.id,
            name: data.name,
            checked: false,
          });
        });
        setFeatures(arr);
        setUpdate(!update);
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line
  }, []);
  const getAllRooms = () => {
    axiosInstance
      .get(`/hotel/room/`)
      .then((res) => {
        setRoomList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    getAllRooms();
  }, []);
  React.useEffect(() => {
    if (id) {
      axiosInstance
        .get(`/hotel/room/${id}/`)
        .then((res) => {
          console.log(res.data);
          const {
            room_type,
            guest_type,
            room_feature,
            status,
            description,
            price,
            room_code,
          } = res.data;
          let val = {
            room_type,
            guest_type,
            room_feature,
            status,
            description,
            price,
            room_code,
            errors: {
              price: "",
              guest_number: "",
              check_in: "",
              check_out: "",
              room_feature: "",
              description: "",
              room_code: "",
            },
          };
          let arr = [...features];
          let formArr = [];
          for (let i = 0; i < features.length; i++) {
            console.log(features[i].id);
            for (let j = 0; j < room_feature.length; j++) {
              if (features[i].id === room_feature[j].id) {
                arr[i].checked = true;
                formArr.push(room_feature[j].id);
              }
            }
          }
          setFeatures(arr);
          setData(val);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [update]);
  const {
    room_code,
    room_type,
    guest_type,
    // guest_number,
    // check_in,
    // check_out,
    // room_feature,
    price,
    status,
    description,
    errors,
  } = data;
  const {
    room_code: room_codeErr,
    // guest_number: guest_numberErr,
    price: priceErr,
    description: descriptionErr,
  } = errors;
  // console.log(hId);
  return (
    <>
      <ToastContainer />
      <div className=" flex flex-col p-5 mx-auto  flex-1">
        <div className="mx-auto text-3xl font-semibold tracking-wider">
          ADD ROOM
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-5"
          autoComplete="off"
        >
          {/* room code  */}
          <div className="form-group">
            <label>Room Code</label>
            <input
              placeholder="Your room code ..."
              type="text"
              value={room_code}
              autoComplete="off"
              onChange={(e) => handleChange(e, "room_code")}
            />
            {room_codeErr && (
              <div className="error text-red-600">{room_codeErr}</div>
            )}
          </div>
          {/* room type  */}
          <div className="form-group">
            <label>Room Type</label>
            {/* Select Custom Dropdown */}

            <select
              name=""
              id=""
              value={room_type}
              onChange={(e) => handleChange(e, "room_type")}
            >
              <option value="NR">Normal</option>
              <option value="DL">Dilux</option>
              <option value="LU">Luxury</option>
              <option value="PR">Presidental</option>
              <option value="DI">Divine</option>
            </select>
          </div>
          {/* Guest type  */}
          <div className="form-group">
            <label>Guest Type</label>
            {/* Select Custom Dropdown */}

            <select
              name=""
              id=""
              value={guest_type}
              onChange={(e) => handleChange(e, "guest_type")}
            >
              <option value="1A">1 Adult</option>
              <option value="2A">2 Adult</option>
              <option value="4A">4 Adult</option>
              <option value="2A2C">2 Adult 2 Childern</option>
              <option value="4+">4+ Adult</option>
            </select>
          </div>
          {/* image  */}
          <div className="">
            <div className="flex flex-col space-y-1 relative ">
              <label>Select Room Image</label>
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
            {imageError && (
              <div className="error text-red-600">{imageError}</div>
            )}
          </div>
          {/* Status  */}
          <div className="form-group">
            <label>Room Status</label>
            {/* Select Custom Dropdown */}

            <select
              name=""
              id=""
              value={status}
              onChange={(e) => handleChange(e, "status")}
            >
              <option value="AV">Available</option>
              <option value="BO">Booked</option>
              <option value="MA">Maintenance</option>
            </select>
          </div>
          {/* GUest Number  */}
          <div className="form-group">
            <label>Price Per Night</label>
            {/* Select Custom Dropdown */}
            <input
              placeholder="Guest number ..."
              type="text"
              value={price}
              autoComplete="off"
              onChange={(e) => handleChange(e, "price")}
            />
            {priceErr && <div className="error text-red-600">{priceErr}</div>}
          </div>
          <div className="form-group">
            <label>Room Features</label>
            {features.map((r, index) => {
              return (
                <div className="" key={index}>
                  <input
                    type="checkbox"
                    checked={r.checked}
                    name={index}
                    // value={r.id}
                    onChange={(e) => handleFeature(index, r.checked)}
                  />
                  <label htmlFor={index} className="ml-4 cursor-pointer">
                    {r.name}
                  </label>
                </div>
              );
            })}
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
    </>
  );
}

export default RoomForm;
