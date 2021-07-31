function translate_word(word) {
    // checks if the word ends with "ooo"
    if ( word.endsWith("ooo") ) {
        // removes the last 3 characters (in this case "ooo") of the string
        return word.substring(0, word.length - 3)
    }
}


function output_translation() {
    document.getElementById("output").innerHTML = translate_word(document.getElementById("input").value)
}