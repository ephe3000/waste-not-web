const validate = (email, telephone) => {
  const errors = {};
  if (email) {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(email) === false) {
      errors.email = "Please enter a valid email address";
    }
  }
  if (telephone) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (regex.test(telephone) === false) {
      errors.telephone = "Please enter a valid telephone number";
    }
  }

  return errors;
};

export default validate;
