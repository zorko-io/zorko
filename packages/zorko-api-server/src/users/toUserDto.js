module.exports = user => ({
    login: user.login,
    avatarUrl: user.avatarUrl ? user.avatarUrl : '',
    specs: user.specs ? user.specs : [],
});
