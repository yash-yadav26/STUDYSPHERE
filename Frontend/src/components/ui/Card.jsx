const Card = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:-translate-y-1">
      {children}
    </div>
  );
};

export default Card;