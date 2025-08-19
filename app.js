// Astrology Data
const zodiacSigns = {
    "Aries": {
        "dates": "March 21 - April 19",
        "element": "Fire",
        "traits": ["Energetic", "Bold", "Independent", "Competitive", "Leadership"],
        "compatibility": ["Leo", "Sagittarius", "Gemini", "Aquarius"],
        "luckyNumbers": [1, 8, 17, 26],
        "luckyColors": ["Red", "Orange", "Yellow"],
        "planet": "Mars",
        "symbol": "♈",
        "personality": "Aries individuals are natural-born leaders with boundless energy and enthusiasm. You approach life head-on and aren't afraid to take risks."
    },
    "Taurus": {
        "dates": "April 20 - May 20", 
        "element": "Earth",
        "traits": ["Reliable", "Patient", "Practical", "Devoted", "Stable"],
        "compatibility": ["Virgo", "Capricorn", "Cancer", "Pisces"],
        "luckyNumbers": [2, 6, 9, 12, 24],
        "luckyColors": ["Green", "Pink", "Blue"],
        "planet": "Venus",
        "symbol": "♉",
        "personality": "Taurus individuals are grounded and appreciate life's finer things. You value stability and have a natural talent for creating beauty and comfort."
    },
    "Gemini": {
        "dates": "May 21 - June 21",
        "element": "Air", 
        "traits": ["Adaptable", "Outgoing", "Intelligent", "Curious", "Communicative"],
        "compatibility": ["Libra", "Aquarius", "Aries", "Leo"],
        "luckyNumbers": [5, 7, 14, 23],
        "luckyColors": ["Yellow", "Silver", "Green"],
        "planet": "Mercury", 
        "symbol": "♊",
        "personality": "Gemini individuals are quick-witted and versatile communicators. You have an insatiable curiosity and can adapt to almost any situation."
    },
    "Cancer": {
        "dates": "June 22 - July 22",
        "element": "Water",
        "traits": ["Emotional", "Nurturing", "Protective", "Intuitive", "Loyal"],
        "compatibility": ["Scorpio", "Pisces", "Taurus", "Virgo"], 
        "luckyNumbers": [2, 7, 11, 16, 20, 25],
        "luckyColors": ["Silver", "Sea Green", "Cream"],
        "planet": "Moon",
        "symbol": "♋",
        "personality": "Cancer individuals are deeply intuitive and emotionally intelligent. You have strong protective instincts and create warm, welcoming environments."
    },
    "Leo": {
        "dates": "July 23 - August 22",
        "element": "Fire",
        "traits": ["Dramatic", "Outgoing", "Fiery", "Self-assured", "Creative"],
        "compatibility": ["Aries", "Sagittarius", "Gemini", "Libra"],
        "luckyNumbers": [1, 3, 10, 19],
        "luckyColors": ["Gold", "Orange", "Red"],
        "planet": "Sun",
        "symbol": "♌", 
        "personality": "Leo individuals are natural performers with magnetic personalities. You have a generous heart and love to inspire and entertain others."
    },
    "Virgo": {
        "dates": "August 23 - September 22",
        "element": "Earth",
        "traits": ["Analytical", "Practical", "Reliable", "Modest", "Diligent"],
        "compatibility": ["Taurus", "Capricorn", "Cancer", "Scorpio"],
        "luckyNumbers": [3, 6, 15, 20, 27],
        "luckyColors": ["Navy Blue", "Grey", "Brown"],
        "planet": "Mercury",
        "symbol": "♍",
        "personality": "Virgo individuals are detail-oriented perfectionists with analytical minds. You have a strong desire to help others and improve everything around you."
    },
    "Libra": {
        "dates": "September 23 - October 23", 
        "element": "Air",
        "traits": ["Diplomatic", "Gracious", "Fair-minded", "Social", "Idealistic"],
        "compatibility": ["Gemini", "Aquarius", "Leo", "Sagittarius"],
        "luckyNumbers": [4, 6, 13, 15, 24],
        "luckyColors": ["Pink", "Blue", "Green"],
        "planet": "Venus",
        "symbol": "♎",
        "personality": "Libra individuals are natural diplomats who seek balance and harmony. You have excellent taste and a gift for bringing people together."
    },
    "Scorpio": {
        "dates": "October 24 - November 21",
        "element": "Water", 
        "traits": ["Resourceful", "Brave", "Passionate", "Stubborn", "Mysterious"],
        "compatibility": ["Cancer", "Pisces", "Virgo", "Capricorn"],
        "luckyNumbers": [8, 11, 18, 22],
        "luckyColors": ["Deep Red", "Black", "Maroon"],
        "planet": "Pluto",
        "symbol": "♏",
        "personality": "Scorpio individuals are intense and transformative. You have powerful intuition and the ability to see through superficial appearances to deeper truths."
    },
    "Sagittarius": {
        "dates": "November 22 - December 21",
        "element": "Fire",
        "traits": ["Generous", "Idealistic", "Great sense of humor", "Adventurous", "Philosophical"], 
        "compatibility": ["Aries", "Leo", "Libra", "Aquarius"],
        "luckyNumbers": [3, 9, 15, 21, 33],
        "luckyColors": ["Turquoise", "Purple", "Orange"],
        "planet": "Jupiter",
        "symbol": "♐",
        "personality": "Sagittarius individuals are adventurous philosophers with optimistic spirits. You love to explore new ideas, places, and experiences."
    },
    "Capricorn": {
        "dates": "December 22 - January 19",
        "element": "Earth",
        "traits": ["Responsible", "Disciplined", "Self-control", "Ambitious", "Practical"],
        "compatibility": ["Taurus", "Virgo", "Scorpio", "Pisces"],
        "luckyNumbers": [6, 9, 10, 18, 19],
        "luckyColors": ["Black", "Brown", "Grey"],
        "planet": "Saturn", 
        "symbol": "♑",
        "personality": "Capricorn individuals are ambitious achievers with strong determination. You have excellent leadership skills and the patience to build lasting success."
    },
    "Aquarius": {
        "dates": "January 20 - February 18",
        "element": "Air",
        "traits": ["Progressive", "Original", "Independent", "Humanitarian", "Innovative"],
        "compatibility": ["Gemini", "Libra", "Aries", "Sagittarius"],
        "luckyNumbers": [4, 7, 11, 22, 29],
        "luckyColors": ["Blue", "Silver", "Aqua"],
        "planet": "Uranus",
        "symbol": "♒", 
        "personality": "Aquarius individuals are forward-thinking innovators who value independence. You have a strong humanitarian streak and love to champion causes."
    },
    "Pisces": {
        "dates": "February 19 - March 20",
        "element": "Water",
        "traits": ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise"],
        "compatibility": ["Cancer", "Scorpio", "Taurus", "Capricorn"],
        "luckyNumbers": [3, 9, 12, 15, 18, 24],
        "luckyColors": ["Sea Green", "Lavender", "Purple"], 
        "planet": "Neptune",
        "symbol": "♓",
        "personality": "Pisces individuals are deeply intuitive and emotionally sensitive. You have a rich imagination and natural artistic abilities."
    }
};

