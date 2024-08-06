window.onload = function() {
    header = document.getElementById("title");
    subText = document.getElementById("lead");
    sendForm = document.querySelector("form");


    sendForm.onsubmit = function(e) {
        var url = this.action; // the script where you handle the form input.
        $.ajax({
            type: "POST",
            url: url,
            data: $(sendForm).serialize(), // serializes the form's elements.
            error: function(data) {
                $(header).animate({
                    opacity: 0
                }, 250, function() {
                    header.innerText = "Form Not Active Yet :( Stay On Touch !";
                    $(header).animate({
                        opacity: 1
                    }, 70)
                });
                $(subText).animate({
                    opacity: 0
                }, 250, function() {
                    subText.innerText = "Multi Submissions will be eliminated for each contest...";
                    $(subText).animate({
                        opacity: 1
                    }, 70)
                });
                $(sendForm).animate({
                    opacity: 0.2
                }, 250);
            }
        });
        e.preventDefault();
    };
}