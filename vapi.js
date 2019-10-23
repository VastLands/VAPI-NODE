module.exports = (useragent) => {
    let endpoint = "https://api.vastlands.net"
    if (useragent && useragent != "") {
        useragent = `VAPI_NODE-${useragent}`
        return require("./src/module")(endpoint, useragent)
    }
}