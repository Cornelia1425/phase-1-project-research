/* document.addEventListener("DOMContentLoaded",() =>{

}) */

// challenge 0: here we display all spells
const displaySpells = () => {
    // fetch('https://api.potterdb.com/v1/spells?filter[name_cont]=water')
    // here we display all spells as buttons
    fetch('https://api.potterdb.com/v1/spells')
    // https://api.potterdb.com/v1/spells?filter[name_cont]=Spell
    .then((response)=>response.json())
    // .then(spells=>{
    //     const type = document.createElement("p")
    //     type.textContent = spells.type
    //     document.querySelector("#spell").append(type)  
    // })
    .then(spells =>{
        spells.data.forEach(spell=>{
        // const id = document.createElement("p")
        // id.textContent = spell.id
        // document.querySelector("#spell").append(id)  

        //<this is spell type>
        // const type = document.createElement("p")
        // type.textContent = spell.type
        // document.querySelector("#spell").append(type)  

        const name = document.createElement("button")
        name.textContent = spell.attributes.name
        document.querySelector("#spell").appendChild(name)

        name.addEventListener("click", event =>{
            event.preventDefault();
            displayspell(spell)

        })

        // //<this is hand>
        // const hand = document.createElement("p")
        // hand.textContent = spell.attributes.hand
        // document.querySelector("#spell").appendChild(name).appendChild(hand)
        
        //<this is img>
        // const img = document.createElement("img")
        // img.src=spell.attributes.image
        // document.querySelector("#spell").append(img)
    })
    //displayspell(spell)
    //displayspell(spells.data[0])
})
}


function displayspell (spell){
/*     document.querySelector("#spellType").textContent = spell.attributes.type || "Not Found 🥲" */
    document.querySelector("#spellName").textContent = spell.attributes.name || "Not Found 🥲"
    document.querySelector("#spellHand").textContent = spell.attributes.hand || "Not Found 🥲"
    document.querySelector("#spellIncantation").textContent = spell.attributes.incantation || "Not Found 🥲"
    document.querySelector("#spellImg").src = spell.attributes.image || './assets/img/21_wandPlaceholder.png'
}

    //this is playing Expelliarmus incantation audio. it worked!
    const audioElement = new Audio('./assets/audio/7_Expelliarmus.mp3');
    const pElement = document.getElementById('myAudio');

    pElement.addEventListener('click', () => {
    audioElement.play();
    });


// challenge 0: here we display all spells
const init = ()=>{
    const form =document.querySelector('form')
    form.addEventListener('submit', (event) =>{
        event.preventDefault()
        const input = document.querySelector('input#searchBySpellName')
    


        //same thing just add a search filter

        /* .then(spells =>{
            spells.data.forEach(spell=>{
            const name = document.createElement("button")
            name.textContent = spell.attributes.name
            document.querySelector("#spell").appendChild(name)
            name.addEventListener("click", event =>{
                event.preventDefault();
                displayspell(spell)
            })
 */
        // here we grab value by input
        fetch(`https://api.potterdb.com/v1/spells/?filter[name_cont]=${input.value}`)
            .then((res)=>res.json())
            .then((spells)=>{
           /*      console.log("spells: ", spells)
                const searchSpells =spells.data
                console.log("spells.data: ", spells.data)
                const searchSpellsName =searchSpells.map(searchSpells =>searchSpells.attributes.name)
                console.log("searchSpellsName: ", searchSpellsName) */

            
                const searchResultsContainer = document.querySelector("p#searchBySpellName")
                searchResultsContainer.innerHTML = "" //add before the loop, clear the existing search result

                spells.data.forEach(spell=>{
                const searchSpellName = document.createElement("p")
                searchSpellName.textContent = spell.attributes.name
                document.querySelector("p#searchBySpellName").appendChild(searchSpellName)
                //add eventListener
                searchSpellName.addEventListener("click", event =>{
                    event.preventDefault();
                    displayspell(spell)
                })
                })

                // spells.data.forEach(spellinfo=>{
                // //console.log(spells)
                // const name = document.querySelector('section#SpellDetailsBySearch p.name')
                // name.textContent = spellinfo.attributes.name
                // //displayspell(spell)
                // })
            })
    })
}

const main = () =>{
    displaySpells()
    init ()
}

main()


/* const playBtn = document.querySelector('.play-btn');
const audio = document.querySelector('.audio');

playBtn.addEventListener('click', function() {
if (audio.paused) {
audio.play();
playBtn.src = './assets/img/19_pause.png';
} else {
audio.pause();
playBtn.src = './assets/img/18_play.png';
}
}); */


const playBtn = document.querySelector('.play-btn');
const audio = document.querySelector('.audio');

playBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playBtn.src = './assets/img/19_pause_darkyellow.png';
    //playBtn.src = './assets/img/0_snitchfly.gif';
    document.querySelector("#snitchfly").src = src="./assets/img/0_snitchfly.gif" 
  } else {
    audio.pause();
    // audio.currentTime = 0; // Reset the audio to the beginning
    playBtn.src = './assets/img/18_play_darkyellow.png';
    //playBtn.src = './assets/img/0_snitchfly.png';
    document.querySelector("#snitchfly").src = src="./assets/img/0_snitchfly.png" 
  }
});

audio.addEventListener('ended', function() {
  playBtn.src = './assets/img/18_play_darkyellow.png';
});

//https://api.potterdb.com/v1/spells/?filter[name_cont]=${blue}


//challenges
//1 >> done, search should display all spells 
//2 >> done, all displayed spells should be a clickable button

//3 >> done, when you clicks the button it display the information in the information container, so! 



//4 for some spells that has sound, display them differently, add a special color or add a sound emoji at the end
//5 for the 12 those who has sound, attached them to the click for sound, create new item in the information

// 6 >> done,  for those info in API shows null, shows Null/not found instead of showing blank

// 7 css, name hand, incantation sound, image, put in a grid

// 8 when click one of the all displayed data, reset the search bar to placeHolder

// 9 >> done,  when click new search, reset the search result instead of adding to it
