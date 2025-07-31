import * as yup from "yup";

export const validationContactSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .max(25, "First Name must be at most 25 characters long"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .max(25, "Last Name must be at most 25 characters long"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(
      /^[0-9]{10,15}$/,
      "Phone Number must contain only digits (10-15 characters)",
    ),
  message: yup.string().required("Message is required"),
});
