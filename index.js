module.exports = {
    post: function() {
        var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments))
        console.log(args)
        var httpRequest

        document.getElementById(options.id).addEventlistener('click', makeRequest)

        var makeRequest = function(options) {
            httpRequest = new XMLHttpRequest()

            if(!httpRequest) {
                console.log('Giving up :( Cannot create an XMLHTTP instance')
                return false
            }

            httpRequest.onreadystatechange = logContents
            httpRequest.open(options.request, options.url, options.async)
            httpRequest.send()
        }

        var logContents = function() {
            if(httpRequest.readyState === XMLHttpRequest.DONE) {
                if(httpRequest.status === 200) {
                    console.log(httpRequest.responseText)
                } else {
                    console.log('There was a problem with the request.')
                }
            }
        }
    }
}
