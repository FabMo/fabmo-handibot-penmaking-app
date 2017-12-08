function validateInput(target) {
  var f = parseFloat(target.val());
  if(isNaN(f) || f === undefined) {
      target.parent().removeClass('has-success');
      target.parent().addClass('has-error');
      return null;
  } else {
      target.parent().removeClass('has-error');
      target.parent().addClass('has-success');
      return f;
  }
}

// // Get Needed Values ... initial read in
// fabmo.getConfig(function(err, cfg) {
// 	if (cfg.opensbp.variables.current_cutter_Zoffset) 
//     {$('#pref-input-cur-zlength').val(cfg.opensbp.variables.current_cutter_Zoffset);
//   }
//   if (cfg.opensbp.variables.zero_plate_adder) {
//     $('#pref-input-plate-offset').val(cfg.opensbp.variables.zero_plate_adder);
//   }
//   if (cfg.opensbp.variables.x_backoff) 
//     {$('#pref-input-x-pull').val(cfg.opensbp.variables.x_backoff);
//   }
//   if (cfg.opensbp.variables.y_backoff) {
//     $('#pref-input-y-pull').val(cfg.opensbp.variables.y_backoff);
//   }  
//   if (cfg.opensbp.variables.x_park) {
//     $('#pref-x-park').val(cfg.opensbp.variables.x_park);
//   }  
//   if (cfg.opensbp.variables.y_park) {
//     $('#pref-y-park').val(cfg.opensbp.variables.y_park);
//   }  
//   if (cfg.opensbp.variables.z_park) {
//     $('#pref-z-park').val(cfg.opensbp.variables.z_park);
//   }  
// });

// Update & SAVE Values as Needed
$("#pref-save").click(function(evt) {
	var new_cutter_str = "$current_cutter_Zoffset = " + validateInput($("#pref-input-cur-zlength"));
  var new_z_plate_thickness_str = "$ZZeroPlateThickness = " + validateInput($("#pref-input-plate-offset"));
  var new_x_backoff_str = "$x_backoff = " + validateInput($("#pref-input-x-pull"));
  var new_y_backoff_str = "$y_backoff = " + validateInput($("#pref-input-y-pull"));
  var new_z_backoff_str = "$z_backoff = " + validateInput($("#pref-input-z-pull"));
  var new_x_park_str = "$x_park = " + validateInput($("#pref-input-x-park"));
  var new_y_park_str = "$y_park = " + validateInput($("#pref-input-y-park"));
  var new_z_park_str = "$z_park = " + validateInput($("#pref-input-z-park"));
  
  fabmo.runSBP(new_cutter_str + "\n" + new_z_plate_thickness_str + "\n" + new_x_backoff_str + "\n" + new_y_backoff_str + "\n" + new_z_backoff_str + "\n" + new_x_park_str  + "\n" + new_y_park_str  + "\n" + new_z_park_str);
});

// Or, CANCEL
$("#pref-cancel").click(function(evt) {
  fabmo.getConfig(function(err, cfg) {
    if (cfg.opensbp.variables.current_cutter_Zoffset) 
      {$('#pref-input-cur-zlength').val(cfg.opensbp.variables.current_cutter_Zoffset);
    }
    if (cfg.opensbp.variables.ZZeroPlateThickness) {
      $('#pref-input-plate-offset').val(cfg.opensbp.variables.ZZeroPlateThickness);
    }
    if (cfg.opensbp.variables.x_backoff) 
      {$('#pref-input-x-pull').val(cfg.opensbp.variables.x_backoff);
    }
    if (cfg.opensbp.variables.y_backoff) {
      $('#pref-input-y-pull').val(cfg.opensbp.variables.y_backoff);
    }  
    if (cfg.opensbp.variables.z_backoff) {
      $('#pref-input-z-pull').val(cfg.opensbp.variables.z_backoff);
    }  
    if (cfg.opensbp.variables.x_park) {
      $('#pref-x-park').val(cfg.opensbp.variables.x_park);
    }  
    if (cfg.opensbp.variables.y_park) {
      $('#pref-y-park').val(cfg.opensbp.variables.y_park);
    }  
    if (cfg.opensbp.variables.z_park) {
      $('#pref-z-park').val(cfg.opensbp.variables.z_park);
    }  
  });
  $('a[href="#tab-startfire"]').tab('show');
});

// Make Sure Values that could have changed are updated
$("#preference-tab-link").click(function(evt) {
  fabmo.getConfig(function(err, cfg) {
    if (cfg.opensbp.variables.current_cutter_Zoffset) 
      {$('#pref-input-cur-zlength').val(cfg.opensbp.variables.current_cutter_Zoffset);
    }
    if (cfg.opensbp.variables.ZZeroPlateThickness) {
      $('#pref-input-plate-offset').val(cfg.opensbp.variables.ZZeroPlateThickness);
    }
    if (cfg.opensbp.variables.x_backoff) 
      {$('#pref-input-x-pull').val(cfg.opensbp.variables.x_backoff);
    }
    if (cfg.opensbp.variables.y_backoff) {
      $('#pref-input-y-pull').val(cfg.opensbp.variables.y_backoff);
    }  
    if (cfg.opensbp.variables.z_backoff) {
      $('#pref-input-z-pull').val(cfg.opensbp.variables.z_backoff);
    }  
    if (cfg.opensbp.variables.x_park) {
      $('#pref-x-park').val(cfg.opensbp.variables.x_park);
    }  
    if (cfg.opensbp.variables.y_park) {
      $('#pref-y-park').val(cfg.opensbp.variables.y_park);
    }  
    if (cfg.opensbp.variables.z_park) {
      $('#pref-z-park').val(cfg.opensbp.variables.z_park);
    }  
  });
});


/*
$("#job-go").click(function(evt) {
    var cx = validateInput($("#job-input-cx"));
    var cy = validateInput($("#job-input-cy"));
    var d = validateInput($("#job-input-d"));
    var zpullup = validateInput($("#job-input-zpullup"));
    var depth = validateInput($("#job-input-depth"));
    var seg_size = validateInput($("#job-input-segsize"));
    var feedrate = validateInput($("#job-input-feedrate"));
    var passdepth = validateInput($("#job-input-passdepth"));

    code = makeCircle(cx,cy,d,zpullup,depth,seg_size,feedrate, passdepth);
    fabmo.submitJob(code, {filename : 'example-circle.nc',
                                    name : d + '" Diameter Circle',
                                    description : d + '" diameter circle centered at ' + cx + ',' + cy + ' at a depth of ' + depth + '"' 
    })
    evt.preventDefault();
});
*/


/*function updateSpeedsFromEngineConfig() {
    var temp = 0;
    fabmo.getConfig(function(err, data) {
      $('#formatted_movexy_speed').val(data.opensbp.movexy_speed.toFixed(2));
      $('#formatted_movez_speed').val(data.opensbp.movez_speed.toFixed(2));
    // note that jog speeds are handled differently than move speeds (they are from G2 velocity max)
      temp = data.driver.xvm / 60;
      $('#formatted_jogxy_speed').val(temp.toFixed(2));
      temp = data.driver.zvm / 60;
      $('#formatted_jogz_speed').val(temp.toFixed(2));
    });
}
*/
