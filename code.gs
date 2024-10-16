// doGet function to serve HTML content

function doGet() {

  return HtmlService.createHtmlOutputFromFile('index');

}


// Function to grab data from a Google Spreadsheet

function grabData(id, tab) {

  const ss = SpreadsheetApp.openById(id);

  const sheet = ss.getSheetByName(tab);

  const dataRange = sheet.getDataRange();

  const values = dataRange.getDisplayValues();

  values.shift()

  return values;

}


// Function to shuffle an array

function shuffleArray(arr) {

  const shuffled = arr.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

  }

  return shuffled;

}


// Function to return a random sample of data

function returnSamples(language, policy) {

  const values = grabData("1kN7WpajytXdaH6sbzgEjIRRyV2nCliisKmMFU7-Mb54","ST Data");

  var filteredValues = ""
  if(policy !== "All"){
    filteredValues = values.filter(arr => arr[3] !== "" && arr[4] === language && arr[5] === policy); // Filter out rows with empty comment and return rows by language and policy
  }else{
    filteredValues = values.filter(arr => arr[3] !== "" && arr[4] === language); // Filter out rows with empty comment and return rows by language
  }
  

  const shuffled = shuffleArray(filteredValues);

  const samples = shuffled.slice(0, 30); // Get the first 20 shuffled rows

  const cleanSamples = samples.map(row => [row[0], row[1], row[2], row[3]]); // Extract needed columns

  return JSON.stringify(cleanSamples);

}


// Function to submit form data to separate sheets based on agreement

function submitForm(data) {

  const email = Session.getActiveUser().getEmail();

  var id = ""

  const sheets = ["DUB", "LIS", "KRK", "KUL", "HYD"]

  sheets.forEach(sheet => {
    var currentSheet = grabData("1bd-HKzNnf-HRbJijfNPvR9oqc_lxnrfIuD3kyicapfs", sheet)
    if(currentSheet.flat().includes(email)){
        if(sheet === "DUB"){
          id = "1BTg9tHJcJscVvYZFSLaeYHJexnifZCFwiXH03yuPnBk";
        }else if(sheet === "LIS"){
          id = "1aStoTdyEy3GFSFRn66XTuAffqw6FBdHNuBzPdLYg3qs";
        }else if(sheet === "KRK"){
          id = "1otc0s6mKcAPkps6kfH94IxHDNpCC6LpcKCCSOhjLj-Y";
        }else if(sheet === "KUL"){
          id = "1g1ON3XlzT91IXFkDN9BQ1H7aSkEwmcH3-swAYosPdxM";
        }else if(sheet === "HYD"){
          id = "1WbZUGYJDu4HtHGWEFTabOxev9ZLQzzVXgEbE617k0VA";
        }
        
      }
  })
  if(id === ""){
    const mixed = SpreadsheetApp.openById("1bd-HKzNnf-HRbJijfNPvR9oqc_lxnrfIuD3kyicapfs").getSheetByName('Mixed');
    mixed.appendRow([email])
    id = "1O69x6xusE4QjgtbcCDhf1CH4ONUiMAQ0Twxm4GZC7UE"
  }


  const lock = LockService.getScriptLock();

  lock.waitLock(20000000);

     

  const sheetAgreements = SpreadsheetApp.openById(id).getSheetByName('Agreements');

  const sheetDisAgreements = SpreadsheetApp.openById(id).getSheetByName('Disagreements');

  const sheetTime = SpreadsheetApp.openById(id).getSheetByName('Time');

  
  var [a, d, tn, tp,fn,fp] = [0,0,0,0,0,0]

  const timestamp = new Date();

  const date = timestamp.getMonth() + 1 + "/" + timestamp.getDate() + "/" + timestamp.getFullYear();

 

  data.data.forEach(row => {
    var metrics = ""

    const agentAnswer = row[2].trim().toLowerCase()
    var qaAnswer = []

    if(row[3].includes("/")){
      qaAnswer = row[3].trim().toLowerCase().split("/")
    }else{
      qaAnswer.push(row[3].trim().toLowerCase())
    }
    if (qaAnswer.includes(agentAnswer)) {
      if(agentAnswer === "no violation"){
        metrics = "TN"
        tn += 1
      }else{
        metrics = "TP"
        tp += 1
      }
      a += 1
      sheetAgreements.appendRow([date, email, ...row, metrics]);

    } else {
      if(agentAnswer === "no violation"){
        metrics = "FN"
        fn += 1
      }else{
        metrics = "FP"
        fp += 1
      }
      d += 1
      sheetDisAgreements.appendRow([date, email, ...row, metrics]);

    }

  });
  var total = a+d

  sheetTime.appendRow([date, email, data.score ,data.time, total, tn, tp, fn, fp]);

  lock.releaseLock();


  let feedBack = "";

  if (parseInt(data.score) > 15) {

    feedBack = "Congratulations on your score, this shows that you are understanding the policies.";

  } else {

    feedBack = "It's a start, keep practicing, and learning the policies and soon you will be a policy expert.";

  }


  MailApp.sendEmail(email, "PracticePro 1.0 Score", "Thank you for taking the time to complete our practice test.\n\nYour score was " + data.score + ",\n\nYour Accuracy was "+ ((a / (a + d)).toFixed(2) * 100).toFixed(2) + "%\n\n" + feedBack, {name:"PracticePro", noReply:true});

}