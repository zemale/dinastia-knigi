// Вопросы теста
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
            { value: 'short', label: '📖 Хочу что-то короткое (повесть)' },
            { value: 'medium', label: '📚 Средний роман — самое то' },
            { value: 'long', label: '📚📚📚 Готов к большой книге!' }
        ]
    },
    {
        id: 'motivation',
        text: 'Что для тебя главное в книге?',
        options: [
            { value: 'plot', label: '🎬 Захватывающий сюжет' },
            { value: 'characters', label: '👥 Живые, запоминающиеся герои' },
            { value: 'ideas', label: '💡 Новые идеи и размышления' },
            { value: 'emotions', label: '❤️ Сильные эмоции и переживания' }
        ]
    }
];

// Статьи
const articles = {
    grounding: {
        title: 'Как заземлиться после прочтения книги',
        content: `
            <div class="article-body">
                <h3>Как заземлиться после прочтения книги</h3>
                <p>Бывает, книга затягивает так сильно, что после последней страницы кажется: реальный мир — это неправильная вселенная. Ты живёшь в истории ещё несколько часов, а то и дней. Это называется «книжный похмелье» — и это прекрасно, но иногда нужно вернуться.</p>
                
                <p><strong>Вот несколько способов заземлиться:</strong></p>
                <ul>
                    <li><strong>Погуляй.</strong> Просто выйди на улицу, подыши свежим воздухом. Почувствуй ветер, солнце, запахи. Тело в реальности — и разум тоже вернётся.</li>
                    <li><strong>Поговори с кем-то.</strong> Расскажи о книге, обсуди с друзьями или родными. Разговор о прочитанном помогает переключить мозг с «внутреннего кино» на реальность.</li>
                    <li><strong>Сделай что-то руками.</strong> Приготовь еду, порисуй, убери комнату. Физическая активность — лучший способ вернуться в настоящее.</li>
                    <li><strong>Послушай музыку.</strong> Не саундтрек к книге, а что-то совсем другое. Пусть ритм выбьет тебя из книжного транса.</li>
                    <li><strong>Запиши мысли.</strong> Напиши, что ты почувствовал, что запомнилось, что изменилось в твоём взгляде. Это поможет «упаковать» опыт и двигаться дальше.</li>
                </ul>
                
                <p>И помни: нет ничего плохого в том, чтобы немного побыть в книжном мире. Главное — уметь возвращаться.</p>
            </div>
        `
    },
    emptiness: {
        title: 'Как избавиться от чувства опустошённости после книги',
        content: `
            <div class="article-body">
                <h3>Как избавиться от чувства опустошённости после книги</h3>
                <p>Ты дочитал. Закрыл книгу. И вдруг — пустота. Как будто кто-то увёл тебя в волшебный мир, а потом выставил за дверь. Герои стали близкими, а теперь их нет. Это нормально — и есть способы справиться.</p>
                
                <p><strong>Что делать:</strong></p>
                <ul>
                    <li><strong>Прочти что-то в том же духе.</strong> Если скучаешь по героям — найди похожую книгу. Иногда нужно просто «пересесть» на другую историю.</li>
                    <li><strong>Найди фан-арт или сообщества.</strong> Обсуждение с другими читателями, арты, теории — продлевают жизнь истории.</li>
                    <li><strong>Перечитай любимые моменты.</strong> Не всю книгу — только те страницы, что тронули больше всего. Это как встретиться с другом на чашку чая.</li>
                    <li><strong>Попробуй творчество.</strong> Нарисуй героя, напиши продолжение или альтернативную концовку. Ты — тоже творец.</li>
                    <li><strong>Просто подожди.</strong> Чувство опустошённости проходит. Через день-два придёт новая книга — и всё начнётся снова.</li>
                </ul>
                
                <p>Опустошённость — это знак того, что книга была хороша. Цени это чувство, но не застревай в нём.</p>
            </div>
        `
    },
    motivation: {
        title: 'Как замотивировать себя читать книги',
        content: `
            <div class="article-body">
                <h3>Как замотивировать себя читать книги</h3>
                <p>Иногда хочется читать, но рука не тянется к книге. Или начинаешь — и бросаешь на третьей странице. Не переживай, это случается со всеми. Вот как вернуть радость чтения.</p>
                
                <p><strong>Простые способы:</strong></p>
                <ul>
                    <li><strong>Читай то, что нравится прямо сейчас.</strong> Не то, что «положено» или «полезно». Хочется фэнтези? Бери фэнтези. Любовный роман? Почему нет.</li>
                    <li><strong>Начни с короткого.</strong> Рассказ, повесть, тонкая книжка. Победа над маленьким объёмом даст силы на большое.</li>
                    <li><strong>Создай ритуал.</strong> Чашка чая, уютное место, любимая музыка. Когда чтение связано с приятным, мозг ждёт его.</li>
                    <li><strong>Читай вместе с кем-то.</strong> Книжный клуб, друг, родитель. Обсуждение мотивирует дочитать до конца.</li>
                    <li><strong>Не заставляй себя.</strong> Если книга не зашла — закрой и возьми другую. Жизнь слишком коротка для скучных книг.</li>
                    <li><strong>Ставь маленькие цели.</strong> «Сегодня 20 страниц» — звучит легче, чем «надо дочитать том».</li>
                </ul>
                
                <p>Чтение — не обязанность, а удовольствие. Как только ты перестанешь давить на себя, книги сами потянутся в руки.</p>
            </div>
        `
    },
    disappointment: {
        title: 'Как избавиться от разочарованности в книге',
        content: `
            <div class="article-body">
                <h3>Как избавиться от разочарованности в книге</h3>
                <p>Всех хвалили, все читали, обложка красивая — а тебе не зашло. Или ещё хуже: начало было огненным, а концовка — провал. Разочарование в книге — больно, но не смертельно.</p>
                
                <p><strong>Как справиться:</strong></p>
                <ul>
                    <li><strong>Разреши себе не любить.</strong> Нет книг, которые нравятся всем. Твоё «не понравилось» — тоже мнение, и оно важно.</li>
                    <li><strong>Пойми, почему не зашло.</strong> Слишком медленно? Слишком предсказуемо? Не те герои? Понимание поможет выбрать лучше в следующий раз.</li>
                    <li><strong>Обсуди с кем-то.</strong> Иногда другой человек увидит в книге то, что ты пропустил. Или вы вместе поругаете — тоже терапия!</li>
                    <li><strong>Прочти отзывы.</strong> Узнай, что думают другие. Может, ты не один — или, наоборот, поймёшь, что упустил.</li>
                    <li><strong>Возьми «антидот».</strong> Если книга разочаровала — найди ту, которая точно радует. Перечитай любимую, обратись к проверенному автору.</li>
                    <li><strong>Дай время.</strong> Иногда книга «не заходит» из-за настроения. Вернись к ней через год — и удивишься.</li>
                </ul>
                
                <p>Разочарование — это тоже опыт. Оно учит тебя понимать свои вкусы и выбирать книги, которые действительно твои.</p>
            </div>
        `
    }
};

