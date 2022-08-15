let emojis =  ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🐶", "🦀", "🦏", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁", "🐎", "🐮", "🦝", "🐙"]

let selectedFighters = document.getElementById('fighters');

function pickFighters() {
    let randomfighter1 = Math.floor(Math.random() * emojis.length)
    let fighter1 = emojis[randomfighter1]

    let randomfighter2 = Math.floor(Math.random() * emojis.length)
    let fighter2 = emojis[randomfighter2]

    if (fighter1 !== fighter2) {
        selectedFighters.textContent = fighter1 + '  vs  ' + fighter2
    } else {
        alert('Select different fighters!')
    }
}