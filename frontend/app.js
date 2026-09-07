// ===== ПОДКЛЮЧЕНИЕ К TELEGRAM =====
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// ===== КАТЕГОРИИ С БРЕНДАМИ =====
const categories = [
    {
        id: 'all',
        name: 'Все товары',
        icon: '📂'
    },
    {
        
    "id": "liquid",
    "name": "Жидкости",
    "icon": "🍓",
    "brands": [
        {
            "id": "angry-vape",
            "name": "Angry Vape",
            "icon": "🍓",
            "series": [
                {
                    "id": "angry-vape-50mg",
                    "name": "Angry Vape Salt 50mg",
                    "flavors": [
                        { "id": 1, "name": "Варан Комод (клубничный джем)", "price": 410, "stock": 4, "description": "Клубничный джем с ментолом" },
                        { "id": 2, "name": "Бегемот Брутто (черный виноград)", "price": 410, "stock": 2, "description": "Черный виноград" },
                        { "id": 3, "name": "Ворон Лут (груша с ананасом)", "price": 410, "stock": 7, "description": "Груша с ананасом" },
                        { "id": 4, "name": "Жираф Шпиль (манго)", "price": 410, "stock": 14, "description": "Сочное манго" },
                        { "id": 5, "name": "Ёж Кутёж (синяя малина)", "price": 410, "stock": 11, "description": "Синяя малина" },
                        { "id": 6, "name": "Геккон Пупырка (кислые конфеты)", "price": 410, "stock": 9, "description": "Кислые конфеты" },
                        { "id": 7, "name": "Енот щипач (чизкейк с клубникой и бананом)", "price": 410, "stock": 12, "description": "Чизкейк с клубникой и бананом" },
                        { "id": 8, "name": "Волк АУФ (вишня с лимоном)", "price": 410, "stock": 5, "description": "Вишня с лимоном" },
                        { "id": 9, "name": "Акула гарпун (черника со сливками)", "price": 410, "stock": 1, "description": "Черника со сливками" },
                        { "id": 10, "name": "Вомбат Батяня (виноградная газировка)", "price": 410, "stock": 6, "description": "Виноградная газировка" },
                        { "id": 11, "name": "Гадюка мамба (персик с малиной)", "price": 410, "stock": 8, "description": "Персик с малиной" },
                        { "id": 12, "name": "Горилла верзила (яблоко с манго и ананасом)", "price": 410, "stock": 10, "description": "Яблоко с манго и ананасом" },
                        { "id": 13, "name": "Жаба анжела (грейпфрут с малиной)", "price": 410, "stock": 13, "description": "Грейпфрут с малиной" },
                        { "id": 14, "name": "Богомол Лизун (ягодные леденцы)", "price": 410, "stock": 3, "description": "Ягодные леденцы" },
                        { "id": 15, "name": "Ленивец Таймлапс (апельсиновая газировка)", "price": 410, "stock": 20, "description": "Апельсиновая газировка" },
                        { "id": 16, "name": "Лев шарм (йогурт манго маракуйя)", "price": 410, "stock": 19, "description": "Йогурт манго маракуйя" },
                        { "id": 17, "name": "Муравей Термит (яблоко)", "price": 410, "stock": 22, "description": "Яблоко" },
                        { "id": 18, "name": "Тигр матрац (банан)", "price": 410, "stock": 31, "description": "Банан" },
                        { "id": 19, "name": "Слон Патефон (арбуз)", "price": 410, "stock": 29, "description": "Арбуз" },
                        { "id": 20, "name": "Хамелион RGB (зеленое яблоко с вишней)", "price": 410, "stock": 33, "description": "Зеленое яблоко с вишней" },
                        { "id": 21, "name": "Паук Меломан (малиновая газировка)", "price": 410, "stock": 26, "description": "Малиновая газировка" },
                        { "id": 22, "name": "Касатка рогатка (мятная жвачка)", "price": 410, "stock": 16, "description": "Мятная жвачка" },
                        { "id": 23, "name": "Осьминог Ван Гог (гранатовый сок)", "price": 410, "stock": 25, "description": "Гранатовый сок" },
                        { "id": 24, "name": "Опоссум хвостун (арбузная жвачка)", "price": 410, "stock": 24, "description": "Арбузная жвачка" },
                        { "id": 25, "name": "Сурикат Эдуард (йогурт с киви)", "price": 410, "stock": 30, "description": "Йогурт с киви" },
                        { "id": 26, "name": "Леопард Пятно (ананасовая газировка)", "price": 410, "stock": 21, "description": "Ананасовая газировка" },
                        { "id": 27, "name": "Капибара Чилл (яблоко с киви)", "price": 410, "stock": 15, "description": "Яблоко с киви" },
                        { "id": 28, "name": "Коала сплюн (клубника)", "price": 410, "stock": 17, "description": "Клубника" },
                        { "id": 29, "name": "Крокодил Бревно (киви)", "price": 410, "stock": 18, "description": "Киви" },
                        { "id": 30, "name": "Носорог Лютый (ананас с яблоком)", "price": 410, "stock": 23, "description": "Ананас с яблоком" },
                        { "id": 31, "name": "Попугай Повтор (лимонный мармелад)", "price": 410, "stock": 27, "description": "Лимонный мармелад" },
                        { "id": 32, "name": "Улитка ЖКХ (жвачка с виноградом)", "price": 410, "stock": 32, "description": "Жвачка с виноградом" },
                        { "id": 33, "name": "Рассомаха Маха (малиновый джем)", "price": 410, "stock": 28, "description": "Малиновый джем" }
                    ]
                },
                {
                    "id": "angry-vape-20mg",
                    "name": "Angry Vape Salt 20mg",
                    "flavors": [
                        { "id": 34, "name": "Акула гарпун (черника со сливками)", "price": 410, "stock": 1, "description": "Черника со сливками" },
                        { "id": 35, "name": "Жираф Шпиль (манго)", "price": 410, "stock": 14, "description": "Сочное манго" },
                        { "id": 36, "name": "Ёж Кутёж (синяя малина)", "price": 410, "stock": 11, "description": "Синяя малина" },
                        { "id": 37, "name": "Варан Комод (клубничный джем)", "price": 410, "stock": 4, "description": "Клубничный джем с ментолом" },
                        { "id": 38, "name": "Опоссум хвостун (арбузная жвачка)", "price": 410, "stock": 24, "description": "Арбузная жвачка" },
                        { "id": 39, "name": "Носорог Лютый (ананас с яблоком)", "price": 410, "stock": 23, "description": "Ананас с яблоком" },
                        { "id": 40, "name": "Сурикат Эдуард (йогурт с киви)", "price": 410, "stock": 30, "description": "Йогурт с киви" },
                        { "id": 41, "name": "Муравей Термит (яблоко)", "price": 410, "stock": 22, "description": "Яблоко" },
                        { "id": 42, "name": "Гадюка мамба (персик с малиной)", "price": 410, "stock": 8, "description": "Персик с малиной" },
                        { "id": 43, "name": "Богомол Лизун (ягодные леденцы)", "price": 410, "stock": 3, "description": "Ягодные леденцы" },
                        { "id": 44, "name": "Ленивец Таймлапс (апельсиновая газировка)", "price": 410, "stock": 20, "description": "Апельсиновая газировка" },
                        { "id": 45, "name": "Горилла верзила (яблоко с манго и ананасом)", "price": 410, "stock": 10, "description": "Яблоко с манго и ананасом" },
                        { "id": 46, "name": "Жаба анжела (грейпфрут с малиной)", "price": 410, "stock": 13, "description": "Грейпфрут с малиной" },
                        { "id": 47, "name": "Коала сплюн (клубника)", "price": 410, "stock": 17, "description": "Клубника" },
                        { "id": 48, "name": "Хамелион RGB (зеленое яблоко с вишней)", "price": 410, "stock": 33, "description": "Зеленое яблоко с вишней" },
                        { "id": 49, "name": "Капибара Чилл (яблоко с киви)", "price": 410, "stock": 15, "description": "Яблоко с киви" },
                        { "id": 50, "name": "Тигр матрац (банан)", "price": 410, "stock": 31, "description": "Банан" },
                        { "id": 51, "name": "Бегемот Брутто (черный виноград)", "price": 410, "stock": 2, "description": "Черный виноград" },
                        { "id": 52, "name": "Крокодил Бревно (киви)", "price": 410, "stock": 18, "description": "Киви" },
                        { "id": 53, "name": "Осьминог Ван Гог (гранатовый сок)", "price": 410, "stock": 25, "description": "Гранатовый сок" },
                        { "id": 54, "name": "Лев шарм (йогурт манго маракуйя)", "price": 410, "stock": 19, "description": "Йогурт манго маракуйя" },
                        { "id": 55, "name": "Волк АУФ (вишня с лимоном)", "price": 410, "stock": 5, "description": "Вишня с лимоном" },
                        { "id": 56, "name": "Геккон Пупырка (кислые конфеты)", "price": 410, "stock": 9, "description": "Кислые конфеты" },
                        { "id": 57, "name": "Леопард Пятно (ананасовая газировка)", "price": 410, "stock": 21, "description": "Ананасовая газировка" },
                        { "id": 58, "name": "Паук Меломан (малиновая газировка)", "price": 410, "stock": 26, "description": "Малиновая газировка" },
                        { "id": 59, "name": "Рассомаха Маха (малиновый джем)", "price": 410, "stock": 28, "description": "Малиновый джем" },
                        { "id": 60, "name": "Слон Патефон (арбуз)", "price": 410, "stock": 29, "description": "Арбуз" },
                        { "id": 61, "name": "Попугай Повтор (лимонный мармелад)", "price": 410, "stock": 27, "description": "Лимонный мармелад" },
                        { "id": 62, "name": "Улитка ЖКХ (жвачка с виноградом)", "price": 410, "stock": 32, "description": "Жвачка с виноградом" },
                        { "id": 63, "name": "Енот щипач (чизкейк с клубникой и бананом)", "price": 410, "stock": 12, "description": "Чизкейк с клубникой и бананом" },
                        { "id": 64, "name": "Касатка рогатка (мятная жвачка)", "price": 410, "stock": 16, "description": "Мятная жвачка" },
                        { "id": 65, "name": "Вомбат Батяня (виноградная газировка)", "price": 410, "stock": 6, "description": "Виноградная газировка" },
                        { "id": 66, "name": "Ворон Лут (груша с ананасом)", "price": 410, "stock": 7, "description": "Груша с ананасом" }
                    ]
                }
            ]
        },
        {
            "id": "angry-ape",
            "name": "ANGRY APE",
            "icon": "🍍",
            "series": [
                {
                    "id": "angry-ape-ultra-60mg",
                    "name": "ANGRY APE ULTRA 60mg",
                    "flavors": [
                        { "id": 67, "name": "Ананасовая конфета", "price": 380, "stock": 1, "description": "Сладкая ананасовая конфета" },
                        { "id": 68, "name": "Банан клубника", "price": 380, "stock": 4, "description": "Нежный банан с клубникой" },
                        { "id": 69, "name": "Ягодный микс", "price": 380, "stock": 20, "description": "Микс лесных ягод" },
                        { "id": 70, "name": "Апельсин с манго", "price": 380, "stock": 2, "description": "Апельсин с манго" },
                        { "id": 71, "name": "Арбуз черника", "price": 380, "stock": 3, "description": "Арбуз черника" },
                        { "id": 72, "name": "Вишневый доктор пеппер", "price": 380, "stock": 5, "description": "Вишневый доктор пеппер" },
                        { "id": 73, "name": "Вишня винограда", "price": 380, "stock": 6, "description": "Вишня винограда" },
                        { "id": 74, "name": "Двойная малина", "price": 380, "stock": 7, "description": "Двойная малина" },
                        { "id": 75, "name": "Земляника винограда", "price": 380, "stock": 8, "description": "Земляника винограда" },
                        { "id": 76, "name": "Йогурт с персиком", "price": 380, "stock": 9, "description": "Йогурт с персиком" },
                        { "id": 77, "name": "Киви маракуйя гуаба", "price": 380, "stock": 10, "description": "Киви маракуйя гуаба" },
                        { "id": 78, "name": "Кислая малина лед", "price": 380, "stock": 11, "description": "Кислая малина лед" },
                        { "id": 79, "name": "Клубничный лимонад", "price": 380, "stock": 12, "description": "Клубничный лимонад" },
                        { "id": 80, "name": "Манго маракуйя", "price": 380, "stock": 13, "description": "Манго маракуйя" },
                        { "id": 81, "name": "Нектарин винограда", "price": 380, "stock": 14, "description": "Нектарин винограда" },
                        { "id": 82, "name": "Черная смородина банан", "price": 380, "stock": 15, "description": "Черная смородина банан" },
                        { "id": 83, "name": "Черника земляника лед", "price": 380, "stock": 16, "description": "Черника земляника лед" },
                        { "id": 84, "name": "Энергетик винограда лед", "price": 380, "stock": 17, "description": "Энергетик винограда лед" },
                        { "id": 85, "name": "Энергетик лесные ягоды", "price": 380, "stock": 18, "description": "Энергетик лесные ягоды" },
                        { "id": 86, "name": "Яблоко персик", "price": 380, "stock": 19, "description": "Яблоко персик" }
                    ]
                }
            ]
        },
        {
            "id": "annima",
            "name": "ANNIMA",
            "icon": "🍇",
            "series": [
                {
                    "id": "annima-animma",
                    "name": "ANIMMA",
                    "flavors": [
                        { "id": 87, "name": "MADARA (бабл гам)", "price": 640, "stock": 8, "description": "Бабл гам" },
                        { "id": 88, "name": "SASUKE (малина айс)", "price": 640, "stock": 10, "description": "Малина айс" },
                        { "id": 89, "name": "ISSHIKI (мармеладные мишки)", "price": 640, "stock": 2, "description": "Мармеладные мишки" },
                        { "id": 90, "name": "NARUTO (ананас)", "price": 640, "stock": 9, "description": "Ананас" },
                        { "id": 91, "name": "JUBI (смородина и виноград)", "price": 640, "stock": 5, "description": "Смородина и виноград" },
                        { "id": 92, "name": "KAGUYA (энергетик айс)", "price": 640, "stock": 7, "description": "Энергетик айс" },
                        { "id": 93, "name": "JIRAIYA (манго-маракуйя)", "price": 640, "stock": 4, "description": "Манго-маракуйя" },
                        { "id": 94, "name": "ITACHI (вишня айс)", "price": 640, "stock": 3, "description": "Вишня айс" },
                        { "id": 95, "name": "INDRA (киви-клубника)", "price": 640, "stock": 1, "description": "Киви-клубника" },
                        { "id": 96, "name": "JUGO (арбуз айс)", "price": 640, "stock": 6, "description": "Арбуз айс" }
                    ]
                },
                {
                    "id": "annima-love-killer-80mg",
                    "name": "ANNIMA LOVE KILLER 80mg",
                    "flavors": [
                        { "id": 97, "name": "Ежевичный Лимонад", "price": 390, "stock": 14, "description": "Ежевичный лимонад" },
                        { "id": 98, "name": "Земляника Виноград", "price": 390, "stock": 18, "description": "Земляника виноград" },
                        { "id": 99, "name": "Груша-Малина Газировка", "price": 390, "stock": 13, "description": "Груша-малина газировка" },
                        { "id": 100, "name": "Клубничный Коктейль", "price": 390, "stock": 19, "description": "Клубничный коктейль" },
                        { "id": 101, "name": "Виноградная Фанта", "price": 390, "stock": 15, "description": "Виноградная фанта" },
                        { "id": 102, "name": "Виноград Алоэ", "price": 390, "stock": 28, "description": "Виноград алоэ" },
                        { "id": 103, "name": "Вишнёвый Морс", "price": 390, "stock": 8, "description": "Вишнёвый морс" },
                        { "id": 104, "name": "Вишня Скитлс Лимон", "price": 390, "stock": 9, "description": "Вишня скитлс лимон" },
                        { "id": 105, "name": "Ананас Апельсин", "price": 390, "stock": 1, "description": "Ананас апельсин" },
                        { "id": 106, "name": "Апельсин Вишня", "price": 390, "stock": 2, "description": "Апельсин вишня" },
                        { "id": 107, "name": "Арбузный Смузи", "price": 390, "stock": 3, "description": "Арбузный смузи" },
                        { "id": 108, "name": "Банан Клубника", "price": 390, "stock": 4, "description": "Банан клубника" },
                        { "id": 109, "name": "Виноград Вишня", "price": 390, "stock": 5, "description": "Виноград вишня" },
                        { "id": 110, "name": "Вишнёвая Газировка", "price": 390, "stock": 7, "description": "Вишнёвая газировка" },
                        { "id": 111, "name": "Виноград Малина-Арбуз", "price": 390, "stock": 10, "description": "Виноград малина-арбуз" },
                        { "id": 112, "name": "Виноградный Чупа-Чупс", "price": 390, "stock": 6, "description": "Виноградный чупа-чупс" },
                        { "id": 113, "name": "Малина Черника", "price": 390, "stock": 12, "description": "Малина черника" },
                        { "id": 114, "name": "Персиковый Лимонад", "price": 390, "stock": 17, "description": "Персиковый лимонад" },
                        { "id": 115, "name": "Фруктовый Энергетик", "price": 390, "stock": 21, "description": "Фруктовый энергетик" },
                        { "id": 116, "name": "Лесные Ягоды", "price": 390, "stock": 20, "description": "Лесные ягоды" },
                        { "id": 117, "name": "Чернично-Малиновые Червячки", "price": 390, "stock": 22, "description": "Чернично-малиновые червячки" },
                        { "id": 118, "name": "Яблочный Лимонад", "price": 390, "stock": 24, "description": "Яблочный лимонад" },
                        { "id": 119, "name": "Фруктовый Тик-Так", "price": 390, "stock": 26, "description": "Фруктовый тик-так" },
                        { "id": 120, "name": "Яблоко Киви", "price": 390, "stock": 23, "description": "Яблоко киви" },
                        { "id": 121, "name": "Тропический Банан", "price": 390, "stock": 27, "description": "Тропический банан" },
                        { "id": 122, "name": "Ягодная Жвачка", "price": 390, "stock": 25, "description": "Ягодная жвачка" },
                        { "id": 123, "name": "Ред Булл с Ананасом", "price": 390, "stock": 29, "description": "Ред булл с ананасом" },
                        { "id": 124, "name": "Розовый Лимонад", "price": 390, "stock": 30, "description": "Розовый лимонад" },
                        { "id": 125, "name": "Персик Клубника", "price": 390, "stock": 16, "description": "Персик клубника" },
                        { "id": 126, "name": "Малина Апельсин", "price": 390, "stock": 11, "description": "Малина апельсин" }
                       ]
                    },
                 {
                    "id": "annima-love-gold-edition-80mg",
                    "name": "ANNIMA LOVE gold edition 80mg",
                    "flavors": [
                        { "id": 127, "name": "Blueberry Pomegranate (Черника-Гранат)", "price": 540, "stock": 3, "description": "Черника-гранат" },
                        { "id": 128, "name": "Juice Peach (Сок Персиковый)", "price": 540, "stock": 9, "description": "Сок персиковый" },
                        { "id": 129, "name": "Sour Cherry (Кислая вишня)", "price": 540, "stock": 10, "description": "Кислая вишня" },
                        { "id": 130, "name": "Ice grape (морозный виноград)", "price": 540, "stock": 8, "description": "Морозный виноград" },
                        { "id": 131, "name": "Sour Skittles (Кислый Скитлс)", "price": 540, "stock": 11, "description": "Кислый скитлс" },
                        { "id": 132, "name": "Frosty Energy (Ледяная Энергия)", "price": 540, "stock": 6, "description": "Ледяная энергия" },
                        { "id": 133, "name": "Cherry Juice (Вишневый Сок)", "price": 540, "stock": 4, "description": "Вишневый сок" },
                        { "id": 134, "name": "Frosty Wild Berries (Морозные лесные ягоды)", "price": 540, "stock": 7, "description": "Морозные лесные ягоды" },
                        { "id": 135, "name": "Wild Berries Juice (Сок из лесных ягод)", "price": 540, "stock": 15, "description": "Сок из лесных ягод" },
                        { "id": 136, "name": "Strawberry Mohito (Клубничный Мохито)", "price": 540, "stock": 14, "description": "Клубничный мохито" },
                        { "id": 137, "name": "Blueberry Melon (Черничная Дыня)", "price": 540, "stock": 2, "description": "Черничная дыня" },
                        { "id": 138, "name": "Blueberry Blackberry (Черника Ежевика)", "price": 540, "stock": 1, "description": "Черника ежевика" },
                        { "id": 139, "name": "Strawberry Banana (Клубника-Банан)", "price": 540, "stock": 12, "description": "Клубника-банан" },
                        { "id": 140, "name": "Currant Lemonade (Смородиновый Лимонад)", "price": 540, "stock": 5, "description": "Смородиновый лимонад" },
                        { "id": 141, "name": "Strawberry Kiwi (Клубника-Киви)", "price": 540, "stock": 13, "description": "Клубника-киви" }
                    ]
                },
                {
                    "id": "annima-love",
                    "name": "ANNIMA LOVE",
                    "flavors": [
                        { "id": 142, "name": "Морозный редбулл", "price": 640, "stock": 11, "description": "Морозный редбулл" },
                        { "id": 143, "name": "Энергетик ягоды", "price": 640, "stock": 20, "description": "Энергетик ягоды" },
                        { "id": 144, "name": "Вишневый сок", "price": 640, "stock": 1, "description": "Вишневый сок" },
                        { "id": 145, "name": "Малиновый лимонад", "price": 640, "stock": 9, "description": "Малиновый лимонад" },
                        { "id": 146, "name": "Кислая вишня", "price": 640, "stock": 3, "description": "Кислая вишня" },
                        { "id": 147, "name": "Кислый скитлс", "price": 640, "stock": 5, "description": "Кислый скитлс" },
                        { "id": 148, "name": "Клубника киви", "price": 640, "stock": 7, "description": "Клубника киви" },
                        { "id": 149, "name": "Ледяной виноград", "price": 640, "stock": 8, "description": "Ледяной виноград" },
                        { "id": 150, "name": "Черника гранат", "price": 640, "stock": 17, "description": "Черника гранат" },
                        { "id": 151, "name": "Сочный персик", "price": 640, "stock": 16, "description": "Сочный персик" },
                        { "id": 152, "name": "Смородина вишня черника", "price": 640, "stock": 14, "description": "Смородина вишня черника" },
                        { "id": 153, "name": "Смородиновый лимонад", "price": 640, "stock": 15, "description": "Смородиновый лимонад" },
                        { "id": 154, "name": "Черника ежевика", "price": 640, "stock": 18, "description": "Черника ежевика" },
                        { "id": 155, "name": "Клубника банан", "price": 640, "stock": 6, "description": "Клубника банан" },
                        { "id": 156, "name": "Морс из диких ягод", "price": 640, "stock": 12, "description": "Морс из диких ягод" },
                        { "id": 157, "name": "Дыня черника", "price": 640, "stock": 2, "description": "Дыня черника" },
                        { "id": 158, "name": "Морозные лесные ягоды", "price": 640, "stock": 10, "description": "Морозные лесные ягоды" },
                        { "id": 159, "name": "Мохито с клубникой", "price": 640, "stock": 13, "description": "Мохито с клубникой" },
                        { "id": 160, "name": "Энергетик малина", "price": 640, "stock": 19, "description": "Энергетик малина" },
                        { "id": 161, "name": "Кислые ягодные червячки", "price": 640, "stock": 4, "description": "Кислые ягодные червячки" }
                    ]
                },
                {
                    "id": "annima-love-miside-70mg",
                    "name": "ANNIMA LOVE MISIDE 70мг",
                    "flavors": [
                        { "id": 162, "name": "БЕЗУМНАЯ ВИШНЯ", "price": 500, "stock": 3, "description": "Безумная вишня" },
                        { "id": 163, "name": "ВЕСЁЛАЯ МАЛИНА", "price": 500, "stock": 5, "description": "Весёлая малина" },
                        { "id": 164, "name": "МИЛЫЙ КИВИ", "price": 500, "stock": 2, "description": "Милый киви" },
                        { "id": 165, "name": "СОННАЯ ДЫНЯ", "price": 500, "stock": 4, "description": "Сонная дыня" },
                        { "id": 166, "name": "ДВОЙНОЙ АРБУЗ", "price": 500, "stock": 1, "description": "Двойной арбуз" }
                    ]
                },
                {
                    "id": "annima-love-toyz-hard",
                    "name": "ANNIMA LOVE & TOYZ (HARD)",
                    "flavors": [
                        { "id": 167, "name": "Виноградный микс", "price": 500, "stock": 4, "description": "Виноградный микс" },
                        { "id": 168, "name": "Киви маракуйя лайм", "price": 500, "stock": 6, "description": "Киви маракуйя лайм" },
                        { "id": 169, "name": "Фруктовый Red Bull", "price": 500, "stock": 14, "description": "Фруктовый ред булл" },
                        { "id": 170, "name": "Клюква вишня", "price": 500, "stock": 8, "description": "Клюква вишня" },
                        { "id": 171, "name": "Классическая Fanta", "price": 500, "stock": 7, "description": "Классическая фанта" },
                        { "id": 172, "name": "Малина ежевика арбуз", "price": 500, "stock": 9, "description": "Малина ежевика арбуз" },
                        { "id": 173, "name": "Ягодные мармеладные червячки", "price": 500, "stock": 15, "description": "Ягодные мармеладные червячки" },
                        { "id": 174, "name": "Тропический коктейль", "price": 500, "stock": 13, "description": "Тропический коктейль" },
                        { "id": 175, "name": "Спелое яблоко", "price": 500, "stock": 12, "description": "Спелое яблоко" },
                        { "id": 176, "name": "Tutti Frutti", "price": 500, "stock": 2, "description": "Тутти фрутти" },
                        { "id": 177, "name": "Вишневый Red Bull", "price": 500, "stock": 5, "description": "Вишневый ред булл" },
                        { "id": 178, "name": "Skittles цитрусовый", "price": 500, "stock": 1, "description": "Скитлс цитрусовый" },
                        { "id": 179, "name": "Виноградный Chupaa Chups", "price": 500, "stock": 3, "description": "Виноградный чупа-чупс" },
                        { "id": 180, "name": "Малиновый мохито", "price": 500, "stock": 10, "description": "Малиновый мохито" },
                        { "id": 181, "name": "Смородина гранат", "price": 500, "stock": 11, "description": "Смородина гранат" }
                    ]
                },
                {
                    "id": "annima-love-sour",
                    "name": "ANNIMA LOVE SOUR",
                    "flavors": [
                        { "id": 182, "name": "Черника Малина", "price": 420, "stock": 21, "description": "Черника малина" },
                        { "id": 183, "name": "Кислый Скитлс", "price": 420, "stock": 27, "description": "Кислый скитлс" },
                        { "id": 184, "name": "Яблоко Киви", "price": 420, "stock": 22, "description": "Яблоко киви" },
                        { "id": 185, "name": "Лайм Черешня", "price": 420, "stock": 16, "description": "Лайм черешня" },
                        { "id": 186, "name": "Кислые арбуз Малина", "price": 420, "stock": 3, "description": "Кислые арбуз малина" },
                        { "id": 187, "name": "Кислый Виноградный чупа-чупс", "price": 420, "stock": 7, "description": "Кислый виноградный чупа-чупс" },
                        { "id": 188, "name": "Кислая Вишня Гранат", "price": 420, "stock": 1, "description": "Кислая вишня гранат" },
                        { "id": 189, "name": "Кислый Гранатовый Коктейль", "price": 420, "stock": 8, "description": "Кислый гранатовый коктейль" },
                        { "id": 190, "name": "Кислые Жевательные Конфетки", "price": 420, "stock": 4, "description": "Кислые жевательные конфетки" },
                        { "id": 191, "name": "Кислое Зеленое Яблоко", "price": 420, "stock": 2, "description": "Кислое зеленое яблоко" },
                        { "id": 192, "name": "Кислый Зеленый Виноград", "price": 420, "stock": 9, "description": "Кислый зеленый виноград" },
                        { "id": 193, "name": "Энергетик Кислая Вишня", "price": 420, "stock": 15, "description": "Энергетик кислая вишня" },
                        { "id": 194, "name": "Кислый Лайм Маракуйя", "price": 420, "stock": 10, "description": "Кислый лайм маракуйя" },
                        { "id": 195, "name": "Кислые Малина Лайм", "price": 420, "stock": 5, "description": "Кислые малина лайм" },
                        { "id": 196, "name": "Кислые Малиновые Червячки", "price": 420, "stock": 6, "description": "Кислые малиновые червячки" },
                        { "id": 197, "name": "Кислый Тропический Микс", "price": 420, "stock": 11, "description": "Кислый тропический микс" },
                        { "id": 198, "name": "Фанта Кислая Газировка", "price": 420, "stock": 14, "description": "Фанта кислая газировка" },
                        { "id": 199, "name": "Кислый Фруктовый Энергетик", "price": 420, "stock": 12, "description": "Кислый фруктовый энергетик" },
                        { "id": 200, "name": "Кислый цитрусовый сок", "price": 420, "stock": 13, "description": "Кислый цитрусовый сок" },
                        { "id": 201, "name": "Лесные ягоды", "price": 420, "stock": 17, "description": "Лесные ягоды" },
                        { "id": 202, "name": "Ананасовый Энергетик", "price": 420, "stock": 23, "description": "Ананасовый энергетик" },
                        { "id": 203, "name": "Мандариновая фанта", "price": 420, "stock": 18, "description": "Мандариновая фанта" },
                        { "id": 204, "name": "Персик Маракуйя", "price": 420, "stock": 19, "description": "Персик маракуйя" },
                        { "id": 205, "name": "Вишня Лимон", "price": 420, "stock": 24, "description": "Вишня лимон" },
                        { "id": 206, "name": "Черника Апельсин", "price": 420, "stock": 20, "description": "Черника апельсин" },
                        { "id": 207, "name": "Ежевика Клубника", "price": 420, "stock": 25, "description": "Ежевика клубника" }
                    ]
                },
                {
                    "id": "annima-love-zombi",
                    "name": "ANNIMA LOVE & ZOMBI (70mg)",
                    "flavors": [
                        { "id": 208, "name": "Алоэ виноград", "price": 630, "stock": 1, "description": "Алоэ виноград" },
                        { "id": 209, "name": "Лесные ягоды", "price": 630, "stock": 12, "description": "Лесные ягоды" },
                        { "id": 210, "name": "Мандариновая фанта", "price": 630, "stock": 14, "description": "Мандариновая фанта" },
                        { "id": 211, "name": "Малина с кислинкой", "price": 630, "stock": 13, "description": "Малина с кислинкой" },
                        { "id": 212, "name": "Яблоко персик", "price": 630, "stock": 20, "description": "Яблоко персик" },
                        { "id": 213, "name": "Клубника банан", "price": 630, "stock": 8, "description": "Клубника банан" },
                        { "id": 214, "name": "Ананас киви", "price": 630, "stock": 2, "description": "Ананас киви" },
                        { "id": 215, "name": "Арбузный бабл гам", "price": 630, "stock": 3, "description": "Арбузный бабл гам" },
                        { "id": 216, "name": "Вишня лед", "price": 630, "stock": 4, "description": "Вишня лед" },
                        { "id": 217, "name": "Грейпфрут вишня", "price": 630, "stock": 5, "description": "Грейпфрут вишня" },
                        { "id": 218, "name": "Ежевичный лимонад", "price": 630, "stock": 6, "description": "Ежевичный лимонад" },
                        { "id": 219, "name": "Киви клубника", "price": 630, "stock": 7, "description": "Киви клубника" },
                        { "id": 220, "name": "Клубнично-вишневый лимонад", "price": 630, "stock": 9, "description": "Клубнично-вишневый лимонад" },
                        { "id": 221, "name": "Клубничный леденец", "price": 630, "stock": 10, "description": "Клубничный леденец" },
                        { "id": 222, "name": "Лесной микс", "price": 630, "stock": 11, "description": "Лесной микс" },
                        { "id": 223, "name": "Морозный ред Булл", "price": 630, "stock": 15, "description": "Морозный ред Булл" },
                        { "id": 224, "name": "Персиковый шейк", "price": 630, "stock": 16, "description": "Персиковый шейк" },
                        { "id": 225, "name": "Фанта маракуйя", "price": 630, "stock": 17, "description": "Фанта маракуйя" },
                        { "id": 226, "name": "Энергетик виноград", "price": 630, "stock": 18, "description": "Энергетик виноград" },
                        { "id": 227, "name": "Яблоко виноград", "price": 630, "stock": 19, "description": "Яблоко виноград" }
                    ]
                }
            ]
        },
        {
            "id": "blood",
            "name": "BLOOD",
            "icon": "🩸",
            "series": [
                {
                    "id": "blood-50mg",
                    "name": "BLOOD 50mg",
                    "flavors": [
                        { "id": 228, "name": "Вишня лайм", "price": 310, "stock": 5, "description": "Таркая вишня с лаймом" },
                        { "id": 229, "name": "Банановый милкшейк", "price": 310, "stock": 2, "description": "Густой банановый милкшейк" },
                        { "id": 230, "name": "Конфеты смородина мята", "price": 310, "stock": 9, "description": "Конфеты смородина мята" },
                        { "id": 231, "name": "Малиновый лимонад", "price": 310, "stock": 12, "description": "Освежающий малиновый лимонад" },
                        { "id": 232, "name": "Клюквенный лимонад", "price": 310, "stock": 8, "description": "Клюквенный лимонад" },
                        { "id": 233, "name": "Банан клубника", "price": 310, "stock": 1, "description": "Банан с клубникой" },
                        { "id": 234, "name": "Виноград черника", "price": 310, "stock": 4, "description": "Виноград с черникой" },
                        { "id": 235, "name": "Дыня", "price": 310, "stock": 6, "description": "Сочная дыня" },
                        { "id": 236, "name": "Брусничный морс", "price": 310, "stock": 3, "description": "Брусничный морс" },
                        { "id": 237, "name": "Классический бабл гам", "price": 310, "stock": 7, "description": "Классический бабл гам" },
                        { "id": 238, "name": "Малина гранат", "price": 310, "stock": 11, "description": "Малина с гранатом" },
                        { "id": 239, "name": "Лесные ягоды", "price": 310, "stock": 10, "description": "Лесные ягоды" },
                        { "id": 240, "name": "Сочный лимон", "price": 310, "stock": 16, "description": "Сочный лимон" },
                        { "id": 241, "name": "Черная смородина", "price": 310, "stock": 18, "description": "Черная смородина" },
                        { "id": 242, "name": "Черника малина", "price": 310, "stock": 19, "description": "Черника с малиной" },
                        { "id": 243, "name": "Черный виноград", "price": 310, "stock": 20, "description": "Черный виноград" },
                        { "id": 244, "name": "Персиковый лимонад", "price": 310, "stock": 13, "description": "Персиковый лимонад" },
                        { "id": 245, "name": "Сладкий ананас", "price": 310, "stock": 14, "description": "Сладкий ананас" },
                        { "id": 246, "name": "Сочная малина", "price": 310, "stock": 15, "description": "Сочная малина" },
                        { "id": 247, "name": "Тропический микс", "price": 310, "stock": 17, "description": "Тропический микс" }
                    ]
                },
                {
                    "id": "blood-classic",
                    "name": "BLOOD Classic",
                    "flavors": [
                        { "id": 248, "name": "Raspberry Pomegranate (Малина и гранат)", "price": 1030, "stock": 99, "description": "Малина и гранат" },
                        { "id": 249, "name": "Lime lemon (Лимон лайм)", "price": 1030, "stock": 99, "description": "Лимон лайм" },
                        { "id": 250, "name": "Needle rasberry (Игольчатая малина)", "price": 1030, "stock": 99, "description": "Игольчатая малина" },
                        { "id": 251, "name": "Mors Cowberry (Брусничный морс)", "price": 1030, "stock": 99, "description": "Брусничный морс" },
                        { "id": 252, "name": "Wild Strawberry Currant Mors (Морс из клубн. и смородины)", "price": 1030, "stock": 99, "description": "Морс из клубники и смородины" },
                        { "id": 253, "name": "Green apple (Яблоко)", "price": 1030, "stock": 99, "description": "Яблоко" },
                        { "id": 254, "name": "Juicy mango (Сочный манго)", "price": 1030, "stock": 99, "description": "Сочный манго" },
                        { "id": 255, "name": "Sweet pineapple (Сладкий ананас)", "price": 1030, "stock": 99, "description": "Сладкий ананас" }
                    ]
                }
            ]
        },
        {
            "id": "catswill",
            "name": "CATSWILL",
            "icon": "🐱",
            "series": [
                {
                    "id": "catswill-20mg",
                    "name": "CATSWILL 20mg",
                    "flavors": [
                        { "id": 256, "name": "Клубника арбуз жвачка 20mg", "price": 500, "stock": 14, "description": "Клубника арбуз жвачка" },
                        { "id": 257, "name": "Клубника виноград мята 20mg", "price": 500, "stock": 15, "description": "Клубника виноград мята" },
                        { "id": 258, "name": "Клубнично вишневая конфета 20mg", "price": 500, "stock": 19, "description": "Клубнично вишневая конфета" },
                        { "id": 259, "name": "Мамба кислое яблоко киви 20mg", "price": 500, "stock": 23, "description": "Мамба кислое яблоко киви" },
                        { "id": 260, "name": "Морозные лесные ягоды 20mg", "price": 500, "stock": 25, "description": "Морозные лесные ягоды" },
                        { "id": 261, "name": "Лимонад черника лайм 20mg", "price": 500, "stock": 21, "description": "Лимонад черника лайм" },
                        { "id": 262, "name": "Клубника черника фрэш 20mg", "price": 500, "stock": 18, "description": "Клубника черника фрэш" },
                        { "id": 263, "name": "Черника малина лимонад 20mg", "price": 500, "stock": 30, "description": "Черника малина лимонад" },
                        { "id": 264, "name": "Клубника киви 20mg", "price": 500, "stock": 17, "description": "Клубника киви" },
                        { "id": 265, "name": "Мамба манго апельсин 20mg", "price": 500, "stock": 24, "description": "Мамба манго апельсин" },
                        { "id": 266, "name": "Имбирный лимонад с малиной 20mg", "price": 500, "stock": 5, "description": "Имбирный лимонад с малиной" },
                        { "id": 267, "name": "Йогурт клубника маракуйя 20mg", "price": 500, "stock": 6, "description": "Йогурт клубника маракуйя" },
                        { "id": 268, "name": "Вишня персик мята 20mg", "price": 500, "stock": 4, "description": "Вишня персик мята" },
                        { "id": 269, "name": "Малина ежевика лед 20mg", "price": 500, "stock": 22, "description": "Малина ежевика лед" },
                        { "id": 270, "name": "Алоэ виноград 20mg", "price": 500, "stock": 1, "description": "Алоэ виноград" },
                        { "id": 271, "name": "Вишневые леденцы 20mg", "price": 500, "stock": 3, "description": "Вишневые леденцы" },
                        { "id": 272, "name": "Кислые червячки с малиной и черешней 20mg", "price": 500, "stock": 9, "description": "Кислые червячки с малиной и черешней" },
                        { "id": 273, "name": "Кислые яблочные червички 20mg", "price": 500, "stock": 10, "description": "Кислые яблочные червички" },
                        { "id": 274, "name": "Кислый виноградный Чупа-чупс 20mg", "price": 500, "stock": 11, "description": "Кислый виноградный Чупа-чупс" },
                        { "id": 275, "name": "Кислый малиновый скитлс 20mg", "price": 500, "stock": 12, "description": "Кислый малиновый скитлс" },
                        { "id": 276, "name": "Мятная жвачка 20mg", "price": 500, "stock": 26, "description": "Мятная жвачка" },
                        { "id": 277, "name": "Ананасовый сироп виноград 20mg", "price": 500, "stock": 2, "description": "Ананасовый сироп виноград" },
                        { "id": 278, "name": "Кислый скитлс 20mg", "price": 500, "stock": 13, "description": "Кислый скитлс" },
                        { "id": 279, "name": "Клубника жвачка банан 20mg", "price": 500, "stock": 16, "description": "Клубника жвачка банан" },
                        { "id": 280, "name": "Лимонад ежевика сироп 20mg", "price": 500, "stock": 20, "description": "Лимонад ежевика сироп" },
                        { "id": 281, "name": "Скитлс виноград 20mg", "price": 500, "stock": 27, "description": "Скитлс виноград" },
                        { "id": 282, "name": "Хайповый энергетик с черникой 20mg", "price": 500, "stock": 28, "description": "Хайповый энергетик с черникой" },
                        { "id": 283, "name": "Черника лед ежевика 20mg", "price": 500, "stock": 29, "description": "Черника лед ежевика" },
                        { "id": 284, "name": "Чернично арбузная жвачка 20mg", "price": 500, "stock": 31, "description": "Чернично арбузная жвачка" },
                        { "id": 285, "name": "Киви лед кислинка 20mg", "price": 500, "stock": 7, "description": "Киви лед кислинка" },
                        { "id": 286, "name": "Кислая фруктовая жвачка 20mg", "price": 500, "stock": 8, "description": "Кислая фруктовая жвачка" }
                    ]
                },
                    {
                        id: 'catswill-50mg',
                        name: 'CATSWILL 50mg',
                        flavors: [
                            { id: 3032, name: 'Кислый скитлс 50mg', price: 370, stock: 99, description: 'Кислый скитлс' },
                            { id: 3033, name: 'Клубника виноград мята 50mg', price: 370, stock: 99, description: 'Клубника виноград мята' },
                            { id: 3034, name: 'Клубнично вишневая конфетка 50mg', price: 370, stock: 99, description: 'Клубнично вишневая конфетка' },
                            { id: 3035, name: 'Манго сода виноград 50mg', price: 370, stock: 99, description: 'Манго сода виноград' },
                            { id: 3036, name: 'Малиновый скитлс 50mg', price: 370, stock: 99, description: 'Малиновый скитлс' },
                            { id: 3037, name: 'Мятная вишня 50mg', price: 370, stock: 99, description: 'Мятная вишня' },
                            { id: 3038, name: 'Черника лед ежевика 50mg', price: 370, stock: 99, description: 'Черника лед ежевика' },
                            { id: 3039, name: 'Скитлс виноград 50mg', price: 370, stock: 99, description: 'Скитлс виноград' },
                            { id: 3040, name: 'Вишня персик мята 50mg', price: 370, stock: 99, description: 'Вишня персик мята' },
                            { id: 3041, name: 'Хайповый энергетик с черникой 50mg', price: 370, stock: 99, description: 'Хайповый энергетик с черникой' },
                            { id: 3042, name: 'Мамба кислое яблоко киви 50mg', price: 370, stock: 99, description: 'Мамба кислое яблоко киви' },
                            { id: 3043, name: 'Клубника арбуз жвачка 50mg', price: 370, stock: 99, description: 'Клубника арбуз жвачка' },
                            { id: 3044, name: 'Газировка маунтин дью с вишней 50mg', price: 370, stock: 99, description: 'Газировка маунтин дью с вишней' },
                            { id: 3045, name: 'Лимонад черника лайм 50mg', price: 370, stock: 99, description: 'Лимонад черника лайм' },
                            { id: 3046, name: 'Виноград мята 50mg', price: 370, stock: 99, description: 'Виноград мята' },
                            { id: 3047, name: 'Мятная жвачка 50mg', price: 370, stock: 99, description: 'Мятная жвачка' },
                            { id: 3048, name: 'Айрен брю с долькой апельсина 50mg', price: 370, stock: 99, description: 'Айрен брю с долькой апельсина' },
                            { id: 3049, name: 'Клубника жвачка банан 50mg', price: 370, stock: 99, description: 'Клубника жвачка банан' },
                            { id: 3050, name: 'Вишневые леденцы 50mg', price: 370, stock: 99, description: 'Вишневые леденцы' },
                            { id: 3051, name: 'Клубника киви 50mg', price: 370, stock: 99, description: 'Клубника киви' },
                            { id: 3052, name: 'Ананасовый сироп виноград 50mg', price: 370, stock: 99, description: 'Ананасовый сироп виноград' },
                            { id: 3053, name: 'Кислая фруктовая жвачка 50mg', price: 370, stock: 99, description: 'Кислая фруктовая жвачка' },
                            { id: 3054, name: 'Малина ежевика лед 50mg', price: 370, stock: 99, description: 'Малина ежевика лед' },
                            { id: 3055, name: 'Алоэ виноград 50mg', price: 370, stock: 99, description: 'Алоэ виноград' },
                            { id: 3056, name: 'Чернично-арбузная жвачка 50mg', price: 370, stock: 99, description: 'Чернично-арбузная жвачка' },
                            { id: 3057, name: 'Киви лед кислинка 50mg', price: 370, stock: 99, description: 'Киви лед кислинка' },
                            { id: 3058, name: 'Морозные ягоды 50mg', price: 370, stock: 99, description: 'Морозные ягоды' },
                            { id: 3059, name: 'Чернично клубничный фреш 50mg', price: 370, stock: 99, description: 'Чернично клубничный фреш' },
                            { id: 3060, name: 'Яблочные червячки 50mg', price: 370, stock: 99, description: 'Яблочные червячки' },
                            { id: 3061, name: 'Мамба манго апельсин 50mg', price: 370, stock: 99, description: 'Мамба манго апельсин' },
                            { id: 3062, name: 'Чай с малиной и мятой 50mg', price: 370, stock: 99, description: 'Чай с малиной и мятой' },
                            { id: 3063, name: 'Черника малина лимонад 50mg', price: 370, stock: 99, description: 'Черника малина лимонад' },
                            { id: 3064, name: 'Имбирный лимонад с малиной 50mg', price: 370, stock: 99, description: 'Имбирный лимонад с малиной' },
                            { id: 3065, name: 'Йогурт клубника маракуйя 50mg', price: 370, stock: 99, description: 'Йогурт клубника маракуйя' },
                            { id: 3066, name: 'Ананас лед виноград 50mg', price: 370, stock: 99, description: 'Ананас лед виноград' },
                            { id: 3067, name: 'Кислые червячки с малиной и черешней 50mg', price: 370, stock: 99, description: 'Кислые червячки с малиной и черешней' },
                            { id: 3068, name: 'Виноградный чупа-чупс 50mg', price: 370, stock: 99, description: 'Виноградный чупа-чупс' },
                            { id: 3069, name: 'Лимонад ежевика сироп 50mg', price: 370, stock: 99, description: 'Лимонад ежевика сироп' },
                            { id: 3070, name: 'Доктор пеппер с апельсином 50mg', price: 370, stock: 99, description: 'Доктор пеппер с апельсином' },
                            { id: 3071, name: 'Арбузный пунш с малиной и клубникой 50mg', price: 370, stock: 99, description: 'Арбузный пунш с малиной и клубникой' }
                        ]
                    },
                    {
                        id: 'catswill-extra-strong',
                        name: 'CATSWILL EXTRA 20mg STRONG',
                        flavors: [
                            { id: 3072, name: 'Виноград малина скитлс', price: 480, stock: 99, description: 'Виноград малина скитлс' },
                            { id: 3073, name: 'Вишня арбуз лёд', price: 480, stock: 99, description: 'Вишня арбуз лёд' },
                            { id: 3074, name: 'Виноград малина арбуз', price: 480, stock: 99, description: 'Виноград малина арбуз' },
                            { id: 3075, name: 'Драконий фрукт клубника малина', price: 480, stock: 99, description: 'Драконий фрукт клубника малина' },
                            { id: 3076, name: 'Вишня скитлс лимон', price: 480, stock: 99, description: 'Вишня скитлс лимон' },
                            { id: 3077, name: 'Кислое Яблоко лайм киви', price: 480, stock: 99, description: 'Кислое Яблоко лайм киви' },
                            { id: 3078, name: 'Виноград смородина скитлс', price: 480, stock: 99, description: 'Виноград смородина скитлс' },
                            { id: 3079, name: 'Киви манго', price: 480, stock: 99, description: 'Киви манго' },
                            { id: 3080, name: 'Абрикос мандарин скитлс', price: 480, stock: 99, description: 'Абрикос мандарин скитлс' },
                            { id: 3081, name: 'Вишня бабл гам мята', price: 480, stock: 99, description: 'Вишня бабл гам мята' },
                            { id: 3082, name: 'Кислая яблочная хубба-бубба', price: 480, stock: 99, description: 'Кислая яблочная хубба-бубба' },
                            { id: 3083, name: 'Виноград персик', price: 480, stock: 99, description: 'Виноград персик' },
                            { id: 3084, name: 'Ежевика клубника', price: 480, stock: 99, description: 'Ежевика клубника' },
                            { id: 3085, name: 'Груша малина газировка', price: 480, stock: 99, description: 'Груша малина газировка' },
                            { id: 3086, name: 'Зеленый чай клубника лайм', price: 480, stock: 99, description: 'Зеленый чай клубника лайм' },
                            { id: 3087, name: 'Виноград дыня', price: 480, stock: 99, description: 'Виноград дыня' },
                            { id: 3088, name: 'Вишня яблоко мелисса', price: 480, stock: 99, description: 'Вишня яблоко мелисса' },
                            { id: 3089, name: 'Виноград лайм мята', price: 480, stock: 99, description: 'Виноград лайм мята' },
                            { id: 3090, name: 'Киви малина скитлс', price: 480, stock: 99, description: 'Киви малина скитлс' },
                            { id: 3091, name: 'Виноград арбуз скитлс', price: 480, stock: 99, description: 'Виноград арбуз скитлс' },
                            { id: 3092, name: 'Ежевика виноград ментос', price: 480, stock: 99, description: 'Ежевика виноград ментос' },
                            { id: 3093, name: 'Китлс малина клубника', price: 480, stock: 99, description: 'Китлс малина клубника' },
                            { id: 3094, name: 'Кислое яблоко персик', price: 480, stock: 99, description: 'Кислое яблоко персик' },
                            { id: 3095, name: 'Черная смородина скитлс черника', price: 480, stock: 99, description: 'Черная смородина скитлс черника' },
                            { id: 3096, name: 'Яблочная холодная фанта', price: 480, stock: 99, description: 'Яблочная холодная фанта' },
                            { id: 3097, name: 'Сакура виноград', price: 480, stock: 99, description: 'Сакура виноград' },
                            { id: 3098, name: 'Кислый швепс грейпфрут', price: 480, stock: 99, description: 'Кислый швепс грейпфрут' },
                            { id: 3099, name: 'Черника земляника', price: 480, stock: 99, description: 'Черника земляника' },
                            { id: 3100, name: 'Кислый персик маракуйя', price: 480, stock: 99, description: 'Кислый персик маракуйя' },
                            { id: 3101, name: 'Черешня малина', price: 480, stock: 99, description: 'Черешня малина' },
                            { id: 3102, name: 'Мятный ментос', price: 480, stock: 99, description: 'Мятный ментос' },
                            { id: 3103, name: 'Летний лимонад лимон мята', price: 480, stock: 99, description: 'Летний лимонад лимон мята' },
                            { id: 3104, name: 'Лимон груша', price: 480, stock: 99, description: 'Лимон груша' },
                            { id: 3105, name: 'Морошка скитлс лимон', price: 480, stock: 99, description: 'Морошка скитлс лимон' },
                            { id: 3106, name: 'Кокос ананас лёд', price: 480, stock: 99, description: 'Кокос ананас лёд' },
                            { id: 3107, name: 'Лимон яблоко лёд', price: 480, stock: 99, description: 'Лимон яблоко лёд' },
                            { id: 3108, name: 'Персик виноград клубника', price: 480, stock: 99, description: 'Персик виноград клубника' },
                            { id: 3109, name: 'Розовый лимонад малина', price: 480, stock: 99, description: 'Розовый лимонад малина' },
                            { id: 3110, name: 'Ледяные лесные ягоды', price: 480, stock: 99, description: 'Ледяные лесные ягоды' },
                            { id: 3111, name: 'Кислый земляничный чупа чупс', price: 480, stock: 99, description: 'Кислый земляничный чупа чупс' },
                            { id: 3112, name: 'Клубнично-яблочный скитлс', price: 480, stock: 99, description: 'Клубнично-яблочный скитлс' },
                            { id: 3113, name: 'Клубника лед личи', price: 480, stock: 99, description: 'Клубника лед личи' },
                            { id: 3114, name: 'Хубба-буба клубника черника арбуз', price: 480, stock: 99, description: 'Хубба-буба клубника черника арбуз' },
                            { id: 3115, name: 'Кислый мандариновый скитлс', price: 480, stock: 99, description: 'Кислый мандариновый скитлс' },
                            { id: 3116, name: 'Лайм малина лед', price: 480, stock: 99, description: 'Лайм малина лед' },
                            { id: 3117, name: 'Лесные ягоды яблоко', price: 480, stock: 99, description: 'Лесные ягоды яблоко' },
                            { id: 3118, name: 'Морозная черника лимон', price: 480, stock: 99, description: 'Морозная черника лимон' },
                            { id: 3119, name: 'Цитрусовый мятный микс', price: 480, stock: 99, description: 'Цитрусовый мятный микс' },
                            { id: 3120, name: 'Скитлс яблоко лёд', price: 480, stock: 99, description: 'Скитлс яблоко лёд' },
                            { id: 3121, name: 'Яблоко виноград', price: 480, stock: 99, description: 'Яблоко виноград' },
                            { id: 3122, name: 'Морозный черный виноград', price: 480, stock: 99, description: 'Морозный черный виноград' },
                            { id: 3123, name: 'Ледяная морошка малина', price: 480, stock: 99, description: 'Ледяная морошка малина' },
                            { id: 3124, name: 'Лимонная шипучка', price: 480, stock: 99, description: 'Лимонная шипучка' },
                            { id: 3125, name: 'Освежающий чай персик лимон', price: 480, stock: 99, description: 'Освежающий чай персик лимон' },
                            { id: 3126, name: 'Морозная ледяная мелисса', price: 480, stock: 99, description: 'Морозная ледяная мелисса' },
                            { id: 3127, name: 'Кислые ленточки клубника киви', price: 480, stock: 99, description: 'Кислые ленточки клубника киви' },
                            { id: 3128, name: 'Клюква лимон скитлс', price: 480, stock: 99, description: 'Клюква лимон скитлс' },
                            { id: 3129, name: 'Черный виноград черника малина', price: 480, stock: 99, description: 'Черный виноград черника малина' },
                            { id: 3130, name: 'Мандарин сладкое яблоко', price: 480, stock: 99, description: 'Мандарин сладкое яблоко' },
                            { id: 3131, name: 'Кислый виноград клубника', price: 480, stock: 99, description: 'Кислый виноград клубника' },
                            { id: 3132, name: 'Яблоко черная смородина', price: 480, stock: 99, description: 'Яблоко черная смородина' },
                            { id: 3133, name: 'Лимонад дыня малина', price: 480, stock: 99, description: 'Лимонад дыня малина' },
                            { id: 3134, name: 'Морозная черешня', price: 480, stock: 99, description: 'Морозная черешня' },
                            { id: 3135, name: 'Персик апельсин', price: 480, stock: 99, description: 'Персик апельсин' },
                            { id: 3136, name: 'Фанта с голубой малиной', price: 480, stock: 99, description: 'Фанта с голубой малиной' },
                            { id: 3137, name: 'Черешня кислый скитлс', price: 480, stock: 99, description: 'Черешня кислый скитлс' },
                            { id: 3138, name: 'Сок киви гранат лед', price: 480, stock: 99, description: 'Сок киви гранат лед' },
                            { id: 3139, name: 'Чёрный виноград апельсин', price: 480, stock: 99, description: 'Чёрный виноград апельсин' },
                            { id: 3140, name: 'Ментос персик апельсин', price: 480, stock: 99, description: 'Ментос персик апельсин' },
                            { id: 3141, name: 'Кислый ананас лимон', price: 480, stock: 99, description: 'Кислый ананас лимон' },
                            { id: 3142, name: 'Скитлс кактус лимон', price: 480, stock: 99, description: 'Скитлс кактус лимон' },
                            { id: 3143, name: 'Кислые ленточки черешня голубика', price: 480, stock: 99, description: 'Кислые ленточки черешня голубика' },
                            { id: 3144, name: 'Скитлс апельсин лайм', price: 480, stock: 99, description: 'Скитлс апельсин лайм' },
                            { id: 3145, name: 'Персик лимон лед', price: 480, stock: 99, description: 'Персик лимон лед' },
                            { id: 3146, name: 'Яблоко мамлина', price: 480, stock: 99, description: 'Яблоко мамлина' },
                            { id: 3147, name: 'Кислый ананас лимон', price: 480, stock: 99, description: 'Кислый ананас лимон' },
                            { id: 3148, name: 'Персик лимон лед', price: 480, stock: 99, description: 'Персик лимон лед' }
                        ]
                    },
                    {
                        id: 'catswill-malasian',
                        name: 'CATSWILL & MALASIAN 50mg',
                        flavors: [
                            { id: 3149, name: 'Снежная клубника', price: 480, stock: 99, description: 'Снежная клубника' },
                            { id: 3150, name: 'Гранатово клубничный ураган', price: 480, stock: 99, description: 'Гранатово клубничный ураган' },
                            { id: 3151, name: 'Двойной удар манго', price: 480, stock: 99, description: 'Двойной удар манго' },
                            { id: 3152, name: 'Дынно земляничная резинка', price: 480, stock: 99, description: 'Дынно земляничная резинка' },
                            { id: 3153, name: 'Розовая шипучка с малиной', price: 480, stock: 99, description: 'Розовая шипучка с малиной' },
                            { id: 3154, name: 'Тропический вихрь', price: 480, stock: 99, description: 'Тропический вихрь' },
                            { id: 3155, name: 'Яблочный штурм', price: 480, stock: 99, description: 'Яблочный штурм' },
                            { id: 3156, name: 'Вишневая тянучка', price: 480, stock: 99, description: 'Вишневая тянучка' },
                            { id: 3157, name: 'Лимонный кисляк', price: 480, stock: 99, description: 'Лимонный кисляк' },
                            { id: 3158, name: 'Ягодное лукошко', price: 480, stock: 99, description: 'Ягодное лукошко' },
                            { id: 3159, name: 'Энергия безумия', price: 480, stock: 99, description: 'Энергия безумия' },
                            { id: 3160, name: 'Йогуртовый краш', price: 480, stock: 99, description: 'Йогуртовый краш' },
                            { id: 3161, name: 'Радужные конфетки с кислинкой', price: 480, stock: 99, description: 'Радужные конфетки с кислинкой' },
                            { id: 3162, name: 'Лимонад и грушевое ситро', price: 480, stock: 99, description: 'Лимонад и грушевое ситро' },
                            { id: 3163, name: 'Цитросовый циклон', price: 480, stock: 99, description: 'Цитросовый циклон' }
                        ]
                    },
                    {
                        id: 'catswill-sour-45mg',
                        name: 'CATSWILL SOUR 45mg',
                        flavors: [
                            { id: 3164, name: 'Кислые мармеладные ягоды', price: 370, stock: 99, description: 'Кислые мармеладные ягоды' },
                            { id: 3165, name: 'Кислая газировка с черной смородиной и клюквой', price: 370, stock: 99, description: 'Кислая газировка с черной смородиной и клюквой' },
                            { id: 3166, name: 'Кислая яблочно-клубничная шипучка', price: 370, stock: 99, description: 'Кислая яблочно-клубничная шипучка' },
                            { id: 3167, name: 'Кислая фанта с черникой', price: 370, stock: 99, description: 'Кислая фанта с черникой' },
                            { id: 3168, name: 'Кислое харибо с колой и черешней', price: 370, stock: 99, description: 'Кислое харибо с колой и черешней' },
                            { id: 3169, name: 'Кислая земляничное мохито', price: 370, stock: 99, description: 'Кислая земляничное мохито' },
                            { id: 3170, name: 'Кислые желатинки маракуйя ананас', price: 370, stock: 99, description: 'Кислые желатинки маракуйя ананас' },
                            { id: 3171, name: 'Кислые ленточки маракуйя манго', price: 370, stock: 99, description: 'Кислые ленточки маракуйя манго' },
                            { id: 3172, name: 'Кислый персик клубника', price: 370, stock: 99, description: 'Кислый персик клубника' },
                            { id: 3173, name: 'Кислый лимонад арбуз лайм малина', price: 370, stock: 99, description: 'Кислый лимонад арбуз лайм малина' },
                            { id: 3174, name: 'Кислые яблочнно-лимонные колечки', price: 370, stock: 99, description: 'Кислые яблочнно-лимонные колечки' },
                            { id: 3175, name: 'Кислый виноград лайм', price: 370, stock: 99, description: 'Кислый виноград лайм' },
                            { id: 3176, name: 'Кислый грейпфрут с вишней', price: 370, stock: 99, description: 'Кислый грейпфрут с вишней' },
                            { id: 3177, name: 'Кислый леденец виноград киви и яблоком', price: 370, stock: 99, description: 'Кислый леденец виноград киви и яблоком' },
                            { id: 3178, name: 'Фанта апельсин с кислой малиной', price: 370, stock: 99, description: 'Фанта апельсин с кислой малиной' }
                        ]
                    },
                    {
                        id: 'catswill-monstercats',
                        name: 'CATSWILL MONSTERCATS 20 HARD',
                        flavors: [
                            { id: 3179, name: 'Черная смородина арбуз айс', price: 540, stock: 99, description: 'Черная смородина арбуз айс' },
                            { id: 3180, name: 'Кисло-сладкие колечки персик малина', price: 540, stock: 99, description: 'Кисло-сладкие колечки персик малина' },
                            { id: 3181, name: 'Виноград изабелла и грейпфрут', price: 540, stock: 99, description: 'Виноград изабелла и грейпфрут' },
                            { id: 3182, name: 'Кисло-сладкий цитрусовый микс', price: 540, stock: 99, description: 'Кисло-сладкий цитрусовый микс' },
                            { id: 3183, name: 'Кисло-сладкая черная смородина', price: 540, stock: 99, description: 'Кисло-сладкая черная смородина' },
                            { id: 3184, name: 'Черника малина мята лед', price: 540, stock: 99, description: 'Черника малина мята лед' },
                            { id: 3185, name: 'Кактус лимон с холодком', price: 540, stock: 99, description: 'Кактус лимон с холодком' },
                            { id: 3186, name: 'Красное сладкое яблоко с кислинкой', price: 540, stock: 99, description: 'Красное сладкое яблоко с кислинкой' },
                            { id: 3187, name: 'Кислые ленточки тутти фрутти', price: 540, stock: 99, description: 'Кислые ленточки тутти фрутти' },
                            { id: 3188, name: 'Кислючка клюква малина', price: 540, stock: 99, description: 'Кислючка клюква малина' },
                            { id: 3189, name: 'Лимонад клюква лимон', price: 540, stock: 99, description: 'Лимонад клюква лимон' },
                            { id: 3190, name: 'Драконий фрукт клубника лед', price: 540, stock: 99, description: 'Драконий фрукт клубника лед' },
                            { id: 3191, name: 'Сладкий апельсин клубника лимон лед', price: 540, stock: 99, description: 'Сладкий апельсин клубника лимон лед' },
                            { id: 3192, name: 'Кислая вишня лимон', price: 540, stock: 99, description: 'Кислая вишня лимон' },
                            { id: 3193, name: 'Виноград лимон лед', price: 540, stock: 99, description: 'Виноград лимон лед' },
                            { id: 3194, name: 'Кисло-сладкую морошка', price: 540, stock: 99, description: 'Кисло-сладкую морошка' },
                            { id: 3195, name: 'Виноградно-вишневый холс лед', price: 540, stock: 99, description: 'Виноградно-вишневый холс лед' },
                            { id: 3196, name: 'Кислая черника морошка', price: 540, stock: 99, description: 'Кислая черника морошка' },
                            { id: 3197, name: 'Клюква лесные ягоды лайм', price: 540, stock: 99, description: 'Клюква лесные ягоды лайм' },
                            { id: 3198, name: 'Кислые ленточки кола лимон', price: 540, stock: 99, description: 'Кислые ленточки кола лимон' },
                            { id: 3199, name: 'Кислая фрутелла клубника лимон', price: 540, stock: 99, description: 'Кислая фрутелла клубника лимон' }
                        ]
                    },
                    {
                        id: 'catswill-ice-fox',
                        name: 'ICE FOX CATSWILL',
                        flavors: [
                            { id: 3200, name: 'Кислая Клюква', price: 430, stock: 99, description: 'Кислая Клюква' },
                            { id: 3201, name: 'Червячки Малина Черешня', price: 430, stock: 99, description: 'Червячки Малина Черешня' },
                            { id: 3202, name: 'Кисло-Сладкий Лайм Грейпфрут', price: 430, stock: 99, description: 'Кисло-Сладкий Лайм Грейпфрут' },
                            { id: 3203, name: 'Клубника Вишня Лимон', price: 430, stock: 99, description: 'Клубника Вишня Лимон' },
                            { id: 3204, name: 'Кислый Швепс', price: 430, stock: 99, description: 'Кислый Швепс' },
                            { id: 3205, name: 'Мармеладные Ягоды', price: 430, stock: 99, description: 'Мармеладные Ягоды' },
                            { id: 3206, name: 'Кислый Черничный Леденец', price: 430, stock: 99, description: 'Кислый Черничный Леденец' },
                            { id: 3207, name: 'Мамба Кислое Яблоко Киви', price: 430, stock: 99, description: 'Мамба Кислое Яблоко Киви' },
                            { id: 3208, name: 'Черничный Лимонад с Малиной', price: 430, stock: 99, description: 'Черничный Лимонад с Малиной' },
                            { id: 3209, name: 'Экзотический Микс', price: 430, stock: 99, description: 'Экзотический Микс' },
                            { id: 3210, name: 'Ягодный Коктейль', price: 430, stock: 99, description: 'Ягодный Коктейль' },
                            { id: 3211, name: 'Арбуз Лайм Малиновый Лимонад', price: 430, stock: 99, description: 'Арбуз Лайм Малиновый Лимонад' },
                            { id: 3212, name: 'Виноградный Леденец', price: 430, stock: 99, description: 'Виноградный Леденец' },
                            { id: 3213, name: 'Вишневая Кола', price: 430, stock: 99, description: 'Вишневая Кола' },
                            { id: 3214, name: 'Жвачка Энергетик', price: 430, stock: 99, description: 'Жвачка Энергетик' },
                            { id: 3215, name: 'Киви со Льдом', price: 430, stock: 99, description: 'Киви со Льдом' },
                            { id: 3216, name: 'Яблочно Клубничный Взрыв', price: 430, stock: 99, description: 'Яблочно Клубничный Взрыв' },
                            { id: 3217, name: 'Кислый Апельсин', price: 430, stock: 99, description: 'Кислый Апельсин' },
                            { id: 3218, name: 'Чернично малиновый йогурт', price: 430, stock: 99, description: 'Чернично малиновый йогурт' },
                            { id: 3219, name: 'Апельсин Арбуз', price: 430, stock: 99, description: 'Апельсин Арбуз' },
                            { id: 3220, name: 'Кислый Лимонный Леденец', price: 430, stock: 99, description: 'Кислый Лимонный Леденец' },
                            { id: 3221, name: 'Кислая Вишня', price: 430, stock: 99, description: 'Кислая Вишня' },
                            { id: 3222, name: 'Кислая Газировка Виноград Клубника', price: 430, stock: 99, description: 'Кислая Газировка Виноград Клубника' },
                            { id: 3223, name: 'Кислая Земляника', price: 430, stock: 99, description: 'Кислая Земляника' },
                            { id: 3224, name: 'Кислая Клубника', price: 430, stock: 99, description: 'Кислая Клубника' },
                            { id: 3225, name: 'Кислая Малиновая Газировка', price: 430, stock: 99, description: 'Кислая Малиновая Газировка' },
                            { id: 3226, name: 'Кислая Морошка', price: 430, stock: 99, description: 'Кислая Морошка' }
                        ]
                    }
                ]
            },
            {
                id: 'podonki',
                name: 'PODONKI',
                icon: '🎯',
                series: [
                    {
                        id: 'podonki-v1',
                        name: 'PODONKI V1',
                        flavors: [
                            { id: 4001, name: 'Black Currant Lemonade (Смородиновый лимонад)', price: 380, stock: 99, description: 'Смородиновый лимонад' },
                            { id: 4002, name: 'Strawberry Banana Ice (Банан, Клубника, Лёд)', price: 380, stock: 99, description: 'Банан, клубника, лёд' },
                            { id: 4003, name: 'Cola Soda Ice (Классическая Кола со Льдом)', price: 380, stock: 99, description: 'Классическая кола со льдом' },
                            { id: 4004, name: 'Cowberry Cranberry Raspberries (Брусника клюква малина)', price: 380, stock: 99, description: 'Брусника клюква малина' },
                            { id: 4005, name: 'Wood & Berries on Ice (Хвоя, Лесные Ягоды, Лёд)', price: 380, stock: 99, description: 'Хвоя, лесные ягоды, лёд' },
                            { id: 4006, name: 'Bubble Gum Apricot (Абрикосовый бабл гам)', price: 380, stock: 99, description: 'Абрикосовый бабл гам' },
                            { id: 4007, name: 'Cherry Lime Ice (Вишня, Лайм, Лёд)', price: 380, stock: 99, description: 'Вишня, лайм, лёд' },
                            { id: 4008, name: 'Raspberry Lemonade (Малиновый Лимонад со Льдом)', price: 380, stock: 99, description: 'Малиновый лимонад со льдом' },
                            { id: 4009, name: 'Exotic Tropic Ice (Тропические Фрукты со Льдом)', price: 380, stock: 99, description: 'Тропические фрукты со льдом' },
                            { id: 4010, name: 'Frozen Blue Razz (Черника, Малина, Мята, Лёд)', price: 380, stock: 99, description: 'Черника, малина, мята, лёд' },
                            { id: 4011, name: 'Lychee Grape Mint (Ледяной Личи, Виноград и Мята)', price: 380, stock: 99, description: 'Ледяной личи, виноград и мята' },
                            { id: 4012, name: 'Iced Double Apple (Двойное Яблоко и Лёд)', price: 380, stock: 99, description: 'Двойное яблоко и лёд' },
                            { id: 4013, name: 'Mixed Berries Ice (Лесные Ягоды со Льдом)', price: 380, stock: 99, description: 'Лесные ягоды со льдом' },
                            { id: 4014, name: 'Lush Ice (Баблгам с Арбузом и мятой)', price: 380, stock: 99, description: 'Баблгам с арбузом и мятой' },
                            { id: 4015, name: 'Apple Cherry (Яблоко вишня)', price: 380, stock: 99, description: 'Яблоко вишня' },
                            { id: 4016, name: 'Raspberry Cherry (Малина вишня)', price: 380, stock: 99, description: 'Малина вишня' },
                            { id: 4017, name: 'Raspberry Strawberry Gum (Клубнично-малиновая Жвачка)', price: 380, stock: 99, description: 'Клубнично-малиновая жвачка' }
                        ]
                    },
                    {
                        id: 'podonki-v2',
                        name: 'PODONKI V2',
                        flavors: [
                            { id: 4018, name: 'Banana Milk (Банановое Молоко)', price: 380, stock: 99, description: 'Банановое молоко' },
                            { id: 4019, name: 'Kiwi Lime Tarhoon (Тархун с Киви и Лаймом)', price: 380, stock: 99, description: 'Тархун с киви и лаймом' },
                            { id: 4020, name: 'Strawberry Champagne (Клубника с Шампанским)', price: 380, stock: 99, description: 'Клубника с шампанским' },
                            { id: 4021, name: 'Strawberry Ice Cream (Клубничное Мороженное)', price: 380, stock: 99, description: 'Клубничное мороженое' },
                            { id: 4022, name: 'Watermelon Ice Cream (Арбузное Мороженое)', price: 380, stock: 99, description: 'Арбузное мороженое' },
                            { id: 4023, name: 'Blackcurrant Halls (Смородиновый Холс)', price: 380, stock: 99, description: 'Смородиновый холс' },
                            { id: 4024, name: 'Cactus Grape Gum (Виноградно Кактусовая Жвачка)', price: 380, stock: 99, description: 'Виноградно кактусовая жвачка' },
                            { id: 4025, name: 'Pineapple Energy (Ананасовый Энергетик)', price: 380, stock: 99, description: 'Ананасовый энергетик' }
                        ]
                    },
                    {
                        id: 'podonki-critical',
                        name: 'PODONKI CRITIKAL',
                        flavors: [
                            { id: 4026, name: 'Манго апельсин', price: 420, stock: 99, description: 'Манго апельсин' },
                            { id: 4027, name: 'Ягодный смузи', price: 420, stock: 99, description: 'Ягодный смузи' },
                            { id: 4028, name: 'Кислый скитлс', price: 420, stock: 99, description: 'Кислый скитлс' },
                            { id: 4029, name: 'Кислые лесные ягоды', price: 420, stock: 99, description: 'Кислые лесные ягоды' },
                            { id: 4030, name: 'Кола сода айс', price: 420, stock: 99, description: 'Кола сода айс' },
                            { id: 4031, name: 'Смородина виноград', price: 420, stock: 99, description: 'Смородина виноград' },
                            { id: 4032, name: 'Лимонные червячки', price: 420, stock: 99, description: 'Лимонные червячки' },
                            { id: 4033, name: 'Кислый малиновый лимонад', price: 420, stock: 99, description: 'Кислый малиновый лимонад' },
                            { id: 4034, name: 'Виноградная конфета', price: 420, stock: 99, description: 'Виноградная конфета' },
                            { id: 4035, name: 'Яблочный холс', price: 420, stock: 99, description: 'Яблочный холс' },
                            { id: 4036, name: 'Ягодный энергетик', price: 420, stock: 99, description: 'Ягодный энергетик' },
                            { id: 4037, name: 'Малина ежевика лед', price: 420, stock: 99, description: 'Малина ежевика лед' },
                            { id: 4038, name: 'Апельсиновое драже', price: 420, stock: 99, description: 'Апельсиновое драже' },
                            { id: 4039, name: 'Бабл гам', price: 420, stock: 99, description: 'Бабл гам' },
                            { id: 4040, name: 'Кислый киви', price: 420, stock: 99, description: 'Кислый киви' },
                            { id: 4041, name: 'Кислая смородина с черникой', price: 420, stock: 99, description: 'Кислая смородина с черникой' },
                            { id: 4042, name: 'Кислые вишневые червячки', price: 420, stock: 99, description: 'Кислые вишневые червячки' },
                            { id: 4043, name: 'Земляника груша', price: 420, stock: 99, description: 'Земляника груша' },
                            { id: 4044, name: 'Дыня кокос', price: 420, stock: 99, description: 'Дыня кокос' },
                            { id: 4045, name: 'Ледяной ананас', price: 420, stock: 99, description: 'Ледяной ананас' }
                        ]
                    },
                    {
                        id: 'podonki-arcada',
                        name: 'PODONKI ARCADA',
                        flavors: [
                            { id: 4046, name: 'Маунтедью яблоко', price: 370, stock: 99, description: 'Маунтедью яблоко' },
                            { id: 4047, name: 'Черная Смородина Личи', price: 370, stock: 99, description: 'Черная смородина личи' },
                            { id: 4048, name: 'Банан Дыня Клубника', price: 370, stock: 99, description: 'Банан дыня клубника' },
                            { id: 4049, name: 'Барбарисовый Энергетик', price: 370, stock: 99, description: 'Барбарисовый энергетик' },
                            { id: 4050, name: 'Кола Ягоды', price: 370, stock: 99, description: 'Кола ягоды' },
                            { id: 4051, name: 'Лимонад Голубика', price: 370, stock: 99, description: 'Лимонад голубика' },
                            { id: 4052, name: 'Клубника Ананасовые Кольца', price: 370, stock: 99, description: 'Клубника ананасовые кольца' },
                            { id: 4053, name: 'Киви персик', price: 370, stock: 99, description: 'Киви персик' },
                            { id: 4054, name: 'Сладкая Мятная Жвачка', price: 370, stock: 99, description: 'Сладкая мятная жвачка' },
                            { id: 4055, name: 'Манго Маракуйя', price: 370, stock: 99, description: 'Манго маракуйя' },
                            { id: 4056, name: 'Яблоко Вишня', price: 370, stock: 99, description: 'Яблоко вишня' },
                            { id: 4057, name: 'Нектарин', price: 370, stock: 99, description: 'Нектарин' },
                            { id: 4058, name: 'Лесные Ягоды', price: 370, stock: 99, description: 'Лесные ягоды' },
                            { id: 4059, name: 'Виноград Ежевика', price: 370, stock: 99, description: 'Виноград ежевика' },
                            { id: 4060, name: 'Малиновый Мармелад', price: 370, stock: 99, description: 'Малиновый мармелад' },
                            { id: 4061, name: 'Цитрусовый Микс', price: 370, stock: 99, description: 'Цитрусовый микс' },
                            { id: 4062, name: 'Арбузный Слаш', price: 370, stock: 99, description: 'Арбузный слаш' },
                            { id: 4063, name: 'Малина Черника', price: 370, stock: 99, description: 'Малина черника' },
                            { id: 4064, name: 'Вишневый Энергетик', price: 370, stock: 99, description: 'Вишневый энергетик' },
                            { id: 4065, name: 'Скитлс Лайм', price: 370, stock: 99, description: 'Скитлс лайм' }
                        ]
                    },
                    {
                        id: 'podonki-last-hap',
                        name: 'PODONKI LAST HAP',
                        flavors: [
                            { id: 4066, name: 'Baby I Was Born this Way (Яблочные черви)', price: 300, stock: 99, description: 'Яблочные черви' },
                            { id: 4067, name: 'High Voltage (Малиновый энергетик)', price: 300, stock: 99, description: 'Малиновый энергетик' },
                            { id: 4068, name: 'Bloody Valentine\'s Day (Апельсин манго гуава)', price: 300, stock: 99, description: 'Апельсин манго гуава' },
                            { id: 4069, name: 'Blaze (Арбузный милкшейк)', price: 300, stock: 99, description: 'Арбузный милкшейк' },
                            { id: 4070, name: 'Crash Test (Смородиновый скитлс)', price: 300, stock: 99, description: 'Смородиновый скитлс' },
                            { id: 4071, name: 'Slaves Slayer (Вишня с варёной сгущенкой)', price: 300, stock: 99, description: 'Вишня с варёной сгущенкой' },
                            { id: 4072, name: 'Insert Here (Кокосовое мороженное)', price: 300, stock: 99, description: 'Кокосовое мороженое' },
                            { id: 4073, name: 'Kinda Lonely (Лемонграсс малина)', price: 300, stock: 99, description: 'Лемонграсс малина' },
                            { id: 4074, name: 'Space Control (Черно смородиновый мармелад)', price: 300, stock: 99, description: 'Черно смородиновый мармелад' },
                            { id: 4075, name: 'Watch (Вишня персик)', price: 300, stock: 99, description: 'Вишня персик' },
                            { id: 4076, name: 'The End of Ownership (Грейпфрутовый лимонад)', price: 300, stock: 99, description: 'Грейпфрутовый лимонад' },
                            { id: 4077, name: 'You\'re My Desert (Вафли с клубничным сиропом)', price: 300, stock: 99, description: 'Вафли с клубничным сиропом' },
                            { id: 4078, name: 'Poor Results (Зеленый манго и смородина)', price: 300, stock: 99, description: 'Зеленый манго и смородина' },
                            { id: 4079, name: 'On Hold (Виноградные конфетки холс)', price: 300, stock: 99, description: 'Виноградные конфетки холс' },
                            { id: 4080, name: 'Madness Week (Мятные конфетки холс)', price: 300, stock: 99, description: 'Мятные конфетки холс' }
                        ]
                    },
                    {
                        id: 'podonki-last-hap-2',
                        name: 'PODONKI LAST HAP 2',
                        flavors: [
                            { id: 4081, name: 'Клубнично-земляничная жвачка', price: 420, stock: 99, description: 'Клубнично-земляничная жвачка' },
                            { id: 4082, name: 'Виноградный холс', price: 420, stock: 99, description: 'Виноградный холс' },
                            { id: 4083, name: 'Экзотические фрукты', price: 420, stock: 99, description: 'Экзотические фрукты' },
                            { id: 4084, name: 'Вишня персик', price: 420, stock: 99, description: 'Вишня персик' },
                            { id: 4085, name: 'Яблочный лимонад', price: 420, stock: 99, description: 'Яблочный лимонад' },
                            { id: 4086, name: 'Мятный холс', price: 420, stock: 99, description: 'Мятный холс' },
                            { id: 4087, name: 'Клубника малина жвачка', price: 420, stock: 99, description: 'Клубника малина жвачка' },
                            { id: 4088, name: 'Лемонграсс малина', price: 420, stock: 99, description: 'Лемонграсс малина' },
                            { id: 4089, name: 'Кокос малина', price: 420, stock: 99, description: 'Кокос малина' },
                            { id: 4090, name: 'Арбузное мороженое', price: 420, stock: 99, description: 'Арбузное мороженое' },
                            { id: 4091, name: 'Смородина манго', price: 420, stock: 99, description: 'Смородина манго' },
                            { id: 4092, name: 'Микс ягод лед', price: 420, stock: 99, description: 'Микс ягод лед' },
                            { id: 4093, name: 'Банан клубника лед', price: 420, stock: 99, description: 'Банан клубника лед' },
                            { id: 4094, name: 'Кислый лимон лайм', price: 420, stock: 99, description: 'Кислый лимон лайм' },
                            { id: 4095, name: 'Ежевичный лимонад', price: 420, stock: 99, description: 'Ежевичный лимонад' },
                            { id: 4096, name: 'Манго апельсин гуава', price: 420, stock: 99, description: 'Манго апельсин гуава' },
                            { id: 4097, name: 'Клубничное шампанское', price: 420, stock: 99, description: 'Клубничное шампанское' },
                            { id: 4098, name: 'Лесные ягоды', price: 420, stock: 99, description: 'Лесные ягоды' },
                            { id: 4099, name: 'Вишня лайм лед', price: 420, stock: 99, description: 'Вишня лайм лед' },
                            { id: 4100, name: 'Дыня кокос', price: 420, stock: 99, description: 'Дыня кокос' },
                            { id: 4101, name: 'Личи виноград мята', price: 420, stock: 99, description: 'Личи виноград мята' },
                            { id: 4102, name: 'Энергетик', price: 420, stock: 99, description: 'Энергетик' },
                            { id: 4103, name: 'Брусничный морс', price: 420, stock: 99, description: 'Брусничный морс' },
                            { id: 4104, name: 'Черника малина мята', price: 420, stock: 99, description: 'Черника малина мята' },
                            { id: 4105, name: 'Арбуз лед', price: 420, stock: 99, description: 'Арбуз лед' },
                            { id: 4106, name: 'Смородиновый холс', price: 420, stock: 99, description: 'Смородиновый холс' },
                            { id: 4107, name: 'Малиновый энергетик', price: 420, stock: 99, description: 'Малиновый энергетик' },
                            { id: 4108, name: 'Арбузный милкшейк', price: 420, stock: 99, description: 'Арбузный милкшейк' },
                            { id: 4109, name: 'Лимонные черви', price: 420, stock: 99, description: 'Лимонные черви' },
                            { id: 4110, name: 'Кола сода лед', price: 420, stock: 99, description: 'Кола сода лед' },
                            { id: 4111, name: 'Клубничное мороженое', price: 420, stock: 99, description: 'Клубничное мороженое' },
                            { id: 4112, name: 'Банановый милкшейк', price: 420, stock: 99, description: 'Банановый милкшейк' },
                            { id: 4113, name: 'Смородиновый лимонад', price: 420, stock: 99, description: 'Смородиновый лимонад' },
                            { id: 4114, name: 'Кислая маракуйя', price: 420, stock: 99, description: 'Кислая маракуйя' },
                            { id: 4115, name: 'Яблочные черви', price: 420, stock: 99, description: 'Яблочные черви' },
                            { id: 4116, name: 'Смородиновый скитлз', price: 420, stock: 99, description: 'Смородиновый скитлз' },
                            { id: 4117, name: 'Кола с вишней', price: 420, stock: 99, description: 'Кола с вишней' },
                            { id: 4118, name: 'Абрикосовый йогурт', price: 420, stock: 99, description: 'Абрикосовый йогурт' },
                            { id: 4119, name: 'Двойное яблоко', price: 420, stock: 99, description: 'Двойное яблоко' },
                            { id: 4120, name: 'Мармелад черная смородина', price: 420, stock: 99, description: 'Мармелад черная смородина' },
                            { id: 4121, name: 'Ягодный пунш', price: 420, stock: 99, description: 'Ягодный пунш' }
                        ]
                    },
                    {
                        id: 'podonki-podgon',
                        name: 'PODONKI PODGON',
                        flavors: [
                            { id: 4122, name: 'Грейпфрутовый лимонад', price: 240, stock: 99, description: 'Грейпфрутовый лимонад' },
                            { id: 4123, name: 'Апельсин мята', price: 240, stock: 99, description: 'Апельсин мята' },
                            { id: 4124, name: 'Малина гранат', price: 240, stock: 99, description: 'Малина гранат' },
                            { id: 4125, name: 'Мультифрукт', price: 240, stock: 99, description: 'Мультифрукт' },
                            { id: 4126, name: 'Скитлс', price: 240, stock: 99, description: 'Скитлс' },
                            { id: 4127, name: 'Смородина виноград', price: 240, stock: 99, description: 'Смородина виноград' },
                            { id: 4128, name: 'Кисло-Сладкий киви', price: 240, stock: 99, description: 'Кисло-сладкий киви' },
                            { id: 4129, name: 'Дыня банан', price: 240, stock: 99, description: 'Дыня банан' },
                            { id: 4130, name: 'Клюква брусника', price: 240, stock: 99, description: 'Клюква брусника' },
                            { id: 4131, name: 'Малиновый лимонад', price: 240, stock: 99, description: 'Малиновый лимонад' },
                            { id: 4132, name: 'Малиновая конфета', price: 240, stock: 99, description: 'Малиновая конфета' },
                            { id: 4133, name: 'Жвачка черника мята', price: 240, stock: 99, description: 'Жвачка черника мята' },
                            { id: 4134, name: 'Апельсиновый фреш', price: 240, stock: 99, description: 'Апельсиновый фреш' },
                            { id: 4135, name: 'Земляничная конфета', price: 240, stock: 99, description: 'Земляничная конфета' },
                            { id: 4136, name: 'Смородина мята', price: 240, stock: 99, description: 'Смородина мята' },
                            { id: 4137, name: 'Ежевика черника', price: 240, stock: 99, description: 'Ежевика черника' },
                            { id: 4138, name: 'Ежевичный лимонад', price: 240, stock: 99, description: 'Ежевичный лимонад' },
                            { id: 4139, name: 'Зеленый манго', price: 240, stock: 99, description: 'Зеленый манго' },
                            { id: 4140, name: 'Лимонные черви', price: 240, stock: 99, description: 'Лимонные черви' },
                            { id: 4141, name: 'Кокос малина', price: 240, stock: 99, description: 'Кокос малина' },
                            { id: 4142, name: 'Виноград мята', price: 240, stock: 99, description: 'Виноград мята' },
                            { id: 4143, name: 'Брусника в сахаре', price: 240, stock: 99, description: 'Брусника в сахаре' },
                            { id: 4144, name: 'Виноград холлс', price: 240, stock: 99, description: 'Виноград холлс' },
                            { id: 4145, name: 'Лесные ягоды', price: 240, stock: 99, description: 'Лесные ягоды' },
                            { id: 4146, name: 'Ананасовая газировка', price: 240, stock: 99, description: 'Ананасовая газировка' },
                            { id: 4147, name: 'Ежевика малина', price: 240, stock: 99, description: 'Ежевика малина' },
                            { id: 4148, name: 'Классический бабл гам', price: 240, stock: 99, description: 'Классический бабл гам' },
                            { id: 4149, name: 'Лимон мята', price: 240, stock: 99, description: 'Лимон мята' },
                            { id: 4150, name: 'Малина земляника', price: 240, stock: 99, description: 'Малина земляника' },
                            { id: 4151, name: 'Малина мята', price: 240, stock: 99, description: 'Малина мята' },
                            { id: 4152, name: 'Малина хвоя', price: 240, stock: 99, description: 'Малина хвоя' },
                            { id: 4153, name: 'Ментол мята', price: 240, stock: 99, description: 'Ментол мята' },
                            { id: 4154, name: 'Ананас манго', price: 240, stock: 99, description: 'Ананас манго' },
                            { id: 4155, name: 'Смородина малина', price: 240, stock: 99, description: 'Смородина малина' },
                            { id: 4156, name: 'Персиковый йогурт', price: 240, stock: 99, description: 'Персиковый йогурт' },
                            { id: 4157, name: 'Черничная конфета', price: 240, stock: 99, description: 'Черничная конфета' },
                            { id: 4158, name: 'Смородина холлс', price: 240, stock: 99, description: 'Смородина холлс' },
                            { id: 4159, name: 'Смородина черника', price: 240, stock: 99, description: 'Смородина черника' },
                            { id: 4160, name: 'Яблоко вишня', price: 240, stock: 99, description: 'Яблоко вишня' },
                            { id: 4161, name: 'Тропические фрукты', price: 240, stock: 99, description: 'Тропические фрукты' },
                            { id: 4162, name: 'Ягодный микс мята', price: 240, stock: 99, description: 'Ягодный микс мята' },
                            { id: 4163, name: 'Сочная дыня', price: 240, stock: 99, description: 'Сочная дыня' },
                            { id: 4164, name: 'Фруктово-мятная жвачка', price: 240, stock: 99, description: 'Фруктово-мятная жвачка' },
                            { id: 4165, name: 'Ягодный энергетик', price: 240, stock: 99, description: 'Ягодный энергетик' }
                        ]
                    },
                    {
                        id: 'podonki-light',
                        name: 'PODONKI LIGHT',
                        flavors: [
                            { id: 4166, name: 'Клубника киви мороженное', price: 310, stock: 99, description: 'Клубника киви мороженое' },
                            { id: 4167, name: 'Сочное яблоко', price: 310, stock: 99, description: 'Сочное яблоко' },
                            { id: 4168, name: 'Кола вишня', price: 310, stock: 99, description: 'Кола вишня' },
                            { id: 4169, name: 'Спелая черника', price: 310, stock: 99, description: 'Спелая черника' },
                            { id: 4170, name: 'Черничный йогурт', price: 310, stock: 99, description: 'Черничный йогурт' },
                            { id: 4171, name: 'Энергетик', price: 310, stock: 99, description: 'Энергетик' },
                            { id: 4172, name: 'Десерт клубника лимон', price: 310, stock: 99, description: 'Десерт клубника лимон' },
                            { id: 4173, name: 'Дыня арбуз', price: 310, stock: 99, description: 'Дыня арбуз' },
                            { id: 4174, name: 'Клубника земляника', price: 310, stock: 99, description: 'Клубника земляника' },
                            { id: 4175, name: 'Лимонный мармелад', price: 310, stock: 99, description: 'Лимонный мармелад' },
                            { id: 4176, name: 'Манго маракуйя ананас', price: 310, stock: 99, description: 'Манго маракуйя ананас' },
                            { id: 4177, name: 'Арбуз мята', price: 310, stock: 99, description: 'Арбуз мята' },
                            { id: 4178, name: 'Спелый банан', price: 310, stock: 99, description: 'Спелый банан' },
                            { id: 4179, name: 'Шоколад вишня', price: 310, stock: 99, description: 'Шоколад вишня' },
                            { id: 4180, name: 'Ягодная фрутелла', price: 310, stock: 99, description: 'Ягодная фрутелла' }
                        ]
                    },
                    {
                        id: 'podonki-sour',
                        name: 'PODONKI SOUR',
                        flavors: [
                            { id: 4181, name: 'Кислый морс из диких ягод', price: 370, stock: 99, description: 'Кислый морс из диких ягод' },
                            { id: 4182, name: 'Кислый ананасовый сок', price: 370, stock: 99, description: 'Кислый ананасовый сок' },
                            { id: 4183, name: 'Кислый лимонад натахтари', price: 370, stock: 99, description: 'Кислый лимонад натахтари' },
                            { id: 4184, name: 'Кислая груша ананас', price: 370, stock: 99, description: 'Кислая груша ананас' },
                            { id: 4185, name: 'Кислые мармеладные ленточки', price: 370, stock: 99, description: 'Кислые мармеладные ленточки' },
                            { id: 4186, name: 'Кислый цитрусовый сок', price: 370, stock: 99, description: 'Кислый цитрусовый сок' },
                            { id: 4187, name: 'Кислый зеленый виноград', price: 370, stock: 99, description: 'Кислый зеленый виноград' },
                            { id: 4188, name: 'Конфета кислинка', price: 370, stock: 99, description: 'Конфета кислинка' },
                            { id: 4189, name: 'Кислая голубика ежевика', price: 370, stock: 99, description: 'Кислая голубика ежевика' },
                            { id: 4190, name: 'Кислый джем из брусники и смородины', price: 370, stock: 99, description: 'Кислый джем из брусники и смородины' },
                            { id: 4191, name: 'Кислая жвачка яблоко', price: 370, stock: 99, description: 'Кислая жвачка яблоко' },
                            { id: 4192, name: 'Кислый зеленый скитлз', price: 370, stock: 99, description: 'Кислый зеленый скитлз' },
                            { id: 4193, name: 'Кислая фруктовая жвачка', price: 370, stock: 99, description: 'Кислая фруктовая жвачка' },
                            { id: 4194, name: 'Кислый виноград чупа чупс', price: 370, stock: 99, description: 'Кислый виноград чупа чупс' },
                            { id: 4195, name: 'Кислое персиковое желе', price: 370, stock: 99, description: 'Кислое персиковое желе' },
                            { id: 4196, name: 'Кислый вишневый сок', price: 370, stock: 99, description: 'Кислый вишневый сок' },
                            { id: 4197, name: 'Кислый зеленый берн', price: 370, stock: 99, description: 'Кислый зеленый берн' },
                            { id: 4198, name: 'Кислый клубничный мохито', price: 370, stock: 99, description: 'Кислый клубничный мохито' },
                            { id: 4199, name: 'Кислый лимонад киви кактус', price: 370, stock: 99, description: 'Кислый лимонад киви кактус' },
                            { id: 4200, name: 'Кислый малиновый лимонад', price: 370, stock: 99, description: 'Кислый малиновый лимонад' }
                        ]
                    },
                    {
                        id: 'podonki-blood',
                        name: 'PODONKI & BLOOD',
                        flavors: [
                            { id: 4201, name: 'Клубника банан', price: 300, stock: 99, description: 'Клубника банан' },
                            { id: 4202, name: 'Брусничный морс', price: 300, stock: 99, description: 'Брусничный морс' },
                            { id: 4203, name: 'Виноград черника', price: 300, stock: 99, description: 'Виноград черника' },
                            { id: 4204, name: 'Вишня лайм', price: 300, stock: 99, description: 'Вишня лайм' },
                            { id: 4205, name: 'Персиковый лимонад', price: 300, stock: 99, description: 'Персиковый лимонад' },
                            { id: 4206, name: 'Скитлс', price: 300, stock: 99, description: 'Скитлс' },
                            { id: 4207, name: 'Сочная малина', price: 300, stock: 99, description: 'Сочная малина' },
                            { id: 4208, name: 'Тропический микс', price: 300, stock: 99, description: 'Тропический микс' },
                            { id: 4209, name: 'Черная смородина', price: 300, stock: 99, description: 'Черная смородина' },
                            { id: 4210, name: 'Черника малина', price: 300, stock: 99, description: 'Черника малина' },
                            { id: 4211, name: 'Черный виноград', price: 300, stock: 99, description: 'Черный виноград' },
                            { id: 4212, name: 'Яблоко виноград', price: 300, stock: 99, description: 'Яблоко виноград' },
                            { id: 4213, name: 'Кислые вишневые червячки', price: 300, stock: 99, description: 'Кислые вишневые червячки' },
                            { id: 4214, name: 'Классический бабл гам', price: 300, stock: 99, description: 'Классический бабл гам' },
                            { id: 4215, name: 'Ягодный энергетик', price: 300, stock: 99, description: 'Ягодный энергетик' },
                            { id: 4216, name: 'Клубника ежевика', price: 300, stock: 99, description: 'Клубника ежевика' },
                            { id: 4217, name: 'Конфеты смородина мята', price: 300, stock: 99, description: 'Конфеты смородина мята' },
                            { id: 4218, name: 'Лесные ягоды', price: 300, stock: 99, description: 'Лесные ягоды' },
                            { id: 4219, name: 'Малина гранат', price: 300, stock: 99, description: 'Малина гранат' },
                            { id: 4220, name: 'Малиновый лимонад', price: 300, stock: 99, description: 'Малиновый лимонад' }
                        ]
                    },
                    {
                        id: 'podonki-v1v2',
                        name: 'PODONKI V1V2',
                        flavors: [
                            { id: 4221, name: 'Клубника Малина Жвачка', price: 420, stock: 99, description: 'Клубника малина жвачка' },
                            { id: 4222, name: 'Клубничное Шампанское', price: 420, stock: 99, description: 'Клубничное шампанское' },
                            { id: 4223, name: 'Личи Виноград Мята', price: 420, stock: 99, description: 'Личи виноград мята' },
                            { id: 4224, name: 'Малиновый лимонад', price: 420, stock: 99, description: 'Малиновый лимонад' },
                            { id: 4225, name: 'Смородиновый Холс', price: 420, stock: 99, description: 'Смородиновый холс' },
                            { id: 4226, name: 'Двойное Яблоко', price: 420, stock: 99, description: 'Двойное яблоко' },
                            { id: 4227, name: 'Клубника Банан', price: 420, stock: 99, description: 'Клубника банан' },
                            { id: 4228, name: 'Вишня Лайм Лед', price: 420, stock: 99, description: 'Вишня лайм лед' },
                            { id: 4229, name: 'Вишня Яблоко', price: 420, stock: 99, description: 'Вишня яблоко' },
                            { id: 4230, name: 'Лимонад Смородиновый', price: 420, stock: 99, description: 'Лимонад смородиновый' },
                            { id: 4231, name: 'Арбузное Мороженое', price: 420, stock: 99, description: 'Арбузное мороженое' },
                            { id: 4232, name: 'Черника Малина Мята', price: 420, stock: 99, description: 'Черника малина мята' },
                            { id: 4233, name: 'Тропические Фрукты', price: 420, stock: 99, description: 'Тропические фрукты' },
                            { id: 4234, name: 'Брусника Клюква Малина', price: 420, stock: 99, description: 'Брусника клюква малина' },
                            { id: 4235, name: 'Кактус Виноград Жвачка', price: 420, stock: 99, description: 'Кактус виноград жвачка' },
                            { id: 4236, name: 'Тархун Киви Лайм', price: 420, stock: 99, description: 'Тархун киви лайм' },
                            { id: 4237, name: 'Кола Сода', price: 420, stock: 99, description: 'Кола сода' },
                            { id: 4238, name: 'Банан Молоко', price: 420, stock: 99, description: 'Банан молоко' },
                            { id: 4239, name: 'Жвачка Абрикос', price: 420, stock: 99, description: 'Жвачка абрикос' },
                            { id: 4240, name: 'Клубничное Мороженое', price: 420, stock: 99, description: 'Клубничное мороженое' },
                            { id: 4241, name: 'Малина Вишня', price: 420, stock: 99, description: 'Малина вишня' },
                            { id: 4242, name: 'Лесные Ягоды', price: 420, stock: 99, description: 'Лесные ягоды' },
                            { id: 4243, name: 'Ананасовый Энергетик', price: 420, stock: 99, description: 'Ананасовый энергетик' },
                            { id: 4244, name: 'Бабл Гам Арбуз Мята', price: 420, stock: 99, description: 'Бабл гам арбуз мята' }
                        ]
                    },
                    {
                        id: 'podonki-x-isterika',
                        name: 'PODONKI x ISTERIKA',
                        flavors: [
                            { id: 4245, name: 'CRANBERRY ICE (Кислая клюква)', price: 400, stock: 99, description: 'Кислая клюква' },
                            { id: 4246, name: 'CURRANT RASPBERRY (Смородина Малина)', price: 400, stock: 99, description: 'Смородина малина' },
                            { id: 4247, name: 'BLACKBERRY LEMONADE (Ежевичный лимонад)', price: 400, stock: 99, description: 'Ежевичный лимонад' },
                            { id: 4248, name: 'BLUEBERRY GRAPE (Черничника виноград)', price: 400, stock: 99, description: 'Черничника виноград' },
                            { id: 4249, name: 'BARBERRY CANDY (Барбарисовые конфеты)', price: 400, stock: 99, description: 'Барбарисовые конфеты' },
                            { id: 4250, name: 'BERRY CANDIES (Ягодные конфеты)', price: 400, stock: 99, description: 'Ягодные конфеты' },
                            { id: 4251, name: 'CHERRY WORMS (Вишневые червячки)', price: 400, stock: 99, description: 'Вишневые червячки' },
                            { id: 4252, name: 'FOREST BERRY (Лесные ягоды)', price: 400, stock: 99, description: 'Лесные ягоды' },
                            { id: 4253, name: 'MONSTER ENERGY (Энергетик)', price: 400, stock: 99, description: 'Энергетик' },
                            { id: 4254, name: 'WATERMELON CANDY (Арбузные конфеты)', price: 400, stock: 99, description: 'Арбузные конфеты' },
                            { id: 4255, name: 'JUICY PASSION FRUIT (Сочная маракуйя)', price: 400, stock: 99, description: 'Сочная маракуйя' },
                            { id: 4256, name: 'TANGERINE FIZZ (Мандариновый сок)', price: 400, stock: 99, description: 'Мандариновый сок' },
                            { id: 4257, name: 'RASPBERRY LEMONADE (Малиновый лимонад)', price: 400, stock: 99, description: 'Малиновый лимонад' },
                            { id: 4258, name: 'SOUR-SWEET KIWI (Кислое киви)', price: 400, stock: 99, description: 'Кислое киви' },
                            { id: 4259, name: 'ORANGE FIZZ (Апельсиновая шипучка)', price: 400, stock: 99, description: 'Апельсиновая шипучка' },
                            { id: 4260, name: 'MARMALADE BEARS (Мармеладные мишки)', price: 400, stock: 99, description: 'Мармеладные мишки' },
                            { id: 4261, name: 'PEACH CURRANT (Смородина и персик)', price: 400, stock: 99, description: 'Смородина и персик' },
                            { id: 4262, name: 'PINEAPPLE FIZZ (Ананасовая шипучка)', price: 400, stock: 99, description: 'Ананасовая шипучка' },
                            { id: 4263, name: 'GRAPE CHUPACHUPS (Виноградный чупачупс)', price: 400, stock: 99, description: 'Виноградный чупачупс' },
                            { id: 4264, name: 'PEAR LEMONADE (Грушевый лимонад)', price: 400, stock: 99, description: 'Грушевый лимонад' }
                        ]
                    },
                    {
                        id: 'podonki-xylinet',
                        name: 'PODONKI & XYLINET',
                        flavors: [
                            { id: 4265, name: '#14 Черничный йогурт', price: 300, stock: 99, description: 'Черничный йогурт' },
                            { id: 4266, name: '#13 Бабл гам', price: 300, stock: 99, description: 'Бабл гам' },
                            { id: 4267, name: '#10 Виноградный лед', price: 300, stock: 99, description: 'Виноградный лед' },
                            { id: 4268, name: '#3 Манго персик', price: 300, stock: 99, description: 'Манго персик' },
                            { id: 4269, name: '#8 Грейпберри фьюжн', price: 300, stock: 99, description: 'Грейпберри фьюжн' },
                            { id: 4270, name: '#1 Банан карамель', price: 300, stock: 99, description: 'Банан карамель' },
                            { id: 4271, name: '#6 Вишневый фреш', price: 300, stock: 99, description: 'Вишневый фреш' },
                            { id: 4272, name: '#11 Грейпфрутовый энергетик', price: 300, stock: 99, description: 'Грейпфрутовый энергетик' },
                            { id: 4273, name: '#5 Клубничный мусс', price: 300, stock: 99, description: 'Клубничный мусс' },
                            { id: 4274, name: '#4 Ананас клубника', price: 300, stock: 99, description: 'Ананас клубника' },
                            { id: 4275, name: '#12 Арбузная конфета', price: 300, stock: 99, description: 'Арбузная конфета' },
                            { id: 4276, name: '#7 Мятная жвачка', price: 300, stock: 99, description: 'Мятная жвачка' },
                            { id: 4277, name: '#9 Кокосовый пунш', price: 300, stock: 99, description: 'Кокосовый пунш' },
                            { id: 4278, name: '#2 Малина личи', price: 300, stock: 99, description: 'Малина личи' },
                            { id: 4279, name: '#15 Ягодный микс', price: 300, stock: 99, description: 'Ягодный микс' }
                        ]
                    },
                    {
                        id: 'podonki-inferno',
                        name: 'PODONKI INFERNO (70mg)',
                        flavors: [
                            { id: 4280, name: 'Грейпфрут малина клубника', price: 450, stock: 99, description: 'Грейпфрут малина клубника' },
                            { id: 4281, name: 'Клубника вишня', price: 450, stock: 99, description: 'Клубника вишня' },
                            { id: 4282, name: 'Клубничная шипучка', price: 450, stock: 99, description: 'Клубничная шипучка' },
                            { id: 4283, name: 'Персик', price: 450, stock: 99, description: 'Персик' },
                            { id: 4284, name: 'Малина черника', price: 450, stock: 99, description: 'Малина черника' },
                            { id: 4285, name: 'Клубника банан', price: 450, stock: 99, description: 'Клубника банан' },
                            { id: 4286, name: 'Черника вишня', price: 450, stock: 99, description: 'Черника вишня' },
                            { id: 4287, name: 'Арбуз черника', price: 450, stock: 99, description: 'Арбуз черника' },
                            { id: 4288, name: 'Вишня слива груша', price: 450, stock: 99, description: 'Вишня слива груша' },
                            { id: 4289, name: 'Малина ежевика', price: 450, stock: 99, description: 'Малина ежевика' },
                            { id: 4290, name: 'Цитрусовый микс', price: 450, stock: 99, description: 'Цитрусовый микс' },
                            { id: 4291, name: 'Черника лед', price: 450, stock: 99, description: 'Черника лед' }
                        ]
                    },
                    {
                        id: 'alfa-vape-podonki',
                        name: 'ALFA VAPE & PODONKI',
                        flavors: [
                            { id: 4292, name: 'Апельсиновый фреш', price: 370, stock: 99, description: 'Апельсиновый фреш' },
                            { id: 4293, name: 'Лесные ягоды', price: 370, stock: 99, description: 'Лесные ягоды' },
                            { id: 4294, name: 'Арбуз земляника ice', price: 370, stock: 99, description: 'Арбуз земляника ice' },
                            { id: 4295, name: 'Ананасовый смузи', price: 370, stock: 99, description: 'Ананасовый смузи' },
                            { id: 4296, name: 'Черника виноград', price: 370, stock: 99, description: 'Черника виноград' },
                            { id: 4297, name: 'Лимон лайм', price: 370, stock: 99, description: 'Лимон лайм' },
                            { id: 4298, name: 'Классический баблгам', price: 370, stock: 99, description: 'Классический баблгам' },
                            { id: 4299, name: 'Молочный коктейль ежевика и малина ice', price: 370, stock: 99, description: 'Молочный коктейль ежевика и малина ice' },
                            { id: 4300, name: 'Малина гранат', price: 370, stock: 99, description: 'Малина гранат' },
                            { id: 4301, name: 'Персиковый лимонад', price: 370, stock: 99, description: 'Персиковый лимонад' },
                            { id: 4302, name: 'Манго апельсин ice', price: 370, stock: 99, description: 'Манго апельсин ice' },
                            { id: 4303, name: 'Морс смородина малина', price: 370, stock: 99, description: 'Морс смородина малина' },
                            { id: 4304, name: 'Смузи ежевика малина', price: 370, stock: 99, description: 'Смузи ежевика малина' },
                            { id: 4305, name: 'Ягодный смузи', price: 370, stock: 99, description: 'Ягодный смузи' },
                            { id: 4306, name: 'Энергетик с манго ice', price: 370, stock: 99, description: 'Энергетик с манго ice' },
                            { id: 4307, name: 'Дыня', price: 370, stock: 99, description: 'Дыня' },
                            { id: 4308, name: 'Ежевичный лимонад', price: 370, stock: 99, description: 'Ежевичный лимонад' },
                            { id: 4309, name: 'Кола чупачупс', price: 370, stock: 99, description: 'Кола чупачупс' },
                            { id: 4310, name: 'Земляника клубника', price: 370, stock: 99, description: 'Земляника клубника' },
                            { id: 4311, name: 'Малина хвоя', price: 370, stock: 99, description: 'Малина хвоя' },
                            { id: 4312, name: 'Мята виноград', price: 370, stock: 99, description: 'Мята виноград' },
                            { id: 4313, name: 'Виноград смородина', price: 370, stock: 99, description: 'Виноград смородина' },
                            { id: 4314, name: 'Малиновый лимонад', price: 370, stock: 99, description: 'Малиновый лимонад' },
                            { id: 4315, name: 'Малина личи ice', price: 370, stock: 99, description: 'Малина личи ice' },
                            { id: 4316, name: 'Манго персик ice', price: 370, stock: 99, description: 'Манго персик ice' },
                            { id: 4317, name: 'Брусничный морс', price: 370, stock: 99, description: 'Брусничный морс' },
                            { id: 4318, name: 'Гранатовый смузи ice', price: 370, stock: 99, description: 'Гранатовый смузи ice' },
                            { id: 4319, name: 'Сочный арбуз', price: 370, stock: 99, description: 'Сочный арбуз' },
                            { id: 4320, name: 'Тропические фрукты', price: 370, stock: 99, description: 'Тропические фрукты' },
                            { id: 4321, name: 'Чернично мятная жвачка', price: 370, stock: 99, description: 'Чернично мятная жвачка' }
                        ]
                    },
                    {
                        id: 'malasian-x-podonki',
                        name: 'MALASIAN X PODONKI',
                        flavors: [
                            { id: 4322, name: 'TROPIC CHILL (Маракуйя Гуава Апельсин - Двойной Лёд)', price: 380, stock: 99, description: 'Маракуйя гуава апельсин - двойной лёд' },
                            { id: 4323, name: 'TRIPLE SOUR (Черника Малина Лимон - Двойной Лёд)', price: 380, stock: 99, description: 'Черника малина лимон - двойной лёд' },
                            { id: 4324, name: 'RED BERRY (Малина Клубника Черная и Красная Смородина - Двойной Лёд)', price: 380, stock: 99, description: 'Малина клубника черная и красная смородина - двойной лёд' },
                            { id: 4325, name: 'PINK SODA (Розовый Лимонад Малина Лимон - Двойной Лёд)', price: 380, stock: 99, description: 'Розовый лимонад малина лимон - двойной лёд' },
                            { id: 4326, name: 'GOLDEN FRUITS (Манго Гуава Маракуйя - Двойной Лёд)', price: 380, stock: 99, description: 'Манго гуава маракуйя - двойной лёд' },
                            { id: 4327, name: 'PURPLE FLOWER (Виноград Клубника - Двойной Лёд)', price: 380, stock: 99, description: 'Виноград клубника - двойной лёд' },
                            { id: 4328, name: 'CITRUS GUMMY (Мармеладные Мишки с Мандарином и Лимоном - Двойной Лёд)', price: 380, stock: 99, description: 'Мармеладные мишки с мандарином и лимоном - двойной лёд' },
                            { id: 4329, name: 'CHERRY SUNRISE (Вишня Ананас - Двойной Лёд)', price: 380, stock: 99, description: 'Вишня ананас - двойной лёд' },
                            { id: 4330, name: 'DOUBBLE BUBBLE (Жвачка Клубника Киви - Двойной Лёд)', price: 380, stock: 99, description: 'Жвачка клубника киви - двойной лёд' },
                            { id: 4331, name: 'MINT BRIZ (Черника Смородина Малина Анис Ментол - Двойной Лёд)', price: 380, stock: 99, description: 'Черника смородина малина анис ментол - двойной лёд' },
                            { id: 4332, name: 'MALASIAN X PODONKI V2 - Виноградный лимонад', price: 380, stock: 99, description: 'Виноградный лимонад' },
                            { id: 4333, name: 'MALASIAN X PODONKI V2 - Грейпфрут гуава', price: 380, stock: 99, description: 'Грейпфрут гуава' },
                            { id: 4334, name: 'MALASIAN X PODONKI V2 - Киви ананас', price: 380, stock: 99, description: 'Киви ананас' },
                            { id: 4335, name: 'MALASIAN X PODONKI V2 - Арбуз маракуйа', price: 380, stock: 99, description: 'Арбуз маракуйа' },
                            { id: 4336, name: 'MALASIAN X PODONKI V2 - Банан маракуйа', price: 380, stock: 99, description: 'Банан маракуйа' },
                            { id: 4337, name: 'MALASIAN X PODONKI V2 - Малина ежевика', price: 380, stock: 99, description: 'Малина ежевика' },
                            { id: 4338, name: 'MALASIAN X PODONKI V2 - Манго клубника', price: 380, stock: 99, description: 'Манго клубника' },
                            { id: 4339, name: 'MALASIAN X PODONKI V2 - Мармеладные мишки кола', price: 380, stock: 99, description: 'Мармеладные мишки кола' },
                            { id: 4340, name: 'MALASIAN X PODONKI V2 - Яблоко черешня', price: 380, stock: 99, description: 'Яблоко черешня' },
                            { id: 4341, name: 'MALASIAN X PODONKI V2 - Черника смородина', price: 380, stock: 99, description: 'Черника смородина' },
                            { id: 4342, name: 'MALASIAN X PODONKI V3 (CHERRY PINEAPPLE) - Вишня ананас', price: 380, stock: 99, description: 'Вишня ананас' },
                            { id: 4343, name: 'MALASIAN X PODONKI V3 (MELON) - Дыня', price: 380, stock: 99, description: 'Дыня' },
                            { id: 4344, name: 'MALASIAN X PODONKI V3 (COCONUT PEAR BANANA) - Кокос груша банан', price: 380, stock: 99, description: 'Кокос груша банан' },
                            { id: 4345, name: 'MALASIAN X PODONKI V3 (GRAPE LEMONADE) - Виноградный лимонад', price: 380, stock: 99, description: 'Виноградный лимонад' },
                            { id: 4346, name: 'MALASIAN X PODONKI V3 (APPLE CHERRY) - Яблоко Черешня', price: 380, stock: 99, description: 'Яблоко черешня' },
                            { id: 4347, name: 'MALASIAN X PODONKI V3 (WATERMELON PASSION FRUIT) - Арбуз Маракуйя', price: 380, stock: 99, description: 'Арбуз маракуйя' },
                            { id: 4348, name: 'MALASIAN X PODONKI V3 (CHEWING GUM STRAWBERRY KIWI) - Жвачка Клубника Киви', price: 380, stock: 99, description: 'Жвачка клубника киви' },
                            { id: 4349, name: 'MALASIAN X PODONKI V3 (BLUEBERRY RASPBERRY LEMON) - Черника Малина Лимон', price: 380, stock: 99, description: 'Черника малина лимон' },
                            { id: 4350, name: 'MALASIAN X PODONKI V3 (GRAPES STRAWBERRY) - Виноград клубника', price: 380, stock: 99, description: 'Виноград клубника' },
                            { id: 4351, name: 'MALASIAN X PODONKI V3 (KIWI APPLE) - Киви яблоко', price: 380, stock: 99, description: 'Киви яблоко' },
                            { id: 4352, name: 'MALASIAN X PODONKI V3 (PINK LEMONADE) - Розовый лимонад', price: 380, stock: 99, description: 'Розовый лимонад' },
                            { id: 4353, name: 'MALASIAN X PODONKI V3 (RASPBERRY STRAWBERRY) - Малина клубника', price: 380, stock: 99, description: 'Малина клубника' },
                            { id: 4354, name: 'MALASIAN X PODONKI V3 (COLA MARMALADE BEARS) - Кола мармеладные мишки', price: 380, stock: 99, description: 'Кола мармеладные мишки' },
                            { id: 4355, name: 'MALASIAN X PODONKI V3 (MARMALADE BEARS WITH LEMON) - Мармеладные Мишки с Лимоном', price: 380, stock: 99, description: 'Мармеладные мишки с лимоном' },
                            { id: 4356, name: 'MALASIAN X PODONKI V3 (LEMON LIME) - Лимон лайм', price: 380, stock: 99, description: 'Лимон лайм' },
                            { id: 4357, name: 'MALASIAN X PODONKI V3 (YELLOW MANGO) - Желтое манго', price: 380, stock: 99, description: 'Желтое манго' },
                            { id: 4358, name: 'MALASIAN X PODONKI V3 (PINEAPPLE KIWI) - Ананас Киви', price: 380, stock: 99, description: 'Ананас киви' },
                            { id: 4359, name: 'MALASIAN X PODONKI V3 (BLUEBERRY CURRANT) - Черника Смородина', price: 380, stock: 99, description: 'Черника смородина' },
                            { id: 4360, name: 'MALASIAN X PODONKI V3 (BLUEBERRY CURRANT ANISE) - Черника-смородина-анис', price: 380, stock: 99, description: 'Черника-смородина-анис' },
                            { id: 4361, name: 'MALASIAN X PODONKI V3 (RASPBERRY BLACKBERRY) - Малина Ежевика', price: 380, stock: 99, description: 'Малина ежевика' }
                        ]
                    },
                    {
                        id: 'anarhiya-podonki',
                        name: 'Анархия-Podonki',
                        flavors: [
                            { id: 4362, name: 'Ежик, я гений (Груша Кокос)', price: 370, stock: 99, description: 'Груша кокос' },
                            { id: 4363, name: 'Слаще меда (Дыня Банан)', price: 370, stock: 99, description: 'Дыня банан' },
                            { id: 4364, name: 'Не верю я, что пала моя империя (МАЛИНА ГРАНАТ)', price: 370, stock: 99, description: 'Малина гранат' },
                            { id: 4365, name: 'В лучах искусственного цвета (Холодный лимонад)', price: 370, stock: 99, description: 'Холодный лимонад' },
                            { id: 4366, name: 'Крила су jоj морова и дрина (Виноград айс)', price: 370, stock: 99, description: 'Виноград айс' },
                            { id: 4367, name: 'Когда на пороге дома встанешь у дверей (Малина-личи)', price: 370, stock: 99, description: 'Малина-личи' },
                            { id: 4368, name: 'Давай Разтворим этот ебаный мир (Тархун лимон)', price: 370, stock: 99, description: 'Тархун лимон' },
                            { id: 4369, name: 'Грустная сказка с хуевым концом из тамбовских дворов (Чизкейк с голубикой)', price: 370, stock: 99, description: 'Чизкейк с голубикой' },
                            { id: 4370, name: 'Вдоль реки огни горят, начинается обряд (Апельсин айс)', price: 370, stock: 99, description: 'Апельсин айс' },
                            { id: 4371, name: 'Лимонный мармелад', price: 370, stock: 99, description: 'Лимонный мармелад' },
                            { id: 4372, name: 'Надо ехать в Кострому (Мохито с клубникой)', price: 370, stock: 99, description: 'Мохито с клубникой' },
                            { id: 4373, name: 'Пировал славянский люд, провожая в долгий путь (Черносмородиновый лимонад)', price: 370, stock: 99, description: 'Черносмородиновый лимонад' },
                            { id: 4374, name: 'Этот солнечный ливень, как твоя борода (Ананас айс)', price: 370, stock: 99, description: 'Ананас айс' },
                            { id: 4375, name: 'Я счастлив по-своему, поверь (Клюквенная содовая)', price: 370, stock: 99, description: 'Клюквенная содовая' },
                            { id: 4376, name: 'Коллекторы пришли и вернули мебель (Манго айс)', price: 370, stock: 99, description: 'Манго айс' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'disposable',
        name: 'Одноразки',
        icon: '⚡',
        brands: []
    },
    {
        id: 'pods',
        name: 'Под-системы',
        icon: '📱',
        brands: []
    },
    {
        id: 'consumables',
        name: 'Расходники',
        icon: '🧰',
        brands: []
    },
    {
        id: 'pouches',
        name: 'Шайбы/Пэки',
        icon: '🎮',
        brands: []
    },
    {
        id: 'nicotine',
        name: 'Никотиновые',
        icon: '💊',
        brands: []
    }
];

// ===== СОСТОЯНИЕ =====
let cart = [];
let currentView = 'catalog';
let currentCategoryId = 'all';
let currentBrandId = null;
let currentSeriesId = null;
let currentSearch = '';
let isSearchMode = false;

// ===== DOM ЭЛЕМЕНТЫ =====
const productsContainer = document.getElementById('productsContainer');
const emptyState = document.getElementById('emptyState');
const categoriesContainer = document.getElementById('categoriesContainer');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const pageTitle = document.getElementById('pageTitle');
const backBtn = document.getElementById('backBtn');

// Модалки
const orderModal = document.getElementById('orderModal');
const orderModalOverlay = document.getElementById('orderModalOverlay');
const orderModalClose = document.getElementById('orderModalClose');
const orderForm = document.getElementById('orderForm');
const orderItemsList = document.getElementById('orderItemsList');
const orderTotalPrice = document.getElementById('orderTotalPrice');
const successModal = document.getElementById('successModal');
const successModalOverlay = document.getElementById('successModalOverlay');
const successBtn = document.getElementById('successBtn');
const orderNumberEl = document.getElementById('orderNumber');

// Модалка уточнения наличия
const checkStockModal = document.getElementById('checkStockModal');
const checkStockOverlay = document.getElementById('checkStockOverlay');
const checkStockClose = document.getElementById('checkStockClose');
const checkStockForm = document.getElementById('checkStockForm');
const checkStockProductInfo = document.getElementById('checkStockProductInfo');
let currentCheckStockProduct = null;

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
function getCategory(id) {
    return categories.find(c => c.id === id);
}

function getBrand(categoryId, brandId) {
    const cat = getCategory(categoryId);
    if (!cat || !cat.brands) return null;
    return cat.brands.find(b => b.id === brandId);
}

function getSeries(categoryId, brandId, seriesId) {
    const brand = getBrand(categoryId, brandId);
    if (!brand || !brand.series) return null;
    return brand.series.find(s => s.id === seriesId);
}

function getAllFlavors() {
    const all = [];
    categories.forEach(cat => {
        if (cat.brands) {
            cat.brands.forEach(brand => {
                if (brand.series) {
                    brand.series.forEach(series => {
                        series.flavors.forEach(flavor => {
                            all.push({
                                ...flavor,
                                categoryId: cat.id,
                                categoryName: cat.name,
                                brandId: brand.id,
                                brandName: brand.name,
                                brandIcon: brand.icon,
                                seriesId: series.id,
                                seriesName: series.name
                            });
                        });
                    });
                }
            });
        }
    });
    return all;
}

function getFilteredFlavors() {
    let all = getAllFlavors();
    if (currentSearch.trim()) {
        const query = currentSearch.toLowerCase().trim();
        all = all.filter(f =>
            f.name.toLowerCase().includes(query) ||
            f.description.toLowerCase().includes(query) ||
            f.brandName.toLowerCase().includes(query)
        );
    }
    return all;
}

// ===== ОТОБРАЖЕНИЕ =====
function renderCatalog() {
    currentView = 'catalog';
    currentCategoryId = 'all';
    currentBrandId = null;
    currentSeriesId = null;
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'none';
    if (pageTitle) pageTitle.textContent = 'Магазин вейп-товаров';

    document.querySelectorAll('.category').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
    });

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    productsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

    categories.forEach((cat, index) => {
        if (cat.id === 'all') return;
        const card = document.createElement('div');
        card.className = 'product-card brand-card';
        card.style.animationDelay = `${index * 0.05}s`;

        let count = 0;
        if (cat.brands) {
            cat.brands.forEach(b => {
                if (b.series) {
                    b.series.forEach(s => { count += s.flavors.length; });
                }
            });
        }

        card.innerHTML = `
            <div class="product-image" style="font-size: 48px;">${cat.icon || '📁'}</div>
            <div class="product-info">
                <div class="product-name">${cat.name}</div>
                <div class="product-description">${count} товаров</div>
                <div class="product-bottom" style="justify-content: flex-end;">
                    <span style="color: var(--text-secondary); font-size: 14px;">→ Открыть</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            if (cat.brands && cat.brands.length > 0) {
                showBrands(cat.id);
            } else {
                showToast('В этой категории пока нет товаров', 'error');
            }
        });

        productsContainer.appendChild(card);
    });
}

function showBrands(categoryId) {
    currentView = 'brands';
    currentCategoryId = categoryId;
    currentBrandId = null;
    currentSeriesId = null;
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'flex';

    const cat = getCategory(categoryId);
    if (pageTitle) pageTitle.textContent = cat.name;

    document.querySelectorAll('.category').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === categoryId);
    });

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    productsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

    if (!cat.brands || cat.brands.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        productsContainer.style.display = 'none';
        return;
    }

    cat.brands.forEach((brand, index) => {
        const card = document.createElement('div');
        card.className = 'product-card brand-card';
        card.style.animationDelay = `${index * 0.05}s`;

        let count = 0;
        if (brand.series) {
            brand.series.forEach(s => { count += s.flavors.length; });
        }

        card.innerHTML = `
            <div class="product-image" style="font-size: 48px;">${brand.icon || '📦'}</div>
            <div class="product-info">
                <div class="product-name">${brand.name}</div>
                <div class="product-description">${count} вкусов</div>
                <div class="product-bottom" style="justify-content: flex-end;">
                    <span style="color: var(--text-secondary); font-size: 14px;">→ Выбрать</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            if (brand.series && brand.series.length > 0) {
                if (brand.series.length === 1) {
                    showFlavors(categoryId, brand.id, brand.series[0].id);
                } else {
                    showSeries(categoryId, brand.id);
                }
            } else {
                showToast('У этого бренда пока нет товаров', 'error');
            }
        });

        productsContainer.appendChild(card);
    });
}

function showSeries(categoryId, brandId) {
    currentView = 'series';
    currentCategoryId = categoryId;
    currentBrandId = brandId;
    currentSeriesId = null;
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'flex';

    const brand = getBrand(categoryId, brandId);
    if (pageTitle) pageTitle.textContent = brand.name;

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'grid';
    productsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

    brand.series.forEach((series, index) => {
        const card = document.createElement('div');
        card.className = 'product-card brand-card';
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="product-image" style="font-size: 36px;">📦</div>
            <div class="product-info">
                <div class="product-name">${series.name}</div>
                <div class="product-description">${series.flavors.length} вкусов</div>
                <div class="product-bottom" style="justify-content: flex-end;">
                    <span style="color: var(--text-secondary); font-size: 14px;">→ Выбрать</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            showFlavors(categoryId, brandId, series.id);
        });

        productsContainer.appendChild(card);
    });
}

