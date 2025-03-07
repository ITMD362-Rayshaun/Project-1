function submitApplication() {
    event.preventDefault();

    var form = document.getElementById("signupForm");
    var teamNameInput = document.getElementById("teamName");

    var teamName = teamNameInput.value;
    alert("Thank you for signing up, " + teamName + "!");

    form.reset();
};