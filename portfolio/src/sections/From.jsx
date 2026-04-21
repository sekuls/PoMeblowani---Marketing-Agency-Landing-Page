import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "TUTAJ_WKLEJ_SWOJ_SERVICE_ID",   // np. "service_12345"
        "TUTAJ_WKLEJ_SWOJ_TEMPLATE_ID",  // np. "template_abcde"
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "TUTAJ_WKLEJ_SWOJ_PUBLIC_KEY"    // np. "AbC_dEf1234567890"
      );
      
      setIsLoading(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      showAlertMessage("success", "Twoja wiadomość została wysłana!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Coś poszło nie tak. Spróbuj ponownie.");
    }
  };
  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={10}
        ease={80}
        color={"#cc6033"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-200 p-6 mx-auto border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
           <p className="text-[#fd7e00] text-2xl  font-bold tracking-widest uppercase mb-2 text-center">
            SKONKTAKTUJ SIĘ Z NAMI
          </p>
          <p className="font-normal text-neutral-400">
            Napisz i uzyskaj wszystkie potrzebne informacje i odpowiedzi.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Imie i Nazwisko
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="np. Jan Kowalski"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="np. JanKowalski@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="feild-label">
              Numer telefonu
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="field-input field-input-focus"
              placeholder="np. +48 123 456 789"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Wiadmość
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="np. Cześć, chciałbym się z Wami skontaktować..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-orange-500 to-orange-600 hover-animation"
          >
            {!isLoading ? "Wyślij" : "Wysyłanie..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
