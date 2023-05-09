// confetti({
//     spread: 360,
//     ticks: 200,
//     gravity: 1,
//     decay: 0.94,
//     startVelocity: 30,
//     particleCount: 100,
//     scalar: 3,
//     shapes: ["image"],
//     shapeOptions: {
//       image: [
//         {
//           src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Golden.svg",
//           width: 12,
//           height: 12,
//         },
//         {
//           src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Golden.svg",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Golden.svg",
//           width: 22,
//           height: 22,
//         },
//         {
//           src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Golden.svg",
//           width: 2,
//           height: 2,
//         },
//         {
//           src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Golden.svg",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Golden.svg",
//           width: 12,
//           height: 12,
//         },
//         {
//           src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Golden.svg",
//           width: 12,
//           height: 12,
//         },
//         {
//           src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Golden.svg",
//           width: 32,
//           height: 32,
//         },
//         {
//           src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Golden.svg",
//           width: 22,
//           height: 22,
//         },
//       ],
//     },
//   });

const end = Date.now() + 5.5 * 1000;

const colors = ["rgb(255, 196, 0)", "#ffffff"];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();