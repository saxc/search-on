# Platforms
- Not all platforms are directly integrated into the extension.
  - Integrated platforms are not listed here
- Additional platforms can be added via the custom platform settings.
- Platforms that are not in English are marked with a tag at the end.
- Optional `{{search_term}}` for the URL, if no `{{search_term}}` specified, it will be appended to the end of the URL.

Example settings
```json
"searchOn.customPlatforms": [
    { "label": "Google Translator", "url": "https://translate.google.com/?text={{search_term}}"},
    { "label": "Startpage", "url": "https://www.startpage.com/do/dsearch?q={{search_term}}"},
    { "label": "Amazon", "url": "https://www.amazon.com/s?k={{search_term}}"}
]
```

## Amazon
```json
{ "label": "Amazon", "url": "https://www.amazon.com/s?k={{search_term}}"}
```

## eBay
```json
{ "label": "eBay", "url": "https://www.ebay.com/sch/i.html?_nkw={{search_term}}"}
```

## Marlin
```json
{ "label": "Marlin", "url": "https://marlinfw.org/meta/search/?q={{search_term}}"}
```

## SELFHTML (de)
```json
{ "label": "SELFHTML", "url": "https://wiki.selfhtml.org/index.php?search={{search_term}}"}
```

## Thingiverse
```json
{ "label": "Thingiverse", "url": "https://www.thingiverse.com/search?q={{search_term}}"}
```