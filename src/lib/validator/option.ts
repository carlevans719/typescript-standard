import { FormatterFunction, ILinterOptions } from 'tslint'
import { ValidatorOutputFormat } from './format';
import { IConfigurationFile } from 'tslint/lib/configuration';

export interface IConfigParserOptions {
  format: string
  fix: boolean
}

export class ValidatorOption {

  configuration?: IConfigurationFile;
  formatter?: string | FormatterFunction;
  formattersDirectory?: string;
  fix?: boolean;
  rulesDirectory?: string | string[];

  constructor({format, fix} : IConfigParserOptions, configuration: IConfigurationFile) {
    this.fix = fix
    this.formatter = ValidatorOutputFormat.getFormatter(format);
    this.configuration = configuration;
  }

  options(): ILinterOptions {
    return {
      fix: this.fix,
      formatter: this.formatter
      // formattersDirectory?: string,
      // rulesDirectory?: string | string[],
    };
  }

}
