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
  phoneNumber: yup.string().required("Phone Number is required").min(10),
  message: yup.string().required("Message is required"),
});
