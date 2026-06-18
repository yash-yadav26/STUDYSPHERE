const Card = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {children}
    </div>
  );
};

export default Card;