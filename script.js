// Error Calculator bleibt wie bisher
let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

// Konsole Buttons
document.getElementById('logButton').addEventListener('click', () => {
  console.log('This is a console.log message!');
});

document.getElementById('errorButton').addEventListener('click', () => {
  console.error('This is a console.error message!');
});

let count = 0;
document.getElementById('countButton').addEventListener('click', () => {
  count++;
  console.count(`Button clicked ${count} times`);
});

document.getElementById('warnButton').addEventListener('click', () => {
  console.warn('This is a console.warn message!');
});

document.getElementById('assertButton').addEventListener('click', () => {
  console.assert(false, 'This is a failed assertion!');
});

document.getElementById('clearButton').addEventListener('click', () => {
  console.clear();
});

document.getElementById('dirButton').addEventListener('click', () => {
  console.dir(document.body);
});

document.getElementById('dirxmlButton').addEventListener('click', () => {
  console.dirxml(document);
});

document.getElementById('groupStartButton').addEventListener('click', () => {
  console.group('Group Start');
  console.log('Inside the group');
});

document.getElementById('groupEndButton').addEventListener('click', () => {
  console.groupEnd();
});

document.getElementById('tableButton').addEventListener('click', () => {
  const data = [
    { name: 'Lisa', age: 23 },
    { name: 'Ben', age: 30 }
  ];
  console.table(data);
});

document.getElementById('startTimerButton').addEventListener('click', () => {
  console.time('Timer');
});

document.getElementById('endTimerButton').addEventListener('click', () => {
  console.timeEnd('Timer');
});

document.getElementById('traceButton').addEventListener('click', () => {
  console.trace('Trace Button Pressed');
});

// Global Error Handling
window.onerror = function (msg, url, line, col, error) {
  console.error(`Global Error Caught: ${msg} at ${url}:${line}:${col}`);
  return true;
};

document.getElementById('globalErrorButton').addEventListener('click', () => {
  nonExistentFunction(); // Trigger a reference error
});
