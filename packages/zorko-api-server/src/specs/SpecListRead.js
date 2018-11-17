const BaseCommand = require('../base/BaseCommand');
const Specs = require('./Spec');

class SpecListRead extends BaseCommand {
    static validationRules() {
        return {
            limit: ['positive_integer', { default: 10 }, { max_number: 30 }],
            offset: ['integer', { default: 0 }, { min_number: 0 }],
        };
    }

    async execute(params) {
        const { limit, offset } = params;
        const specs = await Specs.getSpecs(null, { limit, offset });
        return specs;
    }
}

module.exports = SpecListRead;
