//how to keep users logged in with useContext

import React, { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase.js";
import { AuthContext } from "../../context/authContext.js";

import { toast } from "react-toastify";

type ModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const RegisterModal = ({ setOpen, open }: ModalProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const { dispatch } = useContext(AuthContext);

  const cancelButtonRef = useRef(null);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  /*   
const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  }; 
  */

  const navigateToProfile = () => {
    navigate("/setup-profile");
    setOpen(false);
  };

  const navigateToListing = () => {
    navigate("/listing");
    setOpen(false);
  };

  /*   
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        setEmail("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }; 
  */

  const onSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);

        dispatch({
          type: "LOGGED_IN_USER",
          payload: { email: user?.email, token: user?.accessToken },
        });

        window.localStorage.setItem("emailFormRegistration", email);
        handleNext();
        setEmail("");
        setPassword("");
        toast("Account created successfully", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
        console.log(errorCode, errorMessage);
      });
  };

  const onGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
        toast("Account created successfully", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });

        window.localStorage.setItem("emailFormRegistration", user.email!);

        handleNext();
        console.log(user);
        console.log("it works");
        console.log(token); // Fix for Problem 1
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const onDisplaySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isAvailable) {
      //submit the form
    }
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
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
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
                    className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
                    style={{ width: "24rem", height: "32rem" }}
                  >
                    {currentStep === 1 && (
                      <div className="md:w-72">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Create a new account
                        </Dialog.Title>

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
                              id="password"
                              type="password"
                              name="password"
                              placeholder="Password"
                              className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>

                          <div className="mb-3">
                            <button
                              type="submit"
                              className="mb-1.5 block w-full text-center text-white bg-wokr-red-100 hover:bg-wokr-red-200 px-2 py-1.5 rounded-md"
                            >
                              Sign up
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
                            Sign up with Google
                          </button>
                        </div>

                        <div className="text-center">
                          <span className="text-xs text-gray-400 font-semibold">
                            Already have an account?
                          </span>
                          <Link
                            to="/register"
                            className="text-xs font-semibold text-wokr-red-100"
                          >
                            Sign in
                          </Link>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="md:w-72 mx-auto">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Create your display name
                        </Dialog.Title>

                        <form className="mt-4" onSubmit={onDisplaySubmit}>
                          <div className="mb-3">
                            <label
                              htmlFor="email"
                              className="mb-2 block text-xs font-semibold"
                            >
                              Display name
                            </label>
                            <input
                              autoComplete=""
                              id="username"
                              name="username"
                              type="text"
                              placeholder="Create your display name"
                              className="block w-full rounded-md border border-gray-300 focus:border-wokr-red-100 focus:outline-none focus:ring-1 focus:ring-wokr-red-100 py-1 px-1.5 text-gray-500"
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </div>

                          <div className="mt-4 py-3 sm:flex sm:flex-row-reverse">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md bg-wokr-red-100 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wokr-red-200 sm:ml-3 sm:w-auto"
                              onClick={navigateToProfile}
                            >
                              Next
                            </button>

                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              onClick={navigateToListing}
                              ref={cancelButtonRef}
                            >
                              Skip
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
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

export default RegisterModal;
