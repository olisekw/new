const container = document.querySelector(".canvas")

const thing = document.createElement("div")
const para = document.createElement("p")
const bgp = document.createElement("div")
const ipara = document.createElement("p")


container.appendChild(thing)
container.appendChild(bgp)
container.appendChild(para)
bgp.appendChild(ipara)

para.textContent = "mmmm"
bgp.setAttribute("style", "background-color: pink; height = 30px; width = 30px")

ipara.textContent = 'eeeee'
ipara.setAttribute('style', 'color: yellow; font-size: 30px; font-family: sans-sheriff')


console.log('new stuff, there is this')