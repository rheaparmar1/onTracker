
  function Stopwatch(elem) {

    var time = 0;
    var interval;
    var past;
  
    function difference() {
        var now = Date.now();
        var passedTime = now - past;
        past = now;
        return passedTime;
    }

    function update() {
        if (this.isOn) {
            time += difference();
        }
        
        var updatedTime = formatter(time);
        elem.textContent = formatter(time);
    }

    function formatter(time) {

        time = new Date(time);
        
        var hours = time.getUTCHours().toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();

        if (hours.length < 2) {
            hours = '0' + hours
        }

        if (minutes.length < 2) {
            minutes = '0' + minutes
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds
        }

        return hours + ' : ' + minutes + ' : ' + seconds;

    }

    this.isOn = false;

    this.start = function() {
            interval = setInterval(update.bind(this), 10);
            past = Date.now();
            this.isOn= true
    };

    this.stop = function() {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
    };
        

    this.reset = function() {
            time = 0;
            update();
    };

}

