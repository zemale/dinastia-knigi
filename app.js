// Новый тест для Династии книголюбов
const questions = [
    {
        id: 'age',
        text: 'Сколько тебе лет?',
        options: [
            { value: '10-12', label: '10–12 лет' },
            { value: '13-15', label: '13–15 лет' },
            { value: '16+', label: '16 лет и старше' }
        ]
    },
    {
        id: 'interest',
        text: 'Какие книги тебе обычно нравятся?',
        options: [
            { value: 'fantasy', label: '🧙‍♂️ Магия, фэнтези, волшебные миры' },
            { value: 'love', label: '💕 Истории о любви и отношениях' },
            { value: 'adventure', label: '⚔️ Приключения, путешествия, опасности' },
            { value: 'philosophy', label: '🤔 Философия, размышления о жизни' },
            { value: 'mystery', label: '🔍 Тайны, загадки, детективы' },
            { value: 'humor', label: '😄 Юмор, сатира, смешные истории' },
            { value: 'social', label: '🌍 Истории о обществе и людях' },
            { value: 'psychology', label: '🧠 Психология, внутренний мир человека' }
        ]
    },
    {
        id: 'mood',
        text: 'Какое настроение у тебя сейчас?',
        options: [
            { value: 'happy', label: '😊 Хочу что-то светлое и радостное' },
            { value: 'thoughtful', label: '🤔 Хочу задуматься о чём-то важном' },
            { value: 'excited', label: '🤩 Хочу ярких приключений и эмоций' },
            { value: 'romantic', label: '🥰 Хочу романтики и тёплых чувств' },
            { value: 'serious', label: '😐 Хочу серьёзную, глубокую историю' }
        ]
    },
    {
        id: 'time',
        text: 'Сколько времени готов уделить чтению?',
        options: [
            { value: 'short', label: '📖 Хочу что-то короткое (до 200 стр)' },
            { value: 'medium', label: '📚 Средний роман (200-400 стр)' },
            { value: 'long', label: '📚📚📚 Большая книга (400+ стр)' }
        ]
    },
    {
        id: 'motivation',
        text: 'Что для тебя главное в книге?',
        options: [
            { value: 'plot', label: '🎬 Захватывающий сюжет' },
            { value: 'characters', label: '👥 Интересные персонажи' },
            { value: 'language', label: '📝 Красивый язык' },
            { value: 'themes', label: '💭 Глубокие темы' }
        ]
    },
    {
        id: 'genre',
        text: 'Какой жанр тебе ближе всего?',
        options: [
            { value: 'fantasy', label: '🧙‍♂️ Фэнтези' },
            { value: 'scifi', label: '🚀 Научная фантастика' },
            { value: 'romance', label: '💕 Романтика' },
            { value: 'mystery', label: '🔍 Детектив' },
            { value: 'historical', label: '🏛️ Исторический' },
            { value: 'contemporary', label: '🌍 Современная проза' }
        ]
    },


    {
        id: 'setting',
        text: 'Где бы ты хотел(а) оказаться?',
        options: [
            { value: 'magic', label: '🏰 Волшебный замок' },
            { value: 'future', label: '🌌 Будущее/космос' },
            { value: 'past', label: '🏛️ Древние времена' },
            { value: 'modern', label: '🏙️ Современный город' },
            { value: 'nature', label: '🌲 Природа/деревня' }
        ]
    },
    {
        id: 'emotions',
        text: 'Какие эмоции хочешь испытать?',
        options: [
            { value: 'joy', label: '😊 Радость и веселье' },
            { value: 'sadness', label: '😢 Грусть и ностальгия' },
            { value: 'excitement', label: '🤩 Волнение и азарт' },
            { value: 'calm', label: '😌 Спокойствие и умиротворение' },
            { value: 'mystery', label: '🔍 Тайна и удивление' }
        ]
    }
];

// Состояние теста
let currentQuestion = 0;
let answers = {};

// DOM элементы
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');

// Инициализация
function init() {
    showQuestion(0);
}

// Показать вопрос
function showQuestion(index) {
    if (index >= questions.length) {
        showResult();
        return;
    }

    const q = questions[index];
    const progress = ((index + 1) / questions.length) * 100;
    
    quizContainer.innerHTML = `
        <div class="quiz-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <div class="progress-text">Вопрос ${index + 1} из ${questions.length}</div>
        </div>
        <div class="question-card">
            <div class="question-number">Вопрос ${index + 1}</div>
            <h3 class="question-title">${q.text}</h3>
            <div class="options">
                ${q.options.map(opt => `
                    <button class="option" data-value="${opt.value}">${opt.label}</button>
                `).join('')}
            </div>
        </div>
    `;

    // Обработчики кнопок
    quizContainer.querySelectorAll('.option').forEach(btn => {
        btn.addEventListener('click', () => {
            // Визуальный feedback
            btn.classList.add('selected');
            quizContainer.querySelectorAll('.option').forEach(b => {
                if (b !== btn) b.style.opacity = '0.5';
            });
            setTimeout(() => selectOption(q.id, btn.dataset.value), 300);
        });
    });
}

// Выбор ответа
function selectOption(questionId, value) {
    answers[questionId] = value;
    currentQuestion++;
    showQuestion(currentQuestion);
}

// Показать результат
function showResult() {
    const book = findBestBook();
    
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    resultContainer.innerHTML = `
        <div class="result-card">
            <div class="result-badge">Твоё произведение</div>
            <img src="${book.cover}" alt="${book.title}" class="result-book-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="result-book-placeholder" style="display:none;">${book.title}</div>
            <h2 class="result-book-title">${book.title}</h2>
            <p class="result-author">${book.author}</p>
            <p class="result-description">${book.description}</p>
            <div class="result-tags">
                ${book.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                <span class="tag">${book.age}</span>
            </div>
            <button class="btn btn-primary" onclick="restartQuiz()">Пройти ещё раз</button>
        </div>
    `;
}

// Перезапуск теста
function restartQuiz() {
    currentQuestion = 0;
    answers = {};
    resultContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion(0);
}

// Найти лучшую книгу
function findBestBook() {
    // Фильтруем книги по возрасту
    let candidateBooks = books.filter(book => {
        if (answers.age === '10-12') return book.age === '10-12';
        if (answers.age === '13-15') return book.age === '13-15';
        if (answers.age === '16+') return book.age === '16+';
        return true;
    });
    
    // Если нет книг для возраста, берем все
    if (candidateBooks.length === 0) {
        candidateBooks = books;
    }
    
    // Считаем баллы на основе интересов
    candidateBooks.forEach(book => {
        book.score = 0;
        
        // Интересы
        if (answers.interest && book.interests.includes(answers.interest)) {
            book.score += 3;
        }
        
        // Настроение
        if (answers.mood && book.mood.includes(answers.mood)) {
            book.score += 2;
        }
        
        // Время на чтение
        if (answers.time && book.time === answers.time) {
            book.score += 2;
        }
        
        // Дополнительные баллы за совпадение по другим параметрам
        if (answers.motivation) {
            if (answers.motivation === 'plot' && book.interests.includes('adventure')) book.score += 1;
            if (answers.motivation === 'characters' && book.interests.includes('philosophy')) book.score += 1;
        }
        
        if (answers.emotions) {
            if (answers.emotions === 'joy' && book.mood.includes('happy')) book.score += 1;
            if (answers.emotions === 'excitement' && book.mood.includes('excited')) book.score += 1;
        }
    });
    
    // Сортируем по баллам и возвращаем лучшую
    candidateBooks.sort((a, b) => b.score - a.score);
    return candidateBooks[0] || books[0];
}

// Запуск
init();