function showFlavors(categoryId, brandId, seriesId) {
    currentView = 'flavors';
    currentCategoryId = categoryId;
    currentBrandId = brandId;
    currentSeriesId = seriesId;
    isSearchMode = false;
    if (backBtn) backBtn.style.display = 'flex';

    const series = getSeries(categoryId, brandId, seriesId);
    if (pageTitle) pageTitle.textContent = series.name;

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'block';
    productsContainer.style.gridTemplateColumns = 'none';

    series.flavors.forEach((flavor, index) => {
        const item = document.createElement('div');
        item.className = 'flavor-item';
        item.style.animationDelay = `${index * 0.03}s`;

        const isInCart = cart.some(c => c.id === flavor.id);
        const hasStock = flavor.stock > 0;

        const cartItem = cart.find(c => c.id === flavor.id);
        const currentQty = cartItem ? cartItem.quantity : 0;

        const stockText = hasStock
            ? `<span class="flavor-stock in-stock">✅ В наличии</span>`
            : `<span class="flavor-stock out-stock">🚫 Нет в наличии</span>`;

        let quantityControls = '';
        if (hasStock && isInCart) {
            quantityControls = `
                <div class="qty-controls">
                    <button class="qty-btn qty-minus" data-id="${flavor.id}">−</button>
                    <span class="qty-number">${currentQty}</span>
                    <button class="qty-btn qty-plus" data-id="${flavor.id}">+</button>
                </div>
            `;
        }

        let addButton;
        if (!hasStock) {
            addButton = `<button class="add-btn disabled" disabled>Нет</button>`;
        } else if (isInCart) {
            addButton = `
                <div class="btn-group">
                    ${quantityControls}
                    <button class="add-btn remove-from-cart" data-id="${flavor.id}" title="Удалить из корзины">✕</button>
                </div>
            `;
        } else {
            addButton = `<button class="add-btn add-to-cart" data-id="${flavor.id}">+ Добавить</button>`;
        }

        item.innerHTML = `
            <div class="flavor-icon">${getBrand(categoryId, brandId)?.icon || '📦'}</div>
            <div class="flavor-info">
                <div class="flavor-name">${flavor.name}</div>
                <div class="flavor-description">${flavor.description || ''}</div>
                <div class="flavor-meta">
                    <span class="flavor-price">${flavor.price} ₽</span>
                    ${stockText}
                </div>
            </div>
            <div class="flavor-actions">
                ${addButton}
                <button class="check-stock-btn" data-id="${flavor.id}">❓</button>
            </div>
        `;

        const addBtn = item.querySelector('.add-to-cart');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, 1);
            });
        }

        const removeBtn = item.querySelector('.remove-from-cart');
        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeFromCart(flavor.id);
            });
        }

        const plusBtn = item.querySelector('.qty-plus');
        if (plusBtn) {
            plusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, 1);
            });
        }

        const minusBtn = item.querySelector('.qty-minus');
        if (minusBtn) {
            minusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, -1);
            });
        }

        const checkBtn = item.querySelector('.check-stock-btn');
        if (checkBtn) {
            checkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openCheckStock(flavor.id);
            });
        }

        productsContainer.appendChild(item);
    });
}

