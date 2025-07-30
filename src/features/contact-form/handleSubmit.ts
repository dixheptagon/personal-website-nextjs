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
  formData.append("access_key", "8c704722-33d7-4826-85e8-94358ac8859b"); // ✅ betulin key
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
    console.log("✅ Message sent:", result);
    toast.success(`Message sent successfully from ${result?.data?.email}`);
  } else {
    console.error("❌ Failed:", result);
    toast.error(`Failed to send message from ${result?.data?.email}`);
  }
}
