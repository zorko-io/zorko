const BaseCommand = require('../base/BaseCommand');
const Specs = require('./Spec');

class SpecRead extends BaseCommand {
    static validationRules() {
        return { id: 'required' };
    }

    async execute(params) {
        const { id } = params;
        const spec = await Specs.getSpec(id);
        const specContent = spec.spec;
        const schema = specContent.schema;
        delete specContent.schema;
        return {
            id: spec._id,
            spec: {
              ...specContent,
              $schema: schema,
            },
            title: spec.title,
            createdBy: spec.createdBy,
        };
    }
}

module.exports = SpecRead;
