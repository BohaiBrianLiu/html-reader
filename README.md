# spfx-html-reader

## Summary

This web part allows users typing in HTML codes and show as a web page.

**Input field**
![screen shot of input field](screen-shot-1.png)

**Result**
![screen shot of result](screen-shot-2.png)

## Safety

- Codes will be [purified](https://github.com/cure53/DOMPurify) to aviod potential XSS attacks.
- ./config/serve.json file is excluded.
