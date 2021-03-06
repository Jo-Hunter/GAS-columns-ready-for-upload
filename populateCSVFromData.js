function populateCSVFromData() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('form downloads');
  var targetSheet = ss.getSheetByName('uploadCSV');
  var alreadyUploadedToCSV = "uploadedToCSV";
  
  //all data except headings
  var dataRange = dataSheet.getRange(2, 1, dataSheet.getLastRow()-1, dataSheet.getMaxColumns());
  
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
    
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var firstName = row[1];
    var lastName = row[2];
    var organisation = row[3];
    var address1 = row[7];
    var address2 = row[8];
    var city = row[9];
    var state = row[10];
    var country = row[11];
    var postcode = row[12];
    var email = row[18];
    var phone = row[19];
    var done = row[20];
    
    //if it has't already been zapped
    if(done != alreadyUploadedToCSV){
      //set values to import into which columns
      var values = ["", email, firstName, lastName, organisation, "", firstName, lastName, address1, address2, city, postcode, state, country, email, phone, firstName, lastName, address1, address2, city, postcode, state, country, email, phone];
    
      //add row on the end   
      targetSheet.appendRow(values);
      //add value to data sheet to indicate it has already been done
      dataSheet.getRange((2+i), dataSheet.getLastColumn()).setValue(alreadyUploadedToCSV);
    }  
 }
    
    //clear data that has been done. No. could result in 2 forms being done and the first is cleared when the second trigger runs.
  
    //then how to set a trigger trigger set for every edit. test to see if one mass edit only triggers once as expected.
    
    //then apply to real one
  
    //username issue
    
    
  //}
