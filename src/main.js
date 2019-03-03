var quoteMaster = [
  { quote: "Según la ONU, el 50% de las mujeres en Centroamérica ha sufrido violencia de género en su vida" },
    
  { quote: "El 80% de las personas que sufren de explotación sexual en el país son niñas y mujeres jóvenes", },
    
  { quote: "De acuerdo con datos de ONU Mujeres, las mujeres no suelen formar parte de los equipos de negociación para poner fin a las guerras: de los 585 acuerdos de paz firmados entre 1990 y 2010, solo en 16 documentos se mencionaron los derechos de la mujer." }, 
    
  { quote: "Según datos de 2012, el 781 millones de adultos y 126 millones de jóvenes en todo el mundo carecen de habilidades básicas de lectura y escritura. Las mujeres representan más del 60% en ambos grupos." }, 
    
  { quote: "Las mujeres indígenas representan al 5% de la población nacional y el 9.8% de la población femenina en México." },
  
  { quote: "Un 38% de las mujeres que mueren en el mundo es como consecuencia, o a causa, de la violencia de género.", },
  
  { quote: "El matrimonio forzado afecta a un tercio de las mujeres casadas antes de los 18 años. El 11% de las mujeres se casa antes de cumplir los 15.", },
  
  ];
  num = quoteMaster.length;
  
  var quoteRendered = document.getElementById('h3');
  
  var handler = function(event) {
    for (var i = 0; i < num; i++) {
   var x = Math.floor(Math.random() * num);
   var quoteText = quoteMaster[x].quote;
   var quoteTextBy = quoteMaster[x].name;
  }
    quoteRendered.innerHTML = quoteText; 
    quoteRenderedBy.innerHTML = quoteTextBy;
  };
  
  var button = document.getElementById('but');
  
  button.addEventListener('click', handler);
  
  