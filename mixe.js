//VARIABLE//
var box = document.getElementById('box');
let btt = document.getElementById('btt');
var w;
//alert("coucou");
//FONCTION//

//la fonction qui melange le mot
function mixed(mot){
  var i = 0;
  var mixed = "";
  while (mot.length != 0) {
      i = Math.floor(Math.random()* mot.length);
      mixed += mot[i];
      mot = mot.slice(0, i) + mot.slice(i+1, mot.length);
  }
  return mixed;
}
function newGame(){
  var ins="";
  i = Math.floor(Math.random()*data.length);
  w = data[i];
  var worlds = mixed(w);
  for (var i = 0; i < worlds.length; i++) {
    ins += `<td>${worlds[i]}</td>`;
  }
  box.innerHTML = ins;
  document.getElementById('inp').value = "";
}

//verifie si c'est juste
btt.addEventListener('click',function(){
  let answer = document.getElementById('inp').value;
  if (answer.toLowerCase() == w.toLowerCase()){
    alert("bonne reponse");
    newGame();

  }

  else
    alert("mauvaise reponse");
},false);
