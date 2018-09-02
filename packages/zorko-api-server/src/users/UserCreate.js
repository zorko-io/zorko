const BaseCommand = require('../base/BaseCommand');
const toUserDto = require('./toUserDto');
const Users = require('./User');

class UserCreate extends BaseCommand {
    static validationRules() {
        return {
            profile: ['required', {
                variable_object: [
                    'provider', {
                        local: {
                            provider: ['string', { default: 'local' }],
                            login: 'required',
                            password: ['string', 'required'],
                            email: ['email', 'required'],
                        },
                        github: {
                            provider: ['string', { default: 'github' }],
                            githubId: 'required',
                            avatarUrl: 'string',
                            login: 'required',
                            email: 'email',
                            firstName: 'string',
                            lastName: 'string',
                        },
                    },
                ],
            }],
        };
    }

    async execute(params) {
        const { profile: { provider } } = params;
        const profile = params.profile;
        let user;
        if (provider === 'local') {
            // TODO: throw error for production, because no email verification
            user = await Users.createUser(profile);
        } else if (provider === 'github') {
            const {
                githubId, avatarUrl, login, email, firstName, lastName,
            } = profile;
            user = await Users.findOrCreate({
                githubId,
                avatarUrl,
                login,
                email,
                firstName,
                lastName,
            });
        }
        return toUserDto(user);
    }
}

module.exports = UserCreate;
