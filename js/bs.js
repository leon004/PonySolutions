fetch('consultas.php')
  .then(response => response.json())
  .then(data => {
    // Utilizar los datos de la base de datos
    console.log(data);
  });
