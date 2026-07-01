---
lang: fi
translationKey: "example-blog-post-showcase"
slug: "esimerkki-blogikirjoituksen-ominaisuuksista"
title: "Esimerkki blogikirjoituksen ominaisuuksista"
description: "Tiivis Markdown-esimerkki blogin metatiedoista, kuvista, listoista, lainauksista, taulukoista, koodista ja tarkistuslistoista."
pubDate: 2026-06-30
updatedDate: 2026-07-01
tags: ["Esimerkki", "Markdown", "Astro", "Sisältö"]
draft: false
heroImage: "/images/personal-website.webp"
---

Tämä on sivuston yksittäinen julkaistu esimerkkikirjoitus. Se ei ole kaikkien kirjoitusten pohja, vaan tiivis referenssi siitä, mitä blogikirjoitus voi sisältää, kun oikea artikkeli tarvitsee enemmän kuin tavallisia tekstikappaleita.

![Personal Website -projektin esikatselukuva esimerkkikirjoituksen kuvana](/images/personal-website.webp)

## Pikakatsaus

Kirjoitus voi yhdistää **vahvaa korostusta**, _kevyttä korostusta_, [sisäisiä linkkejä](/projects/) ja rivinsisäistä koodia, kuten `getCollection("blog")`, ilman erillisiä komponentteja.

- Frontmatter määrittää kielen, käännösavaimen, URL-polun, otsikon, kuvauksen, julkaisu- ja päivityspäivän, tagit, luonnostilan ja esikatselukuvan.
- Markdown hoitaa otsikot, kuvat, listat, taulukot, lainaukset ja koodilohkot.
- Blogiarkisto, kirjoitussivut, RSS-syöte, sivukartta ja artikkelimetatiedot syntyvät samasta sisältömerkinnästä.

### Tarkistuslista

- [x] Näytä metatiedot sivun yläosassa ja strukturoidussa datassa.
- [x] Renderöi leveä kuva artikkelin sisällä.
- [x] Pidä koodiesimerkit luettavina kapeilla näytöillä.
- [ ] Korvaa esimerkki oikealla kirjoituksella, kun blogi on valmis.

## Lyhyt työnkulku

1. Kirjoita yksi Markdown-tiedosto jokaista kieltä varten.
2. Anna käännetyille tiedostoille sama `translationKey`.
3. Käytä kielikohtaista `slug`-, `title`-, `description`- ja `tags`-metatietoa.
4. Aja build, jotta Astro validoi sisältökokoelman.

> Hyvä esimerkki on tarpeeksi konkreettinen testaamaan taittoa, mutta tarpeeksi pieni, jotta oikea sisältö voi korvata sen ilman erillistä siivousprojektia.

## Koodiesimerkki

```ts
const postFeatures = {
  metadata: ["lang", "translationKey", "slug", "title", "description", "pubDate", "updatedDate", "tags", "heroImage"],
  markdown: ["images", "lists", "tables", "quotes", "code"],
  output: ["static page", "RSS item", "sitemap URL", "article schema"],
};

export const isShowcaseReady = postFeatures.markdown.includes("tables");
```

## Vertailutaulukko

| Ominaisuus | Mistä se tulee | Mihin sitä käytetään |
| --- | --- | --- |
| `translationKey` | Jaettu frontmatter | Ryhmittelee englannin- ja suomenkielisen version yhteen |
| `slug` | Kielikohtainen frontmatter | Luo julkisen URL-polun kyseiselle kielelle |
| Tagit | Frontmatter-taulukko | Aihemerkinnät korteissa ja kirjoitussivuilla |
| Koodilohkot | Markdown-sisältö | Tekniset esimerkit vaakavierityksellä |

## Toinen kuva

![Toinen projektikuva osoittamassa, että kirjoituksessa voi olla useampi kuva](/images/voice-ai-assistant-framework.webp)

Viimeinen kappale pitää esimerkin tiiviinä ja varmistaa samalla, että tavallinen teksti jatkuu siististi rikkaampien lohkojen jälkeen.
