import homeImage from "./assets/pic1.png";
// Nagłówki
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "experience",
  "certificates",
];
const HeaderLinks = [
  {
    linkText: "HOME",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profil",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Wykształcenie",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Stack",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Projekty",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
  {
    linkText: "Certyfikaty",
    linkID: "certificates",
    boxIcon: "bx-award",
  },
];

//  SIDEBAR //
// Odwołania
const homeData = {
  homeImage,
  homeTitle1: "Wojciech",
  homeTitle2: "Żuber",
  homeProfession: "Web Developer",
  homeInformation: [
    {
      text: "Kraków",
      icon: "bx-map",
    },
    {
      text: "wojciechzuber0@gmail.com",
      icon: "bx-envelope",
    },
    {
      text: "+48 730 775 654",
      icon: "bx-phone",
    },
  ],
};

// Social Media
const socialLinks = {
  title: "Social Media",
  links: [
    {
      link: "https://www.linkedin.com/in/zuberwojciech",
      text: "linkedin.com/in/zuberwojciech",
      icon: "bxl-linkedin-square",
    },
    {
      link: "https://www.github.com/ahabwz",
      text: "github.com/ahabwz",
      icon: "bxl-github",
    },
    {
      link: "https://www.facebook.com/zuber.wojciech",
      text: "facebook.com/zuber.wojciech",
      icon: "bxl-facebook",
    },
  ],
};

// Profil osobisty
const profileData = {
  title: "Profil Osobisty",
  descriptions: [
    `Jestem programistą samoukiem, który niedawno odkrył pasję do produkcji oprogramowania i stron internetowych. Płynnie posługuję się
    językiem polskim i angielskim.`,
    `Mam doświadczenie z obsługą peryferii komputerowych(drukarki, projektory, digitizery), drobnymi naprawami laptopów(przeważnie
    IBM/Lenovo Thinkpad i Dell Latitude) oraz obsługą pakietów Adobe CC i MS Office.`,
  ],
};

// Wykształcenie
const educationData = {
  title: "Wykształcenie",
  educations: [
    {
      title: "Elektroniczne przetwarzanie informacji",
      studies: "Uniwersytet Jagielloński, Kraków",
      year: "2021 - Obecnie",
      line: true,
    },
    {
      title: "Psychologia (Ogólnoakademicka)",
      studies: "Uniwersytet Jagielloński, Kraków",
      year: "2020 - 2021",
      line: false,
    },
  ],
};

//  Stack
const skillsData = {
  title: "Stack Umiejętności",
  skills: [
    [`C#/.Net`, `JS`, `SQL`, `MongoDB`, `HTML/CSS`, `WPF`],
    [`React`, `Node.js`, `Bootstrap`, `TailwindCSS`, `Git`, `ASP.NET`],
  ],
};
const logoText = "Wojciech Żuber";
const menuIcon = "bx-grid-alt";

// Certyfikaty
const certificatesData = {
  title: "Certyfikaty",
  certificates: [
    {
      title: "EF SET English Certificate 92/100 (C2 Proficient)",
    },
    {
      title: "The Web Developer Bootcamp 2022 (Udemy)",
    },
    {
      title: "Complete C# Masterclass (Udemy)",
    },
    {
      title: "Scrum Fundamentals Certified",
    },
    {
      title: "Responsive Web Design (FCC)",
    },
    {
      title: "Front End Development Libraries (FCC)",
    },
    {
      title: "JavaScript Algorithms and Data Structures (FCC)",
    },
  ],
};

// Projekty
const experienceData = {
  title: "Wybrane Projekty",
  experiences: [
    {
      title: "Curriculum Vitae (React)",
      describe:
        "CV wykonane w formie aplikacji sieciowej przy pomocy Reacta, zawiera responsywność, zmiany motywów między ciemnym a jasnym i eksport CV w formie PDF.",
    },
    {
      title: "Eksplorator plików (C#, WPF) ",
      describe: "Desktopowa aplikacja wykonana w C#. Funkcjonalnie służąca jako menedżer plików. Zawiera minimalistyczny i nowoczesny interfejs graficzny zaimplementowany przy pomocy Windows Presentation Foundation. ",
    },
    {
      title: "Portal społecznościowy do tworzenia i dzielenia się wydarzeniami i aktywnościami (ASP.NET, React, MobX, PostGreSQL)",
      describe: "Serwis społecznościowy posiada tworzenie kont, autentyfikację i autoryzację użytkownika, tworzenie i udostępnianie wydarzeń, edycję profili(dodawanie zdjęć profilowych), followanie profili.",
    },
  ],
};

// Języki
const languageData = {
  title: "Języki",
  languages: ["Polski", "Angielski C1" ],
};

// Zainteresowania
const interestsData = {
  title: "Hobby",
  interests: [
    {
      icon: "bxs-car-crash",
      text: "Motoryzacja",
    },
    {
      icon: "bx-palette",
      text: "Malarstwo",
    },
    
  ],
};
export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  socialLinks,
  profileData,
  educationData,
  skillsData,
  certificatesData,
  experienceData,
  languageData,
  interestsData,
  headerIds
};
