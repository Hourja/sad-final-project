import React, { useState, useEffect } from "react";
import fetchPhotos from "../requests/fetchPhotos";

const Gallery = ({city}) => {

  const [gallery, setGallery] = useState([]);
  const [loaded, setLoaded] = useState(false);  

  async function loadPhotos() {
    setLoaded (false);
    const loadGallery = await fetchPhotos(city);
    setGallery(loadGallery);
    setLoaded(true);
  }

  useEffect(loadPhotos,[city]);

  return (
    <>
    {
      loaded
      ?
      (
        <div className="cities-grid">
        {gallery.map((photo, index) => (
            <img key={index} src={photo.urls.small} className="image-grid"/>
            // <div>{photo.name}</div>
        ))}
        </div>
      )
      : (
      <div className="loading-pictures">Loading...</div>
      )

    }
    </>
    
  );
};

export default Gallery;