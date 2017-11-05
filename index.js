module.exports = {
    /**
     * @param {string} url - The end point
     * @param {boolan} asynchronous - Synchronous or asynchronous request
     */
    get: function() {
        var args = (arguments === 1 ? [arguments[0]] : Array.apply(null, arguments))
        var url = args.shift()
        var asynchronous = (args.length > 0 ? args.shift() : true)

        httpRequest = new XMLHttpRequest()

        if(!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance')
            return false
        }
        httpRequest.onreadystatechange = alertContents
        httpRequest.open('GET', url, asynchronous)
        httpRequest.send()
    }
}

function alertContents() {
    try {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                alert(httpRequest.responseText)
            } else {
                alert('There was a problem with the request.')
            }
        }
    } catch (e) {
         alert('Caught Exception: ' + e.description);
    }
}
