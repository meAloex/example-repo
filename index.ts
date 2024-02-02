import { EventsSDK } from "github.com/octarine-public/wrapper/index"

EventsSDK.on("GameStarted", () => {
	console.log("Hello world!")
})

EventsSDK.on("GameStarted", () => {
	console.log("AGaaaa!")
})
