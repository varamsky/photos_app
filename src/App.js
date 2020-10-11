import React from 'react';
import './App.css';
import ImageGallery from './imageGallery.js';

function App() {

  const [title] = React.useState("Photo App");
  const [isVisible, setIsVisible] = React.useState(false);

  // when app mounts
  React.useEffect(() => {
    console.log("App Mounted");
  },[]);

  // when app unmounts
  React.useEffect(() => {
    return() => {
      console.log("App Unmounted");
    }
  },[]);
  
  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <React.StrictMode>
      <section style={{ textAlign: "center" }}>
        <div style={{ fontSize: "30px" }}>
          {title}
        </div>
        <div>
          <button
            className="toggleButton"
            onClick={handleClick}
          >
            Toggle Image
              </button>
        </div>
        {(isVisible) ? <ImageGallery/> : null}
      </section>
    </React.StrictMode>
  );
}

export default App;
