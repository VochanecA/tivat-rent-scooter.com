// lib/i18n.ts
type TranslationKey =
  | "home"
  | "viewScooters"
  | "scooters"
  | "features"
  | "contact"
  | "selectLanguage"
  | "heroTitle"
  | "heroSubtitle"
  | "rentNow"
  | "learnMore"
  | "ourScooters"
  | "maxSpeed"
  | "range"
  | "rentThis"
  | "experienceTitle"
  | "experienceDescription"
  | "feature1Title"
  | "feature1Description"
  | "feature2Title"
  | "feature2Description"
  | "feature3Title"
  | "feature3Description"
  | "feature4Title"
  | "feature4Description"
  | "feature5Title"
  | "feature5Description"
  | "readyToRide"
  | "readyToRideDescription"
  | "bookNow"
  | "stayConnected"
  | "scanQrCodes"
  | "instagram"
  | "facebook"
  | "website"
  | "footerDescription"
  | "quickLinks"
  | "allRightsReserved"
  | "requirements"
  | "included"
  | "discounts"
  | "rentalInfo"
  | "scooterDescription"
  | "scootersPricing"
  | "requirementsText"
  | "includedText"
  | "testimonialsTitle"
  | "testimonialsDescription"; // New keys for testimonials

type Translations = Record<TranslationKey, string>;

