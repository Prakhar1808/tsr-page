// Get blog card data from injected window variable
const blogCards = window.blogData || [];

// Generate blog cards
function generateBlogCards() {
  const blogGrid = document.querySelector('.blog-grid');
  
  if (!blogGrid) return;
  
  blogGrid.innerHTML = blogCards.map(card => `
    <a href="${card.url}" ${card.url.startsWith('http') ? 'target="_blank"' : ''} class="blog-card">
      <img src="${card.image}" alt="${card.alt}" class="blog-card-image">
      <div class="blog-card-overlay">
        <h2 class="blog-card-title">${card.title}</h2>
      </div>
    </a>
  `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', generateBlogCards);