const questionCategories = {
    "Love": ["When will I find love?", "Is my current relationship meant to be?", "What should I look for in a partner?"],
    "Career": ["What career path suits me best?", "When will I get a promotion?", "Should I change jobs?"],
    "Health": ["What should I focus on for my health?", "When is the best time for medical procedures?", "How can I improve my wellbeing?"],
    "Finance": ["Will I be financially successful?", "When should I make investments?", "How can I improve my money situation?"],
    "Family": ["How can I improve family relationships?", "What does the future hold for my family?", "Should I have children?"],
    "General": ["What does this year hold for me?", "What are my greatest strengths?", "What challenges should I prepare for?"]
};

// Global variables
let currentUserData = null;
let birthChart = null;

// Navigation Functions
function showLanding() {
    hideAllPages();
    document.getElementById('landing-page').classList.add('active');
}

function showBirthForm() {
    hideAllPages();
    document.getElementById('birth-form-page').classList.add('active');
}

function showLoading() {
    hideAllPages();
    document.getElementById('loading-page').classList.add('active');
}

function showResults() {
    hideAllPages();
    document.getElementById('results-page').classList.add('active');
}

function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
}

// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const birthForm = document.getElementById('birth-form');
    birthForm.addEventListener('submit', handleFormSubmit);
    
    // Initialize question categories
    initializeQuestionCategories();
    initializeSampleQuestions();
});

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form field values directly
    const userData = {
        fullName: document.getElementById('fullName').value.trim(),
        birthDate: document.getElementById('birthDate').value,
        birthTime: document.getElementById('birthTime').value,
        birthPlace: document.getElementById('birthPlace').value.trim(),
        gender: document.getElementById('gender').value
    };
    
    // Validate required fields
    if (!userData.fullName) {
        alert('Please enter your full name.');
        document.getElementById('fullName').focus();
        return;
    }
    
    if (!userData.birthDate) {
        alert('Please select your birth date.');
        document.getElementById('birthDate').focus();
        return;
    }
    
    if (!userData.birthTime) {
        alert('Please select your birth time.');
        document.getElementById('birthTime').focus();
        return;
    }
    
    if (!userData.birthPlace) {
        alert('Please enter your birth place.');
        document.getElementById('birthPlace').focus();
        return;
    }
    
    currentUserData = userData;
    processUserData();
}

