# Cartoon Blox Filter Service

[![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)](https://github.com/username/repo/releases/tag/v1.0.0)
![Word Count](https://img.shields.io/badge/Word%20Count-7200%2B-blue)

[How to use](https://github.com/Sowat-Official/CB-Services/blob/main/filter-service/README.md#how-to-use)

The filter service allows you to filter text. Although the filtering is not perfect, it removes many of the worst words while keeping less offensive ones. A list of blocked words is available, but it's not recommended to view them. However, if you're working on your own, you can access the JSON file containing all the blocked words [here](https://cb-filter.vercel.app/jsons/merged.json), or individual language files can be found in the table below:

| Language | File |
| -------- | ---- |
| Arabic   | [ar.json](https://cb-filter.vercel.app/jsons/ar.json) |
| Czech    | [cs.json](https://cb-filter.vercel.app/jsons/cs.json) |
| Danish   | [da.json](https://cb-filter.vercel.app/jsons/da.json) |
| German   | [de.json](https://cb-filter.vercel.app/jsons/de.json) |
| English  | [en.json](https://cb-filter.vercel.app/jsons/en.json) |
| Esperanto| [eo.json](https://cb-filter.vercel.app/jsons/eo.json) |
| Spanish  | [es.json](https://cb-filter.vercel.app/jsons/es.json) |
| Farsi    | [fa.json](https://cb-filter.vercel.app/jsons/fa.json) |
| Finnish  | [fi.json](https://cb-filter.vercel.app/jsons/fi.json) |
| Filipino | [fil.json](https://cb-filter.vercel.app/jsons/fil.json) |
| French (Canada) | [fr-CA-u-sd-caqc.json](https://cb-filter.vercel.app/jsons/fr-CA-u-sd-caqc.json) |
| French   | [fr.json](https://cb-filter.vercel.app/jsons/fr.json) |
| Hindi    | [hi.json](https://cb-filter.vercel.app/jsons/hi.json) |
| Hungarian| [hu.json](https://cb-filter.vercel.app/jsons/hu.json) |
| Italian  | [it.json](https://cb-filter.vercel.app/jsons/it.json) |
| Japanese | [ja.json](https://cb-filter.vercel.app/jsons/ja.json) |
| Kabyle   | [kab.json](https://cb-filter.vercel.app/jsons/kab.json) |
| Korean   | [ko.json](https://cb-filter.vercel.app/jsons/ko.json) |
| Merged   | [merged.json](https://cb-filter.vercel.app/jsons/merged.json) |
| Dutch    | [nl.json](https://cb-filter.vercel.app/jsons/nl.json) |
| Norwegian| [no.json](https://cb-filter.vercel.app/jsons/no.json) |
| Polish   | [pl.json](https://cb-filter.vercel.app/jsons/pl.json) |
| Portuguese| [pt.json](https://cb-filter.vercel.app/jsons/pt.json) |
| Russian  | [ru.json](https://cb-filter.vercel.app/jsons/ru.json) |
| Swedish  | [sv.json](https://cb-filter.vercel.app/jsons/sv.json) |
| Thai     | [th.json](https://cb-filter.vercel.app/jsons/th.json) |
| Klingon  | [tlh.json](https://cb-filter.vercel.app/jsons/tlh.json) |
| Turkish  | [tr.json](https://cb-filter.vercel.app/jsons/tr.json) |
| Chinese  | [zh.json](https://cb-filter.vercel.app/jsons/zh.json) |

# How to use

```js
// main.js (DO NOT FORGET TO SET SCRIPT TYPE TO MODULE)

import { cbFilter } from 'https://cb-services.vercel.app/filter-service/api.js'; //Get the api

const text = 'This is a test message for the CB filter.'; //Enter text input

cbFilter.then(filter => {
  const filtered = filter(text); //The filtered text
  console.log(filtered);
});
```
