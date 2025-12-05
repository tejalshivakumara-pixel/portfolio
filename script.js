$(document).ready(function() {

    // ⚡ Button Click → Navigate to Resume
    $("#viewResumeBtn").click(function() {
        window.location.href = "resume.html";
    });

    // ⚡ Hover Effect on Buttons
    $(".btn").hover(
        function() { $(this).css("background", "#fff").css("color", "#000"); },
        function() { $(this).css("background", "yellow").css("color", "#000"); }
    );

    // ⚡ Form Submit → Show Message
    $("form").submit(function(e) {
        e.preventDefault(); // prevents refresh
        alert("Thank you! Your message has been submitted.");
        $(this).trigger("reset"); // clear after submit
    });

    // ⚡ Smooth Scroll to Top
    $("footer").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // ⚡ Active Menu Highlight
    let page = window.location.pathname.split("/").pop();
    $("nav a").each(function() {
        if($(this).attr("href") === page) {
            $(this).addClass("active-link");
        }
    });

});
