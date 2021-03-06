// LOGIC
var HOLOCENE_ADD = 0
var holocene = document.getElementById("holocene");

holocene.addEventListener('click', function() {
    HOLOCENE_ADD = holocene.checked ? 10000 : 0;
})

function calcRationalTime() {
    var UNIX_MILLISECONDS = (new Date()).getTime();
    var UNIX_START_YEAR = HOLOCENE_ADD + 1970;

    var SIDEREAL_YEAR = 31558149.504;
    var MILLISECOND_TO_MILLIBLINK = 3.1687536047487507;

    var UNIX_MILLIBLINKS = UNIX_MILLISECONDS * MILLISECOND_TO_MILLIBLINK;

    var MILLIBLINKS_IN_CYLIPSE = 100000000000;
    var MILLIBLINKS_IN_COURSE  =  10000000000;
    var MILLIBLINKS_IN_STAGE   =   1000000000;
    var MILLIBLINKS_IN_STANCE  =    250000000;
    var MILLIBLINKS_IN_TIDE    =     10000000;
    var MILLIBLINKS_IN_MOMENT  =       100000;
    var MILLIBLINKS_IN_BLINK   =         1000;


    var currentCylipse = UNIX_START_YEAR + Math.round(UNIX_MILLIBLINKS / MILLIBLINKS_IN_CYLIPSE);
    var milliblinksCurrentCylipse = UNIX_MILLIBLINKS - 
                                        (currentCylipse - UNIX_START_YEAR) * MILLIBLINKS_IN_CYLIPSE;

    var currentCourse = Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_COURSE);
    var currentStage = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_STAGE)) % 11;
    var currentStance = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_STANCE)) % 5;
    var currentTide = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_TIDE)) % 101;
    var currentMoment = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_MOMENT)) % 101;
    var currentBlink = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_BLINK)) % 101;

    // console.log(`UNIX Milliseconds: ${UNIX_MILLISECONDS}`);
    // console.log(`UNIX Milliblinks: ${UNIX_MILLIBLINKS}`);

    // console.log(`Milliblinks in Current Cylipse: ${milliblinksCurrentCylipse}`);
    // console.log(`Current Cylipse: ${currentCylipse}`);

    // console.log(`Current Course: ${currentCourse}`);
    var currentCourseString = "";
    switch (currentCourse) {
        case 1:
            currentCourseString = "1. Socrates";
            // console.log("Current Course: 1. Socrates");
            break;
        case 2:
            currentCourseString = "2. Plato";
            // console.log("Current Course: 2. Plato");
            break;
        case 3:
            currentCourseString = "3. Aristotle";
            // console.log("Current Course: 3. Aristotle");
            break;
        case 4:
            currentCourseString = "4. Nagarjuna";
            // console.log("Current Course: 4. Nagarjuna");
            break;
        case 5:
            currentCourseString = "5. Kindi";
            // console.log("Current Course: 5. Kindi");
            break;
        case 6:
            currentCourseString = "6. Farabi";
            // console.log("Current Course: 6. Farabi");
            break;
        case 7:
            currentCourseString = "7. Rushd";
            // console.log("Current Course: 7. Rushd");
            break;
        case 8:
            currentCourseString = "8. Hegel";
            // console.log("Current Course: 8. Hegel");
            break;
        case 9:
            currentCourseString = "9. Husserl";
            // console.log("Current Course: 9. Husserl");
            break;
        case 10:
            currentCourseString = "10. Deleuze";
            // console.log("Current Course: 10. Deleuze");
            break;
        default:
            // console.log("?")
            break;
    }

    // console.log(`Current Stage: ${currentStage}`);
    var currentStageString = "";
    switch (currentStage) {
        case 1:
            currentStageString = "1. Galileo";
            // console.log("Current Stage: 1. Galileo");
            break;
        case 2:
            currentStageString = "2. Leibniz";
            // console.log("Current Stage: 2. Leibniz");
            break;
        case 3:
            currentStageString = "3. Newton";
            // console.log("Current Stage: 3. Newton");
            break;
        case 4:
            currentStageString = "4. Bayes";
            // console.log("Current Stage: 4. Bayes");
            break;
        case 5:
            currentStageString = "5. Euler";
            // console.log("Current Stage: 5. Euler");
            break;
        case 6:
            currentStageString = "6. Gauss";
            // console.log("Current Stage: 6. Gauss");
            break;
        case 7:
            currentStageString = "7. Maxwell";
            // console.log("Current Stage: 7. Maxwell");
            break;
        case 8:
            currentStageString = "8. Lovelace";
            // console.log("Current Stage: 8. Lovelace");
            break;
        case 9:
            currentStageString = "9. Planck";
            // console.log("Current Stage: 9. Planck");
            break;
        case 10:
            currentStageString = "10. Turing";
            // console.log("Current Stage: 10. Turing");
            break;
        default:
            // console.log("?")
            break;
    }

    // console.log(`Current Stance: ${currentStance}`);
    var currentStanceString = "";
    switch (currentStance) {
        case 1:
            currentStanceString = "1. Set";
            // console.log("Current Stance: 1. Set");
            break;
        case 2:
            currentStanceString = "2. Rise";
            // console.log("Current Stance: 2. Rise");
            break;
        case 3:
            currentStanceString = "3. Hold";
            // console.log("Current Stance: 3. Hold");
            break;
        case 4:
            currentStanceString = "4. Break";
            // console.log("Current Stance: 4. Break");
            break;
        default:
            // console.log("?")
            break;
    }

    // console.log(`Current Tide: ${currentTide}`);
    // console.log(`Current Moment: ${currentMoment}`);
    // console.log(`Current Blink: ${currentBlink}`);


    var rationalDateString = "Cylipse " + currentCylipse + "<br> Course " + currentCourseString +
                             "<br> Stage " + currentStageString + "<br> Stance " + currentStanceString +
                             "<br> Tide " + currentTide + "<br> Moment " + currentMoment +
                             "<br> Blink " + currentBlink;

    return rationalDateString;
}


// Set HTML
function setHTML() {
    var conventionalTime = document.getElementById("conventional-time");
    var rationalTime = document.getElementById("rational-time");

    var d = new Date();
    var conventionalDateString = d.getDate() + "-" + (d.getMonth()+1) + "-" + (d.getFullYear() + HOLOCENE_ADD) + " " + 
                                 d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    conventionalTime.innerText = conventionalDateString;

    rationalTime.innerHTML = calcRationalTime();
}

setHTML();
setInterval(setHTML, 315);
