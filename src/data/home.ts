import { education, experience, profile } from "./profile";
import type { Project } from "../utils";

export type Locale = "en" | "fi";

type HomeCopy = {
  locale: string;
  lang: Locale;
  title?: string;
  description: string;
  hero: {
    eyebrow: string;
    statement: string;
    lede: string;
    actionsLabel: string;
    selectedWork: string;
    linkedinPrefix: string;
    linkedinSuffix: string;
    blog: string;
    email: string;
    cv: string;
    proofLabel: string;
    current: string;
    previous: string;
  };
  focus: {
    eyebrow: string;
    title: string;
    items: {
      label: string;
      title: string;
      text: string;
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    all: string;
    cardLabels: {
      source: string;
      project: string;
      readAbout: string;
      preview: string;
      features: string;
      technologies: string;
    };
    translations: Record<string, Partial<Pick<Project, "description" | "features">>>;
  };
  writing: {
    eyebrow: string;
    title: string;
    archive: string;
    empty: string;
  };
  timeline: {
    ariaLabel: string;
    experienceEyebrow: string;
    experienceTitle: string;
    educationEyebrow: string;
    educationTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    email: string;
    linkedin: string;
    actionsLabel: string;
  };
};

const en: HomeCopy = {
  locale: "en",
  lang: "en",
  description: profile.description,
  hero: {
    eyebrow: `Software engineer in ${profile.location}`,
    statement: "Practical software, from product idea to production system.",
    lede:
      "I work across mobile, backend, web, infrastructure, and applied AI. Currently CTO at Clevoy, building systems that stay understandable, maintainable, and useful after the first demo.",
    actionsLabel: "Primary actions",
    selectedWork: "View selected work",
    linkedinPrefix: "Connect on",
    linkedinSuffix: "LinkedIn",
    blog: "Read blog posts",
    email: "Contact via Email",
    cv: "View CV",
    proofLabel: "Background highlights",
    current: "Current",
    previous: "Previously",
  },
  focus: {
    eyebrow: "Current focus",
    title: "Current work",
    items: [
      {
        label: "Clevoy",
        title: "CTO and product engineering",
        text: "Leading the product and engineering work behind Clevoy: mobile apps, backend services, infrastructure, and internal tools.",
      },
      {
        label: "Side projects",
        title: "Small products, shipped end to end",
        text: "Keeping a rotating set of experiments alive across AI tools, utilities, games, automation, and public writeups.",
      },
      {
        label: "Applied AI",
        title: "AI that earns its place",
        text: "Testing language, voice, vision, and local-model workflows against real product problems, not demos built around the model.",
      },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Product-minded code that ships",
    all: "All projects",
    cardLabels: {
      source: "Source",
      project: "Project",
      readAbout: "Read about",
      preview: "preview",
      features: "features",
      technologies: "technologies",
    },
    translations: {},
  },
  writing: {
    eyebrow: "Writing",
    title: "Notes from the workbench",
    archive: "Blog archive",
    empty: "No published posts yet.",
  },
  timeline: {
    ariaLabel: "Background preview",
    experienceEyebrow: "Experience",
    experienceTitle: "Work history",
    educationEyebrow: "Education",
    educationTitle: "Studies",
  },
  contact: {
    eyebrow: "Contact",
    title: "Want to talk about a practical software or AI problem?",
    text:
      "I am most useful when the work needs product judgment, implementation depth, and a path from prototype to production.",
    email: "Email Juha",
    linkedin: "LinkedIn",
    actionsLabel: "Contact actions",
  },
};

const fi: HomeCopy = {
  locale: "fi-FI",
  lang: "fi",
  title: `${profile.name} - Käytännön ohjelmistoja ideasta tuotantoon`,
  description:
    "Juha Ala-Rantalan henkilökohtainen portfolio. Ohjelmistokehittäjä Suomesta, joka työskentelee full-stack-tuotteiden, mobiilisovellusten, järjestelmien ja soveltavan tekoälyn parissa.",
  hero: {
    eyebrow: "Ohjelmistokehittäjä Seinäjoella",
    statement: "Käytännön ohjelmistoja ideasta tuotantoon.",
    lede:
      "Työskentelen mobiilin, backendin, webin, infrastruktuurin ja soveltavan tekoälyn parissa. Tällä hetkellä olen Clevoyn CTO ja rakennan järjestelmiä, jotka pysyvät ymmärrettävinä, ylläpidettävinä ja hyödyllisinä myös ensimmäisen demon jälkeen.",
    actionsLabel: "Ensisijaiset toiminnot",
    selectedWork: "Katso valikoituja töitä",
    linkedinPrefix: "Ota yhteyttä",
    linkedinSuffix: "LinkedInissä",
    blog: "Lue blogikirjoituksia",
    email: "Ota yhteyttä sähköpostilla",
    cv: "Katso CV",
    proofLabel: "Taustan kohokohdat",
    current: "Nykyinen",
    previous: "Aiemmin",
  },
  focus: {
    eyebrow: "Nykyinen fokus",
    title: "Nykyinen työ",
    items: [
      {
        label: "Clevoy",
        title: "CTO ja tuotekehitys",
        text: "Johdan Clevoyn tuotteen ja teknologian kehitystä mobiilisovelluksista backend-palveluihin, infrastruktuuriin ja sisäisiin työkaluihin.",
      },
      {
        label: "Sivuprojektit",
        title: "Pieniä tuotteita loppuun asti",
        text: "Pidän käynnissä vaihtuvaa joukkoa kokeiluja tekoälytyökaluista hyötysovelluksiin, peleihin, automaatioon ja julkisiin kirjoituksiin.",
      },
      {
        label: "Soveltava tekoäly",
        title: "Tekoäly, joka ansaitsee paikkansa",
        text: "Testaan kieli-, puhe-, kuva- ja paikallismallityönkulkuja todellisia tuoteongelmia vasten, en mallin ympärille rakennettuina demoina.",
      },
    ],
  },
  projects: {
    eyebrow: "Valikoidut työt",
    title: "Tuotelähtöistä koodia tuotantoon",
    all: "Kaikki projektit",
    cardLabels: {
      source: "Lähdekoodi",
      project: "Projekti",
      readAbout: "Lue projektista",
      preview: "esikatselu",
      features: "ominaisuudet",
      technologies: "teknologiat",
    },
    translations: {
      "Voice AI Assistant Framework": {
        description:
          "Kattava puheavustajan runko, joka yhdistää puheentunnistuksen, puhesynteesin ja kielimallit muistinhallintaan vuorovaikutteisia, kontekstitietoisia keskusteluja varten",
        features: [
          "Yhdistää puheentunnistuksen, keskustelutekoälyn ja puhesynteesin",
          "Tarjoaa joustavan puhekäyttöliittymän omien tekoälyavustajien rakentamiseen",
          "Tavoitteena on integroitua eri alustoihin ja palveluihin puheohjattuja käyttötapauksia varten",
        ],
      },
      "Whats AI Assistant": {
        description:
          "WhatsAppiin integroitava tekoälychatbot-demo, joka käyttää Neonize (whatsmeow) -kehystä ja kielimalleja vastausten tuottamiseen",
      },
      "Fyr'alath Data Tracker": {
        description:
          "Full-stack-sovellus WoW:n patch 10.2:n legendaarisen aseen valmistuskustannusten ja hankintadatan seurantaan",
      },
      "Personal Website": {
        description: "Henkilökohtainen verkkosivusto, jossa on CV sekä tietoa minusta ja projekteistani",
      },
    },
  },
  writing: {
    eyebrow: "Kirjoitukset",
    title: "Muistiinpanoja työn ääreltä",
    archive: "Blogiarkisto",
    empty: "Ei julkaistuja kirjoituksia vielä.",
  },
  timeline: {
    ariaLabel: "Taustan esikatselu",
    experienceEyebrow: "Kokemus",
    experienceTitle: "Työhistoria",
    educationEyebrow: "Koulutus",
    educationTitle: "Opinnot",
  },
  contact: {
    eyebrow: "Yhteys",
    title: "Haluatko puhua käytännön ohjelmisto- tai tekoälyongelmasta?",
    text:
      "Olen hyödyllisimmilläni, kun työ vaatii tuoteajattelua, syvää toteutusosaamista ja polun prototyypistä tuotantoon.",
    email: "Lähetä sähköpostia",
    linkedin: "LinkedIn",
    actionsLabel: "Yhteydenottotavat",
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { en, fi };

export const localizedExperience = {
  en: experience,
  fi: [
    {
      ...experience[0],
      role: "Teknologiajohtaja",
      period: "1/2026 - Nyt",
      summary:
        "Johdan teknologiastrategiaa ja rakennan full-stack-alustaa, joka kattaa mobiilin, backendin, infrastruktuurin ja hallintatyökalut.",
    },
    {
      ...experience[1],
      role: "Tutkimusassistentti",
      period: "6/2024 - 12/2025",
      summary:
        "Työskentelin GPT Lab Seinäjoki -projektissa ja tutkin suurten kielimallien sekä soveltavan tekoälyn käyttötapoja paikallisille yrityksille.",
    },
    {
      ...experience[2],
      role: "Ohjelmistosuunnittelija",
      period: "4/2018 - 11/2022",
      summary:
        "Kehitin Windows-työpöytäsovelluksia, sisäisiä työkaluja, käyttöliittymiä ja parametrointityönkulkuja.",
    },
  ],
};

export const localizedEducation = {
  en: education,
  fi: [
    {
      ...education[0],
      role: "Tekniikan maisteri - tietotekniikka",
      period: "8/2023 - 12/2025",
      summary:
        "Painotus laajamittaisessa ohjelmistokehityksessä, ohjelmistotuotannon prosesseissa, projektinhallinnassa ja tietopohjaisissa web-järjestelmissä.",
    },
    {
      ...education[1],
      role: "Insinööri (AMK) - tietotekniikka",
      period: "9/2015 - 5/2019",
      summary:
        "Erikoistuin ohjelmointiin ja ohjelmistokehitykseen rakentamalla käytännön mobiili- ja työpöytäsovelluksia.",
    },
  ],
};
