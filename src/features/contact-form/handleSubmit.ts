import { toast } from "react-toastify";
import { IFormValues } from "./type";

export default async function HandleSendToWeb3Forms({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}: IFormValues) {
  const formData = new FormData();
  formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY!); // ✅ betulin key
  formData.append("name", firstName + " " + lastName);
  formData.append("email", email);
  formData.append("phone", phoneNumber);
  formData.append("message", message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  if (result.success) {
    toast.success(`Message sent successfully from ${result?.data?.email}`);
  } else {
    toast.error(`Failed to send message from ${result?.data?.email}`);
  }
}
