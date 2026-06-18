import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          StudySphere Admin
        </h1>

        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
        />

        <Button>
          Login
        </Button>

      </div>
    </div>
  );
};

export default Login;