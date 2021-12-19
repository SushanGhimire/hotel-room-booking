const errorHandler = (property, value) => {
  if (property === "email") {
    if (
      !value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi
      )
    ) {
      return "Invalid email";
    } else {
      return "";
    }
  } else if (property === "username") {
    if (value === "") {
      return "username is required";
    } else {
      return "";
    }
  } else if (property === "passsword") {
    if (value === "" || value.length < 8) {
      return "password must be 8 character long.";
    } else {
      return "";
    }
  } else {
    return "";
  }
};

export default errorHandler;
