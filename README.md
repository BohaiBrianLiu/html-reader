# SPFX HTML Reader

This web part allows users to inject HTML DOM to SharePoint pages.

![screen shot of input field](screen-shot-1.png)
![screen shot of result](screen-shot-2.png)

## Safety

- Codes will be [sanitized](https://github.com/cure53/DOMPurify) to prevent potential [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.
- ./config/serve.json file is added to .gitignore to aviod exposure of server entry point.
