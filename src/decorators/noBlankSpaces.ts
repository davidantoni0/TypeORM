import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint ({name: "noBlankSpaces", async: false}) // O "async: false" serve apenas para informar ao sistema que a operação não será demorada, se excluir o async o resultado será o mesmo nesse caso
export class NoBlankSpaceConstraint implements ValidatorConstraintInterface{
    validate (value:unknown){
        return typeof value === "string" && value.trim().length > 0;
    }
    defaultMessage(args?: ValidationArguments): string {
        return `O campo ${args?.property} não pode conter espaços em branco.`;
    }
}