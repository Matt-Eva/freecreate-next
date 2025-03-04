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
  return (
    <button
      onClick={makeFullscreen}
      className="underline text-sm sm:text-base mt-0.5 ml-1 sm:ml-6 sm:mt-1.5 text-muted-foreground hover:cursor-pointer hover:text-black transition ease-in-out duration-500"
    >
      fullscreen
    </button>
  );
}

export default FullScreenButton;
