import { PlatformsWiteSetting } from "./interfaces";

export const includedPlatforms: PlatformsWiteSetting[] = [
  {
    label: "Bing",
    url: "https://www.bing.com/search?q={{search_term}}",
    setting: "bing",
  },
  {
    label: "crates.io",
    url: "https://crates.io/search?q={{search_term}}",
    setting: "cratesIo",
  },
  {
    label: "CSS-Tricks",
    url: "https://css-tricks.com/?s={{search_term}}",
    setting: "cssTricks",
  },
  {
    label: "devdocs.io",
    url: "https://devdocs.io/#q={{search_term}}",
    setting: "devdocs",
  },
  {
    label: "dict.cc",
    url: "https://www.dict.cc/?s={{search_term}}",
    setting: "dictCc",
  },
  {
    label: "Docs.rs",
    url: "https://docs.rs/releases/search?query={{search_term}}",
    setting: "docsRs",
  },
  {
    label: "Docker Hub",
    url: "https://hub.docker.com/search?q={{search_term}}",
    setting: "dockerHub",
  },
  {
    label: "Ecosia",
    url: "https://www.ecosia.org/search?q={{search_term}}",
    setting: "ecosia",
  },
  {
    label: "DuckDuckGo",
    url: "https://duckduckgo.com/?q={{search_term}}",
    setting: "duckDuckGo",
  },
  {
    label: "GitHub",
    url: "https://github.com/search?q={{search_term}}",
    setting: "gitHub",
  },
  {
    label: "Google Translator",
    url: "https://translate.google.com/?text={{search_term}}",
    setting: "googleTranslator",
  },
  {
    label: "Kotlin",
    url: "https://kotlinlang.org/docs/home.html?q={{search_term}}&s=full",
    setting: "kotlin",
  },
  {
    label: "Google",
    url: "https://www.google.com/search?q={{search_term}}",
    setting: "google",
  },
  {
    label: "MDN",
    url: "https://developer.mozilla.org/en-US/search?q={{search_term}}",
    setting: "MDN",
  },
  {
    label: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/search/?terms={{search_term}}",
    setting: "microsoftLearn",
  },
  {
    label: "NPM",
    url: "https://www.npmjs.com/search?q={{search_term}}",
    setting: "NPM",
  },
  {
    label: "NuGet",
    url: "https://www.nuget.org/packages?q={{search_term}}",
    setting: "nuGet",
  },
  {
    label: "PyPI",
    url: "https://pypi.org/search/?q={{search_term}}",
    setting: "pyPI",
  },
  {
    label: "Python",
    url: "https://docs.python.org/3/search.html?q={{search_term}}",
    setting: "python",
  },
  {
    label: "Reddit",
    url: "https://www.reddit.com/search?q={{search_term}}",
    setting: "reddit",
  },
  {
    label: "Stack Overflow",
    url: "https://stackoverflow.com/search?q={{search_term}}",
    setting: "stackOverflow",
  },
  {
    label: "Startpage",
    url: "https://www.startpage.com/do/dsearch?q={{search_term}}",
    setting: "startpage",
  },
  {
    label: "Wikipedia",
    url: "https://wikipedia.org/w/index.php?search={{search_term}}",
    setting: "wikipedia",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/results?search_query={{search_term}}",
    setting: "youTube",
  },
];
