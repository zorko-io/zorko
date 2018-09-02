const LIVR = require('livr');
const Exception = require('./Exception');

class BaseCommand {
    constructor(args) {
        if (!args || !args.context) {
            this.context = {};
        } else {
            this.context = args.context;
        }
    }

    async run(params) {
        const cleanParams = await this.validate(params);
        const result = await this.execute(cleanParams);
        return result;
    }

    async validate(data) {
        // Feel free to override this method if you need dynamic validation

        // Cache validator
        const validator = this.constructor.validator || new LIVR.Validator(this.constructor.validationRules()).prepare();
        this.constructor.validator = validator;

        const result = await this.doValidationWithValidator(data, validator);
        return result;
    }

    async doValidation(data, rules) {
        // You can use this in overriden "validate" method
        const validator = new LIVR.Validator(rules).prepare();
        const result = await this.doValidationWithValidator(data, validator);
        return result;
    }

    async doValidationWithValidator(data, validator) {
        const result = validator.validate(data);

        if (!result) {
            throw new Exception({
                code: 'FORMAT_ERROR',
                fields: validator.getErrors(),
            });
        }
        return result;
    }
}

module.exports = BaseCommand;
