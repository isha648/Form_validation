    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {

        // Get the form element
        var form = document.getElementById('myForm');
        
        // Listen for the form submit event
        form.addEventListener('submit', function(event) {
        
          // Get the values of the form fields
          var fname = document.getElementById('fname').value;
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var confirmPassword = document.getElementById('confirmpassword').value;
          var phone = document.getElementById('phoneno').value;
        
          // Validate the name field
          if (fname.trim() == '') {
            alert('Please enter your name.');
            event.preventDefault();
            return;
          }
        
          // Validate the email field
          if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
          }
        
          // Validate the password field
          if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            event.preventDefault();
            return;
          }
          // Validate the confirm password field
          if (password !== confirmPassword) {
              alert('Passwords do not match.');
              event.preventDefault();
              return;
            }
        
          // Validate the phone number field
          if (!isValidPhoneNumber(phoneno)) {
            alert('Please enter a valid phone number.');
            event.preventDefault();
            return;
          }
        
        });
        
        // Helper function to validate email address
        function isValidEmail(email) {
          var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(email);
        }
        
        // Helper function to validate phone number
        function isValidPhoneNumber(phoneno) {
          var re = /^\d{10}$/;
          return re.test(phone);
        }
        
        });