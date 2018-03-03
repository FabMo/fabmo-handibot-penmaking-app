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


$("#pref-save").click(function(evt) {
	var new_x_mandrel_offset = "$x_mandrel_offset = " + validateInput($("#pref-input-x-mandrel-offset"));
  var new_z_mandrel_offset = "$z_mandrel_offset = " + validateInput($("#pref-input-z-mandrel-offset"));

  var new_z_plate_thickness_str = "$ZZeroPlateThickness = " + validateInput($("#pref-input-plate-offset"));
  var new_x_backoff_str = "$x_backoff = " + validateInput($("#pref-input-x-pull"));
  var new_y_backoff_str = "$y_backoff = " + validateInput($("#pref-input-y-pull"));
  var new_z_backoff_str = "$z_backoff = " + validateInput($("#pref-input-z-pull"));
  var new_x_park_str = "$x_park = " + validateInput($("#pref-input-x-park"));
  var new_y_park_str = "$y_park = " + validateInput($("#pref-input-y-park"));
  var new_z_park_str = "$z_park = " + validateInput($("#pref-input-z-park"));
  
  fabmo.runSBP(new_x_mandrel_offset + "\n");
//  fabmo.runSBP(new_z_mandrel_offset + "\n" + new_z_plate_thickness_str + "\n" + new_x_backoff_str + "\n" + new_y_backoff_str + "\n" + new_z_backoff_str + "\n" + new_x_park_str  + "\n" + new_y_park_str  + "\n" + new_z_park_str);
});

// Or, CANCEL
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
  });
});

// Make Sure Values that could have changed are updated
$("#tab-preferences-link").click(function(evt) {
  fabmo.getConfig(function(err, cfg) {
    if (cfg.opensbp.variables.z_mandrel_offset) {
      $('#pref-input-z-mandrel-offset').val(cfg.opensbp.variables.z_mandrel_offset);
    }
console.log("reading it here **********");
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
  });
});


