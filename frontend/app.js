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
                    "id": "catswill-50mg",
                    "name": "CATSWILL 50mg",
                    "flavors": [
                        { "id": 287, "name": "Кислый скитлс 50mg", "price": 500, "stock": 17, "description": "Кислый скитлс" },
                        { "id": 288, "name": "Клубника виноград мята 50mg", "price": 500, "stock": 19, "description": "Клубника виноград мята" },
                        { "id": 289, "name": "Клубнично вишневая конфетка 50mg", "price": 500, "stock": 22, "description": "Клубнично вишневая конфетка" },
                        { "id": 290, "name": "Манго сода виноград 50mg", "price": 500, "stock": 29, "description": "Манго сода виноград" },
                        { "id": 291, "name": "Малиновый скитлс 50mg", "price": 500, "stock": 26, "description": "Малиновый скитлс" },
                        { "id": 292, "name": "Мятная вишня 50mg", "price": 500, "stock": 31, "description": "Мятная вишня" },
                        { "id": 293, "name": "Черника лед ежевика 50mg", "price": 500, "stock": 36, "description": "Черника лед ежевика" },
                        { "id": 294, "name": "Скитлс виноград 50mg", "price": 500, "stock": 33, "description": "Скитлс виноград" },
                        { "id": 295, "name": "Вишня персик мята 50mg", "price": 500, "stock": 9, "description": "Вишня персик мята" },
                        { "id": 296, "name": "Хайповый энергетик с черникой 50mg", "price": 500, "stock": 34, "description": "Хайповый энергетик с черникой" },
                        { "id": 297, "name": "Мамба кислое яблоко киви 50mg", "price": 500, "stock": 27, "description": "Мамба кислое яблоко киви" },
                        { "id": 298, "name": "Клубника арбуз жвачка 50mg", "price": 500, "stock": 18, "description": "Клубника арбуз жвачка" },
                        { "id": 299, "name": "Газировка маунтин дью с вишней 50mg", "price": 500, "stock": 10, "description": "Газировка маунтин дью с вишней" },
                        { "id": 300, "name": "Лимонад черника лайм 50mg", "price": 500, "stock": 24, "description": "Лимонад черника лайм" },
                        { "id": 301, "name": "Виноград мята 50mg", "price": 500, "stock": 6, "description": "Виноград мята" },
                        { "id": 302, "name": "Мятная жвачка 50mg", "price": 500, "stock": 32, "description": "Мятная жвачка" },
                        { "id": 303, "name": "Айрен брю с долькой апельсина 50mg", "price": 500, "stock": 1, "description": "Айрен брю с долькой апельсина" },
                        { "id": 304, "name": "Клубника жвачка банан 50mg", "price": 500, "stock": 20, "description": "Клубника жвачка банан" },
                        { "id": 305, "name": "Вишневые леденцы 50mg", "price": 500, "stock": 8, "description": "Вишневые леденцы" },
                        { "id": 306, "name": "Клубника киви 50mg", "price": 500, "stock": 21, "description": "Клубника киви" },
                        { "id": 307, "name": "Ананасовый сироп виноград 50mg", "price": 500, "stock": 4, "description": "Ананасовый сироп виноград" },
                        { "id": 308, "name": "Кислая фруктовая жвачка 50mg", "price": 500, "stock": 15, "description": "Кислая фруктовая жвачка" },
                        { "id": 309, "name": "Малина ежевика лед 50mg", "price": 500, "stock": 25, "description": "Малина ежевика лед" },
                        { "id": 310, "name": "Алоэ виноград 50mg", "price": 500, "stock": 2, "description": "Алоэ виноград" },
                        { "id": 311, "name": "Чернично-арбузная жвачка 50mg", "price": 500, "stock": 38, "description": "Чернично-арбузная жвачка" },
                        { "id": 312, "name": "Киви лед кислинка 50mg", "price": 500, "stock": 14, "description": "Киви лед кислинка" },
                        { "id": 313, "name": "Морозные ягоды 50mg", "price": 500, "stock": 30, "description": "Морозные ягоды" },
                        { "id": 314, "name": "Чернично клубничный фреш 50mg", "price": 500, "stock": 39, "description": "Чернично клубничный фреш" },
                        { "id": 315, "name": "Яблочные червячки 50mg", "price": 500, "stock": 40, "description": "Яблочные червячки" },
                        { "id": 316, "name": "Мамба манго апельсин 50mg", "price": 500, "stock": 28, "description": "Мамба манго апельсин" },
                        { "id": 317, "name": "Чай с малиной и мятой 50mg", "price": 500, "stock": 35, "description": "Чай с малиной и мятой" },
                        { "id": 318, "name": "Черника малина лимонад 50mg", "price": 500, "stock": 37, "description": "Черника малина лимонад" },
                        { "id": 319, "name": "Имбирный лимонад с малиной 50mg", "price": 500, "stock": 12, "description": "Имбирный лимонад с малиной" },
                        { "id": 320, "name": "Йогурт клубника маракуйя 50mg", "price": 500, "stock": 13, "description": "Йогурт клубника маракуйя" },
                        { "id": 321, "name": "Ананас лед виноград 50mg", "price": 500, "stock": 3, "description": "Ананас лед виноград" },
                        { "id": 322, "name": "Кислые червячки с малиной и черешней 50mg", "price": 500, "stock": 16, "description": "Кислые червячки с малиной и черешней" },
                        { "id": 323, "name": "Виноградный чупа-чупс 50mg", "price": 500, "stock": 7, "description": "Виноградный чупа-чупс" },
                        { "id": 324, "name": "Лимонад ежевика сироп 50mg", "price": 500, "stock": 23, "description": "Лимонад ежевика сироп" },
                        { "id": 325, "name": "Доктор пеппер с апельсином 50mg", "price": 500, "stock": 11, "description": "Доктор пеппер с апельсином" },
                        { "id": 326, "name": "Арбузный пунш с малиной и клубникой 50mg", "price": 500, "stock": 5, "description": "Арбузный пунш с малиной и клубникой" }
                    ]
                },
                {
                    "id": "catswill-extra-strong",
                    "name": "CATSWILL EXTRA 20mg STRONG",
                    "flavors": [
                        { "id": 327, "name": "Виноград малина скитлс", "price": 580, "stock": 6, "description": "Виноград малина скитлс" },
                        { "id": 328, "name": "Вишня арбуз лёд", "price": 580, "stock": 9, "description": "Вишня арбуз лёд" },
                        { "id": 329, "name": "Виноград малина арбуз", "price": 580, "stock": 5, "description": "Виноград малина арбуз" },
                        { "id": 330, "name": "Драконий фрукт клубника малина", "price": 580, "stock": 14, "description": "Драконий фрукт клубника малина" },
                        { "id": 331, "name": "Вишня скитлс лимон", "price": 580, "stock": 11, "description": "Вишня скитлс лимон" },
                        { "id": 332, "name": "Кислое Яблоко лайм киви", "price": 580, "stock": 21, "description": "Кислое Яблоко лайм киви" },
                        { "id": 333, "name": "Виноград смородина скитлс", "price": 580, "stock": 8, "description": "Виноград смородина скитлс" },
                        { "id": 334, "name": "Киви манго", "price": 580, "stock": 19, "description": "Киви манго" },
                        { "id": 335, "name": "Абрикос мандарин скитлс", "price": 580, "stock": 1, "description": "Абрикос мандарин скитлс" },
                        { "id": 336, "name": "Вишня бабл гам мята", "price": 580, "stock": 10, "description": "Вишня бабл гам мята" },
                        { "id": 337, "name": "Кислая яблочная хубба-бубба", "price": 580, "stock": 20, "description": "Кислая яблочная хубба-бубба" },
                        { "id": 338, "name": "Виноград персик", "price": 580, "stock": 7, "description": "Виноград персик" },
                        { "id": 339, "name": "Ежевика клубника", "price": 580, "stock": 16, "description": "Ежевика клубника" },
                        { "id": 340, "name": "Груша малина газировка", "price": 580, "stock": 13, "description": "Груша малина газировка" },
                        { "id": 341, "name": "Зеленый чай клубника лайм", "price": 580, "stock": 17, "description": "Зеленый чай клубника лайм" },
                        { "id": 342, "name": "Виноград дыня", "price": 580, "stock": 3, "description": "Виноград дыня" },
                        { "id": 343, "name": "Вишня яблоко мелисса", "price": 580, "stock": 12, "description": "Вишня яблоко мелисса" },
                        { "id": 344, "name": "Виноград лайм мята", "price": 580, "stock": 4, "description": "Виноград лайм мята" },
                        { "id": 345, "name": "Киви малина скитлс", "price": 580, "stock": 18, "description": "Киви малина скитлс" },
                        { "id": 346, "name": "Виноград арбуз скитлс", "price": 580, "stock": 2, "description": "Виноград арбуз скитлс" },
                        { "id": 347, "name": "Ежевика виноград ментос", "price": 580, "stock": 15, "description": "Ежевика виноград ментос" },
                        { "id": 348, "name": "Китлс малина клубника", "price": 580, "stock": 31, "description": "Китлс малина клубника" },
                        { "id": 349, "name": "Кислое яблоко персик", "price": 580, "stock": 22, "description": "Кислое яблоко персик" },
                        { "id": 350, "name": "Черная смородина скитлс черника", "price": 580, "stock": 70, "description": "Черная смородина скитлс черника" },
                        { "id": 351, "name": "Яблочная холодная фанта", "price": 580, "stock": 77, "description": "Яблочная холодная фанта" },
                        { "id": 352, "name": "Сакура виноград", "price": 580, "stock": 60, "description": "Сакура виноград" },
                        { "id": 353, "name": "Кислый швепс грейпфрут", "price": 580, "stock": 30, "description": "Кислый швепс грейпфрут" },
                        { "id": 354, "name": "Черника земляника", "price": 580, "stock": 71, "description": "Черника земляника" },
                        { "id": 355, "name": "Кислый персик маракуйя", "price": 580, "stock": 29, "description": "Кислый персик маракуйя" },
                        { "id": 356, "name": "Черешня малина", "price": 580, "stock": 69, "description": "Черешня малина" },
                        { "id": 357, "name": "Мятный ментос", "price": 580, "stock": 53, "description": "Мятный ментос" },
                        { "id": 358, "name": "Летний лимонад лимон мята", "price": 580, "stock": 40, "description": "Летний лимонад лимон мята" },
                        { "id": 359, "name": "Лимон груша", "price": 580, "stock": 42, "description": "Лимон груша" },
                        { "id": 360, "name": "Морошка скитлс лимон", "price": 580, "stock": 52, "description": "Морошка скитлс лимон" },
                        { "id": 361, "name": "Кокос ананас лёд", "price": 580, "stock": 35, "description": "Кокос ананас лёд" }
                    ]
                },
                 {
                    "id": "catswill-extra-strong",
                    "name": "CATSWILL EXTRA 20mg STRONG",
                    "flavors": [
                        { "id": 362, "name": "Лимон яблоко лёд", "price": 580, "stock": 44, "description": "Лимон яблоко лёд" },
                        { "id": 363, "name": "Персик виноград клубника", "price": 580, "stock": 56, "description": "Персик виноград клубника" },
                        { "id": 364, "name": "Розовый лимонад малина", "price": 580, "stock": 59, "description": "Розовый лимонад малина" },
                        { "id": 365, "name": "Ледяные лесные ягоды", "price": 580, "stock": 38, "description": "Ледяные лесные ягоды" },
                        { "id": 366, "name": "Кислый земляничный чупа чупс", "price": 580, "stock": 27, "description": "Кислый земляничный чупа чупс" },
                        { "id": 367, "name": "Клубнично-яблочный скитлс", "price": 580, "stock": 33, "description": "Клубнично-яблочный скитлс" },
                        { "id": 368, "name": "Клубника лед личи", "price": 580, "stock": 32, "description": "Клубника лед личи" },
                        { "id": 369, "name": "Хубба-буба клубника черника арбуз", "price": 580, "stock": 66, "description": "Хубба-буба клубника черника арбуз" },
                        { "id": 370, "name": "Кислый мандариновый скитлс", "price": 580, "stock": 28, "description": "Кислый мандариновый скитлс" },
                        { "id": 371, "name": "Лайм малина лед", "price": 580, "stock": 36, "description": "Лайм малина лед" },
                        { "id": 372, "name": "Лесные ягоды яблоко", "price": 580, "stock": 39, "description": "Лесные ягоды яблоко" },
                        { "id": 373, "name": "Морозная черника лимон", "price": 580, "stock": 50, "description": "Морозная черника лимон" },
                        { "id": 374, "name": "Цитрусовый мятный микс", "price": 580, "stock": 67, "description": "Цитрусовый мятный микс" },
                        { "id": 375, "name": "Скитлс яблоко лёд", "price": 580, "stock": 63, "description": "Скитлс яблоко лёд" },
                        { "id": 376, "name": "Яблоко виноград", "price": 580, "stock": 74, "description": "Яблоко виноград" },
                        { "id": 377, "name": "Морозный черный виноград", "price": 580, "stock": 51, "description": "Морозный черный виноград" },
                        { "id": 378, "name": "Ледяная морошка малина", "price": 580, "stock": 37, "description": "Ледяная морошка малина" },
                        { "id": 379, "name": "Лимонная шипучка", "price": 580, "stock": 43, "description": "Лимонная шипучка" },
                        { "id": 380, "name": "Освежающий чай персик лимон", "price": 580, "stock": 54, "description": "Освежающий чай персик лимон" },
                        { "id": 381, "name": "Морозная ледяная мелисса", "price": 580, "stock": 48, "description": "Морозная ледяная мелисса" },
                        { "id": 382, "name": "Кислые ленточки клубника киви", "price": 580, "stock": 23, "description": "Кислые ленточки клубника киви" },
                        { "id": 383, "name": "Клюква лимон скитлс", "price": 580, "stock": 34, "description": "Клюква лимон скитлс" },
                        { "id": 384, "name": "Черный виноград черника малина", "price": 580, "stock": 73, "description": "Черный виноград черника малина" },
                        { "id": 385, "name": "Мандарин сладкое яблоко", "price": 580, "stock": 45, "description": "Мандарин сладкое яблоко" },
                        { "id": 386, "name": "Кислый виноград клубника", "price": 580, "stock": 26, "description": "Кислый виноград клубника" },
                        { "id": 387, "name": "Яблоко черная смородина", "price": 580, "stock": 76, "description": "Яблоко черная смородина" },
                        { "id": 388, "name": "Лимонад дыня малина", "price": 580, "stock": 41, "description": "Лимонад дыня малина" },
                        { "id": 389, "name": "Морозная черешня", "price": 580, "stock": 49, "description": "Морозная черешня" },
                        { "id": 390, "name": "Персик апельсин", "price": 580, "stock": 55, "description": "Персик апельсин" },
                        { "id": 391, "name": "Фанта с голубой малиной", "price": 580, "stock": 65, "description": "Фанта с голубой малиной" },
                        { "id": 392, "name": "Черешня кислый скитлс", "price": 580, "stock": 68, "description": "Черешня кислый скитлс" },
                        { "id": 393, "name": "Сок киви гранат лед", "price": 580, "stock": 64, "description": "Сок киви гранат лед" },
                        { "id": 394, "name": "Чёрный виноград апельсин", "price": 580, "stock": 72, "description": "Чёрный виноград апельсин" },
                        { "id": 395, "name": "Ментос персик апельсин", "price": 580, "stock": 47, "description": "Ментос персик апельсин" },
                        { "id": 396, "name": "Кислый ананас лимон", "price": 580, "stock": 25, "description": "Кислый ананас лимон" },
                        { "id": 397, "name": "Скитлс кактус лимон", "price": 580, "stock": 62, "description": "Скитлс кактус лимон" },
                        { "id": 398, "name": "Кислые ленточки черешня голубика", "price": 580, "stock": 24, "description": "Кислые ленточки черешня голубика" },
                        { "id": 399, "name": "Скитлс апельсин лайм", "price": 580, "stock": 61, "description": "Скитлс апельсин лайм" },
                        { "id": 400, "name": "Ментос дыня арбуз", "price": 580, "stock": 46, "description": "Ментос дыня арбуз" },
                        { "id": 401, "name": "Персик кислая вишня", "price": 580, "stock": 57, "description": "Персик кислая вишня" },
                        { "id": 402, "name": "Персик лимон лед", "price": 580, "stock": 58, "description": "Персик лимон лед" },
                        { "id": 403, "name": "Яблоко мамлина", "price": 580, "stock": 75, "description": "Яблоко мамлина" }
                    ]
                },
                {
                    "id": "catswill-monstercats",
                    "name": "CATSWILL MONSTERCATS 20 HARD",
                    "flavors": [
                        { "id": 404, "name": "Черная смородина арбуз айс", "price": 640, "stock": 20, "description": "Черная смородина арбуз айс" },
                        { "id": 405, "name": "Кисло-сладкие колечки персик малина", "price": 640, "stock": 10, "description": "Кисло-сладкие колечки персик малина" },
                        { "id": 406, "name": "Виноград изабелла и грейпфрут", "price": 640, "stock": 1, "description": "Виноград изабелла и грейпфрут" },
                        { "id": 407, "name": "Кисло-сладкий цитрусовый микс", "price": 640, "stock": 11, "description": "Кисло-сладкий цитрусовый микс" },
                        { "id": 408, "name": "Кисло-сладкая черная смородина", "price": 640, "stock": 9, "description": "Кисло-сладкая черная смородина" },
                        { "id": 409, "name": "Черника малина мята лед", "price": 640, "stock": 21, "description": "Черника малина мята лед" },
                        { "id": 410, "name": "Кактус лимон с холодком", "price": 640, "stock": 5, "description": "Кактус лимон с холодком" },
                        { "id": 411, "name": "Красное сладкое яблоко с кислинкой", "price": 640, "stock": 17, "description": "Красное сладкое яблоко с кислинкой" },
                        { "id": 412, "name": "Кислые ленточки тутти фрутти", "price": 640, "stock": 14, "description": "Кислые ленточки тутти фрутти" },
                        { "id": 413, "name": "Кислючка клюква малина", "price": 640, "stock": 15, "description": "Кислючка клюква малина" },
                        { "id": 414, "name": "Лимонад клюква лимон", "price": 640, "stock": 18, "description": "Лимонад клюква лимон" },
                        { "id": 415, "name": "Драконий фрукт клубника лед", "price": 640, "stock": 4, "description": "Драконий фрукт клубника лед" },
                        { "id": 416, "name": "Сладкий апельсин клубника лимон лед", "price": 640, "stock": 19, "description": "Сладкий апельсин клубника лимон лед" },
                        { "id": 417, "name": "Кислая вишня лимон", "price": 640, "stock": 6, "description": "Кислая вишня лимон" },
                        { "id": 418, "name": "Виноград лимон лед", "price": 640, "stock": 2, "description": "Виноград лимон лед" },
                        { "id": 419, "name": "Кисло-сладкую морошка", "price": 640, "stock": 12, "description": "Кисло-сладкую морошка" },
                        { "id": 420, "name": "Виноградно-вишневый холс лед", "price": 640, "stock": 3, "description": "Виноградно-вишневый холс лед" },
                        { "id": 421, "name": "Кислая черника морошка", "price": 640, "stock": 8, "description": "Кислая черника морошка" },
                        { "id": 422, "name": "Клюква лесные ягоды лайм", "price": 640, "stock": 16, "description": "Клюква лесные ягоды лайм" },
                        { "id": 423, "name": "Кислые ленточки кола лимон", "price": 640, "stock": 13, "description": "Кислые ленточки кола лимон" },
                        { "id": 424, "name": "Кислая фрутелла клубника лимон", "price": 640, "stock": 7, "description": "Кислая фрутелла клубника лимон" }
                    ]
                },
                {
                    "id": "catswill-malasian",
                    "name": "CATSWILL & MALASIAN 50mg",
                    "flavors": [
                        { "id": 425, "name": "Снежная клубника", "price": 580, "stock": 10, "description": "Снежная клубника" },
                        { "id": 426, "name": "Гранатово клубничный ураган", "price": 580, "stock": 2, "description": "Гранатово клубничный ураган" },
                        { "id": 427, "name": "Двойной удар манго", "price": 580, "stock": 3, "description": "Двойной удар манго" },
                        { "id": 428, "name": "Дынно земляничная резинка", "price": 580, "stock": 4, "description": "Дынно земляничная резинка" },
                        { "id": 429, "name": "Розовая шипучка с малиной", "price": 580, "stock": 9, "description": "Розовая шипучка с малиной" },
                        { "id": 430, "name": "Тропический вихрь", "price": 580, "stock": 11, "description": "Тропический вихрь" },
                        { "id": 431, "name": "Яблочный штурм", "price": 580, "stock": 14, "description": "Яблочный штурм" },
                        { "id": 432, "name": "Вишневая тянучка", "price": 580, "stock": 1, "description": "Вишневая тянучка" },
                        { "id": 433, "name": "Лимонный кисляк", "price": 580, "stock": 7, "description": "Лимонный кисляк" },
                        { "id": 434, "name": "Ягодное лукошко", "price": 580, "stock": 15, "description": "Ягодное лукошко" },
                        { "id": 435, "name": "Энергия безумия", "price": 580, "stock": 13, "description": "Энергия безумия" },
                        { "id": 436, "name": "Йогуртовый краш", "price": 580, "stock": 5, "description": "Йогуртовый краш" },
                        { "id": 437, "name": "Радужные конфетки с кислинкой", "price": 580, "stock": 8, "description": "Радужные конфетки с кислинкой" },
                        { "id": 438, "name": "Лимонад и грушевое ситро", "price": 580, "stock": 6, "description": "Лимонад и грушевое ситро" },
                        { "id": 439, "name": "Цитросовый циклон", "price": 580, "stock": 12, "description": "Цитросовый циклон" }
                    ]
                },
                {
                    "id": "catswill-sour-45mg",
                    "name": "CATSWILL SOUR 45mg",
                    "flavors": [
                        { "id": 440, "name": "Кислые мармеладные ягоды", "price": 500, "stock": 8, "description": "Кислые мармеладные ягоды" },
                        { "id": 441, "name": "Кислая газировка с черной смородиной и клюквой", "price": 500, "stock": 1, "description": "Кислая газировка с черной смородиной и клюквой" },
                        { "id": 442, "name": "Кислая яблочно-клубничная шипучка", "price": 500, "stock": 4, "description": "Кислая яблочно-клубничная шипучка" },
                        { "id": 443, "name": "Кислая фанта с черникой", "price": 500, "stock": 3, "description": "Кислая фанта с черникой" },
                        { "id": 444, "name": "Кислое харибо с колой и черешней", "price": 500, "stock": 5, "description": "Кислое харибо с колой и черешней" },
                        { "id": 445, "name": "Кислая земляничное мохито", "price": 500, "stock": 2, "description": "Кислая земляничное мохито" },
                        { "id": 446, "name": "Кислые желатинки маракуйя ананас", "price": 500, "stock": 6, "description": "Кислые желатинки маракуйя ананас" },
                        { "id": 447, "name": "Кислые ленточки маракуйя манго", "price": 500, "stock": 7, "description": "Кислые ленточки маракуйя манго" },
                        { "id": 448, "name": "Кислый персик клубника", "price": 500, "stock": 14, "description": "Кислый персик клубника" },
                        { "id": 449, "name": "Кислый лимонад арбуз лайм малина", "price": 500, "stock": 13, "description": "Кислый лимонад арбуз лайм малина" },
                        { "id": 450, "name": "Кислые яблочно-лимонные колечки", "price": 500, "stock": 9, "description": "Кислые яблочно-лимонные колечки" },
                        { "id": 451, "name": "Кислый виноград лайм", "price": 500, "stock": 10, "description": "Кислый виноград лайм" },
                        { "id": 452, "name": "Кислый грейпфрут с вишней", "price": 500, "stock": 11, "description": "Кислый грейпфрут с вишней" },
                        { "id": 453, "name": "Кислый леденец виноград киви и яблоком", "price": 500, "stock": 12, "description": "Кислый леденец виноград киви и яблоком" },
                        { "id": 454, "name": "Фанта апельсин с кислой малиной", "price": 500, "stock": 15, "description": "Фанта апельсин с кислой малиной" }
                    ]
                },
                {
                    "id": "catswill-ice-fox",
                    "name": "ICE FOX CATSWILL",
                    "flavors": [
                        { "id": 455, "name": "Кислая Клюква", "price": 510, "stock": 11, "description": "Кислая Клюква" },
                        { "id": 456, "name": "Червячки Малина Черешня", "price": 510, "stock": 22, "description": "Червячки Малина Черешня" },
                        { "id": 457, "name": "Кисло-Сладкий Лайм Грейпфрут", "price": 510, "stock": 14, "description": "Кисло-Сладкий Лайм Грейпфрут" },
                        { "id": 458, "name": "Клубника Вишня Лимон", "price": 510, "stock": 19, "description": "Клубника Вишня Лимон" },
                        { "id": 459, "name": "Кислый Швепс", "price": 510, "stock": 18, "description": "Кислый Швепс" },
                        { "id": 460, "name": "Мармеладные Ягоды", "price": 510, "stock": 21, "description": "Мармеладные Ягоды" },
                        { "id": 461, "name": "Кислый Черничный Леденец", "price": 510, "stock": 17, "description": "Кислый Черничный Леденец" },
                        { "id": 462, "name": "Мамба Кислое Яблоко Киви", "price": 510, "stock": 20, "description": "Мамба Кислое Яблоко Киви" },
                        { "id": 463, "name": "Черничный Лимонад с Малиной", "price": 510, "stock": 24, "description": "Черничный Лимонад с Малиной" },
                        { "id": 464, "name": "Экзотический Микс", "price": 510, "stock": 25, "description": "Экзотический Микс" },
                        { "id": 465, "name": "Ягодный Коктейль", "price": 510, "stock": 27, "description": "Ягодный Коктейль" },
                        { "id": 466, "name": "Арбуз Лайм Малиновый Лимонад", "price": 510, "stock": 2, "description": "Арбуз Лайм Малиновый Лимонад" },
                        { "id": 467, "name": "Виноградный Леденец", "price": 510, "stock": 3, "description": "Виноградный Леденец" },
                        { "id": 468, "name": "Вишневая Кола", "price": 510, "stock": 4, "description": "Вишневая Кола" },
                        { "id": 469, "name": "Жвачка Энергетик", "price": 510, "stock": 5, "description": "Жвачка Энергетик" },
                        { "id": 470, "name": "Киви со Льдом", "price": 510, "stock": 6, "description": "Киви со Льдом" },
                        { "id": 471, "name": "Яблочно Клубничный Взрыв", "price": 510, "stock": 26, "description": "Яблочно Клубничный Взрыв" },
                        { "id": 472, "name": "Кислый Апельсин", "price": 510, "stock": 15, "description": "Кислый Апельсин" },
                        { "id": 473, "name": "Чернично малиновый йогурт", "price": 510, "stock": 23, "description": "Чернично малиновый йогурт" },
                        { "id": 474, "name": "Апельсин Арбуз", "price": 510, "stock": 1, "description": "Апельсин Арбуз" },
                        { "id": 475, "name": "Кислый Лимонный Леденец", "price": 510, "stock": 16, "description": "Кислый Лимонный Леденец" },
                        { "id": 476, "name": "Кислая Вишня", "price": 510, "stock": 7, "description": "Кислая Вишня" },
                        { "id": 477, "name": "Кислая Газировка Виноград Клубника", "price": 510, "stock": 8, "description": "Кислая Газировка Виноград Клубника" },
                        { "id": 478, "name": "Кислая Земляника", "price": 510, "stock": 9, "description": "Кислая Земляника" },
                        { "id": 479, "name": "Кислая Клубника", "price": 510, "stock": 10, "description": "Кислая Клубника" },
                        { "id": 480, "name": "Кислая Малиновая Газировка", "price": 510, "stock": 12, "description": "Кислая Малиновая Газировка" },
                        { "id": 481, "name": "Кислая Морошка", "price": 510, "stock": 13, "description": "Кислая Морошка" }
                    ]
                },
                {
                    "id": "alfa-vape-podonki",
                    "name": "ALFA VAPE & PODONKI",
                    "flavors": [
                        { "id": 482, "name": "Апельсиновый фреш", "price": 440, "stock": 2, "description": "Апельсиновый фреш" },
                        { "id": 483, "name": "Лесные ягоды", "price": 440, "stock": 12, "description": "Лесные ягоды" },
                        { "id": 484, "name": "Арбуз земляника ice", "price": 440, "stock": 3, "description": "Арбуз земляника ice" },
                        { "id": 485, "name": "Ананасовый смузи", "price": 440, "stock": 1, "description": "Ананасовый смузи" },
                        { "id": 486, "name": "Черника виноград", "price": 440, "stock": 27, "description": "Черника виноград" },
                        { "id": 487, "name": "Лимон лайм", "price": 440, "stock": 13, "description": "Лимон лайм" },
                        { "id": 488, "name": "Классический баблгам", "price": 440, "stock": 10, "description": "Классический баблгам" },
                        { "id": 489, "name": "Молочный коктейль ежевика и малина ice", "price": 440, "stock": 20, "description": "Молочный коктейль ежевика и малина ice" },
                        { "id": 490, "name": "Малина гранат", "price": 440, "stock": 14, "description": "Малина гранат" },
                        { "id": 491, "name": "Персиковый лимонад", "price": 440, "stock": 23, "description": "Персиковый лимонад" },
                        { "id": 492, "name": "Манго апельсин ice", "price": 440, "stock": 18, "description": "Манго апельсин ice" },
                        { "id": 493, "name": "Морс смородина малина", "price": 440, "stock": 21, "description": "Морс смородина малина" },
                        { "id": 494, "name": "Смузи ежевика малина", "price": 440, "stock": 24, "description": "Смузи ежевика малина" },
                        { "id": 495, "name": "Ягодный смузи", "price": 440, "stock": 30, "description": "Ягодный смузи" },
                        { "id": 496, "name": "Энергетик с манго ice", "price": 440, "stock": 29, "description": "Энергетик с манго ice" },
                        { "id": 497, "name": "Дыня", "price": 440, "stock": 7, "description": "Дыня" },
                        { "id": 498, "name": "Ежевичный лимонад", "price": 440, "stock": 8, "description": "Ежевичный лимонад" },
                        { "id": 499, "name": "Кола чупачупс", "price": 440, "stock": 11, "description": "Кола чупачупс" },
                        { "id": 500, "name": "Земляника клубника", "price": 440, "stock": 9, "description": "Земляника клубника" },
                        { "id": 501, "name": "Мята виноград", "price": 440, "stock": 22, "description": "Мята виноград" },
                        { "id": 502, "name": "Виноград смородина", "price": 440, "stock": 5, "description": "Виноград смородина" },
                        { "id": 503, "name": "Малиновый лимонад", "price": 440, "stock": 17, "description": "Малиновый лимонад" },
                        { "id": 504, "name": "Малина личи ice", "price": 440, "stock": 15, "description": "Малина личи ice" },
                        { "id": 505, "name": "Манго персик ice", "price": 440, "stock": 19, "description": "Манго персик ice" },
                        { "id": 506, "name": "Брусничный морс", "price": 440, "stock": 4, "description": "Брусничный морс" },
                        { "id": 507, "name": "Гранатовый смузи ice", "price": 440, "stock": 6, "description": "Гранатовый смузи ice" },
                        { "id": 508, "name": "Сочный арбуз", "price": 440, "stock": 25, "description": "Сочный арбуз" },
                        { "id": 509, "name": "Тропические фрукты", "price": 440, "stock": 26, "description": "Тропические фрукты" },
                        { "id": 510, "name": "Чернично мятная жвачка", "price": 440, "stock": 28, "description": "Чернично мятная жвачка" }
                    ]
                },
                {
                    "id": "malasian-x-podonki",
                    "name": "MALASIAN X PODONKI",
                    "flavors": [
                        { "id": 511, "name": "TROPIC CHILL (Маракуйя Гуава Апельсин - Двойной Лёд)", "price": 440, "stock": 10, "description": "Маракуйя гуава апельсин - двойной лёд" },
                        { "id": 512, "name": "TRIPLE SOUR (Черника Малина Лимон - Двойной Лёд)", "price": 440, "stock": 9, "description": "Черника малина лимон - двойной лёд" },
                        { "id": 513, "name": "RED BERRY (Малина Клубника Черная и Красная Смородина - Двойной Лёд)", "price": 440, "stock": 8, "description": "Малина клубника черная и красная смородина - двойной лёд" },
                        { "id": 514, "name": "PINK SODA (Розовый Лимонад Малина Лимон - Двойной Лёд)", "price": 440, "stock": 6, "description": "Розовый лимонад малина лимон - двойной лёд" },
                        { "id": 515, "name": "GOLDEN FRUITS (Манго Гуава Маракуйя - Двойной Лёд)", "price": 440, "stock": 4, "description": "Манго гуава маракуйя - двойной лёд" },
                        { "id": 516, "name": "PURPLE FLOWER (Виноград Клубника - Двойной Лёд)", "price": 440, "stock": 7, "description": "Виноград клубника - двойной лёд" },
                        { "id": 517, "name": "CITRUS GUMMY (Мармеладные Мишки с Мандарином и Лимоном - Двойной Лёд)", "price": 440, "stock": 2, "description": "Мармеладные мишки с мандарином и лимоном - двойной лёд" },
                        { "id": 518, "name": "CHERRY SUNRISE (Вишня Ананас - Двойной Лёд)", "price": 440, "stock": 1, "description": "Вишня ананас - двойной лёд" },
                        { "id": 519, "name": "DOUBBLE BUBBLE (Жвачка Клубника Киви - Двойной Лёд)", "price": 440, "stock": 3, "description": "Жвачка клубника киви - двойной лёд" },
                        { "id": 520, "name": "MINT BRIZ (Черника Смородина Малина Анис Ментол - Двойной Лёд)", "price": 440, "stock": 5, "description": "Черника смородина малина анис ментол - двойной лёд" },
                        { "id": 521, "name": "MALASIAN X PODONKI V2 - Виноградный лимонад", "price": 440, "stock": 3, "description": "Виноградный лимонад" },
                        { "id": 522, "name": "MALASIAN X PODONKI V2 - Грейпфрут гуава", "price": 440, "stock": 4, "description": "Грейпфрут гуава" },
                        { "id": 523, "name": "MALASIAN X PODONKI V2 - Киви ананас", "price": 440, "stock": 5, "description": "Киви ананас" },
                        { "id": 524, "name": "MALASIAN X PODONKI V2 - Арбуз маракуйа", "price": 440, "stock": 1, "description": "Арбуз маракуйа" },
                        { "id": 525, "name": "MALASIAN X PODONKI V2 - Банан маракуйа", "price": 440, "stock": 2, "description": "Банан маракуйа" },
                        { "id": 526, "name": "MALASIAN X PODONKI V2 - Малина ежевика", "price": 440, "stock": 6, "description": "Малина ежевика" },
                        { "id": 527, "name": "MALASIAN X PODONKI V2 - Манго клубника", "price": 440, "stock": 7, "description": "Манго клубника" },
                        { "id": 528, "name": "MALASIAN X PODONKI V2 - Мармеладные мишки кола", "price": 440, "stock": 8, "description": "Мармеладные мишки кола" },
                        { "id": 529, "name": "MALASIAN X PODONKI V2 - Яблоко черешня", "price": 440, "stock": 10, "description": "Яблоко черешня" },
                        { "id": 530, "name": "MALASIAN X PODONKI V2 - Черника смородина", "price": 440, "stock": 9, "description": "Черника смородина" },
                        { "id": 531, "name": "MALASIAN X PODONKI V3 (CHERRY PINEAPPLE) - Вишня ананас", "price": 440, "stock": 5, "description": "Вишня ананас" },
                        { "id": 532, "name": "MALASIAN X PODONKI V3 (MELON) - Дыня", "price": 440, "stock": 14, "description": "Дыня" },
                        { "id": 533, "name": "MALASIAN X PODONKI V3 (COCONUT PEAR BANANA) - Кокос груша банан", "price": 440, "stock": 7, "description": "Кокос груша банан" },
                        { "id": 534, "name": "MALASIAN X PODONKI V3 (GRAPE LEMONADE) - Виноградный лимонад", "price": 440, "stock": 9, "description": "Виноградный лимонад" },
                        { "id": 535, "name": "MALASIAN X PODONKI V3 (APPLE CHERRY) - Яблоко Черешня", "price": 440, "stock": 1, "description": "Яблоко черешня" },
                        { "id": 536, "name": "MALASIAN X PODONKI V3 (WATERMELON PASSION FRUIT) - Арбуз Маракуйя", "price": 440, "stock": 19, "description": "Арбуз маракуйя" },
                        { "id": 537, "name": "MALASIAN X PODONKI V3 (CHEWING GUM STRAWBERRY KIWI) - Жвачка Клубника Киви", "price": 440, "stock": 6, "description": "Жвачка клубника киви" },
                        { "id": 538, "name": "MALASIAN X PODONKI V3 (BLUEBERRY RASPBERRY LEMON) - Черника Малина Лимон", "price": 440, "stock": 4, "description": "Черника малина лимон" },
                        { "id": 539, "name": "MALASIAN X PODONKI V3 (GRAPES STRAWBERRY) - Виноград клубника", "price": 440, "stock": 10, "description": "Виноград клубника" },
                        { "id": 540, "name": "MALASIAN X PODONKI V3 (KIWI APPLE) - Киви яблоко", "price": 440, "stock": 11, "description": "Киви яблоко" },
                        { "id": 541, "name": "MALASIAN X PODONKI V3 (PINK LEMONADE) - Розовый лимонад", "price": 440, "stock": 16, "description": "Розовый лимонад" },
                        { "id": 542, "name": "MALASIAN X PODONKI V3 (RASPBERRY STRAWBERRY) - Малина клубника", "price": 440, "stock": 18, "description": "Малина клубника" },
                        { "id": 543, "name": "MALASIAN X PODONKI V3 (COLA MARMALADE BEARS) - Кола мармеладные мишки", "price": 440, "stock": 8, "description": "Кола мармеладные мишки" },
                        { "id": 544, "name": "MALASIAN X PODONKI V3 (MARMALADE BEARS WITH LEMON) - Мармеладные Мишки с Лимоном", "price": 440, "stock": 13, "description": "Мармеладные мишки с лимоном" },
                        { "id": 545, "name": "MALASIAN X PODONKI V3 (LEMON LIME) - Лимон лайм", "price": 440, "stock": 12, "description": "Лимон лайм" },
                        { "id": 546, "name": "MALASIAN X PODONKI V3 (YELLOW MANGO) - Желтое манго", "price": 440, "stock": 20, "description": "Желтое манго" },
                        { "id": 547, "name": "MALASIAN X PODONKI V3 (PINEAPPLE KIWI) - Ананас Киви", "price": 440, "stock": 15, "description": "Ананас киви" },
                        { "id": 548, "name": "MALASIAN X PODONKI V3 (BLUEBERRY CURRANT) - Черника Смородина", "price": 440, "stock": 3, "description": "Черника смородина" },
                        { "id": 549, "name": "MALASIAN X PODONKI V3 (BLUEBERRY CURRANT ANISE) - Черника-смородина-анис", "price": 440, "stock": 2, "description": "Черника-смородина-анис" },
                        { "id": 550, "name": "MALASIAN X PODONKI V3 (RASPBERRY BLACKBERRY) - Малина Ежевика", "price": 440, "stock": 17, "description": "Малина ежевика" }
                    ]
                },
                {
                    "id": "podonki-critical",
                    "name": "PODONKI CRITIKAL",
                    "flavors": [
                        { "id": 551, "name": "Манго апельсин", "price": 440, "stock": 16, "description": "Манго апельсин" },
                        { "id": 552, "name": "Ягодный смузи", "price": 440, "stock": 19, "description": "Ягодный смузи" },
                        { "id": 553, "name": "Кислый скитлс", "price": 440, "stock": 11, "description": "Кислый скитлс" },
                        { "id": 554, "name": "Кислые лесные ягоды", "price": 440, "stock": 8, "description": "Кислые лесные ягоды" },
                        { "id": 555, "name": "Кола сода айс", "price": 440, "stock": 12, "description": "Кола сода айс" },
                        { "id": 556, "name": "Смородина виноград", "price": 440, "stock": 17, "description": "Смородина виноград" },
                        { "id": 557, "name": "Лимонные червячки", "price": 440, "stock": 14, "description": "Лимонные червячки" },
                        { "id": 558, "name": "Кислый малиновый лимонад", "price": 440, "stock": 10, "description": "Кислый малиновый лимонад" },
                        { "id": 559, "name": "Виноградная конфета", "price": 440, "stock": 3, "description": "Виноградная конфета" },
                        { "id": 560, "name": "Яблочный холс", "price": 440, "stock": 18, "description": "Яблочный холс" },
                        { "id": 561, "name": "Ягодный энергетик", "price": 440, "stock": 20, "description": "Ягодный энергетик" },
                        { "id": 562, "name": "Малина ежевика лед", "price": 440, "stock": 15, "description": "Малина ежевика лед" },
                        { "id": 563, "name": "Апельсиновое драже", "price": 440, "stock": 1, "description": "Апельсиновое драже" },
                        { "id": 564, "name": "Бабл гам", "price": 440, "stock": 2, "description": "Бабл гам" },
                        { "id": 565, "name": "Кислый киви", "price": 440, "stock": 9, "description": "Кислый киви" },
                        { "id": 566, "name": "Кислая смородина с черникой", "price": 440, "stock": 6, "description": "Кислая смородина с черникой" },
                        { "id": 567, "name": "Кислые вишневые червячки", "price": 440, "stock": 7, "description": "Кислые вишневые червячки" },
                        { "id": 568, "name": "Земляника груша", "price": 440, "stock": 5, "description": "Земляника груша" },
                        { "id": 569, "name": "Дыня кокос", "price": 440, "stock": 4, "description": "Дыня кокос" },
                        { "id": 570, "name": "Ледяной ананас", "price": 440, "stock": 13, "description": "Ледяной ананас" }
                    ]
                },
                {
                    "id": "podonki-arcada",
                    "name": "PODONKI ARCADA",
                    "flavors": [
                        { "id": 571, "name": "Маунтедью яблоко", "price": 440, "stock": 14, "description": "Маунтедью яблоко" },
                        { "id": 572, "name": "Черная Смородина Личи", "price": 440, "stock": 19, "description": "Черная смородина личи" },
                        { "id": 573, "name": "Банан Дыня Клубника", "price": 440, "stock": 2, "description": "Банан дыня клубника" },
                        { "id": 574, "name": "Барбарисовый Энергетик", "price": 440, "stock": 3, "description": "Барбарисовый энергетик" },
                        { "id": 575, "name": "Кола Ягоды", "price": 440, "stock": 8, "description": "Кола ягоды" },
                        { "id": 576, "name": "Лимонад Голубика", "price": 440, "stock": 10, "description": "Лимонад голубика" },
                        { "id": 577, "name": "Клубника Ананасовые Кольца", "price": 440, "stock": 7, "description": "Клубника ананасовые кольца" },
                        { "id": 578, "name": "Киви персик", "price": 440, "stock": 6, "description": "Киви персик" },
                        { "id": 579, "name": "Сладкая Мятная Жвачка", "price": 440, "stock": 17, "description": "Сладкая мятная жвачка" },
                        { "id": 580, "name": "Манго Маракуйя", "price": 440, "stock": 13, "description": "Манго маракуйя" },
                        { "id": 581, "name": "Яблоко Вишня", "price": 440, "stock": 20, "description": "Яблоко вишня" },
                        { "id": 582, "name": "Нектарин", "price": 440, "stock": 15, "description": "Нектарин" },
                        { "id": 583, "name": "Лесные Ягоды", "price": 440, "stock": 9, "description": "Лесные ягоды" },
                        { "id": 584, "name": "Виноград Ежевика", "price": 440, "stock": 4, "description": "Виноград ежевика" },
                        { "id": 585, "name": "Малиновый Мармелад", "price": 440, "stock": 12, "description": "Малиновый мармелад" },
                        { "id": 586, "name": "Цитрусовый Микс", "price": 440, "stock": 18, "description": "Цитрусовый микс" },
                        { "id": 587, "name": "Арбузный Слаш", "price": 440, "stock": 1, "description": "Арбузный слаш" },
                        { "id": 588, "name": "Малина Черника", "price": 440, "stock": 11, "description": "Малина черника" },
                        { "id": 589, "name": "Вишневый Энергетик", "price": 440, "stock": 5, "description": "Вишневый энергетик" },
                        { "id": 590, "name": "Скитлс Лайм", "price": 440, "stock": 16, "description": "Скитлс лайм" }
                    ]
                },
                {
                    "id": "podonki-blood",
                    "name": "PODONKI & BLOOD",
                    "flavors": [
                        { "id": 591, "name": "Клубника банан", "price": 360, "stock": 1, "description": "Клубника банан" },
                        { "id": 592, "name": "Брусничный морс", "price": 360, "stock": 2, "description": "Брусничный морс" },
                        { "id": 593, "name": "Виноград черника", "price": 360, "stock": 3, "description": "Виноград черника" },
                        { "id": 594, "name": "Вишня лайм", "price": 360, "stock": 4, "description": "Вишня лайм" },
                        { "id": 595, "name": "Персиковый лимонад", "price": 360, "stock": 13, "description": "Персиковый лимонад" },
                        { "id": 596, "name": "Скитлс", "price": 360, "stock": 14, "description": "Скитлс" },
                        { "id": 597, "name": "Сочная малина", "price": 360, "stock": 15, "description": "Сочная малина" },
                        { "id": 598, "name": "Тропический микс", "price": 360, "stock": 16, "description": "Тропический микс" },
                        { "id": 599, "name": "Черная смородина", "price": 360, "stock": 17, "description": "Черная смородина" },
                        { "id": 600, "name": "Черника малина", "price": 360, "stock": 18, "description": "Черника малина" },
                        { "id": 601, "name": "Черный виноград", "price": 360, "stock": 19, "description": "Черный виноград" },
                        { "id": 602, "name": "Яблоко виноград", "price": 360, "stock": 20, "description": "Яблоко виноград" },
                        { "id": 603, "name": "Кислые вишневые червячки", "price": 360, "stock": 6, "description": "Кислые вишневые червячки" },
                        { "id": 604, "name": "Классический бабл гам", "price": 360, "stock": 7, "description": "Классический бабл гам" },
                        { "id": 605, "name": "Ягодный энергетик", "price": 360, "stock": 5, "description": "Ягодный энергетик" },
                        { "id": 606, "name": "Клубника ежевика", "price": 360, "stock": 8, "description": "Клубника ежевика" },
                        { "id": 607, "name": "Конфеты смородина мята", "price": 360, "stock": 9, "description": "Конфеты смородина мята" },
                        { "id": 608, "name": "Лесные ягоды", "price": 360, "stock": 10, "description": "Лесные ягоды" },
                        { "id": 609, "name": "Малина гранат", "price": 360, "stock": 11, "description": "Малина гранат" },
                        { "id": 610, "name": "Малиновый лимонад", "price": 360, "stock": 12, "description": "Малиновый лимонад" }
                    ]
                },
                {
                    "id": "podonki-light",
                    "name": "PODONKI LIGHT",
                    "flavors": [
                        { "id": 611, "name": "Клубника киви мороженное", "price": 420, "stock": 5, "description": "Клубника киви мороженое" },
                        { "id": 612, "name": "Сочное яблоко", "price": 420, "stock": 9, "description": "Сочное яблоко" },
                        { "id": 613, "name": "Кола вишня", "price": 420, "stock": 6, "description": "Кола вишня" },
                        { "id": 614, "name": "Спелая черника", "price": 420, "stock": 10, "description": "Спелая черника" },
                        { "id": 615, "name": "Черничный йогурт", "price": 420, "stock": 12, "description": "Черничный йогурт" },
                        { "id": 616, "name": "Энергетик", "price": 420, "stock": 14, "description": "Энергетик" },
                        { "id": 617, "name": "Десерт клубника лимон", "price": 420, "stock": 2, "description": "Десерт клубника лимон" },
                        { "id": 618, "name": "Дыня арбуз", "price": 420, "stock": 3, "description": "Дыня арбуз" },
                        { "id": 619, "name": "Клубника земляника", "price": 420, "stock": 4, "description": "Клубника земляника" },
                        { "id": 620, "name": "Лимонный мармелад", "price": 420, "stock": 7, "description": "Лимонный мармелад" },
                        { "id": 621, "name": "Манго маракуйя ананас", "price": 420, "stock": 8, "description": "Манго маракуйя ананас" },
                        { "id": 622, "name": "Арбуз мята", "price": 420, "stock": 1, "description": "Арбуз мята" },
                        { "id": 623, "name": "Спелый банан", "price": 420, "stock": 11, "description": "Спелый банан" },
                        { "id": 624, "name": "Шоколад вишня", "price": 420, "stock": 13, "description": "Шоколад вишня" },
                        { "id": 625, "name": "Ягодная фрутелла", "price": 420, "stock": 15, "description": "Ягодная фрутелла" }
                    ]
                },
                {
                    "id": "podonki-podgon",
                    "name": "PODONKI PODGON",
                    "flavors": [
                        { "id": 626, "name": "Грейпфрутовый лимонад", "price": 290, "stock": 6, "description": "Грейпфрутовый лимонад" },
                        { "id": 627, "name": "Апельсин мята", "price": 290, "stock": 27, "description": "Апельсин мята" },
                        { "id": 628, "name": "Малина гранат", "price": 290, "stock": 16, "description": "Малина гранат" },
                        { "id": 629, "name": "Мультифрукт", "price": 290, "stock": 19, "description": "Мультифрукт" },
                        { "id": 630, "name": "Скитлс", "price": 290, "stock": 37, "description": "Скитлс" },
                        { "id": 631, "name": "Смородина виноград", "price": 290, "stock": 38, "description": "Смородина виноград" },
                        { "id": 632, "name": "Кисло-Сладкий киви", "price": 290, "stock": 12, "description": "Кисло-сладкий киви" },
                        { "id": 633, "name": "Дыня банан", "price": 290, "stock": 7, "description": "Дыня банан" },
                        { "id": 634, "name": "Клюква брусника", "price": 290, "stock": 13, "description": "Клюква брусника" },
                        { "id": 635, "name": "Малиновый лимонад", "price": 290, "stock": 18, "description": "Малиновый лимонад" },
                        { "id": 636, "name": "Малиновая конфета", "price": 290, "stock": 17, "description": "Малиновая конфета" },
                        { "id": 637, "name": "Жвачка черника мята", "price": 290, "stock": 9, "description": "Жвачка черника мята" },
                        { "id": 638, "name": "Апельсиновый фреш", "price": 290, "stock": 2, "description": "Апельсиновый фреш" },
                        { "id": 639, "name": "Земляничная конфета", "price": 290, "stock": 11, "description": "Земляничная конфета" },
                        { "id": 640, "name": "Смородина мята", "price": 290, "stock": 39, "description": "Смородина мята" },
                        { "id": 641, "name": "Ежевика черника", "price": 290, "stock": 29, "description": "Ежевика черника" },
                        { "id": 642, "name": "Ежевичный лимонад", "price": 290, "stock": 8, "description": "Ежевичный лимонад" },
                        { "id": 643, "name": "Зеленый манго", "price": 290, "stock": 10, "description": "Зеленый манго" },
                        { "id": 644, "name": "Лимонные черви", "price": 290, "stock": 15, "description": "Лимонные черви" },
                        { "id": 645, "name": "Кокос малина", "price": 290, "stock": 14, "description": "Кокос малина" },
                        { "id": 646, "name": "Виноград мята", "price": 290, "stock": 4, "description": "Виноград мята" },
                        { "id": 647, "name": "Брусника в сахаре", "price": 290, "stock": 3, "description": "Брусника в сахаре" },
                        { "id": 648, "name": "Виноград холлс", "price": 290, "stock": 5, "description": "Виноград холлс" },
                        { "id": 649, "name": "Лесные ягоды", "price": 290, "stock": 31, "description": "Лесные ягоды" },
                        { "id": 650, "name": "Ананасовая газировка", "price": 290, "stock": 26, "description": "Ананасовая газировка" },
                        { "id": 651, "name": "Ежевика малина", "price": 290, "stock": 28, "description": "Ежевика малина" },
                        { "id": 652, "name": "Классический бабл гам", "price": 290, "stock": 30, "description": "Классический бабл гам" },
                        { "id": 653, "name": "Лимон мята", "price": 290, "stock": 32, "description": "Лимон мята" },
                        { "id": 654, "name": "Малина земляника", "price": 290, "stock": 33, "description": "Малина земляника" },
                        { "id": 655, "name": "Малина мята", "price": 290, "stock": 34, "description": "Малина мята" },
                        { "id": 656, "name": "Малина хвоя", "price": 290, "stock": 35, "description": "Малина хвоя" },
                        { "id": 657, "name": "Ментол мята", "price": 290, "stock": 36, "description": "Ментол мята" },
                        { "id": 658, "name": "Ананас манго", "price": 290, "stock": 1, "description": "Ананас манго" },
                        { "id": 659, "name": "Смородина малина", "price": 290, "stock": 21, "description": "Смородина малина" },
                        { "id": 660, "name": "Персиковый йогурт", "price": 290, "stock": 20, "description": "Персиковый йогурт" },
                        { "id": 661, "name": "Черничная конфета", "price": 290, "stock": 24, "description": "Черничная конфета" },
                        { "id": 662, "name": "Смородина холлс", "price": 290, "stock": 22, "description": "Смородина холлс" },
                        { "id": 663, "name": "Смородина черника", "price": 290, "stock": 40, "description": "Смородина черника" },
                        { "id": 664, "name": "Яблоко вишня", "price": 290, "stock": 25, "description": "Яблоко вишня" },
                        { "id": 665, "name": "Тропические фрукты", "price": 290, "stock": 23, "description": "Тропические фрукты" },
                        { "id": 666, "name": "Ягодный микс мята", "price": 290, "stock": 43, "description": "Ягодный микс мята" },
                        { "id": 667, "name": "Сочная дыня", "price": 290, "stock": 41, "description": "Сочная дыня" },
                        { "id": 668, "name": "Фруктово-мятная жвачка", "price": 290, "stock": 42, "description": "Фруктово-мятная жвачка" },
                        { "id": 669, "name": "Ягодный энергетик", "price": 290, "stock": 44, "description": "Ягодный энергетик" }
                    ]
                },
                {
                    "id": "podonki-sour",
                    "name": "PODONKI SOUR",
                    "flavors": [
                        { "id": 670, "name": "Кислый морс из диких ягод", "price": 440, "stock": 18, "description": "Кислый морс из диких ягод" },
                        { "id": 671, "name": "Кислый ананасовый сок", "price": 440, "stock": 7, "description": "Кислый ананасовый сок" },
                        { "id": 672, "name": "Кислый лимонад натахтари", "price": 440, "stock": 16, "description": "Кислый лимонад натахтари" },
                        { "id": 673, "name": "Кислая груша ананас", "price": 440, "stock": 2, "description": "Кислая груша ананас" },
                        { "id": 674, "name": "Кислые мармеладные ленточки", "price": 440, "stock": 6, "description": "Кислые мармеладные ленточки" },
                        { "id": 675, "name": "Кислый цитрусовый сок", "price": 440, "stock": 19, "description": "Кислый цитрусовый сок" },
                        { "id": 676, "name": "Кислый зеленый виноград", "price": 440, "stock": 12, "description": "Кислый зеленый виноград" },
                        { "id": 677, "name": "Конфета кислинка", "price": 440, "stock": 20, "description": "Конфета кислинка" },
                        { "id": 678, "name": "Кислая голубика ежевика", "price": 440, "stock": 1, "description": "Кислая голубика ежевика" },
                        { "id": 679, "name": "Кислый джем из брусники и смородины", "price": 440, "stock": 10, "description": "Кислый джем из брусники и смородины" },
                        { "id": 680, "name": "Кислая жвачка яблоко", "price": 440, "stock": 3, "description": "Кислая жвачка яблоко" },
                        { "id": 681, "name": "Кислый зеленый скитлз", "price": 440, "stock": 13, "description": "Кислый зеленый скитлз" },
                        { "id": 682, "name": "Кислая фруктовая жвачка", "price": 440, "stock": 4, "description": "Кислая фруктовая жвачка" },
                        { "id": 683, "name": "Кислый виноград чупа чупс", "price": 440, "stock": 8, "description": "Кислый виноград чупа чупс" },
                        { "id": 684, "name": "Кислое персиковое желе", "price": 440, "stock": 5, "description": "Кислое персиковое желе" },
                        { "id": 685, "name": "Кислый вишневый сок", "price": 440, "stock": 9, "description": "Кислый вишневый сок" },
                        { "id": 686, "name": "Кислый зеленый берн", "price": 440, "stock": 11, "description": "Кислый зеленый берн" },
                        { "id": 687, "name": "Кислый клубничный мохито", "price": 440, "stock": 14, "description": "Кислый клубничный мохито" },
                        { "id": 688, "name": "Кислый лимонад киви кактус", "price": 440, "stock": 15, "description": "Кислый лимонад киви кактус" },
                        { "id": 689, "name": "Кислый малиновый лимонад", "price": 440, "stock": 17, "description": "Кислый малиновый лимонад" }
                    ]
                },
                {
                    "id": "podonki-v1v2",
                    "name": "PODONKI V1V2",
                    "flavors": [
                        { "id": 690, "name": "Клубника Малина Жвачка", "price": 510, "stock": 12, "description": "Клубника малина жвачка" },
                        { "id": 691, "name": "Клубничное Шампанское", "price": 510, "stock": 14, "description": "Клубничное шампанское" },
                        { "id": 692, "name": "Личи Виноград Мята", "price": 510, "stock": 18, "description": "Личи виноград мята" },
                        { "id": 693, "name": "Малиновый лимонад", "price": 510, "stock": 20, "description": "Малиновый лимонад" },
                        { "id": 694, "name": "Смородиновый Холс", "price": 510, "stock": 21, "description": "Смородиновый холс" },
                        { "id": 695, "name": "Двойное Яблоко", "price": 510, "stock": 8, "description": "Двойное яблоко" },
                        { "id": 696, "name": "Клубника Банан", "price": 510, "stock": 11, "description": "Клубника банан" },
                        { "id": 697, "name": "Вишня Лайм Лед", "price": 510, "stock": 6, "description": "Вишня лайм лед" },
                        { "id": 698, "name": "Вишня Яблоко", "price": 510, "stock": 7, "description": "Вишня яблоко" },
                        { "id": 699, "name": "Лимонад Смородиновый", "price": 510, "stock": 17, "description": "Лимонад смородиновый" },
                        { "id": 700, "name": "Арбузное Мороженое", "price": 510, "stock": 2, "description": "Арбузное мороженое" },
                        { "id": 701, "name": "Черника Малина Мята", "price": 510, "stock": 24, "description": "Черника малина мята" },
                        { "id": 702, "name": "Тропические Фрукты", "price": 510, "stock": 23, "description": "Тропические фрукты" },
                        { "id": 703, "name": "Брусника Клюква Малина", "price": 510, "stock": 5, "description": "Брусника клюква малина" },
                        { "id": 704, "name": "Кактус Виноград Жвачка", "price": 510, "stock": 10, "description": "Кактус виноград жвачка" },
                        { "id": 705, "name": "Тархун Киви Лайм", "price": 510, "stock": 22, "description": "Тархун киви лайм" },
                        { "id": 706, "name": "Кола Сода", "price": 510, "stock": 15, "description": "Кола сода" },
                        { "id": 707, "name": "Банан Молоко", "price": 510, "stock": 4, "description": "Банан молоко" },
                        { "id": 708, "name": "Жвачка Абрикос", "price": 510, "stock": 9, "description": "Жвачка абрикос" },
                        { "id": 709, "name": "Клубничное Мороженое", "price": 510, "stock": 13, "description": "Клубничное мороженое" },
                        { "id": 710, "name": "Малина Вишня", "price": 510, "stock": 19, "description": "Малина вишня" },
                        { "id": 711, "name": "Лесные Ягоды", "price": 510, "stock": 16, "description": "Лесные ягоды" },
                        { "id": 712, "name": "Ананасовый Энергетик", "price": 510, "stock": 1, "description": "Ананасовый энергетик" },
                        { "id": 713, "name": "Бабл Гам Арбуз Мята", "price": 510, "stock": 3, "description": "Бабл гам арбуз мята" }
                    ]
                },
                {
                    "id": "podonki-x-isterika",
                    "name": "PODONKI x ISTERIKA",
                    "flavors": [
                        { "id": 714, "name": "CRANBERRY ICE (Кислая клюква)", "price": 430, "stock": 4, "description": "Кислая клюква" },
                        { "id": 715, "name": "CURRANT RASPBERRY (Смородина Малина)", "price": 430, "stock": 20, "description": "Смородина малина" },
                        { "id": 716, "name": "BLACKBERRY LEMONADE (Ежевичный лимонад)", "price": 430, "stock": 17, "description": "Ежевичный лимонад" },
                        { "id": 717, "name": "BLUEBERRY GRAPE (Черничника виноград)", "price": 430, "stock": 18, "description": "Черничника виноград" },
                        { "id": 718, "name": "BARBERRY CANDY (Барбарисовые конфеты)", "price": 430, "stock": 1, "description": "Барбарисовые конфеты" },
                        { "id": 719, "name": "BERRY CANDIES (Ягодные конфеты)", "price": 430, "stock": 2, "description": "Ягодные конфеты" },
                        { "id": 720, "name": "CHERRY WORMS (Вишневые червячки)", "price": 430, "stock": 3, "description": "Вишневые червячки" },
                        { "id": 721, "name": "FOREST BERRY (Лесные ягоды)", "price": 430, "stock": 19, "description": "Лесные ягоды" },
                        { "id": 722, "name": "MONSTER ENERGY (Энергетик)", "price": 430, "stock": 8, "description": "Энергетик" },
                        { "id": 723, "name": "WATERMELON CANDY (Арбузные конфеты)", "price": 430, "stock": 16, "description": "Арбузные конфеты" },
                        { "id": 724, "name": "JUICY PASSION FRUIT (Сочная маракуйя)", "price": 430, "stock": 6, "description": "Сочная маракуйя" },
                        { "id": 725, "name": "TANGERINE FIZZ (Мандариновый сок)", "price": 430, "stock": 15, "description": "Мандариновый сок" },
                        { "id": 726, "name": "RASPBERRY LEMONADE (Малиновый лимонад)", "price": 430, "stock": 13, "description": "Малиновый лимонад" },
                        { "id": 727, "name": "SOUR-SWEET KIWI (Кислое киви)", "price": 430, "stock": 14, "description": "Кислое киви" },
                        { "id": 728, "name": "ORANGE FIZZ (Апельсиновая шипучка)", "price": 430, "stock": 9, "description": "Апельсиновая шипучка" },
                        { "id": 729, "name": "MARMALADE BEARS (Мармеладные мишки)", "price": 430, "stock": 7, "description": "Мармеладные мишки" },
                        { "id": 730, "name": "PEACH CURRANT (Смородина и персик)", "price": 430, "stock": 10, "description": "Смородина и персик" },
                        { "id": 731, "name": "PINEAPPLE FIZZ (Ананасовая шипучка)", "price": 430, "stock": 12, "description": "Ананасовая шипучка" },
                        { "id": 732, "name": "GRAPE CHUPACHUPS (Виноградный чупачупс)", "price": 430, "stock": 5, "description": "Виноградный чупачупс" },
                        { "id": 733, "name": "PEAR LEMONADE (Грушевый лимонад)", "price": 430, "stock": 11, "description": "Грушевый лимонад" }
                    ]
                },
                {
                    "id": "podonki-vintage",
                    "name": "PODONKI & VINTAGE",
                    "flavors": [
                        { "id": 734, "name": "Lemonade blackberry (ежевичный лимонад)", "price": 510, "stock": 3, "description": "Ежевичный лимонад" },
                        { "id": 735, "name": "Lemonade blackcurrant (смородиновый лимонад)", "price": 510, "stock": 4, "description": "Смородиновый лимонад" },
                        { "id": 736, "name": "Lemonade fresh (освежающий лемонад)", "price": 510, "stock": 5, "description": "Освежающий лемонад" },
                        { "id": 737, "name": "Mojito strawberry (клубничный мохито)", "price": 510, "stock": 6, "description": "Клубничный мохито" },
                        { "id": 738, "name": "Mors berry (морс черника виноград)", "price": 510, "stock": 7, "description": "Морс черника виноград" },
                        { "id": 739, "name": "Mousse strawberry (клубничный мусс)", "price": 510, "stock": 9, "description": "Клубничный мусс" },
                        { "id": 740, "name": "Pear pinacolada (пина колада с грушей)", "price": 510, "stock": 10, "description": "Пина колада с грушей" },
                        { "id": 741, "name": "Punch raspberry (малиновый пунш)", "price": 510, "stock": 11, "description": "Малиновый пунш" },
                        { "id": 742, "name": "Soda cranberry (клюквенная газировка)", "price": 510, "stock": 12, "description": "Клюквенная газировка" },
                        { "id": 743, "name": "Soda orange (апельсиновая газировка)", "price": 510, "stock": 14, "description": "Апельсиновая газировка" },
                        { "id": 744, "name": "YUPI (юпи-ананас со льдом)", "price": 510, "stock": 15, "description": "Юпи-ананас со льдом" },
                        { "id": 745, "name": "Soda grape (виноградная газировка)", "price": 510, "stock": 13, "description": "Виноградная газировка" },
                        { "id": 746, "name": "Gin jelly (мармеладный джин)", "price": 510, "stock": 1, "description": "Мармеладный джин" },
                        { "id": 747, "name": "Lemonade apple (яблочный лимонад)", "price": 510, "stock": 2, "description": "Яблочный лимонад" },
                        { "id": 748, "name": "Mors cowberry (брусничный морс)", "price": 510, "stock": 8, "description": "Брусничный морс" }
                    ]
                }
            ]
        }
    ]
}
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
