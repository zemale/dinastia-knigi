

// Вопросы основного теста (30+ вопросов)
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
    },
    {
        id: 'genre',
        text: 'Какой жанр тебе ближе всего?',
        type: 'card',
        cards: [
            { value: 'fantasy', label: '🧙‍♂️ Фэнтези', emoji: '🧙‍♂️' },
            { value: 'scifi', label: '🚀 Научная фантастика', emoji: '🚀' },
            { value: 'romance', label: '💕 Романтика', emoji: '💕' },
            { value: 'mystery', label: '🔍 Детектив', emoji: '🔍' },
            { value: 'historical', label: '🏛️ Исторический', emoji: '🏛️' },
            { value: 'contemporary', label: '🌍 Современная проза', emoji: '🌍' }
        ]
    },
    {
        id: 'pace',
        text: 'Какой темп чтения тебе нравится?',
        options: [
            { value: 'fast', label: '⚡ Быстрый, динамичный' },
            { value: 'medium', label: '🚶 Умеренный, сбалансированный' },
            { value: 'slow', label: '🐌 Медленный, вдумчивый' }
        ]
    },
    {
        id: 'length',
        text: 'Какой объём книги предпочитаешь?',
        options: [
            { value: 'short', label: '📖 Короткие повести (до 200 стр)' },
            { value: 'medium', label: '📚 Средние романы (200-400 стр)' },
            { value: 'long', label: '📚📚📚 Толстые книги (400+ стр)' }
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
        id: 'characters',
        text: 'Какие герои тебе нравятся?',
        options: [
            { value: 'hero', label: '🦸‍♀️ Супергерои/испытания' },
            { value: 'ordinary', label: '👨‍💼 Обычные люди' },
            { value: 'complex', label: '🧠 Сложные/противоречивые' },
            { value: 'romantic', label: '💕 Романтические пары' }
        ]
    },
    {
        id: 'themes',
        text: 'Какие темы тебя интересуют?',
        options: [
            { value: 'love', label: '💕 Любовь и отношения' },
            { value: 'friendship', label: '🤝 Дружба и предательство' },
            { value: 'growth', label: '🌱 Личный рост и взросление' },
            { value: 'social', label: '🌍 Социальные проблемы' },
            { value: 'philosophy', label: '🤔 Философские вопросы' },
            { value: 'adventure', label: '⚔️ Приключения и опасности'
        ]
    },
    {
        id: 'ending',
        text: 'Какая концовка тебе нравится?',
        options: [
            { value: 'happy', label: '😊 Счастливая, оптимистичная' },
            { value: 'sad', label: '😢 Трагическая, меланхоличная' },
            { value: 'open', label: '🔍 Открытая, заставляющая думать' },
            { value: 'surprise', label: '🎭 Неожиданная, шокирующая'
        ]
    },
    {
        id: 'language',
        text: 'Какой язык тебе ближе?',
        options: [
            { value: 'simple', label: '📝 Простой, понятный' },
            { value: 'beautiful', label: '🌸 Поэтичный, красивый' },
            { value: 'complex', label: '🧠 Сложный, глубокий' },
            { value: 'modern', label: '💬 Современный, разговорный'
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
            { value: 'anger', label: '😠 Гнев и возмущение'
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
    },
    fatigue: {
        title: 'Как избавиться от усталости после прочтения книги',
        content: `
            <div class="article-body">
                <h3>Как избавиться от усталости после прочтения книги</h3>
                <p>Ты дочитал(а) книгу — и чувствуете себя выжатым лимоном. Глаза болят, голова гудит, а душа требует передышки. Это нормально, особенно после длинных или сложных произведений.</p>
                
                <p><strong>Как восстановиться:</strong></p>
                <ul>
                    <li><strong>Отдай глазам отдых.</strong> Закрой их на 5-10 минут. Посмотри в окно, на зелень. Пусть глаза отдохнут от букв и экрана.</li>
                    <li><strong>Сделай перерыв.</strong> Не бросайся читать следующую книгу сразу. Дай мозгу переварить прочитанное. день-другой отдыха — не страшно.</li>
                    <li><strong>Пей воду.</strong> Обезвоживание усиливает усталость. Стакан воды — и ты почувствуешь себя лучше.</li>
                    <li><strong>Сделай что-то физическое.</strong> Прогулка, зарядка, просто потянись. Движение помогает «разогнать» усталость.</li>
                    <li><strong>Лёгкая еда.</strong> Фрукты, йогурт, орехи. Тяжелая пища加重ит усталость.</li>
                    <li><strong>Небольшой сон.</strong> 20-30 минут сна — и ты снова полна сил.</li>
                </ul>
                
                <p>Усталость после чтения — знак того, что ты глубоко погрузился(ась) в книгу. Это хорошо, но记得 о себе.</p>
            </div>
        `
    },
    discuss: {
        title: 'Как обсудить с кем-то книгу если её никто не читал',
        content: `
            <div class="article-body">
                <h3>Как обсудить с кем-то книгу если её никто не читал</h3>
                <p>Ты прочитал(а) потрясающую книгу, а вокруг все: «Ой, не читала», «Не слышала», «Слишком сложно». Обидно, но выход есть!</p>
                
                <p><strong>Как заинтересовать:</strong></p>
                <ul>
                    <li><strong>Расскажи сюжет без спойлеров.</strong> Не «герои умирают», а «представь, ты попадаешь в мир, где магия реальна, но опасна».</li>
                    <li><strong>Сделай «тизер».</strong> Выбери самый интересный момент и прочитай его вслух. Один абзац — и человек поймёт стиль.</li>
                    <li><strong>Сравни с известным.</strong> «Это как Гарри Поттер, только взрослее и мрачнее» или «Как «Интерны», но про космос».</li>
                    <li><strong>Покажи обложку.</strong> Красивая обложка привлекает внимание. Спроси: «А что ты думаешь, о эта книга?»</li>
                    <li><strong>Предложи начать с малого.</strong> «Не обязательно читать всю книгу, давай просто посмотрим первую главу».</li>
                    <li><strong>Обсуди темы.</strong> «Книга о дружбе предательства — ты сталкивалась с таким?»</li>
                </ul>
                
                <p>Если человек всё равно не захочет читать — не настаивай. Расскажи сам(а), это тоже приятно.</p>
            </div>
        `
    },
    age: {
        title: 'Почему нельзя выбирать книги не по возрасту',
        content: `
            <div class="article-body">
                <h3>Почему нельзя выбирать книги не по возрасту</h3>
                <p>Тебе 12, а хочется читать «Войну и мир». Или тебе 16, а тянет к детским сказкам. Возрастные рекомендации — не ограничение, а помощник.</p>
                
                <p><strong>Почему важно учитывать возраст:</strong></p>
                <ul>
                    <li><strong>Психологическая готовность.</strong> Книги для взрослых часто поднимают сложные темы: смерть, предательство, взросление. Не каждый ребёнок готов это воспринимать.</li>
                    <li><strong>Словарный запас.</strong> Книги рассчитаны на определённый уровень языка. Сложные слова могут отбить желание читать.</li>
                    <li><strong>Интересы.</strong> В 12 лет хочется приключений, в 16 — глубины психологии. Книги соответствуют возрастным запросам.</li>
                    <li><strong>Эмоциональная защита.</strong> Некоторые сцены могут шокировать или травмировать. Возрастные маркировки — это предупреждение.</li>
                </ul>
                
                <p><strong>Но это не строгий закон!</strong></p>
                <ul>
                    <li>Если тебе скучно — бери книги для старших.</li>
                    <li>Если книга кажется сложной — вернись к ней позже.</li>
                    <li>Проси родителей или учителя помочь выбрать.</li>
                </ul>
                
                <p>Главное — чтобы тебе было интересно и комфортно.</p>
            </div>
        `
    },
    dislike: {
        title: 'Я не люблю читать, что делать',
        content: `
            <div class="article-body">
                <h3>Я не люблю читать, что делать</h3>
                <p>Все вокруг читают, а тебе скучно. Книги кажутся длинными и непонятными. Это нормально! Не любить чтение — не преступление.</p>
                
                <p><strong>Почему ты не любишь читать:</strong></p>
                <ul>
                    <li><strong>Не та книга.</strong> Попытался(ась) читать классику, а она скучная. Попробуй современную или фэнтези.</li>
                    <li><strong>Сложный язык.</strong> Не понимаешь половины слов. Начинай с простых книг.</li>
                    <li><strong>Нет времени.</strong> Занятый график. Выделяй по 15 минут в день.</li>
                    <li><strong>Ты устал(а).</strong> После школы не хочется умственного напряжения. Попробуй аудиокниги.</li>
                </ul>
                
                <p><strong>Что попробовать:</strong></p>
                <ul>
                    <li><strong>Комиксы и графические романы.</strong> Картинки + текст = легко и интересно.</li>
                    <li><strong>Аудиокниги.</strong> Слушай в транспорте, перед сном. Голос рассказчика делает магию.</li>
                    <li><strong>Книги по интересам.</strong> Любишь игры? Бери книги по вселенной. Любишь животных? Книги о них.</li>
                    <li><strong>Начни с малого.</strong> Не 300 страниц, а 20. Рассказы, статьи, даже инструкции.</li>
                    <li><strong>Читай вместе.</strong> С другом, родителями. Обсуждайте прочитанное.</li>
                </ul>
                
                <p>Чтение — не обязанность. Найди свой формат.</p>
            </div>
        `
    },
    school: {
        title: 'Что делать если читать школьную программу скучно?',
        content: `
            <div class="article-body">
                <h3>Что делать если читать школьную программу скучно?</h3>
                <p>«Преступление и наказание» — 500 страниц, «Война и мир» — ещё больше. И всё это «для души». Бывает, что скучно до слёз.</p>
                
                <p><strong>Как сделать школьное чтение интереснее:</strong></p>
                <ul>
                    <li><strong>Пойми, почему это важно.</strong> «Евгений Онегин» — не просто стихи, а портрет эпохи. Когда знаешь контекст, становится интереснее.</li>
                    <li><strong>Сравнивай с современностью.</strong> «Герой нашего времени» — это как современные блогеры, только в 19 веке.</li>
                    <li><strong>Читай с другом.</strong> Обсуждайте персонажей. Кто тебе нравится? Кто нет? Почему?</li>
                    <li><strong>Смотри экранизации.</strong> После книги посмотри фильм. Потом сравни: что получилось, а что нет.</li>
                    <li><strong>Думай о героях.</strong> Представь, что ты герой. Что бы ты сделал(а) на его месте?</li>
                    <li><strong>Записывай мысли.</strong> Веди дневник прочитанного. Что запомнилось? Что удивило?</li>
                </ul>
                
                <p><strong>Если совсем не идёт:</strong></p>
                <ul>
                    <li>Попроси учителя объяснить проще.</li>
                    <li>Найди краткое содержание.</li>
                    <li>Прочти отзывы других школьников.</li>
                </ul>
                
                <p>Школьная программа — это не приговор. Это возможность открыть что-то новое.</p>
            </div>
        `
    },
    boring: {
        title: 'Начал/а читать книгу, но стало скучно. Как дочитать?',
        content: `
            <div class="article-body">
                <h3>Начал/а читать книгу, но стало скучно. Как дочитать?</h3>
                <p>Книга начиналась интересно, но на середине всё пошло наперекосяк. Бросить — жалко, а читать — не хочется. Что делать?</p>
                
                <p><strong>Попробуй спасти интерес:</strong></p>
                <ul>
                    <li><strong>Пропусти скучные части.</strong> Не обязательно читать всё подряд. Пропусти описание природы, длинные диалоги.</li>
                    <li><strong>Найди «изюминку».</strong> В какой главе было интересно? Начни с неё.</li>
                    <li><strong>Представь себя героем.</strong> «Если бы я был на его месте, что бы я сделал?»</li>
                    <li><strong>Читай вслух.</strong> Голос помогает сосредоточиться и делает текст живее.</li>
                    <li><strong>Установи цель.</strong> «Сегодня я дочитаю 10 страниц» — и делай это.</li>
                </ul>
                
                <p><strong>Если совсем не идёт:</strong></p>
                <ul>
                    <li><strong>Оцени причину.</strong> Скучно из-за стиля или из-за сюжета?</li>
                    <li><strong>Сделай перерыв.</strong> Вернись к книге через неделю. Настроение может измениться.</li>
                    <li><strong>Прочти отзывы.</strong> Может, другие тоже считали, что начало скучное?</li>
                    <li><strong>Сравни с другими книгами.</strong> Эта книга хуже любимых? Тогда почему?</li>
                </ul>
                
                <p><strong>Когда точно стоит бросить:</strong></p>
                <ul>
                    <li>Книга вызывает только раздражение.</li>
                    <li>Ты уже 100 страниц ничего не понял(а).</li>
                    <li>Есть другие книги, которые хочется прочитать.</li>
                </ul>
                
                <p>Время — ценный ресурс. Лучше прочитать то, что приносит радость.</p>
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
    
    let optionsHtml = '';
    if (q.type === 'card') {
        optionsHtml = `
            <div class="card-options">
                ${q.cards.map(card => `
                    <div class="card-option" data-value="${card.value}">
                        <div class="card-emoji">${card.emoji}</div>
                        <div class="card-label">${card.label}</div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        optionsHtml = `
            <div class="options">
                ${q.options.map(opt => `
                    <button class="option" data-value="${opt.value}">${opt.label}</button>
                `).join('')}
            </div>
        `;
    }
    
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
            ${optionsHtml}
        </div>
    `;

    // Обработчики кнопок
    setupOptionHandlers('main');
}

// Настройка обработчиков для опций
function setupOptionHandlers(testType) {
    const question = testType === 'mini' ? miniQuestions[currentQuestion] : questions[currentQuestion];
    
    if (question.type === 'card') {
        quizContainer.querySelectorAll('.card-option').forEach(card => {
            card.addEventListener('click', () => {
                // Визуальный feedback
                card.classList.add('selected');
                quizContainer.querySelectorAll('.card-option').forEach(c => {
                    if (c !== card) c.style.opacity = '0.5';
                });
                setTimeout(() => {
                    if (testType === 'mini') {
                        selectMiniOption(question.id, card.dataset.value);
                    } else {
                        selectOption(question.id, card.dataset.value);
                    }
                }, 300);
            });
        });
    } else {
        quizContainer.querySelectorAll('.option').forEach(btn => {
            btn.addEventListener('click', () => {
                // Визуальный feedback
                btn.classList.add('selected');
                quizContainer.querySelectorAll('.option').forEach(b => {
                    if (b !== btn) b.style.opacity = '0.5';
                });
                setTimeout(() => {
                    if (testType === 'mini') {
                        selectMiniOption(question.id, btn.dataset.value);
                    } else {
                        selectOption(question.id, btn.dataset.value);
                    }
                }, 300);
            });
        });
    }
}

// Выбор ответа для мини-теста
function selectMiniOption(questionId, value) {
    answers[questionId] = value;
    currentQuestion++;
    showMiniQuestion(currentQuestion);
}

// Выбор ответа для основного теста
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

// Показать результат мини-теста
function showMiniResult() {
    const book = findBestBook();
    
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    resultContainer.innerHTML = `
        <div class="result-card">
            <div class="result-badge">Рекомендация мини-теста</div>
            <img src="${book.cover}" alt="${book.title}" class="result-book-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="result-book-placeholder" style="display:none;">${book.title}</div>
            <h2 class="result-book-title">${book.title}</h2>
            <p class="result-author">${book.author}</p>
            <p class="result-description">${book.description}</p>
            <div class="result-tags">
                ${book.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                <span class="tag">${book.age}</span>
            </div>
            <div class="result-actions">
                <button class="btn btn-secondary" onclick="showTestSelection()">Выбрать другой тест</button>
                <button class="btn btn-primary" onclick="restartMiniTest()">Пройти мини-тест ещё раз</button>
            </div>
        </div>
    `;
}

// Показать результат основного теста
function showResult() {
    const book = findBestBook();
    
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    resultContainer.innerHTML = `
        <div class="result-card">
            <div class="result-badge">Твоя рекомендация</div>
            <img src="${book.cover}" alt="${book.title}" class="result-book-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="result-book-placeholder" style="display:none;">${book.title}</div>
            <h2 class="result-book-title">${book.title}</h2>
            <p class="result-author">${book.author}</p>
            <p class="result-description">${book.description}</p>
            <div class="result-tags">
                ${book.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                <span class="tag">${book.age}</span>
            </div>
            <div class="result-actions">
                <button class="btn btn-secondary" onclick="showTestSelection()">Выбрать другой тест</button>
                <button class="btn btn-primary" onclick="restartQuiz()">Пройти основной тест ещё раз</button>
            </div>
        </div>
    `;
}

// Перезапуск мини-теста
function restartMiniTest() {
    currentQuestion = 0;
    answers = {};
    resultContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showMiniQuestion(0);
}

// Перезапуск основного теста
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
            e.preventDefault();
            e.stopPropagation();
            
            const card = e.target.closest('.article-card');
            const articleKey = card.dataset.article;
            const article = articles[articleKey];
            
            if (articleBody && articleModal) {
                articleBody.innerHTML = article.content;
                articleModal.classList.remove('hidden');
            }
        });
    });

    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (articleModal) {
                articleModal.classList.add('hidden');
            }
        });
    }

    if (articleModal) {
        articleModal.addEventListener('click', (e) => {
            if (e.target === articleModal) {
                articleModal.classList.add('hidden');
            }
        });
    }
}

// Запуск
init();
