"use client";
import { Form, Input, InputProps, type FormItemProps } from "antd";
import { ReactNode, useMemo } from "react";

type AntTextFieldElementProps = {
  formItem: FormItemProps;
  inputProps?: InputProps;
  inputComponent?: ReactNode;
};

const AntTextFieldElement = (props: AntTextFieldElementProps) => {
  const { formItem, inputComponent, inputProps } = props;
  const renderInput = useMemo(
    () => (inputComponent ? inputComponent : <Input {...inputProps} />),
    [inputComponent, inputProps]
  );
  return <Form.Item {...formItem}>{renderInput}</Form.Item>;
};

export default AntTextFieldElement;
