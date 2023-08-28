function searchKeywordsInText() {
    
    const resultsDiv = document.getElementById("results");
    while (resultsDiv.firstChild) {
		resultsDiv.removeChild(resultsDiv.lastChild);
    }

    const serachedKeyWords = document.getElementById('kwinput').value;
    const longText = document.getElementById('ltinput').value;
    const kwRegex = /mod_[a-z_]*/g;
    const keyWords = [...serachedKeyWords.matchAll(kwRegex)];

    for (i = 0; i < keyWords.length; i++ ){
        const searchedKW = keyWords[i][0];
        const searchLongTextRegex = new RegExp(`\\b${searchedKW}\\b`, "i");
        const matches = longText.match(searchLongTextRegex);
        const ifFound = matches ? "FOUND" : "NOT FOUND";
        const div = document.createElement("div");
        const node = document.createTextNode(keyWords[i][0] + ", " + ifFound);
        div.appendChild(node);
        resultsDiv.appendChild(div);
    }
   
  }