const BaseCommand = require('../base/BaseCommand');
const User = require('./User');
const toUserDto = require('./toUserDto');

class UserRead extends BaseCommand {
    static validationRules() {
        return {
            login: 'required',
        };
    }

    async execute(params) {
        const { login } = params;
        const user = await User.getUser(login);
        return toUserDto(user);
    }
}

module.exports = UserRead;
