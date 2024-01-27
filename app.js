fetch('data.js')
  .then(response => response.json())
  .then(data => {
    const links = data.links;
    links.forEach(link => {
      console.log(`Name: ${link.name_url}, URL: ${link.url}`);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
