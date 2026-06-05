// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Search Functionality
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const resultsContainer = document.getElementById('results-container');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query.length < 2) {
            alert('Please enter at least 2 characters to search');
            return;
        }

        // Get all posts data from the page
        const posts = getAllPosts();
        const results = posts.filter(post => {
            return post.title.toLowerCase().includes(query) ||
                   post.excerpt.toLowerCase().includes(query) ||
                   post.category.toLowerCase().includes(query);
        });

        displaySearchResults(results, query);
    }

    function getAllPosts() {
        const posts = [];
        const postCards = document.querySelectorAll('.post-card');
        
        postCards.forEach(card => {
            const titleElement = card.querySelector('h3 a');
            const excerptElement = card.querySelector('.post-card-excerpt');
            const categoryElement = card.querySelector('.post-card-category');
            const dateElement = card.querySelector('.post-card-date');
            const imageElement = card.querySelector('.post-card-image img');
            
            if (titleElement) {
                posts.push({
                    title: titleElement.textContent,
                    url: titleElement.getAttribute('href'),
                    excerpt: excerptElement ? excerptElement.textContent : '',
                    category: categoryElement ? categoryElement.textContent : '',
                    date: dateElement ? dateElement.textContent : '',
                    image: imageElement ? imageElement.getAttribute('src') : ''
                });
            }
        });
        
        return posts;
    }

    function displaySearchResults(results, query) {
        if (!searchResults || !resultsContainer) return;

        // Scroll to results
        searchResults.style.display = 'block';
        searchResults.scrollIntoView({ behavior: 'smooth' });

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <p class="no-posts">No results found for "${query}"</p>
            `;
            return;
        }

        let html = `<p style="margin-bottom: 20px; color: #666;">Found ${results.length} result${results.length > 1 ? 's' : ''} for "${query}"</p>`;
        html += '<div class="post-grid">';
        
        results.forEach(post => {
            html += `
                <article class="post-card">
                    ${post.image ? `
                        <a href="${post.url}" class="post-card-image">
                            <img src="${post.image}" alt="${post.title}">
                        </a>
                    ` : ''}
                    <div class="post-card-content">
                        <span class="post-card-category">${post.category}</span>
                        <h3><a href="${post.url}">${post.title}</a></h3>
                        ${post.excerpt ? `<p class="post-card-excerpt">${post.excerpt}</p>` : ''}
                        ${post.date ? `<span class="post-card-date">${post.date}</span>` : ''}
                    </div>
                </article>
            `;
        });
        
        html += '</div>';
        resultsContainer.innerHTML = html;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 10);
        });
    });

    // External links open in new tab
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.hostname.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Back to top button (optional enhancement)
    let backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color, #c41e3a);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Made with Bob
