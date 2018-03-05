
let Reviewbox = document.querySelector('.reveiw-box');
let revButton = document.querySelector('.rev-change-button');
newRev()
revButton.addEventListener('click', newRev);

function newRev() {

var Reveiws = ["Alice is litrally the greates person I have ever met I couldnt ask for a better supal - zeb(the world famouse youtuber)", "Best neighbour ever very rarely has people round and is a delight in the morning - danny", "shes okay - my mum","she allwasy puts her hand up but cant read or write- my teacher year 4(and 1,2,3,5,6,7,8,9,10 etc)","an Adequete hydrater- Kit","Thinks she can cook but can't-everyone who has to lisen to me set the smoke alarm off on the reguler","Shes good at computers- my granpa"];
let num = Math.floor(Math.random() * 7);

// Set the text so the user can copy and paste the colour
Reviewbox.innerHTML = Reveiws[num];

}