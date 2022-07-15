import string from './css.js'//模块化


const player = {
    id : undefined,
    time : 100,
    ui : {
        demo: document.querySelector('#demo'),
        demo2:document.querySelector('#demo2')
    },
    events : {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    n : 1,
    init: ()=>{
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo2.innerHTML = string.substring(0,player.n)
        player.play()
        player.bindEvents()
    },
    bindEvents : ()=> {
        for (let key in player.events){
            if (player.events.hasOwnProperty(key)) { //判断key是不是自身属性
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
            
        }
    },
    run: () => {
        player.n += 1
        if(player.n>string.length){
            window.clearInterval(player.id) //取消计时器
            return
        }
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo2.innerHTML = string.substring(0,player.n)
        player.ui.demo.scrollTop = demo.scrollHeight
    },
    play : ()=> {
        player.id =  setInterval(player.run,player.time)
    },
    pause : ()=> {
        window.clearInterval(player.id)
    },
    slow : ()=> {
        player.pause()
        player.time = 300
        player.play()
    },
    normal : ()=>{
        player.pause()
        player.time = 100
        player.play()
    },
    fast : ()=> {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()

