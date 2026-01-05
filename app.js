// ==================== Newspaper Data ====================
const newspapers = [
    // বাংলা (Bangladesh)
    { id: 'prothom-alo', name: 'Prothom Alo', banglaName: 'প্রথম আলো', url: 'https://www.prothomalo.com/', category: 'bangladesh', isPopular: true },
    { id: 'jugantor', name: 'Jugantor', banglaName: 'যুগান্তর', url: 'https://www.jugantor.com/', category: 'bangladesh', isPopular: true },
    { id: 'somokal', name: 'Somokal', banglaName: 'সমকাল', url: 'https://samakal.com/', category: 'bangladesh', isPopular: true },
    { id: 'the-daily-star-bangla', name: 'The Daily Star Bangla', banglaName: 'দ্য ডেইলি স্টার বাংলা', url: 'https://bangla.thedailystar.net/', category: 'bangladesh', isPopular: true },
    { id: 'manabjamin', name: 'Manabjamin', banglaName: 'মানবজমিন', url: 'https://mzamin.com/', category: 'bangladesh', isPopular: false },
    { id: 'ettefaq', name: 'Ettefaq', banglaName: 'ইত্তেফাক', url: 'https://www.ittefaq.com.bd/', category: 'bangladesh', isPopular: true },
    { id: 'kaler-kontho', name: 'Kaler Kantho', banglaName: 'কালের কণ্ঠ', url: 'https://www.kalerkantho.com/', category: 'bangladesh', isPopular: true },
    { id: 'bangladesh-protidin', name: 'Bangladesh Protidin', banglaName: 'বাংলাদেশ প্রতিদিন', url: 'https://www.bd-pratidin.com/', category: 'bangladesh', isPopular: true },
    { id: 'amader-somoy', name: 'Amader Somoy', banglaName: 'আমাদের সময়', url: 'https://www.amadershomoy.com/', category: 'bangladesh', isPopular: false },
    { id: 'protidiner-bangladesh', name: 'Protidiner Bangladesh', banglaName: 'প্রতিদিনের বাংলাদেশ', url: 'https://www.protidinerbangladesh.com/', category: 'bangladesh', isPopular: false },
    { id: 'desh-rupantor', name: 'Desh Rupantor', banglaName: 'দেশ রূপান্তর', url: 'https://www.deshrupantor.com/', category: 'bangladesh', isPopular: false },
    { id: 'bangladesh-journal', name: 'Bangladesh Journal', banglaName: 'বাংলাদেশ জার্নাল', url: 'https://www.bd-journal.com/', category: 'bangladesh', isPopular: false },
    { id: 'bdnews24-bd', name: 'BDNews24', banglaName: 'বিডিনিউজ২৪', url: 'https://bangla.bdnews24.com/', category: 'bangladesh', isPopular: true },
    { id: 'ajker-potrika', name: 'Ajker Potrika', banglaName: 'আজকের পত্রিকা', url: 'https://www.ajkerpatrika.com/', category: 'bangladesh', isPopular: false },
    { id: 'kalbela', name: 'Kalbela', banglaName: 'কালবেলা', url: 'https://www.kalbela.com/', category: 'bangladesh', isPopular: false },
    { id: 'noyadigonta', name: 'Noya Digonta', banglaName: 'নয়া দিগন্ত', url: 'https://www.dailynayadiganta.com/', category: 'bangladesh', isPopular: false },
    { id: 'inkilab', name: 'Inkilab', banglaName: 'ইনকিলাব', url: 'https://dailyinqilab.com/', category: 'bangladesh', isPopular: false },
    { id: 'jay-jay-din', name: 'Jay Jay Din', banglaName: 'যায়যায়দিন', url: 'https://www.jaijaidinbd.com/', category: 'bangladesh', isPopular: false },
    { id: 'doinik-bangla', name: 'Doinik Bangla', banglaName: 'দৈনিক বাংলা', url: 'https://www.doinikbangla.com/', category: 'bangladesh', isPopular: false },
    { id: 'bhorer-kagoj', name: 'Bhorer Kagoj', banglaName: 'ভোরের কাগজ', url: 'https://www.bhorerkagoj.com/', category: 'bangladesh', isPopular: true },
    { id: 'jonokontho', name: 'Jonokontho', banglaName: 'জনকন্ঠ', url: 'https://www.jonokontho.com/', category: 'bangladesh', isPopular: false },
    { id: 'odhikar', name: 'Odhikar', banglaName: 'অধিকার', url: 'https://odhikar.org/', category: 'bangladesh', isPopular: false },
    { id: 'oparejeyo-bangla', name: 'Oparejeyo Bangla', banglaName: 'অপরাজেয় বাংলা', url: 'https://www.aparajeobangla.com/', category: 'bangladesh', isPopular: false },
    { id: 'dhaka-today-bd', name: 'Dhaka Today', banglaName: 'ঢাকা টুডে', url: 'https://www.dhakatoday.com/', category: 'bangladesh', isPopular: false },
    { id: 'barta-24', name: 'Barta 24', banglaName: 'বার্তা ২৪', url: 'https://www.barta24.com/', category: 'bangladesh', isPopular: false },

    // ইংরেজি (English)
    { id: 'the-daily-star', name: 'The Daily Star', banglaName: 'দ্য ডেইলি স্টার', url: 'https://www.thedailystar.net/', category: 'english', isPopular: true },
    { id: 'the-bangladesh-today', name: 'The Bangladesh Today', banglaName: 'দ্য বাংলাদেশ টুডে', url: 'https://thebangladeshtoday.com/', category: 'english', isPopular: false },
    { id: 'bangladesh-sangbad-sangstha', name: 'Bangladesh Sangbad Sangstha', banglaName: 'বাংলাদেশ সংবাদ সংস্থা', url: 'https://www.bssnews.net/', category: 'english', isPopular: true },
    { id: 'new-age', name: 'New Age', banglaName: 'নিউ এজ', url: 'https://www.newagebd.net/', category: 'english', isPopular: true },
    { id: 'bangla-news-24-en', name: 'Bangla News 24', banglaName: 'বাংলা নিউজ ২৪', url: 'https://www.banglanews24.com/english/', category: 'english', isPopular: true },
    { id: 'united-news-of-bangladesh', name: 'United News of Bangladesh', banglaName: 'ইউনাইটেড নিউজ অফ বাংলাদেশ', url: 'https://unb.com.bd/', category: 'english', isPopular: true },
    { id: 'daily-sun', name: 'Daily Sun', banglaName: 'ডেইলি সান', url: 'https://www.daily-sun.com/', category: 'english', isPopular: true },
    { id: 'dhaka-tribune-en', name: 'Dhaka Tribune', banglaName: 'ঢাকা ট্রিবিউন', url: 'https://www.dhakatribune.com/', category: 'english', isPopular: true },
    { id: 'prothom-alo-english', name: 'Prothom Alo English', banglaName: 'প্রথম আলো ইংরেজি', url: 'https://en.prothomalo.com/', category: 'english', isPopular: true },
    { id: 'daily-asian-age', name: 'Daily Asian Age', banglaName: 'ডেইলি এশিয়ান এজ', url: 'https://dailyasianage.com/', category: 'english', isPopular: false },
    { id: 'bangladesh-post', name: 'Bangladesh Post', banglaName: 'বাংলাদেশ পোস্ট', url: 'https://www.bangladeshpost.net/', category: 'english', isPopular: false },
    { id: 'daily-observer', name: 'Daily Observer', banglaName: 'ডেইলি অবজারভার', url: 'https://www.observerbd.com/', category: 'english', isPopular: false },

    // আঞ্চলিক (Regional)
    { id: 'doinik-azadi', name: 'Doinik Azadi', banglaName: 'দৈনিক আজাদী', url: 'https://dainikazadi.net/', category: 'regional', isPopular: false },
    { id: 'doinik-purbokon', name: 'Doinik Purbokon', banglaName: 'দৈনিক পূর্বকোণ', url: 'https://dainikpurbokone.net/', category: 'regional', isPopular: false },
    { id: 'doinik-amader-cumilla', name: 'Doinik Amader Cumilla', banglaName: 'দৈনিক আমাদের কুমিল্লা', url: 'https://www.dailyamadercomilla.com/', category: 'regional', isPopular: false },
    { id: 'doinik-purbanchol', name: 'Doinik Purbanchol', banglaName: 'দৈনিক পূর্বাঞ্চল', url: 'https://purbanchal.com/', category: 'regional', isPopular: false },
    { id: 'coxbazar-news', name: 'Coxbazar News', banglaName: 'কক্সবাজার নিউজ', url: 'https://www.coxsbazarnews.com/', category: 'regional', isPopular: false },
    { id: 'ukhiya-news', name: 'Ukhiya News', banglaName: 'উখিয়া নিউজ', url: 'https://ukhiyanews.com/', category: 'regional', isPopular: false },
    { id: 'doinik-matha-vanga', name: 'Doinik Matha Vanga', banglaName: 'দৈনিক মাথাভাঙ্গা', url: 'https://mathabhanga.com/', category: 'regional', isPopular: false },
    { id: 'rajsahi-news-24', name: 'Rajsahi News 24', banglaName: 'রাজশাহী নিউজ ২৪', url: 'https://rajshahinews24.com/', category: 'regional', isPopular: false },
    { id: 'chattagram-news', name: 'Chattagram News', banglaName: 'চট্টগ্রাম নিউজ', url: 'https://ctgnews.com/', category: 'regional', isPopular: false },
    { id: 'doinik-korotowa', name: 'Doinik Korotowa', banglaName: 'দৈনিক করতোয়া', url: 'https://dailykaratoa.com/', category: 'regional', isPopular: false },
    { id: 'doinik-khoyai', name: 'Doinik Khoyai', banglaName: 'দৈনিক খোয়াই', url: 'https://dailykhowai.com/', category: 'regional', isPopular: false },
    { id: 'doinik-shylet', name: 'Doinik Shylet', banglaName: 'দৈনিক সিলেট', url: 'https://dainiksylhet.com/', category: 'regional', isPopular: false },
    { id: 'doinik-coxbazar', name: 'Doinik Coxbazar', banglaName: 'দৈনিক কক্সবাজার', url: 'https://www.dainikcoxsbazar.com/index.php', category: 'regional', isPopular: false },
    { id: 'doinik-ajker-jamalpur', name: 'Doinik Ajker Jamalpur', banglaName: 'দৈনিক আজকের জামালপুর', url: 'https://ajkerjamalpur.com/', category: 'regional', isPopular: false },
    { id: 'surma-times', name: 'Surma Times', banglaName: 'সুরমা টাইমস', url: 'https://surmatimes.com/', category: 'regional', isPopular: false },
    { id: 'daily-shylet', name: 'Daily Shylet', banglaName: 'ডেইলি সিলেট', url: 'https://dailysylhet.com/', category: 'regional', isPopular: false },
    { id: 'chadpur-times', name: 'Chadpur Times', banglaName: 'চাঁদপুর টাইমস', url: 'https://chandpurtimes.com/', category: 'regional', isPopular: false },
    { id: 'bogura-sangbad', name: 'Bogura Sangbad', banglaName: 'বগুড়া সংবাদ', url: 'https://bograsangbad.com/', category: 'regional', isPopular: false },
    { id: 'rajsahi-somoy', name: 'Rajsahi Somoy', banglaName: 'রাজশাহী সময়', url: 'https://www.rajshahirsomoy.com/', category: 'regional', isPopular: false },
    { id: 'amar-noyakhali', name: 'Amar Noyakhali', banglaName: 'আমার নোয়াখালী', url: 'https://amarnoakhali.com/', category: 'regional', isPopular: false },
    { id: 'lakkhipur-24', name: 'Lakkhipur 24', banglaName: 'লক্ষ্মীপুর ২৪', url: 'https://lakshmipur24.com/', category: 'regional', isPopular: false },
    { id: 'doinik-khulnachal', name: 'Doinik Khulnachal', banglaName: 'দৈনিক খুলনাঞ্চল', url: 'https://khulnanchal.com/', category: 'regional', isPopular: false },
    { id: 'doinik-gramer-kagoj', name: 'Doinik Gramer Kagoj', banglaName: 'দৈনিক গ্রামের কাগজ', url: 'https://gramerkagoj.com/', category: 'regional', isPopular: false },

    // অনলাইন (Online)
    { id: 'bdnews24', name: 'BDNews24', banglaName: 'বিডিনিউজ২৪', url: 'https://bangla.bdnews24.com/', category: 'online', isPopular: true },
    { id: 'bd24live', name: 'BD 24 Live', banglaName: 'বিডি ২৪ লাইভ', url: 'https://www.bd24live.com/', category: 'online', isPopular: true },
    { id: 'bangla-tribune', name: 'Bangla Tribune', banglaName: 'বাংলা ট্রিবিউন', url: 'https://www.banglatribune.com/', category: 'online', isPopular: true },
    { id: 'bangla-news-24', name: 'Bangla News 24', banglaName: 'বাংলা নিউজ ২৪', url: 'https://www.banglanews24.com/', category: 'online', isPopular: true },
    { id: 'jagonews24', name: 'JagoNews24', banglaName: 'জাগোনিউজ২৪', url: 'https://www.jagonews24.com/', category: 'online', isPopular: true },
    { id: 'dhaka-post', name: 'Dhaka Post', banglaName: 'ঢাকা পোস্ট', url: 'https://www.dhakapost.com/', category: 'online', isPopular: true },
    { id: 'rising-bd', name: 'Rising BD', banglaName: 'রাইজিং বিডি', url: 'https://www.risingbd.com/', category: 'online', isPopular: true },
    { id: 'sarabangla', name: 'Sarabangla.net', banglaName: 'সারাবাংলা.নেট', url: 'https://sarabangla.net/', category: 'online', isPopular: false },
    { id: 'dhaka-times', name: 'Dhaka Times', banglaName: 'ঢাকা টাইমস', url: 'https://www.dhakatimes24.com/', category: 'online', isPopular: false },
    { id: 'dhaka-tribune', name: 'Dhaka Tribune', banglaName: 'ঢাকা ট্রিবিউন', url: 'https://www.dhakatribune.com/', category: 'online', isPopular: true },
    { id: 'priyo', name: 'Priyo.com', banglaName: 'প্রিয়.কম', url: 'https://www.priyo.com/', category: 'online', isPopular: false },
    { id: 'the-dhaka-times', name: 'The Dhaka Times', banglaName: 'দ্য ঢাকা টাইমস', url: 'https://thedhakatimes.com/', category: 'online', isPopular: false },
    { id: 'somoyer-konthosor', name: 'Somoyer Konthosor', banglaName: 'সময়ের কণ্ঠস্বর', url: 'https://www.somoyerkonthosor.com/', category: 'online', isPopular: false },
    { id: 'artho-suchak', name: 'Artho Suchak', banglaName: 'অর্থসূচক', url: 'https://www.arthosuchak.com/', category: 'online', isPopular: false },
    { id: 'share-news-24', name: 'Share News 24', banglaName: 'শেয়ার নিউজ ২৪', url: 'https://www.sharenews24.com/', category: 'online', isPopular: false },
    { id: 'sun-bd-24', name: 'Sun BD 24', banglaName: 'সান বিডি ২৪', url: 'https://sunbd24.com/', category: 'online', isPopular: false },
    { id: 'ajker-sotta-sangbad-24', name: 'Ajker Sotta Sangbad 24', banglaName: 'আজকের সত্য সংবাদ ২৪', url: 'https://ajkersottasangbad24.com/', category: 'online', isPopular: false },
    { id: 'one-news-bd', name: 'One News BD', banglaName: 'ওয়ান নিউজ বিডি', url: 'https://onenewsbd.com/', category: 'online', isPopular: false },
    { id: 'desh-news', name: 'Desh News', banglaName: 'দেশ নিউজ', url: 'https://deshnews.net/', category: 'online', isPopular: false },
    { id: 'desher-sangbad', name: 'Desher Sangbad', banglaName: 'দেশের সংবাদ', url: 'https://www.deshersangbad.com/', category: 'online', isPopular: false },
    { id: 'bangla-daily-24', name: 'Bangla Daily 24', banglaName: 'বাংলা ডেইলি ২৪', url: 'https://bangladaily24.com/', category: 'online', isPopular: false },
    { id: 'protikhon', name: 'Protikhon', banglaName: 'প্রতিক্ষণ', url: 'https://www.protikhon.com/', category: 'online', isPopular: false },
    { id: 'barta-bangla', name: 'Barta Bangla', banglaName: 'বার্তা বাংলা', url: 'https://bartabangla.com/', category: 'online', isPopular: false },
    { id: 'snn24', name: 'SNN24', banglaName: 'এসএনএন২৪', url: 'https://snn24.com/', category: 'online', isPopular: false },
    { id: 'alert-news-24', name: 'Alert News 24', banglaName: 'অ্যালার্ট নিউজ ২৪', url: 'https://alertnews24.com/', category: 'online', isPopular: false },
    { id: 'khobor-protidin-24', name: 'Khobor Protidin 24', banglaName: 'খবর প্রতিদিন ২৪', url: 'https://khoborprotidin24.com/', category: 'online', isPopular: false },
    { id: 'bbc-24-news', name: 'BBC 24 News', banglaName: 'বিবিসি ২৪ নিউজ', url: 'https://bbc24news.com/', category: 'online', isPopular: false }
];

