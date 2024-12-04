import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FlexifitFeedbackCreateFormInputValues = {
    comment?: string;
    candidateName?: string;
    candidateId?: string;
    candidateLocation?: string;
    interviewer?: string;
    interviewDate?: string;
};
export declare type FlexifitFeedbackCreateFormValidationValues = {
    comment?: ValidationFunction<string>;
    candidateName?: ValidationFunction<string>;
    candidateId?: ValidationFunction<string>;
    candidateLocation?: ValidationFunction<string>;
    interviewer?: ValidationFunction<string>;
    interviewDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlexifitFeedbackCreateFormOverridesProps = {
    FlexifitFeedbackCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    candidateName?: PrimitiveOverrideProps<TextFieldProps>;
    candidateId?: PrimitiveOverrideProps<TextFieldProps>;
    candidateLocation?: PrimitiveOverrideProps<TextFieldProps>;
    interviewer?: PrimitiveOverrideProps<TextFieldProps>;
    interviewDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FlexifitFeedbackCreateFormProps = React.PropsWithChildren<{
    overrides?: FlexifitFeedbackCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FlexifitFeedbackCreateFormInputValues) => FlexifitFeedbackCreateFormInputValues;
    onSuccess?: (fields: FlexifitFeedbackCreateFormInputValues) => void;
    onError?: (fields: FlexifitFeedbackCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FlexifitFeedbackCreateFormInputValues) => FlexifitFeedbackCreateFormInputValues;
    onValidate?: FlexifitFeedbackCreateFormValidationValues;
} & React.CSSProperties>;
export default function FlexifitFeedbackCreateForm(props: FlexifitFeedbackCreateFormProps): React.ReactElement;
