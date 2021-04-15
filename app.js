emojiArray = ['😀', '🥳', '😜', '❤️'];
function pushEmoji() {
    $('.em-container').append(`<span class="em-node-${(Math.floor(Math.random() * 5) + 1)}">${emojiArray[(Math.floor(Math.random() * 3) + 1)]}</span>`)
}
setInterval(() => {
    pushEmoji()
}, 200);