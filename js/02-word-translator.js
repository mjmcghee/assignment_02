function langSelect(langCode) {
    if (langCode == "es") {
        console.log("<p>Hello World tranlated in Spanish is: Hola Mundo</p>");
    } else if (langCode == "de") {
        console.log("<p>Hello World tranlated in German is: Hallo Welt</p>");
    } else if (langCode == "en") {
        console.log("<p>Hello World tranlated in British English is: Top of the morning! </p>");
    } else if (langCode == "fr") {
        console.log("<p>Hello World tranlated in French is: Bonjour le monde</p>");
    } else {
        console.log("<p>Hello World tranlated in American English is: Sup, Dude?</p>");
    }
}

let langInput = prompt("Choose a language (enter 'es', 'de', 'fr', or 'en')");

langSelect(langInput);