module.exports = {
    // ageCheck(age) {
    //     age = +age;
    //     if(typeof age !== 'number' || age > 110 || age < 18) return false;
    //     return true;
    // },
    emailCheck(email) {
        let symbolIndex = email.indexOf('@');
        if (symbolIndex === -1) return false;
        return true;
    },
    passwordCheck(password) {

    },
    usernameCheck(username) {
        let flag = true;
        if(!username) flag = false;
        if(username.length < 6) flag = false;
        if(username.indexOf(" ") !== -1) flag = false;
        return flag
    }
}