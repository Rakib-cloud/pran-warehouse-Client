import React from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../../api/axiosPrivate";
import auth from "../../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import Social from "../Social/Social";
import "./Login.css";

const Login = () => {
  let location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [user] = useAuthState(auth);

  const [signInWithEmailAndPassword, loggedUser, loggedLoading, loggedError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  // getting the accessToken ans saving it in localStorage
  const regTokenOnGoogleSignIn = async (email) => {
    const { data } = await axiosPrivate.post("https://pran-dealer-inventory.herokuapp.com/getToken", {
      email,
    });
    if (data) {
      // save token to localStorage
      localStorage.setItem("accessToken", data.accessToken);
    }
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
    reset();
  };

  const gotoPrevLocation = () => navigate(from, { replace: true });

  if (loggedUser?.user?.uid || googleUser?.user?.uid) {
    toast.success("Login Successful!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "success1",
    });
    regTokenOnGoogleSignIn(user?.email);
    gotoPrevLocation();
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleResetpassword = async () => {
    const email = document.getElementById("email").value;
    if (email !== "") {
      await sendPasswordResetEmail(email);
      toast.success("Password reset email sent!");
      document.getElementById("email").value = "";
      return;
    } else {
      toast.warn("Please provide an Email!");
      return;
    }
  };

  if (googleLoading || loggedLoading || sending) {
    return <LoadingSpinner />;
  }

  //setting up error messages
  let firebaseErrorMessage;
  if (loggedError) {
    if (loggedError.message.includes("auth/user-not-found")) {
      firebaseErrorMessage =
        "There is no user found with this email. Please recheck your email.";
    }
    if (loggedError.message.includes("auth/wrong-password")) {
      firebaseErrorMessage =
        "You have entered a wrong password. Please try again.";
    }
    if (loggedError.message.includes("auth/too-many-requests")) {
      firebaseErrorMessage =
        "Too many unsuccessfull attempts. Please try again after some time.";
    }
  }
  if (googleError?.message) {
    if (googleError.message.includes("auth/popup-closed-by-user")) {
      firebaseErrorMessage =
        "You've closed the authorization pop-up. Please try again.";
    }
  }
  if (resetError?.message) {
    firebaseErrorMessage = resetError.message;
  }

  return (
    <div id="login-container" className="mx-auto">
      <h2 className="text-center my-5">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-100 border rounded px-2 py-2 fs-5"
          id="email"
          {...register("email", { required: "This field is required." })}
          placeholder="Your Email"
          type="email"
        />
        <span className="d-block mb-3 text-danger">
          {errors.email?.message && <BsFillInfoCircleFill className="me-2" />}
          {errors.email?.message}
        </span>
        <input
          className="w-100 border rounded px-2 py-2 fs-5"
          {...register("password", { required: "This field is required." })}
          placeholder="Password"
          type="password"
        />
        <span className="d-block mb-3 text-danger">
          {errors.password?.message && (
            <BsFillInfoCircleFill className="me-2" />
          )}
          {errors.password?.message}
        </span>

        {/* conditionally rendering errors */}
        <span className="d-block mb-3 text-danger">
          {(loggedError?.message || googleError?.message) && (
            <BsFillInfoCircleFill className="me-2" />
          )}
          {loggedError || googleError ? firebaseErrorMessage : ""}
        </span>

        <input
          type="submit"
          value="Login"
          className="d-block mx-auto border rounded"
        />
      </form>
      <div className="my-3 text-center">
        <p>
          Need an account? <Link to="/signup">SignUp here.</Link>{" "}
        </p>
      </div>
      <div className="my-3 text-center">
        <p>
          Forgot password?{" "}
          <button
            onClick={() => handleResetpassword()}
            className="btn btn-link"
          >
            Reset it now.
          </button>
        </p>
      </div>
      <div className="d-flex gap-2 justify-content-center align-items-center my-5">
        <div style={{ height: "1px" }} className="w-25 border"></div>
        <div>Or</div>
        <div style={{ height: "1px" }} className="w-25 border"></div>
      </div>
      <Social handleGoogleSignIn={handleGoogleSignIn}></Social>
    </div>
  );
};

export default Login;
