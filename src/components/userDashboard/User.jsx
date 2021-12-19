import React, { useState } from "react";

function User() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInfo);
    setUserInfo({
      username: "",
      email: "",
      password: "",
    });
    alert(
      `subject:${userInfo.username} \nusername:${userInfo.email} \ncomplain:${userInfo.password}`
    );
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  return (
    <div className="w-1/3">
      <div className="flex flex-col gap-y-3 ">
        <div className="text-primaryBlue text-4xl font-bold">
          <h1>User Profile</h1>
        </div>
        <div className="flex flex-row gap-x-9">
          <img
            src="https://source.unsplash.com/collection/190727/1519x480"
            alt=""
            className="w-1/3 object-cover rounded-xl"
          />
          <form
            onSubmit={submitHandler}
            className="w-full flex gap-y-3 flex-col"
          >
            <input
              type="text"
              name="username"
              value={userInfo.username}
              placeholder="Username"
              onChange={changeHandler}
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              placeholder="Email"
              onChange={changeHandler}
            />
            <input
              type="password"
              name="password"
              value={userInfo.password}
              placeholder="Password"
              onChange={changeHandler}
            />
            <div>
              <button
                type="submit"
                className="bg-buttonBlue text-white px-5 py-3 rounded-md shadow-xl hover:bg-primaryBlue transition-all duration-300"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
