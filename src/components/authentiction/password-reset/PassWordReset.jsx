import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../authentication/authorization";
import { useParams } from "react-router-dom";
function PassWordReset() {
  const [loading, setLoading] = useState(false);
  let { uidb64 } = useParams();
  let { token } = useParams();
  const [Password, setPassword] = useState({
    uidb64: uidb64,
    token: token,
    password: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const { password } = Password;
    if (password === "") {
      setError("empty field cannot be submitted");
    } else if (password.length < 8) {
      setError("passsword must be 8 character long");
    } else {
      setLoading(true);
      axios
        .patch(`${baseUrl}/user/password-reset-complete/`, Password)
        .then((res) => {
          console.log(res);
          setLoading(false);
          window.location = "/login";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div className=" w-full h-full flex justify-center items-center py-16 font-rubik">
        <form
          className="bg-white border border-gray-300 px-10 py-8 mx-5 max-w-sm w-full authentication-form"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col pb-2 space-y-2">
            <div className="text-xl font-semibold text-center">
              Password Reset
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                Password
              </label>
              <input
                type="password"
                id="email"
                value={Password.password}
                onChange={(e) =>
                  setPassword({ ...Password, password: e.target.value })
                }
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              />
            </div>
            {error && <div className="error text-red-600">{error}</div>}

            <div className="button-animation" style={{ display: "block" }}>
              <button
                type="submit"
                className="animation-text text-center px-5 py-3 w-full flex items-center space-x-4"
              >
                <span>{loading ? "Submiting" : "Submit"}</span>
                {loading && (
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </button>
              <div className="animation-bg"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassWordReset;
