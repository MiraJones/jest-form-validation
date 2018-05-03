let fns = require("./../utilities/fns")

describe.skip("Form validation tests", () => {
    test("mira@mira.com should return true", () => {
        var result = fns.emailCheck("mira@mira.com")
        expect(result).toBeTruthy();
    })

})