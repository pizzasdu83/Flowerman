var musplay = 0;

function LetsGetFunky() {
  if (musplay === 0) {
    musplay += 1
    document.getElementById('jaroner').src='flo/boom.gif'
    document.getElementById("boom").play();
    document.getElementById("boom").onended = function(){
      document.getElementById('jaroner').height="120";
      document.getElementById('jaroner').src='flo/0.webp';
      var bgm = Math.floor(Math.random() * 100)
      if (bgm == 0) {
        document.getElementById("bgw").play();
      } else {
        document.getElementById("bgm").play();
      }
    }
  } else if (flo === 0){
    var funk = [f0, faeo, fded, ffallin, fhi, fjaorange, fjarona, fjuice, fmsb, fnonono, fpower, frun, fskate, fspiral, fuh, fwind];
    let funky = Math.floor(Math.random() * funk.length);
    funk[funky]();
  } else {
    fkkk();
  }
}

let flo = 0;
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyK") {
    if (flo === 0) {
      flo = 1;
      document.getElementById("bgm").pause();
      document.getElementById("bgk").play();
      document.getElementById('jaroner').height="28";
      document.getElementById('jaroner').src='flo/nyon/hi.gif';
      setTimeout(() => {
        LetsGetFunky();
      }, 400);
    } else {
      fhi();
      document.getElementById("bgk").pause();
      document.getElementById("bgm").play();
      flo = 0;
    }
  }
});

