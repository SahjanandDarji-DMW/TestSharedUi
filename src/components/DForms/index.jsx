import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Props: title, inputs (array of { label, type, name, validation }), onSubmit
export function DForms({ title, inputs, onSubmit }) {
  // Build initialValues and validationSchema dynamically
  const initialValues = {};
  const validationShape = {};

  inputs.forEach(({ name, type, validation }) => {
    initialValues[name] = type === "checkbox" ? false : "";
    if (validation) {
      validationShape[name] = validation;
    }
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationShape),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-[#F2F2F2] backdrop-blur-md opacity-60 rounded-b-md">
      <Card className="p-6 w-full max-w-md shadow-lg bg-gray-50">
        <Typography variant="h4" color="blue-gray" className="mb-4 text-center">
          {title}
        </Typography>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          {inputs.map((input, index) => {
            const error =
              formik.touched[input.name] && formik.errors[input.name];
            return (
              <div
                key={index}
                className={`${
                  input.type === "checkbox"
                    ? "flex gap-3 items-center"
                    : "flex flex-col"
                }`}
              >
                <label className="font-semibold text-left">{input.label}</label>
                {input.type === "checkbox" ? (
                  <Checkbox
                    name={input.name}
                    checked={formik.values[input.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                ) : (
                  <Input
                    type={input.type}
                    name={input.name}
                    value={formik.values[input.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={!!error}
                    className={`placeholder:!opacity-100 focus:!border-t-black !border-t-black ${
                      error
                        ? "!border-red-500 focus:!border-red-500"
                        : "focus:!border-black !border-black"
                    }
    focus:!ring-0 focus:!outline-none`}
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                )}
                {error && (
                  <span className="text-red-500 text-xs mt-1">
                    {formik.errors[input.name]}
                  </span>
                )}
              </div>
            );
          })}
          <Button type="submit" className="bg-gray-300 text-black">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
