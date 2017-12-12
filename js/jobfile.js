// Load a Sample File

function DoJobFile (jobPath) {
  var sbp = "";
  //var jobPath = "";
  
  jQuery.get(jobPath, function(data) {
      sbp += data;
    })
    .done(function() {
      jobPath = jobPath.replace('jobs/', '');
      jobPath = jobPath.replace('.sbp', '');
    // sbp += 'end\n';
    // sbp += "'a FabMo load\n";
      console.log("job submitted");
      fabmo.submitJob({
        file: sbp,
        filename: jobPath + '.sbp',
        name: jobPath,
        description: "App Job: " + jobPath
      });
    })
}