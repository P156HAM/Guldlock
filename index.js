// function for the flashlight
function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

// game engin

let storyIndex = [
{
    story : `Once upon a time, there was a little girl named Goldilocks.\n 
    She went for a walk in the forest. Pretty soon, she came upon a house.\n
    She knocked and, when no one answered, she walked right in.\n
    At the table in the kitchen, there were three bowls of porridge. Goldilocks was hungry.\n
    She tasted the porridge from the ...`,
    choices : ["First bowl", "Second bowl", "Third bowl"],
    replies : [
        '"This porridge is too hot!" she exclaimed.',
        '"This porridge is too cold," she said.',
        '"Ahhh, this porridge is just right," she said happily and she ate it all up.'],
},
{
    story : `After she'd eaten the three bears' breakfasts, she decided she was feeling a little tired.\n
    So, she walked into the living room where she saw three chairs.\n
    Goldilocks sat in ....`,
    choices : ["First chair", "Second chair", "Third chair"],
    replies : [
        '"This chair is too big!" she exclaimed.',
        `"Ahhh, this chair is just right," she sighed. \n
        But just as she settled down into the chair to rest, it broke into pieces!`,
        '"This chair is too big, too!" she whined.'],
},
{
    story : `Goldilocks was very tired by this time, she went upstairs to the bedroom.\n
        She lay down in the first bed, but it was too hard. Then she lay in the second bed, but it was too soft. Then she lay down in the third bed and it was just right. Goldilocks fell asleep.\n
        As she was sleeping, the three bears came home.\n
        "Someone's been eating my porridge," growled the Papa bear.\n
        "Someone's been eating my porridge," said the Mama bear.\n
        "Someone's been eating my porridge and they ate it all up!" cried the Baby bear.\n
        "Someone's been sitting in my chair," growled the Papa bear.\n
        "Someone's been sitting in my chair," said the Mama bear.\n
        "Someone's been sitting in my chair and they've broken it to pieces," cried the Baby bear.
        They decided to look around some more and when they got upstairs to the bedroom, Papa bear growled,\n
        "Someone's been sleeping in my bed.”\n
        "Someone's been sleeping in my bed, too" said the Mama bear.\n
        "Someone's been sleeping in my bed and she's still there!" exclaimed the Baby bear.\n
        Just then, Goldilocks woke up. She saw the three bears.`,
    choices : ['Scream "help!" and run', 'Cover in fear', 'Fight'],
    replies : [
        '---',
        'Goldilock covered in fear and the bears had her for dinner!',
        'Goldilock raised her fists and got a hit in, but the bears fought back and killed her.',]
}
]

let currentAnswer = false;
let elements = {
    text : document.getElementById("text"),
    button: [
        document.getElementById("choice-1"),
        document.getElementById("choice-2"),
        document.getElementById("choice-3")
    ]
}
elements.button.forEach((button, i) => {
    elements.button[i].addEventListener('click', () => {roundOne(choice)});
});

function roundOne(choice) {
    elements.text.innerText = storyIndex[0].story;
    elements.button[0].innerText = storyIndex[0].choices[0];
    elements.button[1].innerText = storyIndex[0].choices[1];
    elements.button[2].innerText = storyIndex[0].choices[2]

    elements.button.forEach((button, i) => {
       (i=0, i <= button.length, button++)
       elements.button[i].addEventListener('click', () => {
    
       })
    })


    if (choice === storyIndex[0].choices[2]) {
        return currentAnswer = true
    }else {
        return currentAnswer = false
    }
}
function roundTwo(choice) {
    elements.text.innerText = storyIndex[1].story;
    elements.button[0].innerText = storyIndex[1].choices[0];
    elements.button[1].innerText = storyIndex[1].choices[1];
    elements.button[2].innerText = storyIndex[1].choices[2]
    if (choice === storyIndex[1].choices[2]) {
        return currentAnswer = true
    }else {
        return currentAnswer = false
    }
}
function roundThree(choice) {
    elements.text.innerText = storyIndex[2].story;
    elements.button[0].innerText = storyIndex[2].choices[0];
    elements.button[1].innerText = storyIndex[2].choices[1];
    elements.button[2].innerText = storyIndex[2].choices[2]
    if (choice === storyIndex[2].choices[2]) {
        return currentAnswer = true
    }else {
        return currentAnswer = false
    }
}
roundOne()