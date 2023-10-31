// StudentID: yourStudentID
// Firstname: yourFirstName
// Lastname: yourLastName

function isPasswordValid(password) {
  // Check if the password is null or undefined
  if (password === null || password === undefined) {
    return false;
  }

  // Check the length of the password
  if (password.length < 8) {
    return false;
  }

  // Check for at least one uppercase letter, lowercase letter, digit, and special character
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharacterRegex = /[!@#\$%^&*]/;

  if (
    !uppercaseRegex.test(password) ||
    !lowercaseRegex.test(password) ||
    !digitRegex.test(password) ||
    !specialCharacterRegex.test(password)
  ) {
    return false;
  }

  return true;
}

// Test cases
console.log(isPasswordValid(undefined)); // false
console.log(isPasswordValid(null)); // false
console.log(isPasswordValid("")); // false
console.log(isPasswordValid("ab!12")); // false
console.log(isPasswordValid("1234abcd")); // false
console.log(isPasswordValid("Zky543#@")); // true
console.log(isPasswordValid("1#@!*aB^5")); // true
console.log(isPasswordValid("%5Ko&$pp")); // true
console.log(isPasswordValid("12345abcxyZ$")); // true
