function blankInputChecker(inputText) {
    if(inputText.length == 0) {
        return true;
    }
    return false;
}

function urlChecker(inputText) {
    const pattern = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/
    return pattern.test(inputText);
}

export { 
    blankInputChecker, 
    urlChecker 
}
