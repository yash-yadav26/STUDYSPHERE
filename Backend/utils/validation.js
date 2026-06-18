const validateName = (name) => {
  const nameRegex = /^[A-Za-z ]{3,30}$/;
  return nameRegex.test(name);
};

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

// Phone:
// 10 digits
// starts from 6,7,8,9
const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

// Seat Number:
// only numbers
// max 50000
const validateSeatNumber = (seatNumber) => {
  const seat = Number(seatNumber);

  return !isNaN(seat) && seat > 0 && seat <= 50000;
};

// Address:
// alphabets + numbers + spaces + comma + dash
const validateAddress = (address) => {
  const addressRegex = /^[A-Za-z0-9,\-\s]{5,100}$/;

  return addressRegex.test(address);
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  validatePhone,
  validateSeatNumber,
  validateAddress,
};
