import { PlatformsWiteSetting } from "./interfaces";

export const includedPlatforms: PlatformsWiteSetting[] = [
  {
    label: "Docker Hub",
    url: "https://hub.docker.com/search?q=",
    setting: "dockerHub",
  },
  {
    label: "GitHub",
    url: "https://github.com/search?q=",
    setting: "gitHub",
  },
  {
    label: "Google",
    url: "https://www.google.com/search?q=",
    setting: "google",
  },
  {
    label: "MDN",
    url: "https://developer.mozilla.org/en-US/search?q=",
    setting: "MDN",
  },
  {
    label: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/search/?terms=",
    setting: "microsoftLearn",
  },
  {
    label: "NPM",
    url: "https://www.npmjs.com/search?q=",
    setting: "NPM",
  },
  {
    label: "NuGet",
    url: "https://www.nuget.org/packages?q=",
    setting: "nuGet",
  },
  {
    label: "Reddit",
    url: "https://www.reddit.com/search?q=",
    setting: "reddit",
  },
  {
    label: "Stack Overflow",
    url: "https://stackoverflow.com/search?q=",
    setting: "stackOverflow",
  },
  {
    label: "Wikipedia",
    url: "https://wikipedia.org/w/index.php?search=",
    setting: "wikipedia",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/results?search_query=",
    setting: "youTube",
  },
];
