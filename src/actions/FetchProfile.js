let fetch = require("node-fetch")
module.exports = function (endpoint, useragent) {
    return async (username) => {
        try {
            let requestError = null
            let request = await fetch(`${endpoint}/profile/${username}`, {
                method: "GET",
                headers: {
                    "user-agent": useragent
                }
            }).catch(err=> {
                requestError = err
            })
            if (requestError) {
                return {
                    Valid: false,
                    Message: "Error making a web request to VL endpoint: " + endpoint,
                    Error: err.toString()
                }
            } else {
                try {
                    let response = await request.text()
                    let parsed = await JSON.parse(response)
                    if (parsed.Status) {
                        parsed.Profile.Valid = true
                        return parsed.Profile
                    } else {
                        return {
                            Valid: false,
                            Message: parsed.Statistics
                        }
                    }
                } catch(err) {
                    return {
                        Valid: false,
                        Message: "Error parsing response text",
                        Error: err.toString()
                    }
                }
            }
        } catch(err) {
            return {
                Valid: false,
                Message: "Error making a web request to VL endpoint: " + endpoint,
                Error: err.toString()
            }
        }
    }
}