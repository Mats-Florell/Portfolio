const buttons = ["Introduce yourself",  "Ask what you can do","Clean debris","Look for civilians", "Introduce Yourself then evacuate her.", "Explain why she should leave the area","Join her for tea"]
const background = ["<video><source src='Bilder/Anatoly_shows_up_to_work.mp4'type='video/mp4'>your browser doesn't support this format.</video>","<video autoplay><source src='Bilder/Introduction.mp4'type='video/mp4'>your browser doesn't support this format.</video>","<img src='Bilder/Ludyak_talks_to_anatoly.png'>","<img src='Bilder/Ludyak_CleanedUpDebris.jpg'>","<video><source src='Bilder/Ludyak_looks_for_Civilians.mp4'type='video/mp4'>your browser doesn't support this format.</video>","<video><source src='Bilder/Olga_is_sad.mp4'type='video/mp4'>your browser doesn't support this format.</video>","<img src='Bilder/Drink_tea_with_olga.png'>"]
const paragraph=["You show up for your first day at work and you see your boss.  You walk up to him and then, what do you do?", "Anatoly:<br> 'Hello, We have two jobs for you, you can clean up debris, or you can go look for people to evacuate.'<br> Do you:", "After cleaning up debris your shift isnt over, so you decide to look for civilians in the area.", "While searching the nearby woods, you stumble upon a cabin. A old woman shows up to talk to you, she asks: 'Hello, Do you want to come inside and drink some tea?","The old woman is disheartened by the fact that she must leave. But decides to listen and leaves the area. If only she could have enjoyed her home a little while longer, Alas Lukyan goes home. With a new found distain for his proffesion and enough money to feed his family. Would you like to play again?","You and olga sit down and have a nice chat over a few cups of tea. Eventually you thank her for your stay and leave, having forgotten to tell her to evacuate. Despite her being in danger, She probably lives happier oblivious to it than worrying about it, Alas ludyak goes home. Would you like to play again?"]

function Start_game(){
    console.log("test")
    document.querySelector("section").innerHTML =background[0]+"<p>"+paragraph[0]+"</p><section class='buttons'><section class='buttons'><button onclick='WorkToDo()'>" + buttons[0] +"</button><button onclick='WorkToDo()'>" + buttons[1] +"</button><button onclick='Return_to_start()'> Go back to start </button></section>";
    document.querySelector("video").play();
}
function Return_to_start(){
    document.querySelector("section").innerHTML =background[1]+"<section class='buttons'><button onclick='Start_game()'>Click me to start.</button></section>"
}
function WorkToDo(){
    document.querySelector("section").innerHTML =background[2]+"<p>"+paragraph[1]+"</p><section class='buttons'><button onclick='CleanDebris()'>" + buttons[2] +"</button><button onclick='LookForCivs()'>" + buttons[3] +"</button><button onclick='Return_to_start()'> Go back to start </button></section>";
}
function CleanDebris(){
    document.querySelector("section").innerHTML =background[3]+"<p>"+paragraph[2]+"</p><section class='buttons'><button onclick='LookForCivs()'>" + buttons[3] +"</button><button onclick='Return_to_start()'> Go back to start </button></section>";
}
function LookForCivs(){
    document.querySelector("section").innerHTML =background[4]+"<p>"+paragraph[3]+"</p><section class='buttons'><button onclick='TellOlgaToLeave()'>" + buttons[4] +"</button> <button onclick='TellOlgaToLeave()'>" + buttons[5] +"</button><button onclick='DrinkTeaWithOlga()'>" + buttons[6] +"</button><button onclick='Return_to_start()'> Go back to start </button></section>";
    document.querySelector("video").play();
}
function TellOlgaToLeave(){
    document.querySelector("section").innerHTML =background[5]+"<p>"+paragraph[4]+ "</p><section class='buttons'><button onclick='Return_to_start()'> Go back to start </button></section>";
    document.querySelector("video").play();
}
function DrinkTeaWithOlga(){
    document.querySelector("section").innerHTML =background[6]+"<p>"+paragraph[5]+ "</p><section class='buttons'><button onclick='Return_to_start()'> Go back to start </button></section>";
}