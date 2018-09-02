const BaseCommand = require('../base/BaseCommand');
const Exception = require('../base/Exception');
const User = require('./User');
const toUserDto = require('./toUserDto');

class UserRemove extends BaseCommand {
    static validationRules() {
        return {
            login: 'required',
            admin: ['required'],
        };
    }

    async execute(params) {
        const { login, admin } = params;
        if (admin) {
            const user = await User.getUser(login);
            await User.removeUser(user);
            return toUserDto(user);
        }
        throw new Exception({
            code: 'PERMISSIONS_ERROR',
            fields: { admin },
            message: 'Not an admin',
        });
    }
}

module.exports = UserRemove;
