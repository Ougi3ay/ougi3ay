import {
    Button,
} from "@/components/ui/button";
import {
    Input
} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_fho4zue",    // replace with your EmailJS service ID
                "template_tybilae",   // replace with your template ID
                { from_name: name, from_email: email, message },
                "VD6pq-_kPmK0q5Q0m"     // replace with your EmailJS public key
            );

            setName("");
            setEmail("");
            setMessage("");

            // message
            toast.success("Message sent successfully!", {
                description: "Thanks for reaching out. I will get back to you soon.",
            })
        } catch (err) {
            toast.error("Failed to send message", {
                description: "Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="container mx-auto px-4 py-16 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Send me a message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name Field */}
                <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                        id="message"
                        rows={5}
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <Button type="submit" className="mt-4 w-full text-white" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </Button>
            </form>

        </section>
    );
}