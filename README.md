

<h1> challenge <h1>


I assumed that the json file is uploading with in this app the url of json file is "basicURL/src/JsonFile/artist.json"
I worked only on get method of "basicURL/show/artist.search&artist=nameofartist"

for developer who work on this app should:
first do-- npm i
second do-- npm run dev
for production should do-- npm start

<h2> how it works <h2>
 it reads data from json file via readJSON function and file URL via fs-extra readartist function. then check if there is  query in URL and artistname in query.
 after that it search in Json file for that artistname. 
 if found object with that artistname, will retrun the array of that objects.
 if not will return the array of names of artist.
 if error happened then error handler shows "An error occured on our side" with statue code 500
 
