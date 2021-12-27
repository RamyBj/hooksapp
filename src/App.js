import React, { useState } from "react";

import MoviesList from "./Components/MoviesList/MoviesList";
import MyNav from "./Components/MyNav/MyNav";

import "./App.css";
function App() {
  const [movies, setMovies] = useState([
    {
      id: 100,
      title: "The Tomorrow War",
      description: "Action",
      poster:
        "https://fr.web.img6.acsta.net/pictures/21/05/26/16/35/2108432.jpg",
      rating: 4,
    },
    {
      id: 200,
      title: "THE INVISIBLE MAN",
      description: "HORREUR",
      poster:
        "https://fr.web.img6.acsta.net/pictures/20/02/10/13/26/1423227.jpg",
      rating: 5,
    },
    {
      id: 300,
      title: "POURRIS GàTéS",
      description: "COMEDIE",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_iR0dBEb1bV5XQlmQ7bWltVDN06qzdnvuDjNSkb2yD_TJhOy",
      rating: 3,
    },
    {
      id: 400,
      title: "NO Time To Die",
      description: "ACTION",
      poster:
        "https://johnhockenberry.com/fr/wp-content/uploads/sites/6/2021/10/notimetodie-05.jpg",
      rating: 5,
    },
    {
      id: 500,
      title: "armythieves",
      description: "DRAMA",
      poster:
        "https://www.cinehorizons.net/sites/default/files/affiches/514025354-army-thieves.jpg",
      rating: 2,
    },

    {
      id: 600,
      title: "INCEPTION",
      description: "IMAGINATION",
      poster:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      rating: 5,
    },
    {
      id: 700,
      title: "RED NOTICE",
      description: "action",
      poster:
        "https://fr.web.img4.acsta.net/c_310_420/pictures/21/10/21/15/41/2023058.jpg",
      rating: 5,
    },
    {
      id: 800,
      title: "POLICE",
      description: "DRAMA",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamB1om4SDLvZkMY_DPaqIPDX6iyKVRLFq1g&usqp=CAU",
      rating: 5,
    },
    {
      id: 900,
      title: "PRINCE OBLIER",
      description: "IMAGINATION",
      poster:
        "https://www.pathefilms.com/sites/default/files/styles/fiche_visuel/public/film/affiche/leprinceoublie_aff_600.jpg?itok=jbauqwfI",
      rating: 5,
    },
    {
      id: 1000,
      title: "DE GAULLE",
      description: "DRAMA",
      poster: "https://static.actu.fr/uploads/2021/01/affiche-de-gaulle.jpg",
      rating: 5,
    },
    {
      id: 1000,
      title: "CASA DE PAPEL",
      description: "DRAMA",
      poster:
        "https://fr.web.img6.acsta.net/pictures/21/08/02/16/08/1706767.jpg",
      rating: 5,
    },
    {
      id: 1100,
      title: "I SEE YOU",
      description: "DRAMA",
      poster:
        "https://fr.web.img6.acsta.net/pictures/20/06/22/17/05/4303951.jpg",
      rating: 4,
    },
    {
      id: 1200,
      title: "BLUE BIRD",
      description: "ACTION",
      poster:
        "https://cinedweller.com/celebrity/jeremie-guez/bluebird-affiche-vod/",
      rating: 1,
    },
    {
      id: 1300,
      title: "ME BEFOR YOU",
      description: "ROMANCE",
      poster:
        "https://www.mariefrance.fr/wp-content/uploads/sites/5/2018/08/me-before-you.png",
      rating: 4,
    },
    {
      id: 1400,
      title: "BED BOYS",
      description: "ACTION",
      poster:
        "https://thumb.canalplus.pro/http/unsafe/256x340/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/103034246",
      rating: 3,
    },
    {
      id: 1500,
      title: "WE NEED TO TALK ABOUT KEVIN",
      description: "DRAMA",
      poster:
        "https://www.france.tv/image/vignette_3x4/346/461/a/z/v/c7b78373-phpafwvza_png.jpg",
      rating: 2,
    },
    {
      id: 1600,
      title: "SAM",
      description: "DRAMA",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJ361xz94oZUW7QIrDW1WxZrXvTNPHJQ_0Q&usqp=CAU",
      rating: 2,
    },
    {
      id: 1700,
      title: "ALADIN",
      description: "DRAMA",
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810",
      rating: 4,
    },
  ]);

  const [titleSearch, setTitleSearch] = useState("");
  const handleTitle = (input) => {
    setTitleSearch(input);
  };
  const [ratingSearch, setRatingSearch] = useState(0);
  const handleRating = (input) => {
    setRatingSearch(input);
  };
  return (
    <div className="App">
      <MyNav handleRating={handleRating} handleTitle={handleTitle} />
      <MoviesList
        movies={movies}
        titleSearch={titleSearch}
        ratingSearch={ratingSearch}
      />
    </div>
  );
}

export default App;