// ==================== State Management ====================
let currentCategory = 'all';
let currentScreen = 'homeScreen';
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
let recentlyVisited = JSON.parse(localStorage.getItem('recentlyVisited')) || [];
let searchQuery = '';

// ==================== Utility Functions ====================
function getInitials(name) {
    return name.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
}

function getColorFromString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 55%)`;
}

function isBookmarked(newspaperId) {
    return bookmarks.includes(newspaperId);
}

function toggleBookmark(newspaperId) {
    if (isBookmarked(newspaperId)) {
        bookmarks = bookmarks.filter(id => id !== newspaperId);
    } else {
        bookmarks.push(newspaperId);
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderCurrentScreen();
}

function addToRecentlyVisited(newspaperId) {
    recentlyVisited = recentlyVisited.filter(id => id !== newspaperId);
    recentlyVisited.unshift(newspaperId);
    recentlyVisited = recentlyVisited.slice(0, 10); // Keep only last 10
    localStorage.setItem('recentlyVisited', JSON.stringify(recentlyVisited));
}

function openNewspaper(newspaper) {
    addToRecentlyVisited(newspaper.id);
    window.open(newspaper.url, '_blank');
}

// ==================== Rendering Functions ====================
function createNewspaperCard(newspaper) {
    const card = document.createElement('div');
    card.className = 'newspaper-card';
    
    const initials = getInitials(newspaper.name);
    const color = getColorFromString(newspaper.name);
    const bookmarked = isBookmarked(newspaper.id);
    
    card.innerHTML = `
        <div class="newspaper-header">
            <div class="newspaper-logo" style="background: ${color}">
                ${initials}
            </div>
            <div class="newspaper-info">
                <div class="newspaper-name">${newspaper.name}</div>
                <div class="newspaper-bangla-name">${newspaper.banglaName}</div>
            </div>
            <button class="bookmark-btn ${bookmarked ? 'active' : ''}" data-id="${newspaper.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${bookmarked ? 'white' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
            </button>
        </div>
        <div class="newspaper-category">${getCategoryLabel(newspaper.category)}</div>
    `;
    
    // Click on card to open newspaper
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.bookmark-btn')) {
            openNewspaper(newspaper);
        }
    });
    
    // Bookmark button
    const bookmarkBtn = card.querySelector('.bookmark-btn');
    bookmarkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(newspaper.id);
    });
    
    return card;
}

function getCategoryLabel(category) {
    const labels = {
        'bangladesh': 'বাংলা',
        'english': 'ইংরেজি',
        'regional': 'আঞ্চলিক',
        'online': 'অনলাইন'
    };
    return labels[category] || category;
}

function filterNewspapers(category, query = '') {
    let filtered = newspapers;
    
    if (category !== 'all') {
        filtered = filtered.filter(n => n.category === category);
    }
    
    if (query) {
        const lowerQuery = query.toLowerCase();
        filtered = filtered.filter(n => 
            n.name.toLowerCase().includes(lowerQuery) || 
            n.banglaName.includes(query)
        );
    }
    
    return filtered;
}

function renderNewspapers(container, newspaperList) {
    container.innerHTML = '';
    newspaperList.forEach(newspaper => {
        container.appendChild(createNewspaperCard(newspaper));
    });
}

function renderHomeScreen() {
    const grid = document.getElementById('newspapersGrid');
    const filtered = filterNewspapers(currentCategory);
    renderNewspapers(grid, filtered);
}

function renderSearchScreen() {
    const grid = document.getElementById('searchResults');
    const filtered = filterNewspapers('all', searchQuery);
    renderNewspapers(grid, filtered);
}

function renderBookmarksScreen() {
    const grid = document.getElementById('bookmarksGrid');
    const emptyState = document.getElementById('emptyBookmarks');
    
    if (bookmarks.length === 0) {
        grid.style.display = 'none';
        emptyState.classList.add('show');
    } else {
        grid.style.display = 'grid';
        emptyState.classList.remove('show');
        const bookmarkedNewspapers = newspapers.filter(n => bookmarks.includes(n.id));
        renderNewspapers(grid, bookmarkedNewspapers);
    }
}

function renderRecentlyVisited() {
    const grid = document.getElementById('recentlyVisitedGrid');
    const emptyState = document.getElementById('emptyRecent');
    
    if (recentlyVisited.length === 0) {
        grid.style.display = 'none';
        emptyState.classList.add('show');
    } else {
        grid.style.display = 'grid';
        emptyState.classList.remove('show');
        const recentNewspapers = recentlyVisited
            .map(id => newspapers.find(n => n.id === id))
            .filter(n => n !== undefined);
        renderNewspapers(grid, recentNewspapers);
    }
}

function renderCurrentScreen() {
    switch (currentScreen) {
        case 'homeScreen':
            renderHomeScreen();
            break;
        case 'searchScreen':
            renderSearchScreen();
            break;
        case 'bookmarksScreen':
            renderBookmarksScreen();
            break;
        case 'additionalScreen':
            renderRecentlyVisited();
            break;
    }
}

// ==================== Navigation ====================
function switchScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(screenId).classList.add('active');
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-screen="${screenId}"]`).classList.add('active');
    
    currentScreen = screenId;
    renderCurrentScreen();
}

// ==================== Theme Management ====================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ==================== Event Listeners ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderHomeScreen();
        });
    });
    
    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            switchScreen(item.dataset.screen);
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderSearchScreen();
    });
    
    // Initial render
    renderCurrentScreen();
});
