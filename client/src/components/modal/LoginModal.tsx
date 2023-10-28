import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase.js";

type ModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const LoginModal = ({ setOpen, open }: ModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cancelButtonRef = useRef(null);

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
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
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log(user);
        console.log("it works");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
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
                    className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
                    style={{ width: "24rem", height: "32rem" }}
                  >
                    <div className="w-72">
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
                            type="submit"
                            className="mb-1.5 block w-full text-center text-white bg-wokr-red-100 hover:bg-wokr-red-200 px-2 py-1.5 rounded-md"
                          >
                            Sign in
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

                  <div
                    className="flex flex-wrap content-center justify-center rounded-r-md bg-wokr-red-100"
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
