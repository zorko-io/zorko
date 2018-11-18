const BaseCommand = require('../base/BaseCommand');
const Specs = require('./Spec');
const User = require('../users/User');

class SpecCreate extends BaseCommand {
    static validationRules() {
        return {
            spec: ['required', 'any_object'],
            type: ['required', 'string'],
            // TODO: make it required, so client have to upload with preview
            preview: ['required', 'string'],
            title: ['required', 'string'],
            createdBy: ['required', {
                nested_object: {
                    login: ['required', 'string'],
                },
            }],
        };
    }

    async execute(params) {
        const { createdBy: { login } } = params;
        const newSpec = await Specs.createSpec(params);
        const user = await User.findByLogin(login);
        await User.addSpec(user, newSpec);
        return {
            id: newSpec._id,
            spec: newSpec.spec,
            title: newSpec.title,
            createdBy: newSpec.createdBy,
            type: newSpec.type
        };
    }
}

module.exports = SpecCreate;
