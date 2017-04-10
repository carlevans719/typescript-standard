import { ValidateResult } from './validator/result'

export interface ValidatorCallback {
  (result: ValidateResult): boolean;
}

export interface IOptions {
  format?: string,
  fix?: boolean
  files?: Array<string>
  callback?: ValidatorCallback
}
