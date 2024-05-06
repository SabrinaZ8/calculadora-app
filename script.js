const btnsCalc = document.querySelectorAll('.btns-calc');
var reset = document.getElementById('btn-reset')
var igual = document.getElementById('btn-igual')
var display = document.getElementById('display')
var del = document.getElementById('del')

btnsCalc.forEach((btnsCalc) => {

    btnsCalc.addEventListener('click', function (e) {
      const conta = e.target.innerText
      let valores = display.innerText += conta
      
      igual.addEventListener('click', function () {
        let mostraResultado = eval(valores)
        display.innerText = mostraResultado
     })
  })
})

reset.addEventListener('click', function () {
  document.querySelector('.display').innerHTML = ""
})

del.addEventListener('click', () => {
   var apagaUm = display.innerText
   apagaUm = apagaUm.slice(0, -1)
   display.innerHTML = apagaUm
})

const theme1 = document.getElementById('theme-1')
const theme2 = document.getElementById('theme-2')
const theme3 = document.getElementById('theme-3')
const body = document.querySelector("body")
const bullets = document.querySelector(".bullets")
const bodyCalc = document.querySelector(".body-calc")

const themas = {
  theme1: {
    background:{
      main_bg_1: "hsl(222, 26%, 31%)",
      toggle_bg_1: "hsl(223, 31%, 20%)",
      screen_bg_1: "hsl(224, 36%, 15%)"
    },
    keys1: {
      key_bg_1: "hsl(225, 21%, 49%)",
      key_shadow_1: "hsl(224, 28%, 35%)",
      toggle_red_1: "hsl(6, 63%, 50%)",
      shadow_red_1: "hsl(6, 70%, 34%)",
      key_white_1: "hsl(30, 25%, 89%)",
      key_shadow_white_1: "hsl(28, 16%, 65%)"
    },
    text_1: {
      text_dk_blue_1: "hsl(221, 14%, 31%)",
      text_white: "hsl(0, 0%, 100%)"
    }
  },
  theme2: {
    background: {
    main_bg_2: "hsl(0, 0%, 90%)",
    toggle_bg_2: "hsl(0, 5%, 81%)",
    screen_bg_2: "hsl(0, 0%, 93%)"
    },
  keys2: {
    key_dk_green_2: "hsl(185, 42%, 37%)",
    dk_shadow_green_2: "hsl(185, 58%, 25%)",
    orange_2: "hsl(25, 98%, 40%)",
    orange_2_shadow: "hsl(25, 99%, 27%)",
    key_white_2: "hsl(45, 7%, 89%)",
    key_white_shadow_2: "hsl(35, 11%, 61%)"
    },
  text_theme2: "hsl(60, 10%, 19%)"
  },
  theme3: {
    background: {
      main_bg_3: "hsl(268, 75%, 9%)",
      toggle_bg_screen_3: "hsl(268, 71%, 12%)",
    },
    keys3: {
      key_bg_3_del: "hsl(281, 89%, 26%)",
      key_bg_shadow_3_del: "hsl(285, 91%, 52%)",
      cyan_toggle_3:"hsl(176, 100%, 44%)",
      cyan_shadow_3: "hsl(177, 92%, 70%)",
      key_bg_3: "hsl(268, 47%, 21%)",
      key_bg_shadow_3: "hsl(290, 70%, 36%)"
    },
    text_theme3: {
      text_yellow_3: "hsl(52, 100%, 62%)",
      text_dk_blue_3: "hsl(198, 20%, 13%)"
    }
  }
} 
theme1.checked = true
function toggleTheme() {
  if(theme1.checked) {
    body.style.backgroundColor = themas.theme1.background.main_bg_1
    bullets.style.backgroundColor = themas.theme1.background.toggle_bg_1
    display.style.backgroundColor = themas.theme1.background.screen_bg_1
    bodyCalc.style.backgroundColor = themas.theme1.background.toggle_bg_1
    del.style.backgroundColor = themas.theme1.keys1.key_bg_1
    del.style.boxShadow = `0px 3px ${themas.theme1.keys1.key_shadow_1}`
    reset.style.backgroundColor = themas.theme1.keys1.key_bg_1
    reset.style.boxShadow = `0px 3px ${themas.theme1.keys1.key_shadow_1}`
    igual.style.backgroundColor = themas.theme1.keys1.toggle_red_1
    igual.style.boxShadow= `0px 3px ${themas.theme1.keys1.shadow_red_1}`
    body.style.color = themas.theme1.text_1.text_white
    btnsCalc.forEach((btnsCalc1) => {
      btnsCalc1.style.color = themas.theme1.text_1.text_dk_blue_1
      btnsCalc1.style.backgroundColor = themas.theme1.keys1.key_white_1
      btnsCalc1.style.boxShadow= `0px 3px ${themas.theme1.keys1.key_shadow_white_1}`
    })
  } else if(theme2.checked) {
    body.style.backgroundColor = themas.theme2.background.main_bg_2
    bullets.style.backgroundColor = themas.theme2.background.toggle_bg_2
    display.style.backgroundColor = themas.theme2.background.screen_bg_2
    bodyCalc.style.backgroundColor = themas.theme2.background.toggle_bg_2
    del.style.backgroundColor = themas.theme2.keys2.key_dk_green_2
    del.style.boxShadow = `0px 3px ${themas.theme2.keys2.dk_shadow_green_2}`
    reset.style.backgroundColor = themas.theme2.keys2.key_dk_green_2 
    reset.style.boxShadow = `0px 3px ${themas.theme2.keys2.dk_shadow_green_2}`
    igual.style.backgroundColor = themas.theme2.keys2.orange_2
    igual.style.boxShadow= `0px 3px ${themas.theme2.keys2.orange_2_shadow}`
    body.style.color = themas.theme2.text_theme2
    btnsCalc.forEach((btnsCalc) => {
      btnsCalc.style.color = themas.theme2.text_theme2
      btnsCalc.style.backgroundColor = themas.theme2.keys2.key_white_2
      btnsCalc.style.boxShadow= `0px 3px ${themas.theme2.keys2.key_white_shadow_2}`
    })
    
  }  else{
    body.style.backgroundColor = themas.theme3.background.main_bg_3
    display.style.backgroundColor = themas.theme3.background.toggle_bg_screen_3
    bodyCalc.style.backgroundColor = themas.theme3.background.toggle_bg_screen_3
    del.style.backgroundColor = themas.theme3.keys3.key_bg_3_del
    del.style.boxShadow = `0px 3px ${themas.theme3.keys3.key_bg_shadow_3_del}`
    reset.style.backgroundColor = themas.theme3.keys3.key_bg_3_del
    reset.style.boxShadow = `0px 3px ${themas.theme3.keys3.key_bg_shadow_3_del}`
    igual.style.backgroundColor = themas.theme3.keys3.cyan_toggle_3
    igual.style.boxShadow= `0px 3px ${themas.theme3.keys3.cyan_shadow_3}`
    body.style.color = themas.theme3.text_theme3.text_yellow_3
    bullets.style.backgroundColor = themas.theme3.background.toggle_bg_screen_3
    btnsCalc.forEach((btnsCalc) => {
      btnsCalc.style.color = themas.theme3.text_theme3.text_yellow_3
      btnsCalc.style.backgroundColor = themas.theme3.keys3.key_bg_3
      btnsCalc.style.boxShadow = `0px 3px ${themas.theme3.keys3.key_bg_shadow_3}`

    })
  }
}
toggleTheme()