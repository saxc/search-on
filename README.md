# Search On ...
**Search On ...** is an editor extension that allows developers to easily search selected text across multiple platforms. With this extension, you can quickly access information from websites like Google, GitHub, MDN, and many others.

![](images/demo.gif)

![](images/SearchOn.png)

![](images/SelectPlatform.png)

## Included platforms
- Docker Hub
- GitHub
- Google
- MDN (Mozilla Developer Network)
- Microsoft Learn
- NPM (Node Package Manager)
- NuGet
- Reddit
- Stack Overflow
- Wikipedia
- YouTube

## Settings

### Platforms
- All included platforms can be enabled/disabled in the settings.

### Custom Platforms
- You can add your own platforms in the settings.
- On [GitHub](https://github.com/saxc/search-on/blob/main/Platforms.md) you can find a list of platforms that can be added.

Example settings
```json
"searchOn.customPlatforms": [
    { "label": "Google Translator", "url": "https://translate.google.com/?text="},
    { "label": "Startpage", "url": "https://www.startpage.com/do/dsearch?q="},
    { "label": "Amazon", "url": "https://www.amazon.com/s?k="}
]
```

## Versioning
YY.MM.VERSION

- YY: Release year
- MM: Release month
- VERSION: Version in year/month