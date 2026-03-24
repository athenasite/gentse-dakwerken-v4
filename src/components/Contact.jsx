import { useState } from 'react';

const Contact = ({ data }) => {
  if (!data || data.length === 0) return null;
  const contact = data[0];
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    try {
      console.log(`Sending contact form to ${contact.email}:`, formValues);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch (err) {
      console.error("Error sending form:", err);
      setStatus("error");
    }
  };

  return (
    <>
      <section className="contact" data-dock-section="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Email: <span data-dock-bind='{"file":"contact", "index":0, "key":"email"}'>{contact.email}</span></p>
          <p>Phone: <span data-dock-bind='{"file":"contact", "index":0, "key":"phone"}'>{contact.phone}</span></p>
          <p>Address: <span data-dock-bind='{"file":"contact", "index":0, "key":"address"}'>{contact.address}</span></p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2>Neem Contact Op</h2>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            Heeft u een vraag of wilt u een offerte? Laat uw gegevens achter en we nemen zo snel mogelijk contact met u op.
          </p>

          {status === "success" ? (
            <div style={{ background: "var(--primary-color)", color: "white", padding: "2rem", borderRadius: "8px", textAlign: "center" }}>
              <h3>Bedankt!</h3>
              <p>Uw bericht is succesvol verzonden.</p>
              <button onClick={() => setStatus("idle")} style={{ background: "white", color: "var(--primary-color)", marginTop: "1rem" }}>
                Nieuw Bericht
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input type="text" name="name" placeholder="Uw Naam" required style={{ padding: "1rem", borderRadius: "4px", border: "1px solid #ddd" }} />
              <input type="email" name="email" placeholder="Uw E-mailadres" required style={{ padding: "1rem", borderRadius: "4px", border: "1px solid #ddd" }} />
              <textarea name="message" placeholder="Uw Bericht" rows="5" required style={{ padding: "1rem", borderRadius: "4px", border: "1px solid #ddd", fontFamily: "inherit" }}></textarea>
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Verzenden..." : "Bericht Verzenden"}
              </button>
              {status === "error" && <p style={{ color: "red", textAlign: "center" }}>Er ging iets mis. Probeer het later opnieuw.</p>}
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;