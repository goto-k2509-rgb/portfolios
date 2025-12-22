
const botan1 = document.querySelector("#ongaku1")
const botan2 = document.querySelector("#ongaku2")
const botan3 = document.querySelector("#ongaku3")
const botan4 = document.querySelector("#ongaku4")
const botan5 = document.querySelector("#ongaku5")
const botan6 = document.querySelector("#ongaku6")
const botan7 = document.querySelector("#ongaku7")
const botan8 = document.querySelector("#ongaku8")
const botan9 = document.querySelector("#ongaku9")
const botansaisei = document.querySelector("#btn_play")
const botanteisi = document.querySelector("#btn_stop")
const botanitiziteisi = document.querySelector("#btn_pause")

window.onload = ()=>{
  const ongaku1 = new Howl ({
  src: "sound/se01.mp3"
});
const ongaku2 = new Howl ({
  src: "sound/se02.mp3"
});
const ongaku3 = new Howl ({
  src: "sound/se03.mp3"
});
const ongaku4 = new Howl ({
  src: "sound/se04.mp3"
});
const ongaku5 = new Howl ({
  src: "sound/se05.mp3"
});
const ongaku6 = new Howl ({
  src: "sound/se06.mp3"
});
const ongaku7 = new Howl ({
  src: "sound/se07.mp3"
});
const ongaku8 = new Howl ({
  src: "sound/se08.mp3"
});
const ongaku9 = new Howl ({
  src: "sound/se09.mp3"
});
let kirikae = ongaku1
botan1.addEventListener("click",()=>{
kirikae = ongaku1
})
botan2.addEventListener("click",()=>{
kirikae = ongaku2
})
botan3.addEventListener("click",()=>{
kirikae = ongaku3
})
botan4.addEventListener("click",()=>{
kirikae = ongaku4
})
botan5.addEventListener("click",()=>{
kirikae = ongaku5
})
botan6.addEventListener("click",()=>{
kirikae = ongaku6
})
botan7.addEventListener("click",()=>{
kirikae = ongaku7
})
botan8.addEventListener("click",()=>{
kirikae = ongaku8
})
botan9.addEventListener("click",()=>{
kirikae = ongaku9
})
botansaisei.addEventListener("click",()=>{
  kirikae.play()
 
  console.log("a")
})
botanteisi.addEventListener("click",()=>{
  kirikae.stop()
    console.log("a")
})
botanitiziteisi.addEventListener("click",()=>{
  kirikae.pause()
    console.log("a")
})
};