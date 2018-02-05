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
        console.log("LOADED/PASSED - ", file );
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
// this should be about right but AWAITING FIXES to submitJob to make OPERATIONAL
/*function load_SBPfile_injectjob (file) {
// #3  get json string of sbp part file and run NORMALLY FROM JOB MANAGER (leaving app)
  var content = "";
  jQuery.get(file, function(data) {
      content += data;
    })
    .done(function() {
        console.log("LOADED/INSERTED - ", file );
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

// Load Macro Files (sequentially after each completes)
    // First, get assignments
    function MacroInst(numMacro,type,name,description) {
    	this.num = numMacro;
    	this.typ = type;
    	this.nam = name;
    	this.descript = description;
    }
    // Then, call one by one as each completes
    function installNext(nextMacro) {
       if (nextMacro > lastMacro) {
       	 console.log("Macro list to install is complete!");
       	 nextMacro = firstMacro;
       } else { 
         InstallMacro(nextMacro);
       }
    }

function InstallMacro(numMacro) {
  var sbp_macro = "";
  var source_folder = macro_array[numMacro].typ + "/macro_";
  var source_data = source_folder + numMacro + ".sbp";
  jQuery.get(source_data, function(data) {
      sbp_macro += data;
    })
    .done(function() {
      source_data = source_data.replace(source_folder, '');
      source_data = source_data.replace('.sbp', '');
      var macro = {};
      macro.id = source_data;
      macro.name = macro_array[numMacro].nam;
      macro.description = macro_array[numMacro].descript;
      macro.content = sbp_macro;

    console.log("id: ", macro.id );
    console.log("name: ", macro.name );
//    console.log("description: ", macro.description );
//    console.log("id: ", macro.content );

      // then, create the macro with id macro.id
    fabmo.updateMacro(macro.id,{},function(err, result) {
     // set the macro fields (name, description,content);
      fabmo.updateMacro(macro.id,{name:macro.name,content:macro.content,description:macro.description}, function(err, result) {
          if (err) {
          	console.log(err);
          } else {
            fabmo.notify('info', "Macro '" + macro.id + "' saved.");
            nextMacro++;
            installNext(nextMacro);
            console.log("next=", nextMacro)
          }
        });
      });
  });
}

// Calls for this app --------------------------------------------------------------

  // Macro Install Info
    var firstMacro = 60;
    var nextMacro;
    var lastMacro = 64;
    var macro_array = [];
    macro_array[60] = new MacroInst(60,"macros","Pen-Making Settings","Set/Change Tool-Specific Values for Pen Making");
    macro_array[61] = new MacroInst(61,"macros","INDEXER: Center-Indexer","Find center point around shaft");
    macro_array[62] = new MacroInst(62,"macros","Touch-in-Z","Just touch off in Z and stop");
    macro_array[63] = new MacroInst(63,"macros","Align Mandrel","Check alignment of Mandrel on Indexer");
    macro_array[64] = new MacroInst(64,"macros","Insert New Pen-Making Cutter","Change cutters for Pen Making");

$("#install-pen-macros").click(function(evt) {
      console.log("called_first");
      nextMacro = firstMacro;
      installNext(nextMacro);
});

$("#call-run-homePen").click(function(evt) {
  var sbp_file = "jobs/home_pen_blank_1.sbp";
  load_SBPfile_run(sbp_file);
});

$("#call-run-blank-2").click(function(evt) {
  var sbp_file = "jobs/pen_blank_2.sbp";
  load_SBPfile_run(sbp_file);
});

$("#call-cutterheight").click(function(evt) {
    fabmo.runSBP('MH,');
  // call macro 72? prompt and make move to set cutter? pull up and position for generic run   
  // macro 72 should set 0 just in case we need to reuse after power off, etc
});

$("#call-run-blank-1").click(function(evt) {
  var sbp_file = "jobs/pen_blank_2.sbp";
  load_SBPfile_run(sbp_file);
});

$("#call-safepark").click(function(evt) {
    fabmo.runSBP('MH,');
    //pull z up to safe z (clearing indexer)
    //then move to parking location at rear
});

$("#call-submitJob").click(function(evt) {
  var sbp_file = "jobs/test1.sbp";
  load_SBPfile_submitjob(sbp_file);
});

$("#call-injectJob").click(function(evt) {
  var sbp_file = "jobs/test1.sbp";
  load_SBPfile_injectjob(sbp_file);
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
