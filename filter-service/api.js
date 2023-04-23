let fetchUrl = 'https://cb-filter.vercel.app/jsons/merged.json';
let output = null;

const cbFilterPromise = fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
        output = data;
        console.log('Loaded CB filter');
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });

export const cbFilter = cbFilterPromise.then(() => {
    return function filter(text) {
        if (!output) {
            console.warn('CB filter is not ready yet');
            return text;
        }

        const words = text.split(" ");
        let returning = '';

        for (let i = 0; i < words.length; i++) {
            if (output.includes(words[i].toLowerCase()) {
                let hashString = "#".repeat(words[i].length);
                returning = returning + ' ' + hashString
            } else {
                returning = returning + ' ' + words[i]
            }
        }

        return returning.trim();
    }
});
