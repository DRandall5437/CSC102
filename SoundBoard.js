/*gets the sound from the corrisponding name and displays the name on button*/
const sounds = ['Horn', 'Splat', 'Coaster Scream', 'Explosion']

/*the function that tells the button to work*/
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
/*tells the sound to play when clicked*/
    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })
    /*Displays the buttons*/
   document.getElementById('buttons').appendChild(btn)

})