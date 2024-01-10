import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getIdToken,
} from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase.js";
import { toast } from "react-toastify";

type ModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const LoginModal = ({ setOpen, open }: ModalProps) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const cancelButtonRef = useRef(null);

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const idTokenResult = await getIdToken(user);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: { email: String(user.email), token: idTokenResult },
        });

        setLoading(false);
        toast("Logged in successfully", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        setTimeout(function () {
          navigate("/post-a-job");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const onGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const idTokenResult = credential?.idToken;
        const user = result.user;

        dispatch({
          type: "LOGGED_IN_USER",
          payload: { email: String(user.email), token: String(idTokenResult) },
        });

        toast("Logged in successfully", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });

        setTimeout(function () {
          navigate("/post-a-job");
        }, 2000);
        console.log(user, idTokenResult);
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        //const email = error.customData.email;
        //const credential = GoogleAuthProvider.credentialFromError(error);
        toast(errorMessage, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-fit">
                <div className="flex shadow-md">
                  <div
                    className="flex flex-wrap content-center justify-center rounded-r-md bg-wokr-red-100"
                    style={{ width: "24rem", height: "32rem" }}
                  >
                    <div
                      className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
                      style={{ width: "24rem", height: "32rem" }}
                    >
                      <div className="md:w-72">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Login into your account
                        </Dialog.Title>

                        <form className="mt-4" onSubmit={onLogin}>
                          <div className="mb-3">
                            <label
                              htmlFor="email"
                              className="mb-2 block text-xs font-semibold"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
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
                              autoComplete=""
                              id="password"
                              type="password"
                              name="password"
                              placeholder="Password"
                              className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>

                          <div className="mb-3 flex flex-wrap content-center">
                            <input
                              id="password"
                              type="checkbox"
                              className="mr-1 checked:bg-wokr-red-100"
                            />{" "}
                            <label
                              htmlFor="password"
                              className="mr-auto text-xs font-semibold"
                            >
                              Remember for 30 days
                            </label>
                            <Link
                              to="#"
                              className="text-xs font-semibold text-wokr-red-100"
                            >
                              Forgot password?
                            </Link>
                          </div>

                          <div className="mb-3">
                            <button
                              title="signUp"
                              type="submit"
                              className="flex items-center justify-center mb-1.5 w-full text-center text-white bg-wokr-red-100 hover:bg-wokr-red-200 px-2 py-1.5 rounded-md"
                              disabled={!email || !password || loading}
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
                                  Sign in ...
                                </>
                              ) : (
                                "Sign in"
                              )}
                            </button>
                          </div>
                        </form>

                        <div className="mb-3">
                          <button
                            onClick={onGoogleLogin}
                            className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
                          >
                            <img
                              className="w-5 mr-2"
                              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                              alt=""
                            />
                            Sign in with Google
                          </button>
                        </div>

                        <div className="text-center">
                          <span className="text-xs text-gray-400 font-semibold">
                            Don't have an account?
                          </span>
                          <Link
                            to="/register"
                            className="text-xs font-semibold text-wokr-red-100"
                          >
                            Sign up
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden lg:flex flex-wrap content-center justify-center rounded-r-md bg-wokr-red-100"
                    style={{ width: "24rem", height: "32rem" }}
                  ></div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoginModal;
