module.exports = (useragent) => {
    let endpoint = "https://api.vastlands.net"
    if (useragent && useragent != "") {
        useragent = `VAPI_NODE-${useragent}`
        if (useragent.length > 256) {
            return {
                Valid: false,
                Message: "Useragent length > 256"
            }
        } else {
            return require("./src/module")(endpoint, useragent)
        }

    } else {
        return {
            Valid: false,
            Message: "No useragent supplied"
        }
    }
}