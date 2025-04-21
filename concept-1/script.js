// Main script for the concept prototype

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the prototype
    initializePrototype();
    
    // Set up event listeners
    setupEventListeners();
});

function initializePrototype() {
    console.log('Topic Selection with Preview Prototype initialized');
    
    // Mock data for article previews based on topics
    window.topicPreviews = {
        // Default filter sets
        'For you': [
            {
                title: 'Cubism',
                description: 'art movement',
                image: 'assets/images/placeholder1.jpg',
                tag: 'Featured'
            },
            {
                title: 'Watercolor painting',
                description: 'painting method',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Featured'
            }
        ],
        'Popular': [
            {
                title: 'Renaissance',
                description: 'European cultural movement',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Trending'
            },
            {
                title: 'Surrealism',
                description: 'Cultural movement',
                image: 'assets/images/placeholder1.jpg',
                tag: 'Trending'
            },
            {
                title: 'Abstract expressionism',
                description: 'American art movement',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Popular'
            }
        ],
        
        // Topic specific previews
        'Art': [
            {
                title: 'Impressionism',
                description: 'Art movement originated in France',
                image: 'assets/images/placeholder1.jpg'
            },
            {
                title: 'Picasso',
                description: 'Spanish painter and sculptor',
                image: 'assets/images/placeholder2.jpg'
            },
            {
                title: 'Modern Art',
                description: 'Art from the late 19th century to mid-20th century',
                image: 'assets/images/placeholder1.jpg'
            }
        ],
        'Architecture': [
            {
                title: 'Gothic Architecture',
                description: 'Architectural style from European Middle Ages',
                image: 'assets/images/placeholder2.jpg'
            },
            {
                title: 'Frank Lloyd Wright',
                description: 'American architect and designer',
                image: 'assets/images/placeholder1.jpg'
            },
            {
                title: 'Bauhaus',
                description: 'German art school operational from 1919 to 1933',
                image: 'assets/images/placeholder2.jpg'
            }
        ],
        'Music': [
            {
                title: 'Classical Music',
                description: 'Art music produced in the Western tradition',
                image: 'assets/images/placeholder1.jpg'
            },
            {
                title: 'Jazz',
                description: 'Music genre originated in New Orleans',
                image: 'assets/images/placeholder2.jpg'
            },
            {
                title: 'Rock and Roll',
                description: 'Music genre originated in the United States',
                image: 'assets/images/placeholder1.jpg'
            }
        ],
        'Literature': [
            {
                title: 'William Shakespeare',
                description: 'English playwright and poet',
                image: 'assets/images/placeholder2.jpg'
            },
            {
                title: 'The Great Gatsby',
                description: 'Novel by F. Scott Fitzgerald',
                image: 'assets/images/placeholder1.jpg'
            },
            {
                title: 'Poetry',
                description: 'Literary work in which special intensity is given',
                image: 'assets/images/placeholder2.jpg'
            }
        ],
        'Comics and anime': [
            {
                title: 'Manga',
                description: 'Comics or graphic novels originating from Japan',
                image: 'assets/images/placeholder1.jpg'
            },
            {
                title: 'Studio Ghibli',
                description: 'Japanese animation film studio',
                image: 'assets/images/placeholder2.jpg'
            },
            {
                title: 'Marvel Comics',
                description: 'American publisher of comic books',
                image: 'assets/images/placeholder1.jpg'
            }
        ]
    };
    
    // Initialize placeholder images with solid colors
    createPlaceholderImages();
}

function createPlaceholderImages() {
    // Create placeholder images for thumbnails
    const placeholders = document.querySelectorAll('.article-thumbnail img');
    placeholders.forEach((img, index) => {
        // Only set src if it doesn't already exist
        if (!img.getAttribute('src') || img.getAttribute('src').includes('placeholder')) {
            img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23${index % 2 === 0 ? 'eaecf0' : 'dce3f9'}' /%3E%3C/svg%3E`;
        }
    });
}