// Состояние теста
let currentQuestion = 0;
let answers = {};

// DOM элементы
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const articleModal = document.getElementById('article-modal');
const articleBody = document.getElementById('article-body');

// Инициализация
function init() {
    showQuestion(0);
    setupArticles();
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

// Подбор книги
function findBestBook() {
    let bestBook = null;
    let bestScore = -1;

    books.forEach(book => {
        let score = 0;

        // Возраст
        if (book.age === answers.age) score += 3;
        else if (answers.age === '16+' && book.age === '13-15') score += 1;
        else if (answers.age === '13-15' && book.age === '10-12') score += 1;

        // Интересы
        if (book.interests.includes(answers.interest)) score += 4;

        // Настроение
        if (book.mood.includes(answers.mood)) score += 3;

        // Время
        if (book.time === answers.time) score += 2;

        // Мотивация (бонус)
        if (answers.motivation === 'plot' && (book.interests.includes('adventure') || book.interests.includes('mystery'))) score += 1;
        if (answers.motivation === 'characters' && (book.interests.includes('love') || book.interests.includes('friendship'))) score += 1;
        if (answers.motivation === 'ideas' && book.interests.includes('philosophy')) score += 1;
        if (answers.motivation === 'emotions' && (book.interests.includes('love') || book.interests.includes('drama'))) score += 1;

        if (score > bestScore) {
            bestScore = score;
            bestBook = book;
        }
    });

    return bestBook;
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

// Настройка статей
function setupArticles() {
    document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.article-card');
            const articleKey = card.dataset.article;
            const article = articles[articleKey];
            
            articleBody.innerHTML = article.content;
            articleModal.classList.remove('hidden');
        });
    });

    document.querySelector('.modal-close').addEventListener('click', () => {
        articleModal.classList.add('hidden');
    });

    articleModal.addEventListener('click', (e) => {
        if (e.target === articleModal) {
            articleModal.classList.add('hidden');
        }
    });
}

// Запуск
init();
