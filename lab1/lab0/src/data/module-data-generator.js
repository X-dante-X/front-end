import { readFile, writeFile } from 'fs';

// Odczyt liczby obiektów z argumentu
const count = Number(process.argv[2]);
if (isNaN(count) || count <= 0) {
    console.error("Proszę podać prawidłową liczbę obiektów.");
    process.exit(1);
}

// Funkcja generująca losową datę urodzenia
const generateRandomBirthDate = () => {
    const start = new Date(1950, 0, 1);
    const end = new Date(2004, 0, 1); // Urodziny do 2004
    const date = new Date(start.getTime() + Math.random() * (end - start));
    return date.toISOString().split('T')[0]; // Zwróć datę w formacie YYYY-MM-DD
};

// Funkcja generująca losowy rating
const generateRandomRating = () => Math.floor(Math.random() * 11); // Wartości od 0 do 10

// Wczytanie imion z pliku
readFile('./src/data/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const names = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);
    const eyeColors = ["blue", "brown", "green", "hazel"];
    const generatedData = [];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const id = i + 1;
        generatedData.push({
            id,
            name: names[randomIndex],
            birth: generateRandomBirthDate(),
            eyes: eyeColors[Math.floor(Math.random() * eyeColors.length)],
            rating: generateRandomRating() 
        });
    }

    const content = `export const data = ${JSON.stringify(generatedData, null, 2)};`;
    
    writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("module-data.js wygenerowany");
        }
    });
});