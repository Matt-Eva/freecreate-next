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
      className="hidden underline text-sm sm:text-base sm:block mt-0.5 ml-1 sm:ml-6 sm:mt-1.5  hover:cursor-pointer hover:text-black transition ease-in-out duration-500"
    >
      fullscreen
    </button>
  );
}

export default FullScreenButton;
