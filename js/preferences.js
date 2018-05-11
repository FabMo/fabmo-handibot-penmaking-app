/*
* CALLS for PREFERENCES TAB
* 
*/

//***TED learn about reading and writing to config files
// Update & SAVE Values as Needed ****NEVER FIGURED THIS OUT
// function saveNew(){
// console.log("justSAVED");
//   var new_offset = $("#pref-input-x-mandrel-offset");
// //  fabmo.setConfig.opensbp.variables({"x_mandrel_offset":new_offset});
//                fabmo.setConfig.opensbp.variables({"x_mandrel_offset":new_offset},function(err){
//                    if(err){
//                        fabmo.notify("error",err);
//                        return;
//                    }
//                    fabmo.notify("success","the configuration file have been successfully loaded !");
//                });
//   //cfg.opensbp.variables.x_mandrel_offset = $("#pref-input-x-mandrel-offset");
// }

// Update & SAVE VALUES
$("#pref-save-1").click(function(evt) {
    do_save_prefs();
});
$("#pref-save-2").click(function(evt) {
    do_save_prefs();
});

function do_save_prefs () {
  var new_x_mandrel_offset = "$x_mandrel_offset = " + validateInput($("#pref-input-x-mandrel-offset"));
  var new_z_mandrel_offset = "$z_mandrel_offset = " + validateInput($("#pref-input-z-mandrel-offset"));
  var new_y_mandrel_front_touch = "$y_mandrel_front_touch = " + validateInput($("#pref-input-y-mandrel-front-touch"));
  var new_z_topMandrel_toCenter = "$z_topMandrel_toCenter = " + validateInput($("#pref-input-z-topmandrel-tocenter"));
  var new_y_blank_1_front = "$y_blank_1_front = " + validateInput($("#pref-input-y-blank-1-front"));
  var new_y_blank_1_back = "$y_blank_1_back = " + validateInput($("#pref-input-y-blank-1-back"));
  var new_y_blank_2_front = "$y_blank_2_front = " + validateInput($("#pref-input-y-blank-2-front"));
  var new_y_blank_2_back = "$y_blank_2_back = " + validateInput($("#pref-input-y-blank-2-back"));
  var new_file_Y_coordinates = "$file_Y_coordinates = " + validateInput($("#pref-input-file-y-coordinates"));
  var new_z_penpark = "$z_penpart = " + validateInput($("#pref-input-z-penpark"));
  var new_y_penpark = "$y_penpart = " + validateInput($("#pref-input-y-penpark"));
  var new_x_penpark = "$x_penpart = " + validateInput($("#pref-input-x-penpark"));

  fabmo.runSBP(new_x_mandrel_offset + "\n" + new_z_mandrel_offset + "\n" + new_y_mandrel_front_touch + "\n" + new_z_topMandrel_toCenter + "\n" + new_y_blank_1_front + "\n" + new_y_blank_1_back + "\n" + new_y_blank_2_front + "\n" + new_y_blank_2_back + "\n" + new_file_Y_coordinates + "\n" + new_z_penpark + "\n" + new_x_penpark + "\n" + new_y_penpark + "\n");
}

