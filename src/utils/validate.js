export const checkValidData = (email, password) => {
  //   const isPhoneValid = /^\+?([0-9]{2})\)?[-. ]?([0-9]{10})$/.test(phone);
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (!isUsernameValid) return "Invalid Username !!";
  //   if (!isPhoneValid) return "Invalid Phone Number !!";
  if (!isEmailValid) return "InValid Email !!";
  if (!isPasswordValid) return "InValid Password !!";

  return null;
};
