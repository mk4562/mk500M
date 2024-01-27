const jsonUrl = 'https://mk4562.github.io/mk500M/data.json';

async function redirectToRandomLink() {
    try {
        const response = await fetch(jsonUrl);
        const jsonData = await response.json();
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        const randomUrl = jsonData[randomIndex].url;
        window.location.href = randomUrl;
    } catch (error) {
        console.error('Error al obtener o procesar el JSON:', error);
    }
}

redirectToRandomLink();