async function f0() {
  var o = new Audio("sfx/0/" + Math.floor(Math.random() * 19) + ".wav");
  document.getElementById('jaroner').height="120";
  document.getElementById('jaroner').src='flo/0.webp'
  o.play();
  o.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function faeo() {
  var aeo = new Audio("sfx/aeo/" + Math.floor(Math.random() * 6) + ".wav");
  document.getElementById('jaroner').height="60";
  document.getElementById('jaroner').src='flo/aeo.png'
  aeo.play();
  aeo.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fded() {
  var ded = new Audio("sfx/ded/" + Math.floor(Math.random() * 2) + ".wav");
  document.getElementById('jaroner').height="120";
  document.getElementById('jaroner').src='flo/ded.png'
  ded.play();
  ded.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function ffallin() {
  var fallin = new Audio("sfx/fallin/" + Math.floor(Math.random() * 1) + ".wav");
  document.getElementById('jaroner').height="652";
  document.getElementById('jaroner').src='flo/fallin.gif'
  fallin.play();
  fallin.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fhi() {
  var hi = new Audio("sfx/hi/" + Math.floor(Math.random() * 13) + ".wav");
  document.getElementById('jaroner').height="138";
  document.getElementById('jaroner').src='flo/hi.webp'
  hi.play();
  hi.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fjaorange() {
  var jaorange = new Audio("sfx/ja-orange/" + Math.floor(Math.random() * 3) + ".wav");
  document.getElementById('jaroner').height="138";
  document.getElementById('jaroner').src='flo/ja-orange.gif'
  jaorange.play();
  jaorange.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fjarona() {
  var jarona = new Audio("sfx/jarona/" + Math.floor(Math.random() * 6) + ".wav");
  document.getElementById('jaroner').height="120";
  document.getElementById('jaroner').src='flo/jarona.webp'
  jarona.play();
  var bgm = Math.floor(Math.random() * 100)
  if (bgm <= 9) {
    document.getElementById("bgw").play();
    document.getElementById("bgm").pause();
  } else {
    document.getElementById("bgm").play();
    document.getElementById("bgw").pause();
  }
  jarona.onended = function(){
    document.getElementById('jaroner').height="148";
    document.getElementById('jaroner').src='flo/powerpoint.webp';
    setTimeout(() => {
      document.getElementById('jaroner').height="120";
      document.getElementById('jaroner').src='flo/wind.webp';
    }, 1200);
  }
}

async function fjuice() {
  var juice = new Audio("sfx/juice/" + Math.floor(Math.random() * 7) + ".wav");
  document.getElementById('jaroner').height="122";
  document.getElementById('jaroner').src='flo/juice.webp'
  juice.play();
  juice.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fmsb() {
  var msb = new Audio("sfx/mario_side+b/" + Math.floor(Math.random() * 5) + ".wav");
  document.getElementById('jaroner').height="148";
  document.getElementById('jaroner').src='flo/mario_side+b.webp'
  msb.play();
  msb.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/wind.webp';
  }
}

async function fnonono() {
  var nonono = new Audio("sfx/nonono/" + Math.floor(Math.random() * 1) + ".wav");
  document.getElementById('jaroner').height="120";
  document.getElementById('jaroner').src='flo/nonono.png'
  nonono.play();
  nonono.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fkkk() {
  var ny = [fkkkha, fkkkhi, fkkkhu, fkkkul];
  let on = Math.floor(Math.random() * ny.length);
  ny[on]();
}

async function fkkkha() {
  var kkkha = new Audio("sfx/nyon/happy/" + Math.floor(Math.random() * 2) + ".wav");
  document.getElementById('jaroner').height="28";
  document.getElementById('jaroner').src='flo/nyon/happy.gif'
  kkkha.play();
  kkkha.onended = function(){
    document.getElementById('jaroner').height="28";
    document.getElementById('jaroner').src='flo/nyon/0.gif';
  }
}

async function fkkkhi() {
  var kkkhi = new Audio("sfx/nyon/hide/" + Math.floor(Math.random() * 1) + ".wav");
  document.getElementById('jaroner').height="31";
  document.getElementById('jaroner').src='flo/nyon/hide.gif'
  kkkhi.play();
  kkkhi.onended = function(){
    document.getElementById('jaroner').height="28";
    document.getElementById('jaroner').src='flo/nyon/hi.gif';
    setTimeout(() => {
      document.getElementById('jaroner').height="28";
      document.getElementById('jaroner').src='flo/nyon/0.gif';
    }, 400);
  }
}

async function fkkkhu() {
  var kkkhu = new Audio("sfx/nyon/hurt/" + Math.floor(Math.random() * 3) + ".wav");
  document.getElementById('jaroner').height="28";
  document.getElementById('jaroner').src='flo/nyon/hurt.gif'
  kkkhu.play();
  kkkhu.onended = function(){
    document.getElementById('jaroner').height="28";
    document.getElementById('jaroner').src='flo/nyon/0.gif';
  }
}

async function fkkkul() {
  var kkkul = new Audio("sfx/nyon/ulelelele/" + Math.floor(Math.random() * 4) + ".wav");
  document.getElementById('jaroner').height="39";
  document.getElementById('jaroner').src='flo/nyon/ul.webp'
  kkkul.play();
  kkkul.onended = function(){
    document.getElementById('jaroner').height="28";
    document.getElementById('jaroner').src='flo/nyon/0.gif';
  }
}

async function fpower() {
  var power = new Audio("sfx/power/" + Math.floor(Math.random() * 5) + ".wav");
  document.getElementById('jaroner').height="148";
  document.getElementById('jaroner').src='flo/powerpoint.webp'
  power.play();
  power.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function frun() {
  var run = new Audio("sfx/run/" + Math.floor(Math.random() * 2) + ".wav");
  document.getElementById('jaroner').height="88";
  document.getElementById('jaroner').src='flo/run.webp'
  run.play();
  run.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fskate() {
  var skate = new Audio("sfx/skate/" + Math.floor(Math.random() * 5) + ".wav");
  document.getElementById('jaroner').height="120";
  document.getElementById('jaroner').src='flo/skate.webp'
  skate.play();
  skate.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fspiral() {
  var spiral = new Audio("sfx/spiral/" + Math.floor(Math.random() * 1) + ".wav");
  var spin = Math.floor(Math.random() * 100)
  if (spin == 0) {
    document.getElementById('jaroner').height="70";
    document.getElementById('jaroner').src='flo/Aqua.webp'
  } else {
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/spiral.gif'
  }
  spiral.play();
  spiral.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fuh() {
  var uh = new Audio("sfx/uh!/" + Math.floor(Math.random() * 13) + ".wav");
  document.getElementById('jaroner').height="120";
  document.getElementById('jaroner').src='flo/uh!.webp'
  uh.play();
  uh.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/0.webp';
  }
}

async function fwind() {
  var wind = new Audio("sfx/wind/" + Math.floor(Math.random() * 7) + ".wav");
  document.getElementById('jaroner').height="120";
  document.getElementById('jaroner').src='flo/wind.webp'
  wind.play();
  wind.onended = function(){
    document.getElementById('jaroner').height="120";
    document.getElementById('jaroner').src='flo/wind.webp';
  }
}