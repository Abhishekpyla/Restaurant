function showPage(id) {
  // Hide all page sections
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show the target page section
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
  
  // Hide mobile navigation menu
  document.querySelector('.nav-menu').classList.remove('show');
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function toggleMenu() {
  document.querySelector('.nav-menu').classList.toggle('show');
}

function showLoginTab(type) {
  // Remove active class from all tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Hide all login forms
  document.querySelectorAll('.login-form-container').forEach(form => {
    form.classList.remove('active');
  });
  
  // Show selected tab and form
  event.target.classList.add('active');
  document.getElementById(type + '-login-form').classList.add('active');
}

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
  // Customer login form
  const customerLoginForm = document.querySelector('#customer-login-form .login-form');
  if (customerLoginForm) {
    customerLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('customer-email').value;
      const mobile = document.getElementById('customer-mobile').value;
      
      if (email && mobile) {
        alert('Customer login successful! Welcome back.');
        // Here you would typically make an API call to authenticate
      }
    });
  }
  
  // Staff login form
  const staffLoginForm = document.querySelector('#staff-login-form .login-form');
  if (staffLoginForm) {
    staffLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('staff-email').value;
      const password = document.getElementById('staff-password').value;
      
      if (email && password) {
        alert('Staff login successful! Access granted.');
        // Here you would typically make an API call to authenticate
      }
    });
  }
  
  // signup form
  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const mobile = document.getElementById('reg-mobile').value;
      const address = document.getElementById('reg-address').value;
      
      if (name && email && mobile && address) {
        alert('Registration successful! Welcome to Bella Vista.');
        // Here you would typically make an API call to signup the user
        signupForm.reset();
      }
    });
  }
  
  // Feedback form
  const feedbackForm = document.querySelector('.feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('feedback-name').value;
      const email = document.getElementById('feedback-email').value;
      const rating = document.getElementById('feedback-rating').value;
      const comments = document.getElementById('feedback-comments').value;
      
      if (name && email && rating && comments) {
        alert('Thank you for your feedback! We appreciate your input.');
        // Here you would typically make an API call to submit feedback
        feedbackForm.reset();
      }
    });
  }
});