function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5scvMOwZl1z":
        Script1();
        break;
      case "6BFEelyYN0B":
        Script2();
        break;
      case "5Y8Suf6VmiM":
        Script3();
        break;
      case "5zuXI4L7eqx":
        Script4();
        break;
      case "63CxrWVqmYZ":
        Script5();
        break;
      case "6ErYPdYOQXp":
        Script6();
        break;
      case "6fVn6EvlCmP":
        Script7();
        break;
      case "6f7NMuPmGbk":
        Script8();
        break;
      case "6i8R3ymYlPO":
        Script9();
        break;
      case "6RJm9k6coER":
        Script10();
        break;
      case "5efSiBuC9Se":
        Script11();
        break;
      case "6iaRwPGifBv":
        Script12();
        break;
      case "6bzI9A5ZveE":
        Script13();
        break;
      case "5WOhrWfbHaf":
        Script14();
        break;
  }
}

function Script1()
{
  var player = GetPlayer(); 
var data = {}; 
data.api_type = 'Launch'; 
submit_result(data); 
MyQuestAndroid.showingScormFirstPage(); 
}

function Script2()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 1; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script3()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q1Point = 16; // Change this to score for this question
data.q_no = 1; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script4()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 2; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script5()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q2Point = 16; // Change this to score for this question
data.q_no = 2; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script6()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 3; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script7()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q3Point = 16; // Change this to score for this question
data.q_no = 3; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script8()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 4; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script9()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q4Point = 16; // Change this to score for this question
data.q_no = 4; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script10()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 5; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script11()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q5Point = 16; // Change this to score for this question
data.q_no = 5; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script12()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 6; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script13()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q6Point = 16; // Change this to score for this question
data.q_no = 6; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script14()
{
  var player = GetPlayer(); 
var data = {}; 
data.api_type = 'End'; 
submit_result(data); 
MyQuestAndroid.showingScormLastPage();

}

