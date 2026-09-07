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
        id: 'liquid',
        name: 'Жидкости',
        icon: '🍓',
        brands: [
            {
                id: 'angry-vape',
                name: 'Angry Vape',
                icon: '🍓',
                series: [
                    {
                        id: 'angry-vape-50mg',
                        name: 'Angry Vape 50mg',
                        flavors: [
                            { id: 1, name: 'Варан Комод (клубничный джем)', price: 325, stock: 99, description: 'Клубничный джем с ментолом' },
                            { id: 2, name: 'Бегемот Брутто (черный виноград)', price: 325, stock: 99, description: 'Черный виноград' },
                            { id: 3, name: 'Ворон Лут (груша с ананасом)', price: 325, stock: 99, description: 'Груша с ананасом' },
                            { id: 4, name: 'Жираф Шпиль (манго)', price: 325, stock: 99, description: 'Сочное манго' },
                            { id: 5, name: 'Ёж Кутёж (синяя малина)', price: 325, stock: 99, description: 'Синяя малина' },
                            { id: 6, name: 'Геккон Пупырка (кислые конфеты)', price: 325, stock: 99, description: 'Кислые конфеты' },
                            { id: 7, name: 'Енот щипач (чизкейк с клубникой и бананом)', price: 325, stock: 99, description: 'Чизкейк с клубникой и бананом' },
                            { id: 8, name: 'Волк АУФ (вишня с лимоном)', price: 325, stock: 99, description: 'Вишня с лимоном' },
                            { id: 9, name: 'Акула гарпун (черника со сливками)', price: 325, stock: 99, description: 'Черника со сливками' },
                            { id: 10, name: 'Вомбат Батяня (виноградная газировка)', price: 325, stock: 99, description: 'Виноградная газировка' },
                            { id: 11, name: 'Гадюка мамба (персик с малиной)', price: 325, stock: 99, description: 'Персик с малиной' }
                        ]
                    },
                    {
                        id: 'angry-vape-20mg',
                        name: 'Angry Vape 20mg',
                        flavors: [
                            { id: 12, name: 'Акула гарпун (черника со сливками)', price: 325, stock: 99, description: 'Черника со сливками' },
                            { id: 13, name: 'Жираф Шпиль (манго)', price: 325, stock: 99, description: 'Сочное манго' },
                            { id: 14, name: 'Ёж Кутёж (синяя малина)', price: 325, stock: 99, description: 'Синяя малина' },
                            { id: 15, name: 'Варан Комод (клубничный джем)', price: 325, stock: 99, description: 'Клубничный джем с ментолом' }
                        ]
                    }
                ]
            },
            {
                id: 'angry-ape',
                name: 'ANGRY APE',
                icon: '🍍',
                series: [
                    {
                        id: 'angry-ape-ultra-60mg',
                        name: 'ANGRY APE ULTRA 60mg',
                        flavors: [
                            { id: 16, name: 'Ананасовая конфета', price: 360, stock: 99, description: 'Сладкая ананасовая конфета' },
                            { id: 17, name: 'Банан клубника', price: 360, stock: 99, description: 'Нежный банан с клубникой' },
                            { id: 18, name: 'Ягодный микс', price: 360, stock: 99, description: 'Микс лесных ягод' }
                        ]
                    }
                ]
            },
            {
                id: 'annima',
                name: 'ANNIMA',
                icon: '🍇',
                series: [
                    {
                        id: 'annima-animma',
                        name: 'ANIMMA',
                        flavors: [
                            { id: 1001, name: 'MADARA (бабл гам)', price: 440, stock: 99, description: 'Бабл гам' },
                            { id: 1002, name: 'SASUKE (малина айс)', price: 440, stock: 99, description: 'Малина айс' },
                            { id: 1003, name: 'ISSHIKI (мармеладные мишки)', price: 440, stock: 99, description: 'Мармеладные мишки' },
                            { id: 1004, name: 'NARUTO (ананас)', price: 440, stock: 99, description: 'Ананас' },
                            { id: 1005, name: 'JUBI (смородина и виноград)', price: 440, stock: 99, description: 'Смородина и виноград' },
                            { id: 1006, name: 'KAGUYA (энергетик айс)', price: 440, stock: 99, description: 'Энергетик айс' },
                            { id: 1007, name: 'JIRAIYA (манго-маракуйя)', price: 440, stock: 99, description: 'Манго-маракуйя' },
                            { id: 1008, name: 'ITACHI (вишня айс)', price: 440, stock: 99, description: 'Вишня айс' },
                            { id: 1009, name: 'INDRA (киви-клубника)', price: 440, stock: 99, description: 'Киви-клубника' },
                            { id: 1010, name: 'JUGO (арбуз айс)', price: 440, stock: 99, description: 'Арбуз айс' }
                        ]
                    },
                    {
                        id: 'annima-love-killer-80mg',
                        name: 'ANNIMA LOVE KILLER 80mg',
                        flavors: [
                            { id: 1011, name: 'Ежевичный Лимонад', price: 380, stock: 99, description: 'Ежевичный лимонад' },
                            { id: 1012, name: 'Земляника Виноград', price: 380, stock: 99, description: 'Земляника виноград' },
                            { id: 1013, name: 'Груша-Малина Газировка', price: 380, stock: 99, description: 'Груша-малина газировка' },
                            { id: 1014, name: 'Клубничный Коктейль', price: 380, stock: 99, description: 'Клубничный коктейль' },
                            { id: 1015, name: 'Виноградная Фанта', price: 380, stock: 99, description: 'Виноградная фанта' },
                            { id: 1016, name: 'Виноград Алоэ', price: 380, stock: 99, description: 'Виноград алоэ' },
                            { id: 1017, name: 'Вишнёвый Морс', price: 380, stock: 99, description: 'Вишнёвый морс' },
                            { id: 1018, name: 'Вишня Скитлс Лимон', price: 380, stock: 99, description: 'Вишня скитлс лимон' },
                            { id: 1019, name: 'Ананас Апельсин', price: 380, stock: 99, description: 'Ананас апельсин' },
                            { id: 1020, name: 'Апельсин Вишня', price: 380, stock: 99, description: 'Апельсин вишня' },
                            { id: 1021, name: 'Арбузный Смузи', price: 380, stock: 99, description: 'Арбузный смузи' },
                            { id: 1022, name: 'Банан Клубника', price: 380, stock: 99, description: 'Банан клубника' },
                            { id: 1023, name: 'Виноград Вишня', price: 380, stock: 99, description: 'Виноград вишня' },
                            { id: 1024, name: 'Вишнёвая Газировка', price: 380, stock: 99, description: 'Вишнёвая газировка' },
                            { id: 1025, name: 'Виноград Малина-Арбуз', price: 380, stock: 99, description: 'Виноград малина-арбуз' },
                            { id: 1026, name: 'Виноградный Чупа-Чупс', price: 380, stock: 99, description: 'Виноградный чупа-чупс' },
                            { id: 1027, name: 'Малина Черника', price: 380, stock: 99, description: 'Малина черника' },
                            { id: 1028, name: 'Персиковый Лимонад', price: 380, stock: 99, description: 'Персиковый лимонад' },
                            { id: 1029, name: 'Фруктовый Энергетик', price: 380, stock: 99, description: 'Фруктовый энергетик' },
                            { id: 1030, name: 'Лесные Ягоды', price: 380, stock: 99, description: 'Лесные ягоды' },
                            { id: 1031, name: 'Чернично-Малиновые Червячки', price: 380, stock: 99, description: 'Чернично-малиновые червячки' },
                            { id: 1032, name: 'Яблочный Лимонад', price: 380, stock: 99, description: 'Яблочный лимонад' },
                            { id: 1033, name: 'Фруктовый Тик-Так', price: 380, stock: 99, description: 'Фруктовый тик-так' },
                            { id: 1034, name: 'Яблоко Киви', price: 380, stock: 99, description: 'Яблоко киви' },
                            { id: 1035, name: 'Тропический Банан', price: 380, stock: 99, description: 'Тропический банан' },
                            { id: 1036, name: 'Ягодная Жвачка', price: 380, stock: 99, description: 'Ягодная жвачка' },
                            { id: 1037, name: 'Ред Булл с Ананасом', price: 380, stock: 99, description: 'Ред булл с ананасом' },
                            { id: 1038, name: 'Розовый Лимонад', price: 380, stock: 99, description: 'Розовый лимонад' },
                            { id: 1039, name: 'Персик Клубника', price: 380, stock: 99, description: 'Персик клубника' },
                            { id: 1040, name: 'Малина Апельсин', price: 380, stock: 99, description: 'Малина апельсин' }
                        ]
                    },
                    {
                        id: 'annima-love-gold-edition-80mg',
                        name: 'ANNIMA LOVE gold edition 80mg',
                        flavors: [
                            { id: 1041, name: 'Blueberry Pomegranate (Черника-Гранат)', price: 420, stock: 99, description: 'Черника-гранат' },
                            { id: 1042, name: 'Juice Peach (Сок Персиковый)', price: 420, stock: 99, description: 'Сок персиковый' },
                            { id: 1043, name: 'Sour Cherry (Кислая вишня)', price: 420, stock: 99, description: 'Кислая вишня' },
                            { id: 1044, name: 'Ice grape (морозный виноград)', price: 420, stock: 99, description: 'Морозный виноград' },
                            { id: 1045, name: 'Sour Skittles (Кислый Скитлс)', price: 420, stock: 99, description: 'Кислый скитлс' },
                            { id: 1046, name: 'Frosty Energy (Ледяная Энергия)', price: 420, stock: 99, description: 'Ледяная энергия' },
                            { id: 1047, name: 'Cherry Juice (Вишневый Сок)', price: 420, stock: 99, description: 'Вишневый сок' },
                            { id: 1048, name: 'Frosty Wild Berries (Морозные лесные ягоды)', price: 420, stock: 99, description: 'Морозные лесные ягоды' },
                            { id: 1049, name: 'Wild Berries Juice (Сок из лесных ягод)', price: 420, stock: 99, description: 'Сок из лесных ягод' },
                            { id: 1050, name: 'Strawberry Mohito (Клубничный Мохито)', price: 420, stock: 99, description: 'Клубничный мохито' },
                            { id: 1051, name: 'Blueberry Melon (Черничная Дыня)', price: 420, stock: 99, description: 'Черничная дыня' },
                            { id: 1052, name: 'Blueberry Blackberry (Черника Ежевика)', price: 420, stock: 99, description: 'Черника ежевика' },
                            { id: 1053, name: 'Strawberry Banana (Клубника-Банан)', price: 420, stock: 99, description: 'Клубника-банан' },
                            { id: 1054, name: 'Currant Lemonade (Смородиновый Лимонад)', price: 420, stock: 99, description: 'Смородиновый лимонад' },
                            { id: 1055, name: 'Strawberry Kiwi (Клубника-Киви)', price: 420, stock: 99, description: 'Клубника-киви' }
                        ]
                    },
                    {
                        id: 'annima-love',
                        name: 'ANNIMA LOVE',
                        flavors: [
                            { id: 1056, name: 'Морозный редбулл', price: 440, stock: 99, description: 'Морозный редбулл' },
                            { id: 1057, name: 'Энергетик ягоды', price: 440, stock: 99, description: 'Энергетик ягоды' },
                            { id: 1058, name: 'Вишневый сок', price: 440, stock: 99, description: 'Вишневый сок' },
                            { id: 1059, name: 'Малиновый лимонад', price: 440, stock: 99, description: 'Малиновый лимонад' },
                            { id: 1060, name: 'Кислая вишня', price: 440, stock: 99, description: 'Кислая вишня' },
                            { id: 1061, name: 'Кислый скитлс', price: 440, stock: 99, description: 'Кислый скитлс' },
                            { id: 1062, name: 'Клубника киви', price: 440, stock: 99, description: 'Клубника киви' },
                            { id: 1063, name: 'Ледяной виноград', price: 440, stock: 99, description: 'Ледяной виноград' },
                            { id: 1064, name: 'Черника гранат', price: 440, stock: 99, description: 'Черника гранат' },
                            { id: 1065, name: 'Сочный персик', price: 440, stock: 99, description: 'Сочный персик' },
                            { id: 1066, name: 'Смородина вишня черника', price: 440, stock: 99, description: 'Смородина вишня черника' },
                            { id: 1067, name: 'Смородиновый лимонад', price: 440, stock: 99, description: 'Смородиновый лимонад' },
                            { id: 1068, name: 'Черника ежевика', price: 440, stock: 99, description: 'Черника ежевика' },
                            { id: 1069, name: 'Клубника банан', price: 440, stock: 99, description: 'Клубника банан' },
                            { id: 1070, name: 'Морс из диких ягод', price: 440, stock: 99, description: 'Морс из диких ягод' },
                            { id: 1071, name: 'Морозные лесные ягоды', price: 440, stock: 99, description: 'Морозные лесные ягоды' },
                            { id: 1072, name: 'Мохито с клубникой', price: 440, stock: 99, description: 'Мохито с клубникой' },
                            { id: 1073, name: 'Энергетик малина', price: 440, stock: 99, description: 'Энергетик малина' },
                            { id: 1074, name: 'Кислые ягодные червячки', price: 440, stock: 99, description: 'Кислые ягодные червячки' },
                            { id: 1075, name: 'Дыня черника', price: 440, stock: 99, description: 'Дыня черника' }
                        ]
                    },
                    {
                        id: 'annima-love-miside-70mg',
                        name: 'ANNIMA LOVE MISIDE 70мг',
                        flavors: [
                            { id: 1076, name: 'БЕЗУМНАЯ ВИШНЯ', price: 340, stock: 99, description: 'Безумная вишня' },
                            { id: 1077, name: 'ВЕСЁЛАЯ МАЛИНА', price: 340, stock: 99, description: 'Весёлая малина' },
                            { id: 1078, name: 'МИЛЫЙ КИВИ', price: 340, stock: 99, description: 'Милый киви' },
                            { id: 1079, name: 'СОННАЯ ДЫНЯ', price: 340, stock: 99, description: 'Сонная дыня' },
                            { id: 1080, name: 'ДВОЙНОЙ АРБУЗ', price: 340, stock: 99, description: 'Двойной арбуз' }
                        ]
                    },
                    {
                        id: 'annima-love-toyz-hard',
                        name: 'ANNIMA LOVE & TOYZ (HARD)',
                        flavors: [
                            { id: 1081, name: 'Виноградный микс', price: 410, stock: 99, description: 'Виноградный микс' },
                            { id: 1082, name: 'Киви маракуйя лайм', price: 410, stock: 99, description: 'Киви маракуйя лайм' },
                            { id: 1083, name: 'Фруктовый Red Bull', price: 410, stock: 99, description: 'Фруктовый ред булл' },
                            { id: 1084, name: 'Клюква вишня', price: 410, stock: 99, description: 'Клюква вишня' },
                            { id: 1085, name: 'Классическая Fanta', price: 410, stock: 99, description: 'Классическая фанта' },
                            { id: 1086, name: 'Малина ежевика арбуз', price: 410, stock: 99, description: 'Малина ежевика арбуз' },
                            { id: 1087, name: 'Ягодные мармеладные червячки', price: 410, stock: 99, description: 'Ягодные мармеладные червячки' },
                            { id: 1088, name: 'Тропический коктейль', price: 410, stock: 99, description: 'Тропический коктейль' },
                            { id: 1089, name: 'Спелое яблоко', price: 410, stock: 99, description: 'Спелое яблоко' },
                            { id: 1090, name: 'Tutti Frutti', price: 410, stock: 99, description: 'Тутти фрутти' },
                            { id: 1091, name: 'Вишневый Red Bull', price: 410, stock: 99, description: 'Вишневый ред булл' },
                            { id: 1092, name: 'Skittles цитрусовый', price: 410, stock: 99, description: 'Скитлс цитрусовый' },
                            { id: 1093, name: 'Виноградный Chupaa Chups', price: 410, stock: 99, description: 'Виноградный чупа-чупс' },
                            { id: 1094, name: 'Малиновый мохито', price: 410, stock: 99, description: 'Малиновый мохито' },
                            { id: 1095, name: 'Смородина гранат', price: 410, stock: 99, description: 'Смородина гранат' }
                        ]
                    }
                ]
            },
            {
                id: 'blood',
                name: 'BLOOD',
                icon: '🩸',
                series: [
                    {
                        id: 'blood-50mg',
                        name: 'BLOOD 50mg',
                        flavors: [
                            { id: 2001, name: 'Вишня лайм', price: 230, stock: 99, description: 'Таркая вишня с лаймом' },
                            { id: 2002, name: 'Банановый милкшейк', price: 230, stock: 99, description: 'Густой банановый милкшейк' },
                            { id: 2003, name: 'Конфеты смородина мята', price: 230, stock: 99, description: 'Конфеты смородина мята' },
                            { id: 2004, name: 'Малиновый лимонад', price: 230, stock: 99, description: 'Освежающий малиновый лимонад' },
                            { id: 2005, name: 'Клюквенный лимонад', price: 230, stock: 99, description: 'Клюквенный лимонад' },
                            { id: 2006, name: 'Банан клубника', price: 230, stock: 99, description: 'Банан с клубникой' },
                            { id: 2007, name: 'Виноград черника', price: 230, stock: 99, description: 'Виноград с черникой' },
                            { id: 2008, name: 'Дыня', price: 230, stock: 99, description: 'Сочная дыня' },
                            { id: 2009, name: 'Брусничный морс', price: 230, stock: 99, description: 'Брусничный морс' },
                            { id: 2010, name: 'Классический бабл гам', price: 230, stock: 99, description: 'Классический бабл гам' },
                            { id: 2011, name: 'Малина гранат', price: 230, stock: 99, description: 'Малина с гранатом' },
                            { id: 2012, name: 'Лесные ягоды', price: 230, stock: 99, description: 'Лесные ягоды' },
                            { id: 2013, name: 'Сочный лимон', price: 230, stock: 99, description: 'Сочный лимон' },
                            { id: 2014, name: 'Черная смородина', price: 230, stock: 99, description: 'Черная смородина' },
                            { id: 2015, name: 'Черника малина', price: 230, stock: 99, description: 'Черника с малиной' },
                            { id: 2016, name: 'Черный виноград', price: 230, stock: 99, description: 'Черный виноград' },
                            { id: 2017, name: 'Персиковый лимонад', price: 230, stock: 99, description: 'Персиковый лимонад' },
                            { id: 2018, name: 'Сладкий ананас', price: 230, stock: 99, description: 'Сладкий ананас' },
                            { id: 2019, name: 'Сочная малина', price: 230, stock: 99, description: 'Сочная малина' },
                            { id: 2020, name: 'Тропический микс', price: 230, stock: 99, description: 'Тропический микс' }
                        ]
                    },
                    {
                        id: 'blood-classic',
                        name: 'BLOOD Classic',
                        flavors: [
                            { id: 2021, name: 'Raspberry Pomegranate (Малина и гранат)', price: 1240, stock: 99, description: 'Малина и гранат' },
                            { id: 2022, name: 'Lime lemon (Лимон лайм)', price: 1240, stock: 99, description: 'Лимон лайм' },
                            { id: 2023, name: 'Needle rasberry (Игольчатая малина)', price: 1240, stock: 99, description: 'Игольчатая малина' },
                            { id: 2024, name: 'Mors Cowberry (Брусничный морс)', price: 1240, stock: 99, description: 'Брусничный морс' },
                            { id: 2025, name: 'Wild Strawberry Currant Mors (Морс из клубн. и смородины)', price: 1240, stock: 99, description: 'Морс из клубники и смородины' },
                            { id: 2026, name: 'Green apple (Яблоко)', price: 1240, stock: 99, description: 'Яблоко' },
                            { id: 2027, name: 'Juicy mango (Сочный манго)', price: 1240, stock: 99, description: 'Сочный манго' },
                            { id: 2028, name: 'Sweet pineapple (Сладкий ананас)', price: 1240, stock: 99, description: 'Сладкий ананас' }
                        ]
                    }
                ]
            },
            {
                id: 'catswill',
                name: 'CATSWILL',
                icon: '🐱',
                series: [
                    {
                        id: 'catswill-20mg',
                        name: 'CATSWILL 20mg',
                        flavors: [
                            { id: 3001, name: 'Клубника арбуз жвачка 20mg', price: 370, stock: 99, description: 'Клубника арбуз жвачка' },
                            { id: 3002, name: 'Клубника виноград мята 20mg', price: 370, stock: 99, description: 'Клубника виноград мята' },
                            { id: 3003, name: 'Клубнично вишневая конфета 20mg', price: 370, stock: 99, description: 'Клубнично вишневая конфета' },
                            { id: 3004, name: 'Мамба кислое яблоко киви 20mg', price: 370, stock: 99, description: 'Мамба кислое яблоко киви' },
                            { id: 3005, name: 'Морозные лесные ягоды 20mg', price: 370, stock: 99, description: 'Морозные лесные ягоды' },
                            { id: 3006, name: 'Лимонад черника лайм 20mg', price: 370, stock: 99, description: 'Лимонад черника лайм' },
                            { id: 3007, name: 'Клубника черника фрэш 20mg', price: 370, stock: 99, description: 'Клубника черника фрэш' },
                            { id: 3008, name: 'Черника малина лимонад 20mg', price: 370, stock: 99, description: 'Черника малина лимонад' },
                            { id: 3009, name: 'Клубника киви 20mg', price: 370, stock: 99, description: 'Клубника киви' },
                            { id: 3010, name: 'Мамба манго апельсин 20mg', price: 370, stock: 99, description: 'Мамба манго апельсин' },
                            { id: 3011, name: 'Имбирный лимонад с малиной 20mg', price: 370, stock: 99, description: 'Имбирный лимонад с малиной' },
                            { id: 3012, name: 'Йогурт клубника маракуйя 20mg', price: 370, stock: 99, description: 'Йогурт клубника маракуйя' },
                            { id: 3013, name: 'Вишня персик мята 20mg', price: 370, stock: 99, description: 'Вишня персик мята' },
                            { id: 3014, name: 'Малина ежевика лед 20mg', price: 370, stock: 99, description: 'Малина ежевика лед' },
                            { id: 3015, name: 'Алоэ виноград 20mg', price: 370, stock: 99, description: 'Алоэ виноград' },
                            { id: 3016, name: 'Вишневые леденцы 20mg', price: 370, stock: 99, description: 'Вишневые леденцы' },
                            { id: 3017, name: 'Кислые червячки с малиной и черешней 20mg', price: 370, stock: 99, description: 'Кислые червячки с малиной и черешней' },
                            { id: 3018, name: 'Кислые яблочные червички 20mg', price: 370, stock: 99, description: 'Кислые яблочные червички' },
                            { id: 3019, name: 'Кислый виноградный Чупа-чупс 20mg', price: 370, stock: 99, description: 'Кислый виноградный Чупа-чупс' },
                            { id: 3020, name: 'Кислый малиновый скитлс 20mg', price: 370, stock: 99, description: 'Кислый малиновый скитлс' },
                            { id: 3021, name: 'Мятная жвачка 20mg', price: 370, stock: 99, description: 'Мятная жвачка' },
                            { id: 3022, name: 'Ананасовый сироп виноград 20mg', price: 370, stock: 99, description: 'Ананасовый сироп виноград' },
                            { id: 3023, name: 'Кислый скитлс 20mg', price: 370, stock: 99, description: 'Кислый скитлс' },
                            { id: 3024, name: 'Клубника жвачка банан 20mg', price: 370, stock: 99, description: 'Клубника жвачка банан' },
                            { id: 3025, name: 'Лимонад ежевика сироп 20mg', price: 370, stock: 99, description: 'Лимонад ежевика сироп' },
                            { id: 3026, name: 'Скитлс виноград 20mg', price: 370, stock: 99, description: 'Скитлс виноград' },
                            { id: 3027, name: 'Хайповый энергетик с черникой 20mg', price: 370, stock: 99, description: 'Хайповый энергетик с черникой' },
                            { id: 3028, name: 'Черника лед ежевика 20mg', price: 370, stock: 99, description: 'Черника лед ежевика' },
                            { id: 3029, name: 'Чернично арбузная жвачка 20mg', price: 370, stock: 99, description: 'Чернично арбузная жвачка' },
                            { id: 3030, name: 'Киви лед кислинка 20mg', price: 370, stock: 99, description: 'Киви лед кислинка' },
                            { id: 3031, name: 'Кислая фруктовая жвачка 20mg', price: 370, stock: 99, description: 'Кислая фруктовая жвачка' }
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
            }
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
