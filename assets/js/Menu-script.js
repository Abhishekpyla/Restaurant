function toggleMenu() {
  document.querySelector('.nav-menu').classList.toggle('show');
}

function showCategory(category) {
  // Remove active class from all filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to clicked button
  event.target.classList.add('active');
  
  // Show/hide menu items based on category
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
      item.style.animation = 'fadeIn 0.5s ease-in-out';
    } else {
      item.style.display = 'none';
    }
  });
}

function searchMenu() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.toLowerCase().trim();
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    const itemName = item.querySelector('h3').textContent.toLowerCase();
    const itemDescription = item.querySelector('.description').textContent.toLowerCase();
    
    if (itemName.includes(searchTerm) || itemDescription.includes(searchTerm) || searchTerm === '') {
      item.style.display = 'block';
      item.style.animation = 'fadeIn 0.5s ease-in-out';
    } else {
      item.style.display = 'none';
    }
  });
  
  // If search is performed, show all categories
  if (searchTerm !== '') {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
  }
}

// Add event listener for Enter key in search input
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchMenu();
      }
    });
  }
  
  // Initialize with all items shown
  showCategory('all');
});

// Add animation class to menu items when they become visible
function animateMenuItems() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
      }
    });
  }, {
    threshold: 0.1
  });
  
  menuItems.forEach(item => {
    observer.observe(item);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateMenuItems);