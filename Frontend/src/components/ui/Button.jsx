const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 hover:-translate-y-1 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;