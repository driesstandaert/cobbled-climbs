const data = [
  {
    id: 1,
    idName: "paterberg",
    name: "Paterberg",
    country: "Belgium",
    length: 360,
    maxElevation: 20.3,
    avgElevation: 12.9,
    descNl: "Smalle steile kasseihelling in Kluisbergen, bekend uit de Ronde van Vlaanderen.",
    descEn: "Small steep cobbled hill in Kluisbergen, known from the Tour of Flanders.",
    coordinates:
    [
        {x: 0, y: 32, elev: 16.0},
        {x: 1, y: 40, elev: 6.0},
        {x: 2, y: 43, elev: 14.0},
        {x: 3, y: 50, elev: 20.0},
        {x: 4, y: 60, elev: 20.0},
        {x: 5, y: 70, elev: 8.0},
        {x: 6, y: 74, elev: 12.0},
        {x: 7, y: 80}
    ]
  },
  {
      id: 2,
      idName: "oude-kwaremont",
      name: "Oude Kwaremont",
      country: "Belgium",
      length: 2200,
      maxElevation: 12.3,
      avgElevation: 4.2,
      descNl: "Een lange klim over slechte kasseien, bekend in de Ronde van Vlaanderen.",
      descEn: "A long climb over poor cobblestones, known from the Tour of Flanders.",
      coordinates:
      [
          {x: 0, y: 27, elev: 3.0},
          {x: 1, y: 39, elev: 4.0},
          {x: 2, y: 61, elev: 7.3},
          {x: 3, y: 81, elev: 6.7},
          {x: 4, y: 90, elev: 3.0},
          {x: 5, y: 95, elev: 1.7},
          {x: 6, y: 107, elev: 4.0},
          {x: 7, y: 111}
      ]
  },
  {
      id: 3,
      idName: "koppenberg",
      name: "Koppenberg",
      country: "Belgium",
      length: 60,
      maxElevation: 22,
      avgElevation: 10.7,
      descNl: "Een van de meest gevreesde kasseiheuvels in de Vlaamse Ardennen. Steil en meedogenloos.",
      descEn: "One of the most feared cobbled hills in the Flemish Ardennes. Steep and unforgiving.",
      coordinates:
      [
          {x: 0, y: 13, elev: 4.0},
          {x: 1, y: 17, elev: 9.0},
          {x: 2, y: 26, elev: 14.0},
          {x: 3, y: 40, elev: 18.0},
          {x: 4, y: 58, elev: 13},
          {x: 5, y: 71, elev: 7.0},
          {x: 6, y: 78}
      ]
  },
  {
      id: 4,
      idName: "muur-van-geraardsbergen",
      name: "Muur van Geraardsbergen",
      country: "Belgium",
      length: 1000,
      maxElevation: 19.8,
      avgElevation: 9.2,
      descNl: "Smalle steile kasseihelling in Kluisbergen, bekend uit de Ronde van Vlaanderen.",
      descEn: "Small steep cobbled hill in Kluisbergen, known from the Tour of Flanders.",
      coordinates:
      [
          {x: 0, y: 18, elev: 4.0},
          {x: 1, y: 22, elev: 11.0},
          {x: 2, y: 33, elev: 10.0},
          {x: 3, y: 43, elev: 9.0},
          {x: 4, y: 52, elev: 7.0},
          {x: 5, y: 59, elev: 8.0},
          {x: 6, y: 67, elev: 9.0},
          {x: 7, y: 76, elev: 8.0},
          {x: 8, y: 84, elev: 15.0},
          {x: 9, y: 99, elev: 11.0},
          {x: 10, y: 110}
      ]
  },
  {
    id: 5,
    idName: "taaienberg",
    name: "Taaienberg",
    country: "Belgium",
    length: 800,
    maxElevation: 16.0,
    avgElevation: 6.1,
    descNl: "Klassieke steile kasseihelling in Etikhove, een favoriete van velen coureurs.",
    descEn: "Classic steep cobbled hill in Etikhove, a favourite for many riders.",
    coordinates:
    [
        {x: 0, y: 37, elev: 5.0},
        {x: 1, y: 42, elev: 3.0},
        {x: 2, y: 45, elev: 11.0},
        {x: 3, y: 56, elev: 15.0},
        {x: 4, y: 71, elev: 4.0},
        {x: 5, y: 75, elev: 4.0},
        {x: 6, y: 79, elev: 1.0},
        {x: 7, y: 80, elev: 2.0},
        {x: 8, y: 82}
    ]
  },
  {
  id: 6,
  idName: "nokereberg",
  name: "Nokereberg",
  country: "Belgium",
  length: 350,
  maxElevation: 8.0,
  avgElevation: 5.7,
  descNl: "De aankomst van Nokere Koerse pal in het dorp van Nokere. Kort maar krachtig.",
  descEn: "The finish of Nokere Koerse right in the village of Nokere. Short but sweet.",
  coordinates:
  [
      {x: 0, y: 40, elev: 4.0},
      {x: 1, y: 42, elev: 8.0},
      {x: 2, y: 46, elev: 6.0},
      {x: 3, y: 49, elev: 6.0},
      {x: 4, y: 52, elev: 6.0},
      {x: 5, y: 55, elev: 6.0},
      {x: 6, y: 58, elev: 4.0},
      {x: 7, y: 60}
    
  ]
  }
  ,
  {
  id: 7,
  idName: "kemmelberg",
  name: "Kemmelberg",
  country: "Belgium",
  length: 502,
  maxElevation: 22.0,
  avgElevation: 11.6,
  descNl: "De kasseien kers op de taart van een langere beklimming vanuit het dorp Kemmel, bekend uit Gent-Wevelgem.",
  descEn: "The cobbled cherry on top of a larger ascent from the village Kemmel, known from Gent-Wevelgem.",
  coordinates:
  [
      {x: 0, y: 78, elev: 5.0},
      {x: 1, y: 83, elev: 6.0},
      {x: 2, y: 89, elev: 7.0},
      {x: 3, y: 96, elev: 6.0},
      {x: 4, y: 102, elev: 13.0},
      {x: 5, y: 115, elev: 11.0},
      {x: 6, y: 126, elev: 9.0},
      {x: 7, y: 135, elev: 13.0},
      {x: 8, y: 148, elev: 4.0},
      {x: 9, y: 152, elev: 1.0},
      {x: 10, y: 153}
  ]
  }
];
