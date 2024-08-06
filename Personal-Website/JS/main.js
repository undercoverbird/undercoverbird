
const verbs = ['ruin', 'overcome', 'succumb to', 'love', 'prevail over', 'eat', 'save', 'lose', 'win'];
const nouns = ['challenge', 'romance', 'fortune', 'book', 'cake', 'vacation', 'job opportunity', 'election'];
const adjectives = ['witty', 'brave', 'smart', 'jealous', 'mean', 'romantic', 'hungry', 'needful', 'obsequious', 'weird'];
const times = ['tomorrow', 'next week', 'imminently', 'in a few years or so'];

function makeFortune() {
    // choose verb 
    let vIndex = Math.floor(Math.random() * verbs.length);

    // choose noun
    let nIndex = Math.floor(Math.random() * nouns.length);
 
    // choose adj 
    let aIndex = Math.floor(Math.random() * adjectives.length);

    // choose times
    let tIndex = Math.floor(Math.random() * times.length); 

    // construct sentence 
    let storyVerb = verbs[vIndex];
    let storyNoun = nouns[nIndex];
    let storyAdj = adjectives[aIndex];
    let storyTime = times[tIndex];

    let fortune = storyNoun[0] === 'e'
        ? `You will ${storyVerb} an ${storyNoun} because you are ${storyAdj}. It will happen ${storyTime}.`
        : `You will ${storyVerb} a ${storyNoun} because you are ${storyAdj}. It will happen ${storyTime}.`;


    return fortune;
    
}


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('fortune');
    const display = document.getElementById('fortune-display');
    const fortuneButton = document.getElementById('hide-fortune');

    button.addEventListener('click', function() {
        const fortune = makeFortune();
        display.textContent = fortune;
        button.innerHTML = 'Tell me a different fortune';
        fortuneButton.innerHTML = 'Destroy fortune';
        fortuneButton.style.display = 'inline';
    });
    
    fortuneButton.addEventListener('click', function() {
        hideFortune();
        button.innerHTML = 'Tell me a fortune';

    });
});

function hideFortune() {
    document.getElementById('fortune-display').textContent = '';
    document.getElementById('hide-fortune').style.display = 'none';
}
