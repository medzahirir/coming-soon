"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Plus tard: envoyer à une API
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" type="text" placeholder="Nom" value={form.name} onChange={handleChange} className="p-2 border rounded" required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-2 border rounded" required />
        <textarea name="message" placeholder="Votre message" value={form.message} onChange={handleChange} className="p-2 border rounded" required />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Envoyer</button>
      </form>
      <a href="https://wa.me/212600000000" target="_blank" className="block mt-4 text-center bg-green-500 p-2 rounded text-white">Contact WhatsApp</a>
    </div>
  );
}
