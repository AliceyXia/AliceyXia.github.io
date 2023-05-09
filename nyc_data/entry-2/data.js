var trace1 = {
    
    x: [
        '▸1995', 
        '▸1996', 
        '▸1997', 
        '▸1998', 
        '▸1999',
        '▸2000',
        '▸2001',
        '▸2002',
        '▸2003',
        '▸2004',
        '▸2005',
        '▸2006',
        '▸2007',
        '▸2008',
        '▸2009',
        '▸2010',
        '▸2011',
        '▸2012',
        '▸2013',
        '▸2014',
        '▸2015',
        '▸2016',
        '▸2017',
        '▸2018',
        '▸2019',
        '▸2020',
        '▸2021',
    ],
    y: [
        3, 
        1, 
        2, 
        1, 
        2,
        12,
        17,
        34,
        93,
        116,
        174,
        174,
        251,
        367,
        458,
        406,
        419,
        492,
        544,
        580,
        621,
        552,
        526,
        455,
        537,
        530,
        212,
    ],

    marker:{
      color: [
        // 'rgb(173, 237, 198)', 
        // 'rgb(186, 173, 253)', 
        // 'rgb(186, 173, 254)', 
        // 'rgb(225, 135, 161)', 
        // 'rgb(249, 233, 202)',
        // 'rgb(182, 130, 158)',
        // 'rgb(254, 219, 210)',
        // 'rgb(150, 150, 241)',
        // 'rgb(158, 196, 255)',
        // 'rgb(141, 193, 158)',
        // 'rgb(197, 245, 180)',
        // 'rgb(185, 139, 215)',
        // 'rgb(244, 218, 239)',
        // 'rgb(162, 200, 213)',
        // 'rgb(206, 214, 223)',
        // 'rgb(252, 135, 128)',
        // 'rgb(224, 223, 190)',
        // 'rgb(197, 161, 175)',
        // 'rgb(180, 220, 190)',
        // 'rgb(255, 216, 138)',
        // 'rgb(139, 158, 176)',
        // 'rgb(143, 188, 228)',
        // 'rgb(137, 202, 196)',
        // 'rgb(146, 139, 162)',
        // 'rgb(240, 254, 186)',
        // 'rgb(152, 208, 174)',
        // 'rgb(247, 170, 198)',
        'rgba(221, 140, 0, 0.65)', 
        'rgba(221, 140, 0, 0.65)', 
        'rgba(221, 140, 0, 0.65)', 
        'rgba(221, 140, 0, 0.65)', 
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        'rgba(221, 140, 0, 0.65)',
        ]
    },
    type: 'bar'
  };
  
var data = [ trace1 ];

var layout = { 
title: ' ',
   font: {
    size: 15,
    family: 'Helvetica, sans-serif', 
    color: 'white',
},

  plot_bgcolor:'rgba(0, 0, 0, 0)',
  paper_bgcolor:'rgba(0, 0, 0, 0)',
};

Plotly.newPlot('myDiv', data, layout, {displayModeBar: false,
  showTips: false});


var config = {responsive: true}


Plotly.newPlot('myDiv', data, layout, config );

  
Plotly.newPlot('myDiv', data, layout);

btnParty.addEventListener("click", () => {
    confetti("tsparticles", {
      angle: 90,
      count: 30,
      position: { x: 50, y: 90 },
      spread: 100,
      startVelocity: 120,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      colors: ["rgb(255, 255, 0)", "#ffffff","rgb(255, 200, 0)"],
      shapes: ["square", "circle"],
      scalar: 1,
      zIndex: 2000,
      disableForReducedMotion: true
    });
  });


var data = [{
    values: [4382, 3197],
    labels: ['BOY', 'GIRL'],
    type: 'pie',
    marker: {
      colors: [
        'rgba(150, 110, 5, 0.95)',
        'rgb(255, 230, 30)',
      ]
    }
  }];
  
  var layout = {
    height: 700,
    width: 700
  };
  

  var layout = { 
    title: ' ',
       font: {
        size: 15,
        family: 'Helvetica, sans-serif', 
        color: 'white',
    },
    
      plot_bgcolor:'rgba(0, 0, 0, 0)',
      paper_bgcolor:'rgba(0, 0, 0, 0)',
    };
    
    Plotly.newPlot('gender', data, layout, {displayModeBar: false,
      showTips: false});

  var config = {responsive: true}


Plotly.newPlot('gender', data, layout, config );

  
Plotly.newPlot('gender', data, layout);