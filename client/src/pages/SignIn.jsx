import React from 'react';

function SignUp() {
 // Get the password input element
 const passwordInput = document.getElementById('password');
 
 // Add an event listener to the password input element
 passwordInput.addEventListener('input', validatePassword);
 
 // Function to validate the password
 function validatePassword() {
   const password = passwordInput.value;
   
   if (password.length > 20) {
     // Password is valid
     passwordInput.setCustomValidity('');
   } else {
     // Password is invalid
     passwordInput.setCustomValidity('Password should be more than 20 characters.');
   }
 }
 
  return (
    <div>
      <form className="flex flex-col items-center">
        <input type="text" placeholder="Username" className="border border-gray-300 rounded-md p-4 mb-2" />
        <input type="password" placeholder="Password" className="border border-gray-300 rounded-md p-4 mb-2" />
        <button type="submit" className="bg-slate-500 text-white rounded-md p-2">Login</button>
      </form>
    </div>
  );
}

export default SignUp;