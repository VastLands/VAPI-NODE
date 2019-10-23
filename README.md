# VAPI
VastLands API Wrapper - Written in Node.JS

##Requirements
Node.JS >= `8.11.2`

##How to use? 🎈
Run `npm install vapi`

Lets' get started now:

```javascript
 /*
  * The VAPI accepts a user agent parameter, which is required, 
  * Also, ensure it's less or equal to 256 characters
  * Or an exception will be thrown...
  */
  
let vapi = require("vapi")("My Epic Bot")
```

Now you can make use of the `vapi`

```javascript
 /*
  * The FetchProfile accepts the player username as the parameter! 
  */

vapi.FetchProfile("Suremeoz").then(profile=> {
    console.log(profile)
})
```

But ***Wait***, before you do anything, let's make sure the username is valid, and exists. 
We've made your job easier by having this useful method you can call.
```javascript
vapi.FetchProfile("Suremeoz").then(profile=> {
    if (profile.Valid) {
        // Continue    
    } else {
        // Handle Error
    }
})
```

Now you can utilize all those juicy variables in the `profile` object. 

###Real Cool Examples💣

Get a players current rank

```javascript
let vapi = require("vapi")("my epic bot")

vapi.FetchProfile("Suremeoz").then(profile=> {
    if(profile.Valid) {
        console.log(`${profile.Username}'s rank is ${profile.Rank}`)
    } else {
        console.log(profile.Message)
    }  
})
```

###Help & inquiries
If you have any questions, or wish to suggest something, open a issue template and we'll get back to you
as soon as possible!