function processUserData() {
    showLoading();
    
    // Simulate processing time
    setTimeout(() => {
        generateAstrologyProfile();
        showResults();
    }, 3000);
}

// Astrology Calculations
function calculateZodiacSign(birthDate) {
    const date = new Date(birthDate);
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    const day = date.getDate();
    
    const zodiacDates = [
        { sign: 'Capricorn', start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
        { sign: 'Aquarius', start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
        { sign: 'Pisces', start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
        { sign: 'Aries', start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
        { sign: 'Taurus', start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
        { sign: 'Gemini', start: { month: 5, day: 21 }, end: { month: 6, day: 21 } },
        { sign: 'Cancer', start: { month: 6, day: 22 }, end: { month: 7, day: 22 } },
        { sign: 'Leo', start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
        { sign: 'Virgo', start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
        { sign: 'Libra', start: { month: 9, day: 23 }, end: { month: 10, day: 23 } },
        { sign: 'Scorpio', start: { month: 10, day: 24 }, end: { month: 11, day: 21 } },
        { sign: 'Sagittarius', start: { month: 11, day: 22 }, end: { month: 12, day: 21 } }
    ];
    
    for (const zodiac of zodiacDates) {
        if (zodiac.sign === 'Capricorn') {
            if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
                return zodiac.sign;
            }
        } else if (
            (month === zodiac.start.month && day >= zodiac.start.day) ||
            (month === zodiac.end.month && day <= zodiac.end.day)
        ) {
            return zodiac.sign;
        }
    }
    
    return 'Aries'; // fallback
}

function calculateMoonSign(birthDate, birthTime) {
    // Simplified moon sign calculation (in reality, this requires complex astronomical calculations)
    const signs = Object.keys(zodiacSigns);
    const date = new Date(birthDate + 'T' + birthTime);
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const moonCycle = dayOfYear % 12;
    return signs[moonCycle];
}

function calculateRisingSign(birthDate, birthTime) {
    // Simplified rising sign calculation
    const signs = Object.keys(zodiacSigns);
    const time = new Date('1970-01-01T' + birthTime);
    const hours = time.getHours();
    const risingIndex = Math.floor(hours / 2) % 12;
    return signs[risingIndex];
}

function generateAstrologyProfile() {
    const sunSign = calculateZodiacSign(currentUserData.birthDate);
    const moonSign = calculateMoonSign(currentUserData.birthDate, currentUserData.birthTime);
    const risingSign = calculateRisingSign(currentUserData.birthDate, currentUserData.birthTime);
    
    currentUserData.astrology = {
        sunSign,
        moonSign,
        risingSign,
        sunSignData: zodiacSigns[sunSign],
        moonSignData: zodiacSigns[moonSign],
        risingSignData: zodiacSigns[risingSign]
    };
    
    updateResultsUI();
}

function updateResultsUI() {
    const astrology = currentUserData.astrology;
    
    // Update welcome message and primary sign
    document.getElementById('welcome-message').textContent = `Welcome ${currentUserData.fullName}, Your Cosmic Profile Awaits`;
    document.getElementById('primary-symbol').textContent = astrology.sunSignData.symbol;
    document.getElementById('primary-sign-name').textContent = astrology.sunSign;
    document.getElementById('primary-sign-dates').textContent = astrology.sunSignData.dates;
    
    // Generate birth chart
    generateBirthChart();
    
    // Update personality tab
    updatePersonalityTab();
    
    // Update predictions tab
    updatePredictionsTab();
}

function generateBirthChart() {
    const ctx = document.getElementById('birthChart').getContext('2d');
    
    if (birthChart) {
        birthChart.destroy();
    }
    
    const astrology = currentUserData.astrology;
    
    birthChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Sun Sign', 'Moon Sign', 'Rising Sign', 'Other Influences'],
            datasets: [{
                data: [30, 25, 25, 20],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                borderWidth: 2,
                borderColor: 'rgba(255, 255, 255, 0.2)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f5f5f5',
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Your Astrological Chart',
                    color: '#32b8cd',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: 20
                }
            }
        }
    });
    
    // Update elements grid
    updateElementsGrid();
}

function updateElementsGrid() {
    const astrology = currentUserData.astrology;
    const elementsGrid = document.getElementById('elements-grid');
    
    const elements = [
        { name: `Sun in ${astrology.sunSign}`, value: astrology.sunSignData.element },
        { name: `Moon in ${astrology.moonSign}`, value: astrology.moonSignData.element },
        { name: `Rising ${astrology.risingSign}`, value: astrology.risingSignData.element },
        { name: 'Dominant Element', value: astrology.sunSignData.element }
    ];
    
    elementsGrid.innerHTML = elements.map(element => `
        <div class="element-item">
            <span class="element-name">${element.name}</span>
            <span class="element-value">${element.value}</span>
        </div>
    `).join('');
}

function updatePersonalityTab() {
    const astrology = currentUserData.astrology;
    
    // Update personality overview
    const personalityOverview = document.getElementById('personality-overview');
    personalityOverview.innerHTML = `
        <h3>Your Cosmic Personality</h3>
        <p><strong>Sun Sign (${astrology.sunSign}):</strong> ${astrology.sunSignData.personality}</p>
        <p><strong>Moon Sign (${astrology.moonSign}):</strong> Your emotional nature is influenced by ${astrology.moonSignData.element} energy, making you ${astrology.moonSignData.traits.slice(0, 3).join(', ').toLowerCase()}.</p>
        <p><strong>Rising Sign (${astrology.risingSign}):</strong> Others perceive you as ${astrology.risingSignData.traits.slice(0, 2).join(' and ').toLowerCase()}, reflecting your ${astrology.risingSignData.element} rising influence.</p>
    `;
    
    // Update traits grid
    const traitsGrid = document.getElementById('traits-grid');
    const combinedTraits = [
        ...astrology.sunSignData.traits.slice(0, 3),
        ...astrology.moonSignData.traits.slice(0, 2),
        ...astrology.risingSignData.traits.slice(0, 2)
    ];
    
    traitsGrid.innerHTML = combinedTraits.map(trait => `
        <div class="trait-tag">${trait}</div>
    `).join('');
    
    // Update compatibility
    const compatibilitySigns = document.getElementById('compatibility-signs');
    compatibilitySigns.innerHTML = astrology.sunSignData.compatibility.map(sign => `
        <div class="compatibility-sign">
            <div class="sign-symbol">${zodiacSigns[sign].symbol}</div>
            <div class="sign-name">${sign}</div>
        </div>
    `).join('');
}

function updatePredictionsTab() {
    const astrology = currentUserData.astrology;
    const predictionsGrid = document.getElementById('predictions-grid');
    
    const predictions = generatePredictions(astrology);
    
    predictionsGrid.innerHTML = predictions.map(prediction => `
        <div class="prediction-card">
            <div class="prediction-icon">${prediction.icon}</div>
            <h4>${prediction.category}</h4>
            <p>${prediction.text}</p>
        </div>
    `).join('');
}

function generatePredictions(astrology) {
    const currentMonth = new Date().getMonth() + 1;
    const timeframes = ['the next 3 months', 'this year', 'the coming season', 'the next 6 months'];
    const timeframe = timeframes[Math.floor(Math.random() * timeframes.length)];
    
    return [
        {
            icon: '💼',
            category: 'Career & Success',
            text: `Your ${astrology.sunSign} determination combined with ${astrology.sunSignData.element} energy suggests significant career growth in ${timeframe}. Focus on ${astrology.sunSignData.traits[0].toLowerCase()} leadership opportunities.`
        },
        {
            icon: '❤️',
            category: 'Love & Relationships',
            text: `With your ${astrology.moonSign} moon sign, emotional connections will deepen ${timeframe}. Your natural ${astrology.moonSignData.traits[0].toLowerCase()} nature attracts meaningful relationships.`
        },
        {
            icon: '🌟',
            category: 'Personal Growth',
            text: `Your ${astrology.risingSign} rising encourages you to embrace your ${astrology.risingSignData.traits[1].toLowerCase()} side. This ${timeframe.replace('the ', '')} brings opportunities for self-discovery.`
        },
        {
            icon: '💰',
            category: 'Finance & Abundance',
            text: `${astrology.sunSignData.planet} influences suggest financial stability through ${astrology.sunSignData.traits[2].toLowerCase()} approaches. Lucky numbers: ${astrology.sunSignData.luckyNumbers.slice(0, 3).join(', ')}.`
        },
        {
            icon: '🏥',
            category: 'Health & Wellbeing',
            text: `Your ${astrology.sunSignData.element} constitution benefits from balanced lifestyle choices. Focus on activities that enhance your ${astrology.sunSignData.traits[0].toLowerCase()} nature.`
        },
        {
            icon: '👨‍👩‍👧‍👦',
            category: 'Family & Home',
            text: `Family relationships flourish when you express your ${astrology.moonSign} emotional intelligence. Your ${astrology.moonSignData.traits[0].toLowerCase()} approach creates harmony at home.`
        }
    ];
}

// Tab Management
function showTab(tabName) {
    // Update tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    // Find the clicked button
    const clickedBtn = Array.from(tabBtns).find(btn => btn.onclick && btn.onclick.toString().includes(tabName));
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    } else {
        // Fallback: add active class to first button matching the tab
        const matchingBtn = Array.from(tabBtns).find(btn => btn.textContent.toLowerCase().includes(tabName.toLowerCase()));
        if (matchingBtn) {
            matchingBtn.classList.add('active');
        }
    }
    
    // Update tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    const targetTab = document.getElementById(tabName + '-tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

// Question System
function initializeQuestionCategories() {
    const categoryButtons = document.getElementById('category-buttons');
    
    Object.keys(questionCategories).forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.textContent = category;
        button.onclick = () => selectCategory(category);
        categoryButtons.appendChild(button);
    });
}

function initializeSampleQuestions() {
    const sampleQuestionsList = document.getElementById('sample-questions-list');
    
    // Get sample questions from all categories
    const allSamples = Object.values(questionCategories).flat();
    const selectedSamples = allSamples.slice(0, 6);
    
    selectedSamples.forEach(question => {
        const div = document.createElement('div');
        div.className = 'sample-question';
        div.textContent = question;
        div.onclick = () => {
            document.getElementById('userQuestion').value = question;
        };
        sampleQuestionsList.appendChild(div);
    });
}

function selectCategory(category) {
    const questions = questionCategories[category];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('userQuestion').value = randomQuestion;
}

function askQuestion() {
    const questionText = document.getElementById('userQuestion').value.trim();
    
    if (!questionText) {
        alert('Please enter a question first.');
        return;
    }
    
    const response = generateQuestionResponse(questionText);
    displayQuestionResponse(response, questionText);
}

function generateQuestionResponse(question) {
    const astrology = currentUserData.astrology;
    const category = detectQuestionCategory(question);
    
    const responses = {
        Love: [
            `With your ${astrology.sunSign} sun and ${astrology.moonSign} moon, your romantic journey is guided by ${astrology.sunSignData.element} passion and ${astrology.moonSignData.element} intuition. The stars suggest that ${astrology.sunSignData.traits[0].toLowerCase()} approach to love will attract meaningful connections. Your compatibility with ${astrology.sunSignData.compatibility[0]} and ${astrology.sunSignData.compatibility[1]} signs is particularly strong this period.`,
            `Your ${astrology.risingSign} rising creates an attractive aura that draws others to your ${astrology.risingSignData.traits[0].toLowerCase()} nature. The cosmic energies favor emotional growth through relationships that honor your ${astrology.moonSignData.traits[1].toLowerCase()} qualities.`
        ],
        Career: [
            `Your ${astrology.sunSign} determination and ${astrology.sunSignData.planet} influence create powerful career momentum. Focus on opportunities that utilize your ${astrology.sunSignData.traits[0].toLowerCase()} leadership and ${astrology.sunSignData.traits[2].toLowerCase()} nature. The ${astrology.sunSignData.element} element suggests success through dynamic action.`,
            `With ${astrology.risingSign} rising, others perceive your professional capabilities as ${astrology.risingSignData.traits[0].toLowerCase()} and ${astrology.risingSignData.traits[1].toLowerCase()}. This cosmic combination favors career advancement in fields related to your ${astrology.sunSignData.element} element strengths.`
        ],
        Health: [
            `Your ${astrology.sunSignData.element} constitution responds well to balanced approaches to wellness. As a ${astrology.sunSign}, focus on activities that enhance your natural ${astrology.sunSignData.traits[0].toLowerCase()} energy while honoring your ${astrology.moonSign} moon's need for ${astrology.moonSignData.traits[1].toLowerCase()} practices.`,
            `The planetary influence of ${astrology.sunSignData.planet} suggests that maintaining your ${astrology.sunSignData.traits[2].toLowerCase()} lifestyle choices supports optimal health. Your ${astrology.moonSignData.element} moon energy benefits from nurturing self-care routines.`
        ],
        Finance: [
            `Your ${astrology.sunSign} approach to money reflects ${astrology.sunSignData.traits[0].toLowerCase()} decision-making and ${astrology.sunSignData.traits[2].toLowerCase()} planning. The influence of ${astrology.sunSignData.planet} supports financial growth through ${astrology.sunSignData.element}-based strategies. Lucky numbers ${astrology.sunSignData.luckyNumbers.slice(0, 3).join(', ')} may bring opportunities.`,
            `With ${astrology.moonSign} moon governing your emotional relationship with money, success comes through ${astrology.moonSignData.traits[0].toLowerCase()} and ${astrology.moonSignData.traits[1].toLowerCase()} financial practices. Your ${astrology.risingSign} rising attracts abundance through authentic self-expression.`
        ],
        Family: [
            `Your ${astrology.moonSign} moon creates deep family connections through your ${astrology.moonSignData.traits[0].toLowerCase()} and ${astrology.moonSignData.traits[3].toLowerCase()} nature. The ${astrology.moonSignData.element} element of your moon sign helps you navigate family dynamics with wisdom and compassion.`,
            `As a ${astrology.sunSign} with ${astrology.risingSign} rising, you bring ${astrology.sunSignData.traits[0].toLowerCase()} energy to family relationships while maintaining the ${astrology.risingSignData.traits[1].toLowerCase()} approach that others find comforting and reliable.`
        ],
        General: [
            `Your unique combination of ${astrology.sunSign} sun, ${astrology.moonSign} moon, and ${astrology.risingSign} rising creates a powerful cosmic blueprint. The ${astrology.sunSignData.element} fire of your sun sign drives your ${astrology.sunSignData.traits[0].toLowerCase()} nature, while your ${astrology.moonSignData.element} moon provides ${astrology.moonSignData.traits[1].toLowerCase()} wisdom.`,
            `The stars align to support your ${astrology.sunSign} journey through ${astrology.sunSignData.traits[0].toLowerCase()} action and ${astrology.moonSignData.traits[0].toLowerCase()} intuition. Your ${astrology.risingSign} rising ensures others see your authentic ${astrology.risingSignData.traits[0].toLowerCase()} self.`
        ]
    };
    
    const categoryResponses = responses[category] || responses.General;
    const selectedResponse = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
    
    return {
        category,
        text: selectedResponse
    };
}

function detectQuestionCategory(question) {
    const questionLower = question.toLowerCase();
    
    if (questionLower.includes('love') || questionLower.includes('relationship') || questionLower.includes('partner') || questionLower.includes('romance') || questionLower.includes('dating')) {
        return 'Love';
    } else if (questionLower.includes('career') || questionLower.includes('job') || questionLower.includes('work') || questionLower.includes('promotion') || questionLower.includes('business')) {
        return 'Career';
    } else if (questionLower.includes('health') || questionLower.includes('wellness') || questionLower.includes('medical') || questionLower.includes('fitness')) {
        return 'Health';
    } else if (questionLower.includes('money') || questionLower.includes('finance') || questionLower.includes('wealth') || questionLower.includes('investment') || questionLower.includes('financial')) {
        return 'Finance';
    } else if (questionLower.includes('family') || questionLower.includes('parent') || questionLower.includes('child') || questionLower.includes('sibling') || questionLower.includes('relative')) {
        return 'Family';
    } else {
        return 'General';
    }
}

function displayQuestionResponse(response, question) {
    const responseDiv = document.getElementById('question-response');
    
    responseDiv.innerHTML = `
        <div class="response-category">${response.category} Guidance</div>
        <div class="response-question"><strong>Your Question:</strong> "${question}"</div>
        <div class="response-text">${response.text}</div>
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: var(--color-gray-400); font-style: italic;">
            ✨ This reading is based on your cosmic profile: ${currentUserData.astrology.sunSign} Sun, ${currentUserData.astrology.moonSign} Moon, ${currentUserData.astrology.risingSign} Rising
        </div>
    `;
    
    responseDiv.classList.remove('hidden');
    responseDiv.scrollIntoView({ behavior: 'smooth' });
}

// Utility Functions
function startOver() {
    if (confirm('Are you sure you want to start over? This will clear your current reading.')) {
        currentUserData = null;
        if (birthChart) {
            birthChart.destroy();
            birthChart = null;
        }
        
        // Reset form
        document.getElementById('birth-form').reset();
        document.getElementById('question-response').classList.add('hidden');
        document.getElementById('userQuestion').value = '';
        
        showLanding();
    }
}

function shareResults() {
    if (currentUserData && currentUserData.astrology) {
        const astrology = currentUserData.astrology;
        const shareText = `🌟 My Cosmic Profile 🌟\n\n` +
                         `☀️ Sun: ${astrology.sunSign} ${astrology.sunSignData.symbol}\n` +
                         `🌙 Moon: ${astrology.moonSign} ${astrology.moonSignData.symbol}\n` +
                         `⬆️ Rising: ${astrology.risingSign} ${astrology.risingSignData.symbol}\n\n` +
                         `Key Traits: ${astrology.sunSignData.traits.slice(0, 3).join(', ')}\n` +
                         `Element: ${astrology.sunSignData.element}\n` +
                         `Ruling Planet: ${astrology.sunSignData.planet}\n\n` +
                         `Get your cosmic reading at Cosmic Astrologer! ✨`;
        
        if (navigator.share) {
            navigator.share({
                title: 'My Cosmic Astrology Profile',
                text: shareText
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Your cosmic profile has been copied to clipboard! Share it with friends! ✨');
            }).catch(() => {
                // Final fallback: show in alert
                alert('Your Cosmic Profile:\n\n' + shareText);
            });
        }
    }
}