// Reset Display Variables (to existing) on CANCEL
$("#pref-cancel").click(function(evt) {
  fabmo.getConfig(function(err, cfg) {
    if (cfg.opensbp.variables.z_mandrel_offset) {
      $('#pref-input-z-mandrel-offset').val(cfg.opensbp.variables.z_mandrel_offset);
    }
    if (cfg.opensbp.variables.x_mandrel_offset) {
      $('#pref-input-x-mandrel-offset').val(cfg.opensbp.variables.x_mandrel_offset);
    }
    if (cfg.opensbp.variables.y_mandrel_front_touch) {
      $('#pref-input-y-mandrel-front-touch').val(cfg.opensbp.variables.y_mandrel_front_touch);
    }
    if (cfg.opensbp.variables.z_topMandrel_toCenter) {
      $('#pref-input-z-topmandrel-tocenter').val(cfg.opensbp.variables.z_topMandrel_toCenter);
    }  
    if (cfg.opensbp.variables.y_blank_1_front) {
      $('#pref-input-y-blank-1-front').val(cfg.opensbp.variables.y_blank_1_front);
    }  
    if (cfg.opensbp.variables.y_blank_1_back) {
      $('#pref-input-y-blank-1-back').val(cfg.opensbp.variables.y_blank_1_back);
    }  
    if (cfg.opensbp.variables.y_blank_2_front) {
      $('#pref-input-y-blank-2-front').val(cfg.opensbp.variables.y_blank_2_front);
    }  
    if (cfg.opensbp.variables.y_blank_2_back) {
      $('#pref-input-y-blank-2-back').val(cfg.opensbp.variables.y_blank_2_back);
    }  
    if (cfg.opensbp.variables.file_Y_coordinates) {
      $('#pref-input-file-y-coordinates').val(cfg.opensbp.variables.file_Y_coordinates);
    }  
    if (cfg.opensbp.variables.z_penpark) {
      $('#pref-input-z-penpark').val(cfg.opensbp.variables.z_penpark);
    }  
    if (cfg.opensbp.variables.x_penpark) {
      $('#pref-input-x-penpark').val(cfg.opensbp.variables.x_penpark);
    }  
    if (cfg.opensbp.variables.y_penpark) {
      $('#pref-input-y-penpark').val(cfg.opensbp.variables.y_penpark);
    }  
  });
});

// Re-Read All Values -- Some may have changed
$("#tab-preferences-link").click(function(evt) {
  fabmo.getConfig(function(err, cfg) {
    if (cfg.opensbp.variables.z_mandrel_offset) {
      $('#pref-input-z-mandrel-offset').val(cfg.opensbp.variables.z_mandrel_offset);
    }
    if (cfg.opensbp.variables.x_mandrel_offset) {
      $('#pref-input-x-mandrel-offset').val(cfg.opensbp.variables.x_mandrel_offset);
    }
    if (cfg.opensbp.variables.y_mandrel_front_touch) {
      $('#pref-input-y-mandrel-front-touch').val(cfg.opensbp.variables.y_mandrel_front_touch);
    }
    if (cfg.opensbp.variables.z_topMandrel_toCenter) {
      $('#pref-input-z-topmandrel-tocenter').val(cfg.opensbp.variables.z_topMandrel_toCenter);
    }  
    if (cfg.opensbp.variables.y_blank_1_front) {
      $('#pref-input-y-blank-1-front').val(cfg.opensbp.variables.y_blank_1_front);
    }  
    if (cfg.opensbp.variables.y_blank_1_back) {
      $('#pref-input-y-blank-1-back').val(cfg.opensbp.variables.y_blank_1_back);
    }  
    if (cfg.opensbp.variables.y_blank_2_front) {
      $('#pref-input-y-blank-2-front').val(cfg.opensbp.variables.y_blank_2_front);
    }  
    if (cfg.opensbp.variables.y_blank_2_back) {
      $('#pref-input-y-blank-2-back').val(cfg.opensbp.variables.y_blank_2_back);
    }  
    if (cfg.opensbp.variables.file_Y_coordinates) {
      $('#pref-input-file-y-coordinates').val(cfg.opensbp.variables.file_Y_coordinates);
    }  
    if (cfg.opensbp.variables.z_penpark) {
      $('#pref-input-z-penpark').val(cfg.opensbp.variables.z_penpark);
    }  
    if (cfg.opensbp.variables.x_penpark) {
      $('#pref-input-x-penpark').val(cfg.opensbp.variables.x_penpark);
    }  
    if (cfg.opensbp.variables.y_penpark) {
      $('#pref-input-y-penpark').val(cfg.opensbp.variables.y_penpark);
    }  
  });
});


