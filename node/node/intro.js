const register  = (userName) => {
    console.log('username => ', userName);
};

const login  = (userName, password) => {
    console.log('username => ', userName);
    console.log('password =>', password);
};

module.exports = {
    register,
    login
}