let fns = require("./../utilities/fns");
let axios = require("axios");
// let MockAdapter = require("axios-mock-adapter");

// let mock = new MockAdapter(axios);
// mock.onGet("/users").reply(200, {
//     users: [{name: "mira", age: 18}]
// })


describe("Testing the password stuff", () => {
    test("proper username (mirajones) returns true", () => {
        let result = fns.usernameCheck("mirajones");
        expect(result).toBeTruthy();
    })
    test("fewer than 6 characters fails", () => {
        var result = fns.usernameCheck("mira");
        expect(result).toBeFalsy();
    })
    test("no spaces", () => {
        var result = fns.usernameCheck("mira jones");
        expect(result).toBeFalsy();
    })
    test.only("async test", () => {
        console.log("Stuff")
        return axios.get("https://joes-autos.herokuapp.com/api/vehicles").then(res => {
                expect(res.data.length).toBe(20)
            })
    })
    test("/users test", () => {
        return axios.get("/users").then(res => {
            console.log(res.data)
        })
    })
})