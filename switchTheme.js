
/** **function to switch themes**
 * 
 * takes a string argument, that should be one of the following ["No Theme", "Footy", "Ballet"]
 * 
 * switches the stylesheet accordingly in (or removes it from if no theme) the document's head section
 * 
 * @param {string} theme 
 */
function switchTheme(theme) { // take case as arg

    const mascPath = "masc.css"
    const femmePath = "femme.css"

    if (theme == "Footy") {
        var cssPath = mascPath
    } else if (theme == "Ballet") {
        var cssPath = femmePath
    } else {
        var cssPath = null
    }

    // check if there is a link to a stylesheet in the head
    var allLinks = document.querySelector('link')
    if (allLinks == null) {
        var containsPath = false
    } else {
        var containsPath = true
    }

    // if so clear it
    if (containsPath) {
        document.head.removeChild(allLinks)
    }

    // if theme is given and not no theme
    if (cssPath) {
        // put corresponding link into head
        document.head.innerHTML += `<link rel="stylesheet" href=${cssPath}>`;
    }
}
