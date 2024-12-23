var timer = document.getElementById('timer');
var startBtn = document.getElementById('start');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

function start() {
    startBtn.textContent = 'Stop';
    watch.start();
  }
  
  function stop() {
    startBtn.textContent = 'Start';
    watch.stop();
  }
  
  startBtn.addEventListener('click', function() {
    watch.isOn ? stop() : start();
  });
  
  resetBtn.addEventListener('click', function() {
    watch.reset();
  });
