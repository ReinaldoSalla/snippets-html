//1
// let seconds = 0;
// setInterval(() => {
//   seconds += 1;
//   console.log(`miliseconds = ${seconds}`);
// }, 1);

//2
// const start = Date.now();
// setInterval(() => {
//   const elapsed = Date.now() - start;
//   const seconds = Math.floor(elapsed / 1000);
//   console.log(`seconds = ${seconds}`);
// }, 1000);

//3
// function countTime() {
//   const start = Date.now();
//   const intervalId = setInterval(() => {
//     const elapsed = Date.now() - start;
//     const seconds = Math.floor(elapsed / 1000);
//     console.log(`seconds = ${seconds}`);
//   }, 1000);
//   return intervalId;
// }

// let intervalId = countTime();

// document.addEventListener('visibilitychange', () => {
//   if (document.visibilityState === 'visible') {
//     intervalId = countTime();
//   } else {
//     clearInterval(intervalId);
//   }
// });

// 4
// const start = Date.now();
// let numCalls = 0;

// function frame() {
//   numCalls += 1;
//   console.log(`numCalls = ${numCalls}`);
//   const elapsedMiliseconds = Date.now() - start;
//   const elapsedSeconds = elapsedMiliseconds / 1000;
//   const seconds = Math.floor(elapsedSeconds);
//   console.log(`seconds = ${seconds}`);
//   window.requestAnimationFrame(frame);
// }

// window.requestAnimationFrame(frame);

// 5
// const start = document.timeline.currentTime;

// function frame() {
//   const elapsed = document.timeline.currentTime - start;
//   const seconds = Math.floor(elapsed / 1000);
//   console.log(`seconds = ${seconds}`);
//   document.body.animate(null, {
//     duration: 1000 - (elapsed % 1000),
//   }).onfinish = frame;
// }

// frame();

// 6

// ms = 3000
// elapsed =  

function animationInterval(ms, signal, callback) {
  // const start = document.timeline.currentTime;
  const start = performance.now();

  function frame(time) {
    if (signal.aborted) return;
    callback(time);
    scheduleFrame(time);
  }

  function scheduleFrame(time) {
    const elapsed = time - start;
    const roundedElapsed = Math.round(elapsed / ms) * ms;
    const targetNext = start + roundedElapsed + ms;
    const delay = targetNext - performance.now();
    setTimeout(() => requestAnimationFrame(frame), delay);
  }

  scheduleFrame(start);
}

const controller = new AbortController();

let seconds = 0;

// Create an animation callback every second:
animationInterval(1000, controller.signal, time => {
  seconds++;
  console.log(`seconds = ${seconds}`);
  if (seconds === 5) {
    controller.abort()
  }
});
