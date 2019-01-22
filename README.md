download and install postman
register a user by entering username and password and by 
going to the url https://localhost:3000/api/users and doing a post comment on it 
then register client by entering information like name, id, secret and doing a post command on url https://localhost:3000/api/clients
then visit this url http://localhost:3000/api/oauth2/authorize?client_id=this_is_my_id&response_type=code&redirect_uri=http://localhost:3000
on your browser(in this url client_id may vary user to user)
then click on allow button on the page which appears after accessing this url
copy the code from the url which comes after clicking allow button
paste this in postman for accessing the application through this url
