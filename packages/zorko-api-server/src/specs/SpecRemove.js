const BaseCommand = require('../base/BaseCommand');
const Specs = require('./Spec');
const User = require('../users/User');

class SpecRemove extends BaseCommand {
    static validationRules() {
        return { id: 'required' };
    }

    async execute(params) {
        const { id } = params;
        const spec = await Specs.getSpec(id);
        await Specs.removeSpec(spec._id);

        const user = await User.findByLogin(spec.createdBy.login);
        await User.removeSpec(user, spec);

        return true;
    }
}

module.exports = SpecRemove;