function renderSearchResults() {
    currentView = 'search';
    isSearchMode = true;
    if (backBtn) backBtn.style.display = 'flex';
    if (pageTitle) pageTitle.textContent = 'Результаты поиска';

    const results = getFilteredFlavors();

    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    productsContainer.style.display = 'block';
    productsContainer.style.gridTemplateColumns = 'none';

    if (results.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        productsContainer.style.display = 'none';
        return;
    }

    results.forEach((flavor, index) => {
        const item = document.createElement('div');
        item.className = 'flavor-item';
        item.style.animationDelay = `${index * 0.03}s`;

        const isInCart = cart.some(c => c.id === flavor.id);
        const hasStock = flavor.stock > 0;

        const cartItem = cart.find(c => c.id === flavor.id);
        const currentQty = cartItem ? cartItem.quantity : 0;

        const stockText = hasStock
            ? `<span class="flavor-stock in-stock">✅ В наличии</span>`
            : `<span class="flavor-stock out-stock">🚫 Нет в наличии</span>`;

        let quantityControls = '';
        if (hasStock && isInCart) {
            quantityControls = `
                <div class="qty-controls">
                    <button class="qty-btn qty-minus" data-id="${flavor.id}">−</button>
                    <span class="qty-number">${currentQty}</span>
                    <button class="qty-btn qty-plus" data-id="${flavor.id}">+</button>
                </div>
            `;
        }

        let addButton;
        if (!hasStock) {
            addButton = `<button class="add-btn disabled" disabled>Нет</button>`;
        } else if (isInCart) {
            addButton = `
                <div class="btn-group">
                    ${quantityControls}
                    <button class="add-btn remove-from-cart" data-id="${flavor.id}" title="Удалить">✕</button>
                </div>
            `;
        } else {
            addButton = `<button class="add-btn add-to-cart" data-id="${flavor.id}">+ Добавить</button>`;
        }

        item.innerHTML = `
            <div class="flavor-icon">${flavor.brandIcon || '📦'}</div>
            <div class="flavor-info">
                <div class="flavor-name">${flavor.name}</div>
                <div class="flavor-description">${flavor.brandName} • ${flavor.description || ''}</div>
                <div class="flavor-meta">
                    <span class="flavor-price">${flavor.price} ₽</span>
                    ${stockText}
                </div>
            </div>
            <div class="flavor-actions">
                ${addButton}
                <button class="check-stock-btn" data-id="${flavor.id}">❓</button>
            </div>
        `;

        const addBtn = item.querySelector('.add-to-cart');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, 1);
            });
        }

        const removeBtn = item.querySelector('.remove-from-cart');
        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                removeFromCart(flavor.id);
            });
        }

        const plusBtn = item.querySelector('.qty-plus');
        if (plusBtn) {
            plusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, 1);
            });
        }

        const minusBtn = item.querySelector('.qty-minus');
        if (minusBtn) {
            minusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(flavor.id, -1);
            });
        }

        const checkBtn = item.querySelector('.check-stock-btn');
        if (checkBtn) {
            checkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openCheckStock(flavor.id);
            });
        }

        productsContainer.appendChild(item);
    });
}

