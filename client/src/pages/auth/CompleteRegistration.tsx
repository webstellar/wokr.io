//how to keep users logged in with useContext

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase.js";
import { AuthContext } from "../../context/authContext.js";

import {
  signInWithEmailLink,
  isSignInWithEmailLink,
  updatePassword,
  getIdToken,
} from "firebase/auth";

import { toast } from "react-toastify";

const CompleteRegistration = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext); //maintain users while logged in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForSignIn")!); // Use non-null assertion operator
  }, [navigate]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  // const handlePrev = () => {
  //   setCurrentStep(currentStep - 1);
  // };

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (isSignInWithEmailLink(auth, window.location.href)) {
      //validation
      if (!email || !password) {
        toast("Please provide your email for confirmation", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return;
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then(async (result) => {
          window.localStorage.removeItem("emailForSignIn");
          console.log(result);

          const user = result.user;
          //const user = auth.currentUser;

          //update user's password
          updatePassword(user, password)
            .then(() => {
              setLoading(false);
              toast("Password updated successfully", {
                hideProgressBar: true,
                autoClose: 2000,
                type: "success",
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            })
            .catch((error) => {
              console.error(error);
            });

          //dispatch user with token and email
          //then redirect
          const idTokenResult = await getIdToken(result.user);
          dispatch({
            type: "LOGGED_IN_USER",
            payload: { email: String(user.email), token: idTokenResult },
          });

          handleNext();
        })
        .catch((error) => {
          const errorMessage = (error as Error)?.message || "An error occurred";
          setLoading(false);
          toast(errorMessage, {
            hideProgressBar: true,
            autoClose: 2000,
            type: "error",
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    }
  };

  const onHandleSubmit = () => {
    //navigate("/setup-profile");
    handleNext();
  };

  //temporary button
  const startExploring = () => {
    navigate("/setup-profile");
  };

  return (
    <>
      <div className="relative z-10">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-fit">
              <div className="flex shadow-md">
                <div
                  className="hidden lg:flex flex-wrap content-center justify-center rounded-r-md bg-wokr-red-100"
                  style={{ width: "24rem", height: "32rem" }}
                ></div>

                <div
                  className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
                  style={{ width: "24rem", height: "32rem" }}
                >
                  {currentStep == 1 && (
                    <div className="md:w-72">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">
                        Complete Registration
                      </h3>

                      <form className="mt-4" onSubmit={onSignup}>
                        <div className="mb-3">
                          <label
                            htmlFor="email"
                            className="mb-2 block text-xs font-semibold"
                          >
                            Email
                          </label>
                          <input
                            autoComplete=""
                            value={email}
                            id="email"
                            name="email"
                            type="email"
                            disabled
                            placeholder="Enter your email"
                            className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="mb-2 block text-xs font-semibold">
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            name="password"
                            disabled={loading}
                            placeholder="Password"
                            className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="mb-3">
                          <button
                            title="signUp"
                            type="submit"
                            className="flex items-center justify-center mb-1.5 w-full text-center text-white bg-wokr-red-100 hover:bg-wokr-red-200 px-2 py-1.5 rounded-md"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M12 2C6.477 2 2 6.477 2 12c0 1.656.337 3.223 0.943 4.65C3.65 16.73 4.26 17 5 17c.74 0 1.35-.27 1.057-.35C7.663 15.223 8 13.656 8 12c0-2.21-.895-4.21-2.343-5.657C4.105 4.895 2.105 4 0 4"
                                  ></path>
                                </svg>
                                Sign up ...
                              </>
                            ) : (
                              "Sign up"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {currentStep == 2 && (
                    <div className="md:w-72">
                      <h3 className="text-base font-semibold leading-6 text-gray-900 mb-5">
                        Get your profile started
                      </h3>

                      <p className="text-sm mb-2">
                        Build trust by using your full name or business name
                      </p>

                      <form className="mt-4" onSubmit={onHandleSubmit}>
                        <div className="mb-3">
                          <label
                            htmlFor="email"
                            className="mb-2 block text-xs font-semibold uppercase"
                          >
                            Create your username
                          </label>
                          <input
                            autoComplete=""
                            value={username}
                            id="username"
                            name="username"
                            type="text"
                            placeholder="JOHN_WICK"
                            className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>

                        <div className="mb-3">
                          <button
                            title="createUsername"
                            type="submit"
                            className="flex items-center justify-center mb-1.5 w-full text-center text-white bg-wokr-red-100 hover:bg-wokr-red-200 px-2 py-1.5 rounded-md"
                            disabled={!username || loading}
                          >
                            {loading ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M12 2C6.477 2 2 6.477 2 12c0 1.656.337 3.223 0.943 4.65C3.65 16.73 4.26 17 5 17c.74 0 1.35-.27 1.057-.35C7.663 15.223 8 13.656 8 12c0-2.21-.895-4.21-2.343-5.657C4.105 4.895 2.105 4 0 4"
                                  ></path>
                                </svg>
                                Creating username...
                              </>
                            ) : (
                              "Create username"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {currentStep == 3 && (
                    <div className="md:w-72 flex flex-col justify-center items-center gap-y-3">
                      <div className="text-center">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 127 127"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="63.5" cy="63.5" r="63.5" fill="#55C1AC" />
                          <path
                            d="M36.0156 63.168L54.5641 81.5076L90.9858 45.4927"
                            fill="#55C1AC"
                          />
                          <path
                            d="M36.0156 63.168L54.5641 81.5076L90.9858 45.4927"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="text-base text-center font-semibold leading-6 text-gray-900 mb-2">
                        {username} you’re all done!
                      </h3>
                      <p className="text-sm mb-2 text-center">
                        Welcome aboard, Workr anticipates your remarkable
                        contributions.
                      </p>

                      <div className="mb-3">
                        <button
                          title="startExploring"
                          className="flex items-center justify-center mb-1.5 w-full text-center text-white bg-wokr-red-100 hover:bg-wokr-red-200 px-8 py-1.5 rounded-md"
                          onClick={startExploring}
                        >
                          {loading ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M12 2C6.477 2 2 6.477 2 12c0 1.656.337 3.223 0.943 4.65C3.65 16.73 4.26 17 5 17c.74 0 1.35-.27 1.057-.35C7.663 15.223 8 13.656 8 12c0-2.21-.895-4.21-2.343-5.657C4.105 4.895 2.105 4 0 4"
                                ></path>
                              </svg>
                              Start exploring...
                            </>
                          ) : (
                            "Start exploring"
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteRegistration;
