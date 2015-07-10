var container = document.getElementsByClassName('container');
var containerArray = container[0].childNodes

for (var i = 0; i < containerArray.length; i++) {
  containerArray[i].addEventListener('click', function(){
    // var a = document.createElement('a');
    // this.appendChild(a);
    // a.innerHTML = 'X'
    this.firstChild.src = '../images/giant-x.jpg';
  })
}