// ===== КОРЗИНА =====
function toggleCart(productId) {
    let product = null;
    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                if (b.series) {
                    for (const s of b.series) {
                        const found = s.flavors.find(f => f.id === productId);
                        if (found) {
                            product = found;
                            break;
                        }
                    }
                }
                if (product) break;
            }
        }
        if (product) break;
    }

    if (!product) return;

    const index = cart.findIndex(item => item.id === productId);

    if (index === -1) {
        if (product.stock <= 0) {
            showToast('❌ Товар закончился на складе', 'error');
            return;
        }
        cart.push({ ...product, quantity: 1 });
        product.stock -= 1;
        showToast('✅ Товар добавлен в корзину', 'success');
    } else {
        cart.splice(index, 1);
        product.stock += 1;
        showToast('🗑️ Товар удалён из корзины', 'error');
    }

    updateCartUI();
    refreshCurrentView();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
}

function findProduct(productId) {
    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                if (b.series) {
                    for (const s of b.series) {
                        const found = s.flavors.find(f => f.id === productId);
                        if (found) return found;
                    }
                }
            }
        }
    }
    return null;
}

function changeQuantity(productId, delta) {
    const item = cart.find(c => c.id === productId);
    const product = findProduct(productId);
    if (!item || !product) return;

    if (delta > 0 && product.stock <= 0) {
        showToast('❌ Недостаточно товара на складе', 'error');
        return;
    }

    item.quantity += delta;
    if (delta > 0) product.stock -= 1;
    else product.stock += 1;

    if (item.quantity <= 0) {
        const idx = cart.findIndex(c => c.id === productId);
        cart.splice(idx, 1);
    }

    updateCartUI();
    renderCart();
    refreshCurrentView();
}

