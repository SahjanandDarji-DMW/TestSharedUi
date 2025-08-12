import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";

// 🔧 Transform JSON to inputs array
function transformJsonToInputs(json) {
  const inputs = [];

  json.forEach((field) => {
    if (field.hidden || field.type === "NONE") return;

    let type = "text";
    switch (field.type) {
      case "EMAIL":
        type = "email";
        break;
      case "TEXT":
        type = "text";
        break;
      case "CHECKBOX":
        type = "checkbox";
        break;
      case "RADIO":
        type = "radio";
        break;
      case "FILE":
        type = "file";
        break;
      case "SELECT":
        type = "select";
        break;
    }

    const validation =
      field.type === "EMAIL"
        ? Yup.string()
            .email("Invalid email format")
            .required(`${field.label} is required`)
        : field.type === "CHECKBOX"
        ? Yup.array()
            .of(Yup.string())
            .min(1, `Select at least one ${field.label}`)
            .required(`${field.label} are required`)
        : Yup.string().required(`${field.label} is required`);

    inputs.push({
      label: field.label,
      type,
      name: field.fieldName,
      validation,
      options: field.option_values,
    });
  });

  return inputs;
}

export function DForms({
  title = "Dynamic Form",
  onSubmit = () => {},
  formData,
}) {
  const inputs = transformJsonToInputs(formData);

  const initialValues = {};
  const validationShape = {};

  inputs.forEach(({ name, type, validation }) => {
    initialValues[name] = type === "checkbox" ? [] : "";
    if (validation) {
      validationShape[name] = validation;
    }
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationShape),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      onSubmit(values);
    },
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center sm:px-6 md:px-10">
      <Card className="w-full bg-white/10 border border-white/20  backdrop-blur-lg  shadow-xl rounded-2xl p-6">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-6 text-center text-white"
        >
          {title}
        </Typography>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          {inputs.map((input, index) => {
            const error =
              formik.touched[input.name] && formik.errors[input.name];

            return (
              <div
                key={index}
                className={`${
                  input.type === "checkbox" || input.type === "radio"
                    ? "flex flex-col gap-2"
                    : "flex flex-col"
                }`}
              >
                <label className="font-semibold  mb-1 text-white">
                  {input.label}
                </label>
                <div className={"flex flex-col md:flex-row"}>
                  {input.type === "checkbox" ? (
                    input.options.map((option) => (
                      <Checkbox
                        key={option.key}
                        name={input.name}
                        label={option.value}
                        value={option.key}
                        checked={formik.values[input.name].includes(option.key)}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          const current = formik.values[input.name];
                          const updated = checked
                            ? [...current, value]
                            : current.filter((v) => v !== value);
                          formik.setFieldValue(input.name, updated);
                        }}
                        className="text-white font-semibold"
                        labelProps={{ className: "text-white font-semibold" }}
                      />
                    ))
                  ) : input.type === "radio" ? (
                    input.options.map((option) => (
                      <Radio
                        key={option.key}
                        name={input.name}
                        label={option.value}
                        value={option.key}
                        checked={formik.values[input.name] === option.key}
                        onChange={(e) => {
                          formik.setFieldValue(input.name, e.target.value);
                        }}
                        className="text-white font-semibold !checked:border-red-500 !checked:before:bg-red-500 "
                        labelProps={{ className: "text-white font-semibold" }}
                      />
                    ))
                  ) : (
                    <Input
                      type={input.type}
                      name={input.name}
                      value={formik.values[input.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={!!error}
                      className={`text-white placeholder:!opacity-100 focus:!border-t-white !border-t-white ${
                        error
                          ? "!border-red-500 focus:!border-red-500"
                          : "focus:!border-white !border-white"
                      } focus:!ring-0 focus:!outline-none`}
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  )}
                </div>
                {error && (
                  <span className="text-red-500 text-xs mt-1">
                    {formik.errors[input.name]}
                  </span>
                )}
              </div>
            );
          })}

          <Button
            type="submit"
            className="bg-white/10 hover:bg-white/20  border  border-white/20  font-black text-white text"
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