const translations: Record<string, Translations> = {
  en: {
    home: "Home",
    scooters: "Scooters",
    features: "Features",
    viewScooters: "View scooters",
    contact: "Contact",
    selectLanguage: "Select Language",
    heroTitle: "Explore Tivat & Boka Bay on Two Wheels",
    heroSubtitle: "Experience the freedom of the Montenegrin coast with our premium scooter rentals",
    rentNow: "Rent Now",
    learnMore: "Learn More",
    ourScooters: "Our Scooter Fleet",
    maxSpeed: "Max Speed",
    range: "Range",
    rentThis: "Rent This Scooter",
    experienceTitle: "Experience the Adventure",
    experienceDescription: "Discover the joy of exploring Tivat and its surroundings on our modern, reliable scooters.",
    feature1Title: "Freedom to Explore",
    feature1Description: "Go wherever you want, whenever you want. Discover hidden beaches and scenic viewpoints at your own pace.",
    feature2Title: "Sunshine & Sea Breeze",
    feature2Description: "Feel the Mediterranean breeze as you cruise along the beautiful Adriatic coastline.",
    feature3Title: "Local Hotspots",
    feature3Description: "Access the best local spots that larger vehicles can't reach. Park easily and enjoy more of Tivat.",
    feature4Title: "Safe & Reliable",
    feature4Description: "All our scooters are regularly maintained and come with safety equipment included.",
    feature5Title: "24/7 Support",
    feature5Description: "Our team is always available to help with any questions or assistance you might need during your rental.",
    readyToRide: "Ready to Ride?",
    readyToRideDescription: "Book your scooter now and start your Tivat adventure today!",
    bookNow: "Book Now",
    stayConnected: "Stay Connected",
    scanQrCodes: "Scan our QR codes to follow us on social media and visit our website",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "Website",
    footerDescription: "Rent a scooter and explore the beautiful Montenegrin coast at your own pace. Experience freedom, adventure, and unforgettable memories.",
    quickLinks: "Quick Links",
    allRightsReserved: "All rights reserved.",
    requirements: "Requirements",
    included: "Included",
    discounts: "Discounts",
    rentalInfo: "Rental Information",
    scooterDescription: "Choose from our premium collection of scooters, perfect for exploring Tivat and Montenegro",
    scootersPricing: "Pricing",
    requirementsText: "Valid driving license required. Minimum age 18 years.",
    includedText: "Helmet, insurance, and 24/7 roadside assistance.",
    testimonialsTitle: "What Our Customers Say",
    testimonialsDescription: "Read what our customers have to say about their experience with us.",
  },
  sr: {
    home: "Početna",
    scooters: "Skuteri",
    features: "Karakteristike",
    viewScooters: "Pogledaj skutere",
    contact: "Kontakt",
    selectLanguage: "Izaberite jezik",
    heroTitle: "Istražite Tivat i Boku Kotorsku na dva točka",
    heroSubtitle: "Doživite slobodu crnogorske obale sa našim premium skuterima za iznajmljivanje",
    rentNow: "Iznajmi odmah",
    learnMore: "Saznaj više",
    ourScooters: "Naša flota skutera",
    maxSpeed: "Maksimalna brzina",
    range: "Domet",
    rentThis: "Iznajmi ovaj skuter",
    experienceTitle: "Doživite avanturu",
    experienceDescription: "Otkrijte radost istraživanja Tivta i njegove okoline na našim modernim, pouzdanim skuterima.",
    feature1Title: "Sloboda istraživanja",
    feature1Description: "Idite gde god želite, kad god želite. Otkrijte skrivene plaže i panoramske vidikovce svojim tempom.",
    feature2Title: "Sunce i morski povetarac",
    feature2Description: "Osetite mediteranski povetarac dok krstarite duž prelepe jadranske obale.",
    feature3Title: "Lokalne atrakcije",
    feature3Description: "Pristupite najboljim lokalnim mestima do kojih veća vozila ne mogu doći. Parkirajte se lako i uživajte više u Tivtu.",
    feature4Title: "Sigurno i pouzdano",
    feature4Description: "Svi naši skuteri se redovno održavaju i dolaze sa uključenom sigurnosnom opremom.",
    feature5Title: "Podrška 24/7",
    feature5Description: "Naš tim je uvek dostupan da pomogne sa bilo kojim pitanjima ili pomoći koja vam može zatrebati tokom iznajmljivanja.",
    readyToRide: "Spremni za vožnju?",
    readyToRideDescription: "Rezervišite svoj skuter sada i započnite svoju tivatsku avanturu danas!",
    bookNow: "Rezerviši odmah",
    stayConnected: "Ostanite povezani",
    scanQrCodes: "Skenirajte naše QR kodove da nas pratite na društvenim mrežama i posetite našu web stranicu",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "Web stranica",
    footerDescription: "Iznajmite skuter i istražite prelepu crnogorsku obalu svojim tempom. Doživite slobodu, avanturu i nezaboravne uspomene.",
    quickLinks: "Brzi linkovi",
    allRightsReserved: "Sva prava zadržana.",
    requirements: "Uslovi",
    included: "Uključeno",
    discounts: "Popusti",
    rentalInfo: "Informacije o iznajmljivanju",
    scooterDescription: "Birajte iz naše premium kolekcije skutera, savršenih za istraživanje Tivta i Crne Gore",
    scootersPricing: "Cjenovnik",
    requirementsText: "Potrebna važeća vozačka dozvola. Minimalna starost 18 godina.",
    includedText: "Kaciga, osiguranje i pomoć na putu 24/7.",
    testimonialsTitle: "Šta naši klijenti kažu",
    testimonialsDescription: "Pročitajte što naši klijenti imaju da kažu o svom iskustvu sa nama.",
  },
  ru: {
    home: "Главная",
    scooters: "Скутеры",
    features: "Особенности",
    viewScooters: "Посмотреть скутеры",
    contact: "Контакты",
    selectLanguage: "Выберите язык",
    heroTitle: "Исследуйте Тиват и бухту Бока на двух колесах",
    heroSubtitle: "Ощутите свободу черногорского побережья с нашими премиальными скутерами напрокат",
    rentNow: "Арендовать сейчас",
    learnMore: "Узнать больше",
    ourScooters: "Наш флот скутеров",
    maxSpeed: "Макс. скорость",
    range: "Запас хода",
    rentThis: "Арендовать этот скутер",
    experienceTitle: "Испытайте приключение",
    experienceDescription: "Откройте для себя радость исследования Тивата и его окрестностей на наших современных, надежных скутерах.",
    feature1Title: "Свобода исследования",
    feature1Description: "Отправляйтесь куда хотите и когда хотите. Откройте для себя скрытые пляжи и живописные смотровые площадки в своем темпе.",
    feature2Title: "Солнце и морской бриз",
    feature2Description: "Почувствуйте средиземноморский бриз, путешествуя вдоль прекрасного адриатического побережья.",
    feature3Title: "Местные достопримечательности",
    feature3Description: "Получите доступ к лучшим местным местам, куда не могут добраться более крупные транспортные средства. Легко паркуйтесь и наслаждайтесь Тиватом.",
    feature4Title: "Безопасно и надежно",
    feature4Description: "Все наши скутеры регулярно обслуживаются и поставляются с включенным защитным снаряжением.",
    feature5Title: "Поддержка 24/7",
    feature5Description: "Наша команда всегда доступна, чтобы помочь с любыми вопросами или помощью, которая может вам понадобиться во время аренды.",
    readyToRide: "Готовы к поездке?",
    readyToRideDescription: "Забронируйте свой скутер сейчас и начните свое приключение в Тивате сегодня!",
    bookNow: "Забронировать сейчас",
    stayConnected: "Оставайтесь на связи",
    scanQrCodes: "Отсканируйте наши QR-коды, чтобы следить за нами в социальных сетях и посетить наш веб-сайт",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "Веб-сайт",
    footerDescription: "Арендуйте скутер и исследуйте прекрасное черногорское побережье в своем темпе. Испытайте свободу, приключения и незабываемые воспоминания.",
    quickLinks: "Быстрые ссылки",
    allRightsReserved: "Все права защищены.",
    requirements: "Требования",
    included: "Включено",
    discounts: "Скидки",
    rentalInfo: "Информация об аренде",
    scooterDescription: "Выберите из нашей премиальной коллекции скутеров, идеальных для исследования Тивата и Черногории",
    scootersPricing: "Цены",
    requirementsText: "Требуется действительное водительское удостоверение. Минимальный возраст 18 лет.",
    includedText: "Шлем, страховка и круглосуточная помощь на дороге.",
    testimonialsTitle: "Отзывы наших клиентов",
    testimonialsDescription: "Прочтите, что наши клиенты говорят о своем опыте работы с нами.",
  },
  he: {
    home: "בית",
    scooters: "קטנועים",
    features: "תכונות",
    viewScooters: "הצג קטנועים",
    contact: "צור קשר",
    selectLanguage: "בחר שפה",
    heroTitle: "חקור את טיבט ומפרץ בוקה על שני גלגלים",
    heroSubtitle: "חווה את החופש של חוף מונטנגרו עם קטנועי הפרימיום שלנו להשכרה",
    rentNow: "השכר עכשיו",
    learnMore: "למידע נוסף",
    ourScooters: "צי הקטנועים שלנו",
    maxSpeed: "מהירות מקסימלית",
    range: "טווח",
    rentThis: "השכר קטנוע זה",
    experienceTitle: "חווה את ההרפתקה",
    experienceDescription: "גלה את השמחה של חקר טיבט וסביבתה על הקטנועים המודרניים והאמינים שלנו.",
    feature1Title: "חופש לחקור",
    feature1Description: "לך לאן שתרצה, מתי שתרצה. גלה חופים נסתרים ונקודות תצפית נופיות בקצב שלך.",
    feature2Title: "שמש ורוח ים",
    feature2Description: "הרגישו את הרוח הים תיכונית בעת שיוט לאורך חוף האדריאטי היפה.",
    feature3Title: "נקודות חמות מקומיות",
    feature3Description: "גישה למקומות המקומיים הטובים ביותר שכלי רכב גדולים יותר לא יכולים להגיע אליהם. חנה בקלות ותיהנה יותר מטיבט.",
    feature4Title: "בטוח ואמין",
    feature4Description: "כל הקטנועים שלנו מתוחזקים באופן קבוע ומגיעים עם ציוד בטיחות כלול.",
    feature5Title: "תמיכה 24/7",
    feature5Description: "הצוות שלנו תמיד זמין לעזור בכל שאלה או סיוע שאתה עשוי להזדקק לו במהלך ההשכרה.",
    readyToRide: "מוכנים לרכוב?",
    readyToRideDescription: "הזמן את הקטנוע שלך עכשיו והתחל את הרפתקת טיבט שלך היום!",
    bookNow: "הזמן עכשיו",
    stayConnected: "הישאר מחובר",
    scanQrCodes: "סרקו את קודי ה-QR שלנו כדי לעקוב אחרינו ברשתות החברתיות ולבקר באתר שלנו",
    instagram: "אינסטגרם",
    facebook: "פייסבוק",
    website: "אתר אינטרנט",
    footerDescription: "השכירו קטנוע וחקרו את החוף המונטנגרי היפה בקצב שלכם. חוו חופש, הרפתקאות וזכרונות בלתי נשכחים.",
    quickLinks: "קישורים מהירים",
    allRightsReserved: "כל הזכויות שמורות.",
    requirements: "דרישות",
    included: "כלול",
    discounts: "הנחות",
    rentalInfo: "מידע על השכרה",
    scooterDescription: "בחרו מהאוסף הפרימיום שלנו של קטנועים, מושלמים לחקר טיבט ומונטנגרו",
    scootersPricing: "תמחור",
    requirementsText: "נדרש רישיון נהיגה תקף. גיל מינימלי 18 שנים.",
    includedText: "קסדה, ביטוח וסיוע בדרכים 24/7.",
    testimonialsTitle: "מה הלקוחות שלנו אומרים",
    testimonialsDescription: "קראו מה הלקוחות שלנו אומרים על החוויה שלהם איתנו.",
  },
  fr: {
    home: "Accueil",
    scooters: "Scooters",
    features: "Caractéristiques",
    viewScooters: "Voir les scooters",
    contact: "Contact",
    selectLanguage: "Sélectionner la langue",
    heroTitle: "Explorez Tivat et la baie de Boka à deux roues",
    heroSubtitle: "Découvrez la liberté de la côte monténégrine avec nos scooters de location premium",
    rentNow: "Louer maintenant",
    learnMore: "En savoir plus",
    ourScooters: "Notre flotte de scooters",
    maxSpeed: "Vitesse max",
    range: "Autonomie",
    rentThis: "Louer ce scooter",
    experienceTitle: "Vivez l'aventure",
    experienceDescription: "Découvrez le plaisir d'explorer Tivat et ses environs sur nos scooters modernes et fiables.",
    feature1Title: "Liberté d'explorer",
    feature1Description: "Allez où vous voulez, quand vous voulez. Découvrez des plages cachées et des points de vue panoramiques à votre rythme.",
    feature2Title: "Soleil et brise marine",
    feature2Description: "Sentez la brise méditerranéenne en naviguant le long de la magnifique côte adriatique.",
    feature3Title: "Points d'intérêt locaux",
    feature3Description: "Accédez aux meilleurs endroits locaux que les véhicules plus grands ne peuvent pas atteindre. Garez-vous facilement et profitez davantage de Tivat.",
    feature4Title: "Sûr et fiable",
    feature4Description: "Tous nos scooters sont régulièrement entretenus et sont fournis avec un équipement de sécurité inclus.",
    feature5Title: "Support 24/7",
    feature5Description: "Notre équipe est toujours disponible pour vous aider avec toutes les questions ou l'assistance dont vous pourriez avoir besoin pendant votre location.",
    readyToRide: "Prêt à rouler ?",
    readyToRideDescription: "Réservez votre scooter maintenant et commencez votre aventure à Tivat aujourd'hui !",
    bookNow: "Réserver maintenant",
    stayConnected: "Restez connecté",
    scanQrCodes: "Scannez nos codes QR pour nous suivre sur les réseaux sociaux et visiter notre site web",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "Site web",
    footerDescription: "Louez un scooter et explorez la magnifique côte monténégrine à votre rythme. Vivez la liberté, l'aventure et des souvenirs inoubliables.",
    quickLinks: "Liens rapides",
    allRightsReserved: "Tous droits réservés.",
    requirements: "Exigences",
    included: "Inclus",
    discounts: "Remises",
    rentalInfo: "Informations de location",
    scooterDescription: "Choisissez parmi notre collection premium de scooters, parfaits pour explorer Tivat et le Monténégro",
    scootersPricing: "Tarification",
    requirementsText: "Permis de conduire valide requis. Âge minimum 18 ans.",
    includedText: "Casque, assurance et assistance routière 24/7.",
    testimonialsTitle: "Ce que disent nos clients",
    testimonialsDescription: "Lisez ce que nos clients disent de leur expérience avec nous.",
  },
};

export function getTranslations(lang: string): Translations {
  // Default to English if the language is not supported
  return translations[lang] || translations.en;
}
