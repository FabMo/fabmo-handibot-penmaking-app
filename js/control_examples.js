/*
* MOVE TOOL EXAMPLE, fyi
* 
* Very simple positioning script.  When the user clicks the button, the tool is
* moved to the specified position.  (Provided that position is valid)
* 
*
*/

// When the go button is pressed, validate the inputs and move the tool (if valid)
$("#nav-go").click(function(evt) {
  var x = validateInput($("#ctrl-xinput"));
  var y = validateInput($("#ctrl-yinput"));
  var z = validateInput($("#ctrl-zinput"));
  if((x !== null) && (y !== null) && (z !== null)) {
      var gcode = "G0 X" + x + " Y" + y + " Z" + z;
      fabmo.runGCode(gcode);
  } else {
      alert("Position specified is invalid: " + x + "," + y + "," + z);
  }
  evt.preventDefault();
});


// Update the position display every time a status report is recieved
fabmo.on('status', function(status) {
  $('#ctrl-xdisplay').val(status.posx);
  $('#ctrl-ydisplay').val(status.posy);
  $('#ctrl-zdisplay').val(status.posz);
});

fabmo.requestStatus();


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