function refreshCurrentView() {
    if (isSearchMode) {
        renderSearchResults();
    } else if (currentView === 'catalog') {
        renderCatalog();
    } else if (currentView === 'brands') {
        showBrands(currentCategoryId);
    } else if (currentView === 'series' && currentBrandId) {
        showSeries(currentCategoryId, currentBrandId);
    } else if (currentView === 'flavors' && currentBrandId && currentSeriesId) {
        showFlavors(currentCategoryId, currentBrandId, currentSeriesId);
    }
}

// ===== КАТЕГОРИИ (ГОРИЗОНТАЛЬНЫЕ КНОПКИ) =====
if (categoriesContainer) {
    categoriesContainer.addEventListener('click', function(e) {
        const btn = e.target.closest('.category');
        if (!btn) return;

        const categoryId = btn.dataset.category;

        document.querySelectorAll('.category').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (categoryId === 'all') {
            if (searchInput) {
                searchInput.value = '';
                currentSearch = '';
                if (searchClear) searchClear.style.display = 'none';
            }
            renderCatalog();
        } else {
            const cat = getCategory(categoryId);
            if (cat && cat.brands && cat.brands.length > 0) {
                showBrands(categoryId);
            } else {
                showToast('В этой категории пока нет товаров', 'error');
            }
        }
    });
}

