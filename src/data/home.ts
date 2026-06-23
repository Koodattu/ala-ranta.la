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
    spotlight: Record<
      string,
      {
        paragraphs?: string[];
      }
    >;
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
    eyebrow: `CTO at Clevoy · software engineer in ${profile.location}`,
    statement: "I build product software from rough idea to working system.",
    lede:
      'Currently leading product and engineering at Clevoy. Before that: industrial software, AI research, local-model prototypes, and a long trail of side projects that usually start with "what if this existed?"',
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
        title: "Product and engineering ownership",
        text: "Setting technical direction while staying close to the build: product architecture, apps, backend services, infrastructure, and admin tooling.",
      },
      {
        label: "Side projects",
        title: "A long trail of experiments",
        text: "AI tools, Twitch bots, game utilities, food apps, trackers, workshop demos, and small products built because the idea would not leave me alone.",
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
    title: "Side projects, carried through",
    all: "View all projects",
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
    eyebrow: "CTO Clevoylla · ohjelmistokehittäjä Seinäjoella",
    statement: "Rakennan tuoteohjelmistoja karkeasta ideasta toimivaksi järjestelmäksi.",
    lede:
      'Johdan tällä hetkellä Clevoyn tuotetta ja teknologiaa. Sitä ennen: teollisuusohjelmistoja, tekoälytutkimusta, paikallismalliprototyyppejä ja pitkä jono sivuprojekteja, jotka alkavat yleensä kysymyksestä "entä jos tällainen olisi olemassa?"',
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
        title: "Tuotteen ja teknologian omistajuus",
        text: "Vien teknistä suuntaa eteenpäin pysyen lähellä toteutusta: tuotearkkitehtuuri, sovellukset, backend-palvelut, infrastruktuuri ja hallintatyökalut.",
      },
      {
        label: "Sivuprojektit",
        title: "Pitkä jono kokeiluja",
        text: "Tekoälytyökaluja, Twitch-botteja, pelityökaluja, ruoka-appeja, dataseurantaa, workshop-demoja ja pieniä tuotteita, koska idea ei jättänyt rauhaan.",
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
      project: "Projekti",
      readAbout: "Lue projektista",
      preview: "esikatselu",
      features: "ominaisuudet",
      technologies: "teknologiat",
    },
    translations: {
      "AI Workshop Playground": {
        description:
          "Workshop-käyttöön rakennettu tekoälypohjainen koodausympäristö, jossa luonnollisen kielen web-ideat muuttuvat muokattavaksi koodiksi live-esikatselulla",
        features: [
          "Yhdistää tekoälychatin, Monaco-koodieditorin ja live-esikatselun samaan työtilaan",
          "Lisää workshop-sessiot kirjautumisella, käyttörajoilla ja opetustilanteisiin sopivalla käyttöönotolla",
          "Tuottaa muokattavaa HTML-, CSS- ja JavaScript-koodia luonnollisen kielen pyynnöistä",
        ],
      },
      "WoW Guild Progress Tracker": {
        description:
          "Full-stack-seurantatyökalu World of Warcraft -raidien etenemiseen: killalistat, WarcraftLogs-analytiikka, yhteisön veikkaukset ja live-tapahtumat",
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
        description:
          "Selainpohjainen tekoälykuvatyökalu, jossa kuvia luodaan ja muokataan puhekomennoilla paikallisten ja pilvipohjaisten käsittelytilojen avulla",
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
