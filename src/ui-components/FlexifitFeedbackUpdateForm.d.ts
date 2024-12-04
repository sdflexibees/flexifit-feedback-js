import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FlexifitFeedback } from "./graphql/types";
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
export declare type FlexifitFeedbackUpdateFormInputValues = {
    comment?: string;
    candidateName?: string;
    candidateId?: string;
    candidateLocation?: string;
    interviewer?: string;
    interviewDate?: string;
};
export declare type FlexifitFeedbackUpdateFormValidationValues = {
    comment?: ValidationFunction<string>;
    candidateName?: ValidationFunction<string>;
    candidateId?: ValidationFunction<string>;
    candidateLocation?: ValidationFunction<string>;
    interviewer?: ValidationFunction<string>;
    interviewDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlexifitFeedbackUpdateFormOverridesProps = {
    FlexifitFeedbackUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    candidateName?: PrimitiveOverrideProps<TextFieldProps>;
    candidateId?: PrimitiveOverrideProps<TextFieldProps>;
    candidateLocation?: PrimitiveOverrideProps<TextFieldProps>;
    interviewer?: PrimitiveOverrideProps<TextFieldProps>;
    interviewDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FlexifitFeedbackUpdateFormProps = React.PropsWithChildren<{
    overrides?: FlexifitFeedbackUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    flexifitFeedback?: FlexifitFeedback;
    onSubmit?: (fields: FlexifitFeedbackUpdateFormInputValues) => FlexifitFeedbackUpdateFormInputValues;
    onSuccess?: (fields: FlexifitFeedbackUpdateFormInputValues) => void;
    onError?: (fields: FlexifitFeedbackUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FlexifitFeedbackUpdateFormInputValues) => FlexifitFeedbackUpdateFormInputValues;
    onValidate?: FlexifitFeedbackUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FlexifitFeedbackUpdateForm(props: FlexifitFeedbackUpdateFormProps): React.ReactElement;
