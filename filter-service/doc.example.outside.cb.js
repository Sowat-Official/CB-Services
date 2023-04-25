// (DO NOT FORGET TO SET SCRIPT TYPE TO MODULE)

import { cbFilter } from 'https://cb-services.vercel.app/filter-service/api.js'; //Get the api

const text = 'This is a test message for the CB filter.'; //Enter text input

cbFilter.then(filter => {
  const filtered = filter(text); //The filtered text
  console.log(filtered); //Puts the filtered text in output
});