// ===== НАВИГАЦИЯ (КНОПКА НАЗАД) =====
if (backBtn) {
    backBtn.addEventListener('click', function() {
        if (isSearchMode) {
            if (searchInput) {
                searchInput.value = '';
                currentSearch = '';
                if (searchClear) searchClear.style.display = 'none';
            }
            isSearchMode = false;
            renderCatalog();
        } else if (currentView === 'flavors') {
            const brand = getBrand(currentCategoryId, currentBrandId);
            if (brand && brand.series && brand.series.length > 1) {
                showSeries(currentCategoryId, currentBrandId);
            } else {
                showBrands(currentCategoryId);
            }
        } else if (currentView === 'series') {
            showBrands(currentCategoryId);
        } else if (currentView === 'brands') {
            renderCatalog();
        }
    });
}

// ===== ПОИСК =====
if (searchInput) {
    searchInput.addEventListener('input', function() {
        currentSearch = this.value;
        if (searchClear) {
            searchClear.style.display = currentSearch ? 'block' : 'none';
        }

        if (currentSearch.trim()) {
            renderSearchResults();
        } else {
            isSearchMode = false;
            if (currentView === 'search') {
                renderCatalog();
            } else {
                refreshCurrentView();
            }
        }
    });
}

if (searchClear) {
    searchClear.addEventListener('click', function() {
        if (searchInput) {
            searchInput.value = '';
            currentSearch = '';
            this.style.display = 'none';
            isSearchMode = false;
            renderCatalog();
        }
    });
}

