/*jshint esversion: 6 */

import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js';

var lastRender = 0;



function main(currentTime){
  window.requestAnimationFrame(main);
  var secondsSinceLastRender = (currentTime - lastRender) / 1000;

  if(secondsSinceLastRender < 1/SNAKE_SPEED)
  {
  return;
}else{
  lastRender = currentTime;

  update();
  draw();
     }
}

window.requestAnimationFrame(main); /*The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.The callback method is passed a single argument, a DOMHighResTimeStamp, which indicates the current time (based on the number of milliseconds since time origin). callback The function to call when it's time to update your animation for the next repaint. The callback function is passed one single argument, a DOMHighResTimeStamp similar to the one returned by performance.now(), indicating the point in time when requestAnimationFrame() starts to execute callback functions.*/

function update(){
  updateSnake();
}

function draw(){
  drawSnake();
}
