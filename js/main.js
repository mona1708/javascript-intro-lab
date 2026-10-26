(function() {
  const myHeading = document.getElementById('myHeading');
  myHeading.innerHTML = "Mona's Demo Site";
  document.querySelector("li").setAttribute("class", "currentPage");
  document.getElementById("myTestBtn").addEventListener('click', function(ev) {
    console.dir(ev);
  });
})();

let redBtn = document.querySelector(' .red');
redBtn.addEventListener('click', function(){
  document.body.setAttribute('class', 'redBack')
})

let greenBtn = document.querySelector(' .green');
greenBtn.addEventListener('click', function(){
  document.body.setAttribute('class', 'greenBack')
})

let blueBtn = document.querySelector(' .blue');
blueBtn.addEventListener('click', function(){
  document.body.setAttribute('class', 'blueBack')
})


