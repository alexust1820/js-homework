class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
      let hours = date.getHours();
      let mins = date.getMinutes();
      let seconds = date.getSeconds();
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', seconds);
  
      console.log(output);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();









// currentTime();

// function currentTime() {
//   var date = new Date(); 
//   var hour = date.getHours();
//   var min = date.getMinutes();
//   var sec = date.getSeconds();

//   console.log( date);

//   delete hour, min, sec;

//   return currentTime();
  
//   currentTime();
// }