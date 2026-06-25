const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="
          w-full
          px-5
          py-3.5
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          text-slate-700
          placeholder:text-slate-400
          shadow-sm
          transition-all
          duration-300
          outline-none

          hover:border-indigo-300
          hover:bg-white

          focus:bg-white
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-100
          focus:shadow-lg
        "
      />
    </div>
  );
};

export default Input;