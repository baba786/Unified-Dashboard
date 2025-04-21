// Main script for the concept prototype

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the prototype
    initializePrototype();
    
    // Set up event listeners
    setupEventListeners();
});

function initializePrototype() {
    console.log('Sidebar Topic Selection with Chips Prototype initialized');
    
    // Mock data for article previews
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
                image: 'assets/images/placeholder1.jpg',
                tag: 'Featured'
            },
            {
                title: 'Picasso',
                description: 'Spanish painter and sculptor',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Featured'
            },
            {
                title: 'Modern Art',
                description: 'Art from the late 19th century to mid-20th century',
                image: 'assets/images/placeholder1.jpg',
                tag: 'Trending'
            }
        ],
        'Architecture': [
            {
                title: 'Gothic Architecture',
                description: 'Architectural style from European Middle Ages',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Featured'
            },
            {
                title: 'Frank Lloyd Wright',
                description: 'American architect and designer',
                image: 'assets/images/placeholder1.jpg',
                tag: 'Trending'
            },
            {
                title: 'Bauhaus',
                description: 'German art school operational from 1919 to 1933',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Featured'
            }
        ],
        'Music': [
            {
                title: 'Classical Music',
                description: 'Art music produced in the Western tradition',
                image: 'assets/images/placeholder1.jpg',
                tag: 'Featured'
            },
            {
                title: 'Jazz',
                description: 'Music genre originated in New Orleans',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Trending'
            },
            {
                title: 'Rock and Roll',
                description: 'Music genre originated in the United States',
                image: 'assets/images/placeholder1.jpg',
                tag: 'Popular'
            }
        ],
        'Literature': [
            {
                title: 'William Shakespeare',
                description: 'English playwright and poet',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Featured'
            },
            {
                title: 'The Great Gatsby',
                description: 'Novel by F. Scott Fitzgerald',
                image: 'assets/images/placeholder1.jpg',
                tag: 'Featured'
            },
            {
                title: 'Poetry',
                description: 'Literary work in which special intensity is given',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Trending'
            }
        ],
        'Comics and anime': [
            {
                title: 'Manga',
                description: 'Comics or graphic novels originating from Japan',
                image: 'assets/images/placeholder1.jpg',
                tag: 'Featured'
            },
            {
                title: 'Studio Ghibli',
                description: 'Japanese animation film studio',
                image: 'assets/images/placeholder2.jpg',
                tag: 'Trending'
            },
            {
                title: 'Marvel Comics',
                description: 'American publisher of comic books',
                image: 'assets/images/placeholder1.jpg',
                tag: 'Popular'
            }
        ]
    };
    
    // Store selected topics
    window.selectedTopics = [];
    
    // Initialize with "For you" articles
    updateArticleList('For you');
    
    // Create placeholder images with solid colors
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
    // Topic button opens the sidebar
    const topicBtn = document.getElementById('topic-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const closeSidebar = document.getElementById('close-sidebar');
    const cancelBtn = document.getElementById('cancel-btn');
    const applyBtn = document.getElementById('apply-btn');
    
    topicBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    });
    
    function closeSidebarFunction() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }
    
    closeSidebar.addEventListener('click', closeSidebarFunction);
    cancelBtn.addEventListener('click', closeSidebarFunction);
    sidebarOverlay.addEventListener('click', closeSidebarFunction);
    
    // Apply button updates the UI with selected topics
    applyBtn.addEventListener('click', () => {
        // Get selected topics
        const selectedTopicChips = document.querySelectorAll('.culture-chips .chip.active');
        window.selectedTopics = Array.from(selectedTopicChips).map(chip => chip.dataset.topic);
        
        // Update selected topics display
        updateSelectedTopicsDisplay();
        
        // Update article list based on selected topics
        if (window.selectedTopics.length > 0) {
            updateArticleList(window.selectedTopics[0]); // For simplicity, we're using the first selected topic
        }
        
        // Close the sidebar
        closeSidebarFunction();
    });
    
    // Main filter buttons
    const forYouBtn = document.getElementById('for-you-btn');
    const popularBtn = document.getElementById('popular-btn');
    
    forYouBtn.addEventListener('click', () => {
        // Clear selected topics
        window.selectedTopics = [];
        updateSelectedTopicsDisplay();
        
        // Update active state
        forYouBtn.classList.add('active');
        popularBtn.classList.remove('active');
        
        // Update article list
        updateArticleList('For you');
    });
    
    popularBtn.addEventListener('click', () => {
        // Clear selected topics
        window.selectedTopics = [];
        updateSelectedTopicsDisplay();
        
        // Update active state
        popularBtn.classList.add('active');
        forYouBtn.classList.remove('active');
        
        // Update article list
        updateArticleList('Popular');
    });
    
    // Topic chips in sidebar
    const topicChips = document.querySelectorAll('.culture-chips .chip');
    topicChips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Toggle active state
            chip.classList.toggle('active');
            
            // Show preview for the selected topic
            if (chip.classList.contains('active')) {
                const topic = chip.dataset.topic;
                showTopicPreview(topic);
            } else {
                // If no topics are selected, clear the preview
                if (document.querySelectorAll('.culture-chips .chip.active').length === 0) {
                    clearPreview();
                }
            }
        });
    });
    
    // Automatic filter chips in sidebar
    const autoFilterChips = document.querySelectorAll('.chip-group:not(.culture-chips) .chip');
    autoFilterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Deselect all siblings
            const siblingChips = chip.parentElement.querySelectorAll('.chip');
            siblingChips.forEach(c => c.classList.remove('active'));
            
            // Select clicked chip
            chip.classList.add('active');
        });
    });
}

function updateSelectedTopicsDisplay() {
    const selectedTopicsContainer = document.getElementById('selected-topics');
    selectedTopicsContainer.innerHTML = '';
    
    if (window.selectedTopics.length === 0) {
        // If no topics are selected, hide the container
        selectedTopicsContainer.style.display = 'none';
        return;
    }
    
    // Show the container
    selectedTopicsContainer.style.display = 'flex';
    
    // Create chips for each selected topic
    window.selectedTopics.forEach(topic => {
        const topicChip = document.createElement('div');
        topicChip.className = 'topic-chip';
        topicChip.innerHTML = `
            ${topic}
            <span class="remove-chip" data-topic="${topic}">✕</span>
        `;
        selectedTopicsContainer.appendChild(topicChip);
    });
    
    // Add event listeners for removing chips
    const removeButtons = document.querySelectorAll('.remove-chip');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const topicToRemove = e.target.dataset.topic;
            window.selectedTopics = window.selectedTopics.filter(t => t !== topicToRemove);
            updateSelectedTopicsDisplay();
            
            // Update article list based on remaining topics
            if (window.selectedTopics.length > 0) {
                updateArticleList(window.selectedTopics[0]);
            } else {
                // If no topics are selected, show "For you" content
                updateArticleList('For you');
                document.getElementById('for-you-btn').classList.add('active');
                document.getElementById('popular-btn').classList.remove('active');
            }
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

function clearPreview() {
    const previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = '<p class="select-prompt">Select a topic to see a preview of suggested articles</p>';
}

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
            
            // Create placeholder images for the new articles
            createPlaceholderImages();
            
            // Fade in the new articles
            articleList.style.opacity = '1';
        }, 300);
    }
}