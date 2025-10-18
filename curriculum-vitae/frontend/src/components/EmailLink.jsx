// /frontend/src/components/EmailLink.jsx
import { Mail } from "lucide-react";

export default function EmailLink() {
  const user = "gpmario";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;

  return (
    <a href={`mailto:${email}`} title="Enviar correo">
      <Mail className="inline-block mr-2" />
      {/* No mostramos el email */}
    </a>
  );
}

