export type FormFieldType = "text" | "email" | "textarea";

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: FormFieldType;
  autoComplete?: string;
  placeholder?: string;
  rows?: number;
  error?: string;
}
