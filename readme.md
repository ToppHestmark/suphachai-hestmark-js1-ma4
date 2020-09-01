# Javascript1 - Module Assignment 4

# Question 1
Add the following HTML and CSS to a page called question1.html.

<form id="contactForm">
    <div>
        <input type="text" id="lastName" placeholder="First name (minimum 5 characters)" />
        <div id="lastNameError" class="error">Your last name must be at least 5 characters</div>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>
<style>
.error {
    color: red;
    display: none;
}
</style>
Write code that checks that the lastName input's value is at least 5 characters long when the form is submitted.

Show/hide the error message every time the validation runs.

# Question 2
Add the following to a page called question2.html:

Make a call to https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating.

For each game object in the results, create HTML that displays at least 3 properties from the objects. You can include an image property or leave it out.

Link from each game to question3.html and pass the id of each game in the querystring.

# Question 3
Retrieve the id paramater from the querystring and add it to the following URL: https://api.rawg.io/api/games/

Make a call to the API with the new URL and display at least 4 properties from the result.