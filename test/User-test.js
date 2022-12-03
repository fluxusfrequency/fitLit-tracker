import { expect } from "chai";
const User = require('../src/User');

describe('User', () => {
    let user;
    let userData;
    beforeEach(() => {
        userData = {
            id: 1,
            name: "Luisa Hane",
            address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
            email: "Diana.Hayes1@hotmail.com",
            strideLength: 4.3,
            dailyStepGoal: 10000,
            friends: [16, 4, 8]
        };
        user = new User(userData);
    });

    it.skip('should be a function', () => {
        expect(User).to.be.a('function');
    });
    
    it.skip('should be an instance of user', () => {
        expect(user).to.be.an.instanceOf(User);
    });
});