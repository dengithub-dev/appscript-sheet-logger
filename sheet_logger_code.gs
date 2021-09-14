  var editedSheet = e.source.getActiveSheet(); //get activesheet
  var editedCell = e.range; //get range
  var row = editedCell.getRow(); //get edited cell
  var date = Utilities.formatDate(new Date(), "GMT+8", "MM-dd-yy H:mm:ss a"); //format the date
  var get_active_user = Session.getActiveUser().getEmail(); //get the current user
  var ss = SpreadsheetApp.openById("spreadsheet id").getSheetByName("name of sheet"); //specify the name of the sheet where you will append the logs
  ss.appendRow([date, get_active_user,editedSheet.getName(),editedCell.getA1Notation(), e.value]); //append the data
