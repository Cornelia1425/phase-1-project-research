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
    document.querySelector("#spellType").textContent = spell.attributes.type
    document.querySelector("#spellName").textContent = spell.attributes.name
    document.querySelector("#spellHand").textContent = spell.attributes.hand
    document.querySelector("#spellIncantation").textContent = spell.attributes.incantation
    document.querySelector("#spellImg").src = spell.attributes.image


}


    //this is playing Expelliarmus incantation audio. it worked!
    //const audioElement = new Audio('./assets/audio/Voicy_Expelliarmus - Spell SFX.mp3');
    const audioElement = new Audio ('https://www.voicy.network/embed/XFMM3Reta0OiL2-Lib7GRg')
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
    
    // here we grab value by input
    fetch(`https://api.potterdb.com/v1/spells/?filter[name_cont]=${input.value}`)
    // https://api.potterdb.com/v1/spells?filter[name_cont]=Spell
        .then((res)=>res.json())
        .then((data)=>{
            data.data.forEach(spellinfo=>{
            const name = document.querySelector('section#SpellDetailsBySearch p.name')
            name.textContent = spellinfo.attributes.name
       /*   const incantation = document.querySelector('section#SpellDetailsBySearch  p.incantation')
            incantation.textContent = spellinfo.attributes.incantation
            const hand = document.querySelector('section#SpellDetailsBySearch p.hand')
            hand.textContent = spellinfo.attributes.hand */
 
            
            displayspell(spell)
        })
        })


    })


}

const main = () =>{
    displaySpells()
    init ()
}

main()

