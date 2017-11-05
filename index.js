module.exports = {
    get: function(id,url,isAsync) {
        console.log(isAsync)
        var isAsync = isAsync === undefined ? || true
        console.log(isAsync)
        var httpRequest

        document.getElementById(id).addEventListener('click', makeRequest)

        var makeRequest = function(options) {
            httpRequest = new XMLHttpRequest()

            if(!httpRequest) {
                console.log('Giving up :( Cannot create an XMLHTTP instance')
                return false
            }

            httpRequest.onreadystatechange = logContents
            httpRequest.open(GET, url, isAsync)
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
