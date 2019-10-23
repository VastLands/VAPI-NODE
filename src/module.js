

module.exports = (baseurl, useragent) => {
    return {
        version: "1.0.0",
        FetchProfile: require("./actions/FetchProfile")(baseurl, useragent)
    }
}