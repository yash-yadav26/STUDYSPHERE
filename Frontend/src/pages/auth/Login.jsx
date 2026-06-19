import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend-only login
    login({
      email: formData.email,
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md  ">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />
            <Button type="submit">
            Login
          </Button>
         

        </form>

      </div>
    </div>
  );
};

export default Login;