// ===== КОРЗИНА — ОТРИСОВКА =====
function renderCart() {
    if (!cartItems || !cartEmpty || !cartFooter) return;

    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        return;
    }

    cartItems.style.display = 'block';
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        div.innerHTML = `
            <div class="cart-item-image">📦</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div style="font-size: 12px; color: var(--text-secondary);">${item.brandName || ''}</div>
                <div class="cart-item-price">${itemTotal} ₽</div>
            </div>
            <div class="cart-item-actions">
                <button class="decrease-btn" data-id="${item.id}">−</button>
                <span class="quantity">${item.quantity}</span>
                <button class="increase-btn" data-id="${item.id}">+</button>
                <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        `;

        cartItems.appendChild(div);

        div.querySelector('.increase-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            changeQuantity(item.id, 1);
        });
        div.querySelector('.decrease-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            changeQuantity(item.id, -1);
        });
        div.querySelector('.remove-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = cart.findIndex(c => c.id === item.id);
            if (idx !== -1) {
                const product = findProduct(item.id);
                if (product) product.stock += item.quantity;
                cart.splice(idx, 1);
                updateCartUI();
                renderCart();
                refreshCurrentView();
                showToast('🗑️ Товар удалён', 'error');
            }
        });
    });

    if (cartTotalPrice) cartTotalPrice.textContent = total + ' ₽';
}

