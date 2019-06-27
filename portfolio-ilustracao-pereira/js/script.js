$("nav ul li a").click(function (event) {
    event.preventDefault();
    ajaxPage(event.target.href);

    async function ajaxPage(url) {
        const pageResponse = await $.ajax(url)
        const pageText = await pageResponse;
        replaceContent(pageText);
    }

    function replaceContent(newText) {
        const newHtml = document.createElement("div");
        newHtml.innerHTML = newText;

        const oldContent = document.querySelector(".container-geral");
        const newContent = newHtml.querySelector(".container-geral");

        oldContent.innerHTML = newContent.innerHTML;
    }

    $(".container-geral").hide().fadeIn("slow");


})
