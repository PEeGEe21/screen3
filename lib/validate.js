export default function login_validate(values) {
  const errors = {};

  //   validation for email

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  //   validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 4 || values.password.length > 20) {
    errors.password = 'Must be greater than 4 and less than 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'invalid password';
  }

  return errors;
}


export function signupValidate(values) {
  const errors = {};
  
    //   validation for first name
  if (!values.fname) {
    errors.fname = 'Required';
  } else if (values.fname.length < 3 ) {
    errors.fname = 'Invalid FirstName...';
  } 
//   else if (values.fname.includes(' ')) {
//     errors.fname = 'Invalid FirstName...';
//   }

  //   validation for last name
  if (!values.lname) {
    errors.lname = 'Required';
  } else if (values.lname.length < 3 ) {
    errors.lname = 'Invalid LastName...';
  } 
// else if (values.lname.includes(' ')) {
//     errors.lname = 'Invalid LastName...';
//   }
  //   validation for email
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  //   validation for password
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5 || values.password.length > 20) {
    errors.password = 'Must be greater than 8 and less than 20 characters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'invalid password';
  }

  return errors;
}
