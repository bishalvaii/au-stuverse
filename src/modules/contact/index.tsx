'use client';
import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!form.name || !form.email || !form.message) {
            setStatus('Please fill in all fields.');
            return;
        }

        // Here you'd normally send it to a backend or external service
        console.log('Form submitted:', form);

        // Reset form and show message
        setForm({ name: '', email: '', message: '' });
        setStatus('Message sent successfully! ✅');
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Contact Us</h1>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow">
                <div>
                    <label className="block font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full mt-1 border p-3 rounded"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full mt-1 border p-3 rounded"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full mt-1 border p-3 rounded"
                        placeholder="What's on your mind?"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
                >
                    Send Message
                </button>

                {status && (
                    <p className={`mt-4 text-sm ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
}
