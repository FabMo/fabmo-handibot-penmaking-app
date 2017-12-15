/*
* MAIN UTILITIES FOR PEN MAKING APP
* 
* Some make use of PEN MAKING MACROS #60-70
* FYI, several different techniques are illustrated to call SBP code (macros, single commands, files)
*
*/

// Notes ...

// General Functions --------------------------------------------------------------

   var that;
function updateConsolidation() {
// colapse display if requested ...
  if (that === "long"){
    $('.long').slideDown();
    fabmo.setAppConfig({"doclength":"long"});
  } else if (that === "short"){
    $('.long').slideUp();
    fabmo.setAppConfig({"doclength":"short"});
  }
}

// 3 Methods for Running SBP Files ------------------------------------------------ 

function load_SBPfile_run (file) {
// #1  get json string of sbp part file and DIRECT run (no job history)
  var content = "";
  jQuery.get(file, function(data) {
      content += data;
    })
    .done(function() {
        console.log("LOADED - ", file );
        console.log("With: ", content );
      fabmo.runSBP(content);
  });
}

function load_SBPfile_submitjob (file) {
// #2  get json string of sbp part file and run NORMALLY FROM JOB MANAGER (leaving app)
  var content = "";
  jQuery.get(file, function(data) {
      content += data;
    })
    .done(function() {
        console.log("LOADED - ", file );
        console.log("With: ", content );
      job = file.replace('jobs/', '');
      job = job.replace('.sbp', '');
      fabmo.submitJob({
        file: content,
        filename: job + '.sbp',
        name: job,
        description: "App Job request for: " + file
      });  
  });
}

//
// this should be about right but AWAITING FIXES to submitJog to make OPERATIONAL
/*function load_SBPfile_injectjob (file) {
// #3  get json string of sbp part file and run NORMALLY FROM JOB MANAGER (leaving app)
  var content = "";
  jQuery.get(file, function(data) {
      content += data;
    })
    .done(function() {
        console.log("LOADED XXX- ", file );
        console.log("With: ", content );
      job = file.replace('jobs/', '');
      job = job.replace('.sbp', '');
    fabmo.clearJobQueue(function(err,data){
      if (err){
        cosole.log(err);
      } else {
      fabmo.submitJob({
        file: content,
        filename: job + '.sbp',
        name: job,
        description: "App Job request for: " + file,
        stayHere: true
        }, function(err, message) {
        if (err){
          console.log(err);
         } else {
            fabmo.runNext(function(err,message) {
               if (err) {
                 console.log(err);
               } else {
                   console.log('running');
               }
             });
           }
        });
      }
    });
   });
}
*/

// Calls for this app --------------------------------------------------------------

$("#call-run_homePen").click(function(evt) {
  var sbp_file = "jobs/test1.sbp";
  load_SBPfile_run(sbp_file);
});

$("#call-submitJob").click(function(evt) {
  var sbp_file = "jobs/test1.sbp";
  load_SBPfile_submitjob(sbp_file);
});

$("#call-injectJob").click(function(evt) {
  var sbp_file = "jobs/test1.sbp";
  load_SBPfile_injectjob(sbp_file);
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

$("#call-center").click(function(evt) { // CENTER HERE
    updateUnits(toCenter);
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
