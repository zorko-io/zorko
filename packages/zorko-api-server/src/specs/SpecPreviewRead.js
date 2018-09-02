const BaseCommand = require('../base/BaseCommand');
const Specs = require('./Spec');

class SpecPreviewRead extends BaseCommand {
    static validationRules() {
        return { id: ['required'] };
    }

    async execute(params) {
        const { id } = params;
        const spec = await Specs.getSpec(id);
        return spec.preview;
    }
}

module.exports = SpecPreviewRead;
