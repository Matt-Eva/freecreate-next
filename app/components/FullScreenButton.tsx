"use client";

function FullScreenButton() {
  function makeFullscreen() {
    const body = window.document.body;

    if (!document.fullscreenElement) {
      body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  return <button onClick={makeFullscreen}>fullscreen</button>;
}

export default FullScreenButton;
