import { useState } from "react";
import axiosInstance from "../axiosInstance";
//import material ui
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
// import kathmandu from "../../../assets/images/icons/kathmandu.png";
import logreg from "../../../assets/images/home/logreg.jpg";
import reg from "../../../assets/images/home/reg.jpg";
import { Link } from "react-router-dom";
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
function EmailVerification() {
  const classes = useStyles();
  const [email, setEmail] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const handleChange = ({ target: { value } }, property) => {
    handleErrors(property, value);
    setEmail({
      ...email,
      [property]: value,
    });
  };
  const handleErrors = (property, value) => {
    setConfirmationEmail("");
    let result;
    if (property === "email") {
      if (
        !value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi
        )
      ) {
        setError("Invalid email");
        result = false;
      } else {
        setError("");
        result = true;
      }
    }
    return result;
  };
  const handleSubmit = (e) => {
    console.log(email);
    e.preventDefault();
    if (!error) {
      setLoading(true);
      setError("");
      axiosInstance
        .post("/user/password-reset/", email)
        .then(() => {
          setConfirmationEmail("confirmation link has been sent to your email");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
        });
    }
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center items-start  relative bg-cover bg-center pb-10"
      style={{
        backgroundImage: `url(${logreg})`,
      }}
    >
      <div className="w-full h-full top-0 bg-black absolute z-10 bg-opacity-70"></div>
      <div className="w-full max-w-4xl bg-lightWhite relative md:flex justify-between items-center rounded-lg overflow-hidden shadow-lg mt-24 2xl:mt-44 h-100 z-10">
        <div className="w-full md:w-2/5 flex flex-col px-10 ">
          {/* <div className="py-5 ">
        <img src={bed} className="w-16 h-16 mx-auto " alt="" />
      </div> */}
          <div className="mx-auto text-3xl font-semibold tracking-wider">
            Confirm Email
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full"
            autoComplete="off"
          >
            {/* Email  */}
            <div className="mt-5">
              <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput
                  type="text"
                  value={email.email}
                  id="email"
                  label="Email"
                  autoComplete="off"
                  onChange={(e) => handleChange(e, "email")}
                />
              </FormControl>
              {error && <div className="error text-red-600">{error}</div>}
              {confirmationEmail && (
                <div className="text-green-600 text-sm">
                  {confirmationEmail}
                </div>
              )}
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
          <div className="mx-auto text-xs font-semibold text-gray-400 mt-2  uppercase">
            Please verify your email first.
          </div>
          <Link
            to="/login"
            className="mx-auto text-xs font-semibold text-gray-400 mt-2 cursor-pointer animation hover:text-gray-600 uppercase"
          >
            GO TO LOGIN PAGE
          </Link>
        </div>
        <div
          className={`hidden md:flex animation flex-1 h-full  bg-cover bg-center`}
          style={{
            backgroundImage: `url(${reg})`,
          }}
        >
          {/* <img src={hotel} alt="" className="mt-12" /> */}
        </div>
      </div>
      {/* <div className="w-full mt-5 bottom-10 absolute right-0 z-0">
        <img src={kathmandu} className="w-full " alt="" />
      </div> */}
    </div>
  );
}

export default EmailVerification;
