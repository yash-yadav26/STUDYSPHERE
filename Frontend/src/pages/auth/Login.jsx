import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import axios from "axios";
import Button from "../../components/ui/Button";
import logo from "../../assets/logo.jpg";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://studysphere-svfv.onrender.com/api/auth/login",
        formData
      );

      const { admin, token } = res.data;

      login(admin, token);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">

      <div className="w-full max-w-7xl rounded-[35px] overflow-hidden bg-white shadow-2xl grid lg:grid-cols-2">

        {/* LEFT PANEL */}

        <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-700 p-12 overflow-hidden">

          {/* Background Circles */}

          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-violet-500/20"></div>

          <div className="absolute top-40 right-10 h-52 w-52 rounded-full bg-indigo-500/20"></div>

          <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-violet-400/10"></div>

          {/* Logo */}

          <div className="relative z-10 flex items-center gap-4">

            <img
              src={logo}
              alt=""
              className="h-12"
            />

            <h1 className="text-4xl font-bold text-white">
              StudySphere
            </h1>

          </div>

          {/* Content */}

          <div className="relative z-10 mt-10">

            <h2 className="text-6xl font-black leading-tight text-white">

              Welcome

              <br />

              <span className="text-violet-300">
                Back.
              </span>

            </h2>

            <div className="h-1 w-20 bg-violet-400 rounded-full my-8"></div>

            <p className="text-indigo-100 text-xl leading-9 max-w-md">

              Manage students, memberships,
              seats, payments and reports
              from one powerful dashboard.

            </p>

            <div className="space-y-7 mt-12">

              <div className="flex gap-5">

                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-2xl">
                  📚
                </div>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Student Management
                  </h3>

                  <p className="text-indigo-200">
                    Register and manage students effortlessly.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-2xl">
                  💺
                </div>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Seat Allocation
                  </h3>

                  <p className="text-indigo-200">
                    Allocate seats with real-time availability.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-2xl">
                  📈
                </div>

                <div>

                  <h3 className="text-white text-xl font-bold">
                    Analytics
                  </h3>

                  <p className="text-indigo-200">
                    Track revenue, memberships and growth.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Image */}

          <div className="relative z-10 flex justify-center mt-10">


          </div>

        </div>

        {/* RIGHT PANEL */}
                <div className="p-12 flex items-center justify-center">

          <div className="w-full max-w-md">

            <div className="text-center mb-10">

              <h2 className="text-5xl font-black text-slate-800">
                Welcome Back
              </h2>

              <p className="text-slate-500 mt-4 text-lg">
                Login to access your StudySphere dashboard
              </p>

              <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 mt-6"></div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>

                <label className="block mb-2 font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  bg-slate-50
                  px-5
                  py-4
                  outline-none
                  transition
                  duration-300
                  focus:border-indigo-500
                  focus:ring-4
                  focus:ring-indigo-100
                  "
                />

              </div>

              <div>

                <label className="block mb-2 font-semibold text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  bg-slate-50
                  px-5
                  py-4
                  outline-none
                  transition
                  duration-300
                  focus:border-indigo-500
                  focus:ring-4
                  focus:ring-indigo-100
                  "
                />

              </div>

              <Button
                type="submit"
                disabled={loading}
                className="
                w-full
                rounded-2xl
                py-4
                text-lg
                font-semibold
                text-white
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-purple-600
                shadow-xl
                hover:shadow-2xl
                hover:scale-[1.02]
                transition-all
                duration-300
                "
              >
                {loading ? "Logging In..." : "Login"}
              </Button>

              <div className="flex items-center gap-4 py-2">

                <div className="flex-1 h-px bg-slate-200"></div>

                <span className="text-slate-400 text-sm">
                  SECURE LOGIN
                </span>

                <div className="flex-1 h-px bg-slate-200"></div>

              </div>

              <p className="text-center text-slate-500 text-sm">
                Library Management System
              </p>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Login;