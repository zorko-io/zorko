const BaseCommand = require('../base/BaseCommand');
const User = require('./User');
const toUserDto = require('./toUserDto');

class UserListRead extends BaseCommand {
    static validationRules() {
        return {
            limit: ['positive_integer', { default: 10 }, { max_number: 30 }],
            offset: ['positive_integer', { default: 0 }],
        };
    }

    async execute(params) {
        const { limit, offset } = params;
        const users = await User.getUsers({ limit, offset });
        return users.map(toUserDto);
    }
}

module.exports = UserListRead;
