import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


import {
  GraduationCap,
  BookOpen,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    totalSeats: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://studysphere-svfv.onrender.com/api/auth/register",
        formData,
      );

      toast.success(res.data.message);

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white rounded-[35px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* LEFT PANEL */}

        <div className="relative bg-gradient-to-br from-indigo-700 via-violet-700 to-blue-700 text-white p-12 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10"></div>

          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="bg-white text-indigo-700 p-3 rounded-2xl">
                <GraduationCap size={30} />
              </div>

              <div>
                <h2 className="text-3xl font-bold">StudySphere</h2>

                <p className="text-indigo-100">Library Management System</p>
              </div>
            </div>

            <h1 className="text-5xl font-bold leading-tight">
              Smart Library
              <br />
              Starts Here.
            </h1>

            <p className="text-lg text-indigo-100 mt-6 leading-8">
              Manage students, memberships, seats, invoices and payments with
              one beautiful dashboard.
            </p>

            <div className="grid gap-5 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl text-indigo-700">
                  <BookOpen size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Student Management</h3>

                  <p className="text-sm text-indigo-100">
                    Easy admission process.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl text-indigo-700">
                  <Users size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Seat Allocation</h3>

                  <p className="text-sm text-indigo-100">
                    Automatic seat tracking.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl text-indigo-700">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">Secure Payments</h3>

                  <p className="text-sm text-indigo-100">
                    Fast and reliable records.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-3">
              <ArrowRight />

              <span className="text-indigo-100">
                Empowering Learning Every Day
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}

 <div className="p-12 flex items-center justify-center">
          <div className="w-full max-w-xl">
               <h2 className="text-5xl font-extrabold text-slate-900">
              Create Account
            </h2>

            <p className="text-slate-500 mt-3 mb-8">
              Register your library and start managing .
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Full Name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Create a secure password"
                value={formData.password}
                onChange={handleChange}
              />

              <Input
                label="Total Library Seats"
                name="totalSeats"
                type="number"
                placeholder="Example: 100"
                value={formData.totalSeats}
                onChange={handleChange}
              />

              <Button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  to-violet-600
                  text-white
                  font-semibold
                  shadow-lg
                  hover:shadow-2xl
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                Create Account
              </Button>

              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-slate-200"></div>

                <span className="text-slate-400 text-sm">OR</span>

                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              <p className="text-center text-slate-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="
                    text-indigo-600
                    font-semibold
                    hover:text-violet-600
                    transition
                  "
                >
                  Login Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