function setupEventListeners() {
    // Topic selection button opens the topic panel
    const topicBtn = document.getElementById('topic-btn');
    const topicPanel = document.getElementById('topic-panel');
    const closePanel = document.getElementById('close-panel');
    const doneBtn = document.getElementById('done-btn');
    
    topicBtn.addEventListener('click', () => {
        topicPanel.classList.add('open');
    });
    
    closePanel.addEventListener('click', () => {
        topicPanel.classList.remove('open');
    });
    
    doneBtn.addEventListener('click', () => {
        topicPanel.classList.remove('open');
        
        // Update the article list based on selected topic
        const selectedTopicElement = document.querySelector('.topic-btn.selected');
        if (selectedTopicElement) {
            const topic = selectedTopicElement.dataset.topic;
            updateArticleList(topic);
            
            // Update the selected topic button text
            document.getElementById('selected-topic').textContent = topic;
        }
    });
    
    // Topic buttons show preview when clicked
    const topicButtons = document.querySelectorAll('.topic-btn');
    topicButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const topic = e.target.dataset.topic;
            
            // Deselect all topic buttons
            topicButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Select the clicked button
            e.target.classList.add('selected');
            
            // Show preview for the selected topic
            showTopicPreview(topic);
        });
    });
    
    // Main filter buttons update the article list
    const forYouBtn = document.getElementById('for-you-btn');
    const popularBtn = document.getElementById('popular-btn');
    
    forYouBtn.addEventListener('click', () => {
        // Update article list with "For you" content
        updateArticleList('For you');
        
        // Reset the topic button text
        document.getElementById('selected-topic').textContent = '...more';
    });
    
    popularBtn.addEventListener('click', () => {
        // Update article list with "Popular" content
        updateArticleList('Popular');
        
        // Reset the topic button text
        document.getElementById('selected-topic').textContent = '...more';
    });
    
    // Filter buttons toggle active state
    const filterButtons = document.querySelectorAll('.filters .filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Only toggle siblings, not all filter buttons
            const siblingButtons = e.target.closest('.filters, .auto-filters').querySelectorAll('.filter-btn');
            siblingButtons.forEach(btn => btn.classList.remove('active'));
            
            // Select the clicked button
            button.classList.add('active');
        });
    });
}

function showTopicPreview(topic) {
    const previewContainer = document.getElementById('preview-container');
    
    // Clear the preview container
    previewContainer.innerHTML = '';
    
    // Get the preview articles for the selected topic
    const previewArticles = window.topicPreviews[topic];
    
    if (previewArticles && previewArticles.length > 0) {
        // Create article previews
        previewArticles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'preview-article';
            
            articleElement.innerHTML = `
                <div class="preview-thumbnail">
                    <img src="${article.image}" alt="${article.title}">
                </div>
                <div class="preview-info">
                    <h5>${article.title}</h5>
                    <p>${article.description}</p>
                </div>
            `;
            
            previewContainer.appendChild(articleElement);
        });
    } else {
        // Show a message if no preview is available
        previewContainer.innerHTML = `<p class="select-prompt">No preview available for ${topic}</p>`;
    }
}

// Update the article list based on the selected filter or topic
function updateArticleList(filter) {
    const articleList = document.getElementById('article-list');
    
    // Get the articles for the selected filter or topic
    const articles = window.topicPreviews[filter];
    
    if (articles && articles.length > 0) {
        // Clear the article list with a fade effect
        articleList.style.opacity = '0';
        
        setTimeout(() => {
            // Clear the article list
            articleList.innerHTML = '';
            
            // Create article cards
            articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'article-card';
                
                articleElement.innerHTML = `
                    <div class="article-thumbnail">
                        <img src="${article.image}" alt="${article.title}">
                    </div>
                    <div class="article-info">
                        <h4>${article.title}</h4>
                        <p>${article.description}</p>
                        <div class="article-tag">${article.tag || 'Featured'}</div>
                    </div>
                    <div class="bookmark-icon">🔖</div>
                    <div class="close-icon">✕</div>
                `;
                
                articleList.appendChild(articleElement);
            });
            
            // Fade in the new articles
            articleList.style.opacity = '1';
        }, 300);
    }
}

// Initial setup for article list
document.addEventListener('DOMContentLoaded', () => {
    // Initialize with "For you" articles
    updateArticleList('For you');
});