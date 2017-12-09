/*
* MAIN UTILITIES FOR PEN MAKING APP
* 
* Some make use of PEN MAKING MACROS #60-70
* FYI, several different techniques are illustrated to call SBP code
*
*/

// Notes ...

var that;

function updateConsolidation() {
//    that = doclength;

       if (that === "long"){
         $('.long').slideDown();
         fabmo.setAppConfig({"doclength":"long"});
       } else if (that === "short"){
         $('.long').slideUp();
         fabmo.setAppConfig({"doclength":"short"});
       }
}

$("#call-homepen").click(function(evt) {
	  fabmo.runSBP('C#,3');
  // run C3
  // move to x offset and zero
  // move to starting position in Y and set to blank1_front
  // call macro 72? prompt and make move to set cutter? pull up and position for generic run   
  // macro 72 should set 0 just in case we need to reuse after power off, etc
});

$("#call-cutterheight").click(function(evt) {
    fabmo.runSBP('MH,');
  // call macro 72? prompt and make move to set cutter? pull up and position for generic run   
  // macro 72 should set 0 just in case we need to reuse after power off, etc
});

$("#call-safepark").click(function(evt) {
    fabmo.runSBP('MH,');
    //pull z up to safe z (clearing indexer)
    //then move to parking location at rear
});

$("#call-blanks").click(function(evt) {
    fabmo.runSBP('MH,');
    //sequentially step through current frant and back location of blank 1 and 2
});

$("#call-set-z-zero").click(function(evt) {
    fabmo.runSBP('C#,78');
});

// Updating Unit Type before Centering Tool
function updateUnits (callback){
  fabmo.getConfig(function(err, cfg) {
    curUnits = cfg.machine.units;
console.log("units1: " + curUnits);  
    callback(curUnits);
  });
}
function toCenter(curUnits){
console.log("units2: " + curUnits);
    if (curUnits ==="mm") {
      fabmo.runSBP('M2,75,100');
    } else {
      fabmo.runSBP('M2,3,4');
    }
}
$("#call-center").click(function(evt) { // CENTER HERE
    updateUnits(toCenter);
});


// Illustration of other FabMo function calls ... fyi

$("#dash-info").click(function(evt) {
  fabmo.notify('info', 'Heads Up!');
});
$("#dash-success").click(function(evt) {
  fabmo.notify('success', 'Great Job!');
});
$("#dash-warning").click(function(evt) {
  fabmo.notify('warning', 'Uh Oh!');
});
$("#dash-error").click(function(evt) {
  fabmo.notify('error', 'Epic Fail!');
});
$("#dash-launch-job-manager").click(function(evt) {
  fabmo.launchApp('job-manager');
});
$("#dash-launch-doc").click(function(evt) {
  fabmo.navigate('http://docs.handibot.com/doc-output/Handibot%202%20MANUAL%20Safe%20Use%20Source_v001.pdf', {target : '_blank'});
});
