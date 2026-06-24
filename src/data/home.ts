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
    about: string;
    readMore: string;
    items: {
      title: string;
      text: string;
      href: string;
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    all: string;
    spotlight: Record<
      string,
      {
        paragraphs?: string[];
      }
    >;
    cardLabels: {
      source: string;
      blog: string;
      demo: string;
      readAbout: string;
      readMore: string;
      preview: string;
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
    experienceAction: string;
    educationEyebrow: string;
    educationTitle: string;
    educationAction: string;
    readMore: string;
    readMoreAriaPrefix: string;
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
    eyebrow: `CTO at Clevoy · software engineer in ${profile.location}`,
    statement: "I build product software from rough idea to working system.",
    lede: 'Currently leading product and engineering at Clevoy. Before that: industrial software, AI research, local-model prototypes, and a long trail of side projects that usually start with "what if this existed?"',
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
    title: "Where my time goes",
    about: "Read more about me",
    readMore: "Read more",
    items: [
      {
        title: "Product and engineering ownership at Clevoy",
        text: "Setting technical direction while staying close to the build: product architecture, apps, backend services, infrastructure, and admin tooling.",
        href: "/about/clevoy/",
      },
      {
        title: "A long trail of side project experiments",
        text: "AI tools, Twitch bots, game utilities, food apps, trackers, workshop demos, and small products built because the idea would not leave me alone.",
        href: "/projects/",
      },
      {
        title: "Life outside the build",
        text: "Games, gym sessions, streams, and good food. Simple ways to switch off when I am not working or chasing the next side project.",
        href: "/about/",
      },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Side projects, carried through",
    all: "See all projects",
    spotlight: {
      "AI Workshop Playground": {
        paragraphs: [
          "A workshop-ready playground where participants describe web ideas in natural language and get editable HTML, CSS, and JavaScript with a live preview.",
          "Built for teaching and events: AI chat, Monaco editing, session access, and usage limits stay in one focused workspace.",
        ],
      },
      "WoW Guild Progress Tracker": {},
      "Unity 3D AI Assistant": {},
      "Voice Guided Imaging": {},
    },
    cardLabels: {
      source: "Source",
      blog: "Blog",
      demo: "Demo",
      readAbout: "Read about",
      readMore: "Read more",
      preview: "preview",
    },
    translations: {},
  },
  writing: {
    eyebrow: "Writing",
    title: "Notes from the workbench",
    archive: "View blog archive",
    empty: "No published posts yet.",
  },
  timeline: {
    ariaLabel: "Background preview",
    experienceEyebrow: "Experience",
    experienceTitle: "Work history",
    experienceAction: "View work history",
    educationEyebrow: "Education",
    educationTitle: "Studies",
    educationAction: "Explore studies",
    readMore: "Read more",
    readMoreAriaPrefix: "Read more about",
  },
  contact: {
    eyebrow: "Contact",
    title: "Say hello, share an idea, or connect.",
    text: "I am always happy to hear from people who build things, study technology, work with AI, or just want to trade ideas. Email works best; LinkedIn is good too. If you are in Seinäjoki, coffee or a burger also works.",
    email: "Email me",
    linkedin: "Connect on LinkedIn",
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
    eyebrow: "CTO Clevoylla · ohjelmistokehittäjä Seinäjoella",
    statement: "Rakennan tuoteohjelmistoja karkeasta ideasta toimivaksi järjestelmäksi.",
    lede: 'Johdan tällä hetkellä Clevoyn tuotetta ja teknologiaa. Sitä ennen: teollisuusohjelmistoja, tekoälytutkimusta, paikallismalliprototyyppejä ja pitkä jono sivuprojekteja, jotka alkavat yleensä kysymyksestä "entä jos tällainen olisi olemassa?"',
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
    title: "Mihin aikani menee",
    about: "Lue lisää minusta",
    readMore: "Lue lisää",
    items: [
      {
        title: "Tuotteen ja teknologian omistajuus Clevoylla",
        text: "Vien teknistä suuntaa eteenpäin pysyen lähellä toteutusta: tuotearkkitehtuuri, sovellukset, backend-palvelut, infrastruktuuri ja hallintatyökalut.",
        href: "/about/clevoy/",
      },
      {
        title: "Pitkä jono sivuprojektikokeiluja",
        text: "Tekoälytyökaluja, Twitch-botteja, pelityökaluja, ruoka-appeja, dataseurantaa, workshop-demoja ja pieniä tuotteita, koska idea ei jättänyt rauhaan.",
        href: "/projects/",
      },
      {
        title: "Elämä projektien ulkopuolella",
        text: "Pelejä, salitreenejä, striimejä ja hyvää ruokaa. Yksinkertaisia tapoja nollata, kun en ole töissä tai viemässä seuraavaa sivuprojektia eteenpäin.",
        href: "/about/",
      },
    ],
  },
  projects: {
    eyebrow: "Valikoidut työt",
    title: "Sivuprojekteja loppuun asti",
    all: "Katso kaikki projektit",
    spotlight: {
      "AI Workshop Playground": {
        paragraphs: [
          "Workshop-käyttöön rakennettu ympäristö, jossa osallistujat kuvaavat web-idean luonnollisella kielellä ja saavat muokattavaa HTML-, CSS- ja JavaScript-koodia live-esikatselulla.",
          "Opetusta ja tapahtumia varten rakennettu kokonaisuus: tekoälychat, Monaco-editori, sessiopääsy ja käyttörajat pysyvät samassa työtilassa.",
        ],
      },
      "WoW Guild Progress Tracker": {},
      "Unity 3D AI Assistant": {},
      "Voice Guided Imaging": {},
    },
    cardLabels: {
      source: "Lähdekoodi",
      blog: "Blogi",
      demo: "Demo",
      readAbout: "Lue projektista",
      readMore: "Lue lisää",
      preview: "esikatselu",
    },
    translations: {
      "AI Workshop Playground": {
        description: "Workshop-käyttöön rakennettu tekoälypohjainen koodausympäristö, jossa luonnollisen kielen web-ideat muuttuvat muokattavaksi koodiksi live-esikatselulla",
        features: [
          "Yhdistää tekoälychatin, Monaco-koodieditorin ja live-esikatselun samaan työtilaan",
          "Lisää workshop-sessiot kirjautumisella, käyttörajoilla ja opetustilanteisiin sopivalla käyttöönotolla",
          "Tuottaa muokattavaa HTML-, CSS- ja JavaScript-koodia luonnollisen kielen pyynnöistä",
        ],
      },
      "WoW Guild Progress Tracker": {
        description: "Full-stack-seurantatyökalu World of Warcraft -raidien etenemiseen: killalistat, WarcraftLogs-analytiikka, yhteisön veikkaukset ja live-tapahtumat",
        features: [
          "Seuraa useita kiltoja eri raid-tiereissä etenemislistojen avulla",
          "Yhdistää WarcraftLogs-, Raider.IO-, Battle.net- ja Twitch-dataa",
          "Sisältää veikkauskilpailut, kiltaprofiilit ja raid-suoritusten analytiikan",
        ],
      },
      "Unity 3D AI Assistant": {
        description:
          "Unityllä rakennettu 3D-tekoälyavustaja, jossa Ready Player Me -avatar keskustelee puheella, vastaa äänellä, luo kuvia ja pelaa webcamia hyödyntäviä minipelejä",
        features: [
          "Käyttää push-to-talk-puheohjausta, puhuttuja vastauksia ja animoituja avatar-eleitä",
          "Tukee kuvien luontia ja muokkausta keskustelun kautta",
          "Sisältää webcamilla toimivan kivi-paperi-sakset-pelin ja monikieliset keskustelut",
        ],
      },
      "Voice Guided Imaging": {
        description: "Selainpohjainen tekoälykuvatyökalu, jossa kuvia luodaan ja muokataan puhekomennoilla paikallisten ja pilvipohjaisten käsittelytilojen avulla",
        features: [
          "Tukee push-to-talk-komentoja kuvien luontiin ja muokkaukseen",
          "Ohjaa työn joko pilvipalveluihin tai paikalliseen inferenssitaustaan",
          "Sisältää sessiorajat, pysyvät galleriat ja jonotuksen etenemispäivitykset",
        ],
      },
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
        description: "WhatsAppiin integroitava tekoälychatbot-demo, joka käyttää Neonize (whatsmeow) -kehystä ja kielimalleja vastausten tuottamiseen",
      },
      "Fyr'alath Data Tracker": {
        description: "Full-stack-sovellus WoW:n patch 10.2:n legendaarisen aseen valmistuskustannusten ja hankintadatan seurantaan",
      },
      "Personal Website": {
        description: "Henkilökohtainen verkkosivusto, jossa on CV sekä tietoa minusta ja projekteistani",
      },
    },
  },
  writing: {
    eyebrow: "Kirjoitukset",
    title: "Muistiinpanoja työn ääreltä",
    archive: "Selaa blogiarkistoa",
    empty: "Ei julkaistuja kirjoituksia vielä.",
  },
  timeline: {
    ariaLabel: "Taustan esikatselu",
    experienceEyebrow: "Kokemus",
    experienceTitle: "Työhistoria",
    experienceAction: "Katso työhistoria",
    educationEyebrow: "Koulutus",
    educationTitle: "Opinnot",
    educationAction: "Tutustu opintoihin",
    readMore: "Lue lisää",
    readMoreAriaPrefix: "Lue lisää kohteesta",
  },
  contact: {
    eyebrow: "Yhteys",
    title: "Ota yhteyttä, jaa idea tai verkostoidutaan.",
    text: "Kuulen mielelläni ihmisistä, jotka rakentavat jotain, opiskelevat teknologiaa, tekevät töitä tekoälyn parissa tai haluavat vaihtaa ajatuksia. Sähköposti toimii parhaiten; LinkedIn käy myös. Seinäjoella kahvi tai burgeri toimii aina.",
    email: "Lähetä sähköpostia",
    linkedin: "Verkostoidu LinkedInissä",
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
      summary: "Johdan teknologiastrategiaa ja rakennan full-stack-alustaa, joka kattaa mobiilin, backendin, infrastruktuurin ja hallintatyökalut.",
    },
    {
      ...experience[1],
      role: "Tutkimusassistentti",
      period: "6/2024 - 12/2025",
      summary: "Työskentelin GPT Lab Seinäjoki -projektissa ja tutkin suurten kielimallien sekä soveltavan tekoälyn käyttötapoja paikallisille yrityksille.",
    },
    {
      ...experience[2],
      role: "Ohjelmistosuunnittelija",
      period: "4/2018 - 11/2022",
      summary: "Kehitin Windows-työpöytäsovelluksia, sisäisiä työkaluja, käyttöliittymiä ja parametrointityönkulkuja.",
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
      summary: "Painotus laajamittaisessa ohjelmistokehityksessä, ohjelmistotuotannon prosesseissa, projektinhallinnassa ja tietopohjaisissa web-järjestelmissä.",
    },
    {
      ...education[1],
      role: "Insinööri (AMK) - tietotekniikka",
      period: "9/2015 - 5/2019",
      summary: "Erikoistuin ohjelmointiin ja ohjelmistokehitykseen rakentamalla käytännön mobiili- ja työpöytäsovelluksia.",
    },
  ],
};
