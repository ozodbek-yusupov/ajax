// $.ajax
// $.get
// .load()

$(() => {
    $(".home").click(() => {
        $("section").load("./routes/home.html")
    })
    $(".courses").click(() => {
        $("section").load("./routes/courses.html")
    })
    $(".contact").click(() => {
        $("section").load("./routes/contact.html")
    })
})