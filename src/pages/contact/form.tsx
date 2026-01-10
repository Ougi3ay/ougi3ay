import {
    Button,
} from "@/components/ui/button";
import {
    Input
} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
    return (
        <section className="container mx-auto px-4 py-16 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Send me a message
            </h2>

            <form className="flex flex-col gap-6">
                {/* Name Field */}
                <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" rows={5} placeholder="Type your message..." />
                </div>

                <Button type="submit" className="mt-4 w-full text-white">
                    Send Message
                </Button>
            </form>
        </section>
    );
}