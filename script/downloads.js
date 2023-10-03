var MyFiles = [
    {
        docName: "Docx Resume",
        image: BASE_URL + "Assets/0001.jpg",
        link: BASE_URL + "Assets/Resume_Pratik_Kumar_Panda.docx",
        display: "1",
    },
    {
        docName: "Figma Resume",
        image: BASE_URL + "Assets/PratikPandaWindows.png",
        link: BASE_URL + "Assets/PratikPandaWindows.png",
        display: "1",
    },
];

$.each(MyFiles, function(i){
    var stringMyFiles = `
    ${MyFiles[i].display == "1" ? `
        <div class="divFileDownload">
            <a href="` + MyFiles[i].link + `" download class="fileDownload">
                <img src="` + MyFiles[i].image + `">
                <div class="documentName">` + MyFiles[i].docName + `</div>
            </a>
        </div>
    ` : ``}
    `;
  
    $("#main__downloads").append(stringMyFiles);
});