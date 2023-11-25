import React, { useContext, useEffect, useState } from "react";
import { Link, redirect, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
const formData = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [_formData, set_FormData] = useState(formData);
  console.log(auth);
  const changeHandler = (e) => {
    set_FormData({ ..._formData, [e.target.Email]: e.target.value });
  };

  const submitFunc = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/login",
        formData
      );
      if (data.error) {
        return alert(data.error);
      } else {
        setAuth({ user: data.user, token: data.token });
        localStorage.setItem("auth", JSON.stringify(data));
        router("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if ((auth, auth?.token)) {
      router("/");
    }
  }, [auth, auth?.token]);
  return (
    <div>
      <div>
        <section className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div className="max-w-xl lg:max-w-3xl ">
                <form
                  onSubmit={submitFunc}
                  action="#"
                  className="mt-8 grid grid-cols-6 gap-6"
                >
                  <div className="col-span-6">
                    <label
                      for="Email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      value={_formData.email}
                      onChange={changeHandler}
                      type="email"
                      id="Email"
                      name="email"
                      className="mt-1 w-full rounded-md h-10 border border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="Password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>

                    <input
                      value={_formData.password}
                      onChange={changeHandler}
                      type="password"
                      id="Password"
                      name="password"
                      className="mt-1 w-full  rounded-md h-10 border border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                      By creating an account, you agree to our
                      <a href="#" className="text-gray-700 underline">
                        terms and conditions
                      </a>
                      and
                      <a href="#" className="text-gray-700 underline">
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                      type={submitFunc}
                    >
                      Login
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Do you have an account?
                      <Link to="/register" className="text-gray-700 underline">
                        Register
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