// ===== МОДАЛКИ =====
function openCart() { renderCart(); if (cartModal) cartModal.classList.add('active'); }
function closeCart() { if (cartModal) cartModal.classList.remove('active'); }
function closeOrderModal() { if (orderModal) orderModal.classList.remove('active'); if (cartModal) cartModal.classList.add('active'); }
function closeSuccessModal() { if (successModal) successModal.classList.remove('active'); }

function openOrderModal() {
    if (cart.length === 0) {
        showToast('⚠️ Корзина пуста', 'error');
        return;
    }
    if (orderItemsList) orderItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'order-item';
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        div.textContent = `${item.name} × ${item.quantity} = ${itemTotal} ₽`;
        if (orderItemsList) orderItemsList.appendChild(div);
    });
    if (orderTotalPrice) orderTotalPrice.textContent = total + ' ₽';
    if (cartModal) cartModal.classList.remove('active');
    if (orderModal) orderModal.classList.add('active');
}

function generateOrderNumber() {
    const timestamp = Date.now().toString().slice(-4);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `VB-${timestamp}${random}`;
}

function submitOrder(e) {
    e.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const telegram = document.getElementById('customerTelegram').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const comment = document.getElementById('orderComment').value.trim();

    if (!name || !telegram) {
        showToast('⚠️ Заполните имя и Telegram', 'error');
        return;
    }

    const orderNumber = generateOrderNumber();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const order = {
        id: orderNumber,
        customer: { name, telegram, phone, address, comment },
        items: cart.map(item => ({
            name: item.name,
            brand: item.brandName || '',
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
        })),
        total: total,
        status: 'Новый',
        date: new Date().toISOString()
    };

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    if (orderModal) orderModal.classList.remove('active');
    if (orderNumberEl) orderNumberEl.textContent = `№ ${orderNumber}`;
    if (successModal) successModal.classList.add('active');

    cart = [];
    updateCartUI();
    refreshCurrentView();
    if (orderForm) orderForm.reset();

    if (tg) {
        tg.sendData(JSON.stringify({ type: 'order', order: order }));
    }

    showToast(`✅ Заказ №${orderNumber} оформлен!`, 'success');
}

// ===== УТОЧНЕНИЕ НАЛИЧИЯ =====
function openCheckStock(productId) {
    let product = null;
    let brand = null;

    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                if (b.series) {
                    for (const s of b.series) {
                        const found = s.flavors.find(f => f.id === productId);
                        if (found) {
                            product = found;
                            brand = b;
                            break;
                        }
                    }
                }
                if (product) break;
            }
        }
        if (product) break;
    }

    if (!product) return;

    currentCheckStockProduct = { product, brand };

    checkStockProductInfo.innerHTML = `
        <div class="product-name">${product.name}</div>
        <div class="product-meta">${brand?.name || ''} • ${product.price} ₽</div>
        <div class="product-meta" style="color: var(--text-secondary); font-size: 13px;">
            ${product.description || ''}
        </div>
    `;

    document.getElementById('checkStockName').value = '';
    document.getElementById('checkStockContact').value = '';
    document.getElementById('checkStockPhone').value = '';
    document.getElementById('checkStockComment').value = '';

    checkStockModal.classList.add('active');
}

function closeCheckStock() {
    checkStockModal.classList.remove('active');
}

function submitCheckStock(e) {
    e.preventDefault();

    const name = document.getElementById('checkStockName').value.trim();
    const contact = document.getElementById('checkStockContact').value.trim();
    const phone = document.getElementById('checkStockPhone').value.trim();
    const comment = document.getElementById('checkStockComment').value.trim();

    if (!name) {
        showToast('⚠️ Введите ваше имя', 'error');
        return;
    }

    if (!contact && !phone) {
        showToast('⚠️ Укажите Telegram или телефон', 'error');
        return;
    }

    const product = currentCheckStockProduct?.product;
    const brand = currentCheckStockProduct?.brand;

    const requests = JSON.parse(localStorage.getItem('stockRequests') || '[]');
    const request = {
        id: `RQ-${Date.now().toString().slice(-6)}`,
        product: product?.name || 'Неизвестный товар',
        brand: brand?.name || '',
        price: product?.price || 0,
        customer: { name, contact, phone, comment },
        date: new Date().toISOString(),
        status: 'Новый'
    };
    requests.push(request);
    localStorage.setItem('stockRequests', JSON.stringify(requests));

    if (tg) {
        tg.sendData(JSON.stringify({
            type: 'stockRequest',
            request: request
        }));
    }

    closeCheckStock();
    showToast('✅ Запрос отправлен! Менеджер свяжется с вами.', 'success');

    setTimeout(() => {
        showToast('📱 Укажите Telegram в комментарии для быстрого ответа', 'success');
    }, 2000);
}

// ===== УПРАВЛЕНИЕ КОЛИЧЕСТВОМ =====

function addToCart(productId, delta = 1) {
    let product = null;
    for (const cat of categories) {
        if (cat.brands) {
            for (const b of cat.brands) {
                if (b.series) {
                    for (const s of b.series) {
                        const found = s.flavors.find(f => f.id === productId);
                        if (found) {
                            product = found;
                            break;
                        }
                    }
                }
                if (product) break;
            }
        }
        if (product) break;
    }

    if (!product) return;

    if (delta > 0 && product.stock < delta) {
        showToast(`❌ Осталось только ${product.stock} шт`, 'error');
        return;
    }

    const index = cart.findIndex(item => item.id === productId);

    if (index === -1) {
        if (delta <= 0) return;
        if (product.stock <= 0) {
            showToast('❌ Товар закончился на складе', 'error');
            return;
        }
        cart.push({ ...product, quantity: delta });
        product.stock -= delta;
        showToast(`✅ Добавлено ${delta} шт (осталось ${product.stock})`, 'success');
    } else {
        const newQty = cart[index].quantity + delta;
        if (newQty <= 0) {
            product.stock += cart[index].quantity;
            cart.splice(index, 1);
            showToast('🗑️ Товар удалён из корзины', 'error');
        } else {
            if (delta > 0 && product.stock < delta) {
                showToast(`❌ Осталось только ${product.stock} шт`, 'error');
                return;
            }
            cart[index].quantity = newQty;
            product.stock -= delta;
            if (delta > 0) {
                showToast(`✅ Добавлено ${delta} шт (осталось ${product.stock})`, 'success');
            } else {
                showToast(`➖ Убрано ${Math.abs(delta)} шт (осталось ${product.stock})`, 'error');
            }
        }
    }

    updateCartUI();
    refreshCurrentView();
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index === -1) return;

    const product = findProduct(productId);
    if (product) {
        product.stock += cart[index].quantity;
    }
    cart.splice(index, 1);
    updateCartUI();
    refreshCurrentView();
    showToast('🗑️ Товар удалён из корзины', 'error');
}

// ===== КНОПКИ =====
if (modalOverlay) modalOverlay.addEventListener('click', closeCart);
if (orderModalOverlay) orderModalOverlay.addEventListener('click', closeOrderModal);
if (successModalOverlay) successModalOverlay.addEventListener('click', closeSuccessModal);
if (modalClose) modalClose.addEventListener('click', closeCart);
if (orderModalClose) orderModalClose.addEventListener('click', closeOrderModal);
if (successBtn) successBtn.addEventListener('click', closeSuccessModal);
if (cartBtn) cartBtn.addEventListener('click', openCart);
if (checkoutBtn) checkoutBtn.addEventListener('click', openOrderModal);
if (orderForm) orderForm.addEventListener('submit', submitOrder);

// ===== УТОЧНЕНИЕ НАЛИЧИЯ — КНОПКИ =====
if (checkStockOverlay) checkStockOverlay.addEventListener('click', closeCheckStock);
if (checkStockClose) checkStockClose.addEventListener('click', closeCheckStock);
if (checkStockForm) checkStockForm.addEventListener('submit', submitCheckStock);

// ===== УВЕДОМЛЕНИЯ =====
function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️';
    toast.innerHTML = `${icon} ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===== ЗАПУСК =====
renderCatalog();
updateCartUI();
console.log('🛍️ VAPE BOX с категориями и поиском загружен!');
