import { GITHUB_URL, LINKEDIN_URL } from "@/constants/profile";
import {
  ClipboardCheck,
  Code2,
  Copy,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const contactEmail = "paljatin681@gmail.com";

  const copyContactEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);
      toast({ title: "Email copied", description: "Paste it in your mail app if you need it." });
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      toast({
        variant: "destructive",
        title: "Could not copy",
        description: "Select the address and copy manually.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toast({
        variant: "destructive",
        title: "Contact form not configured",
        description:
          "Set VITE_WEB3FORMS_ACCESS_KEY in .env (Web3Forms), then restart the dev server.",
      });
      return;
    }

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio contact from ${name}`,
          from_name: name,
          email,
          replyto: email,
          message: `From: ${name} <${email}>\n\n${message}`,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.success === false) {
        throw new Error(
          typeof data.message === "string" ? data.message : "Request failed"
        );
      }

      toast({
        title: "Message sent",
        description: "It was delivered to my inbox. I'll reply soon.",
      });
      form.reset();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Could not send",
        description:
          err instanceof Error ? err.message : "Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="mr-2" aria-hidden>
            📬
          </span>
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open to collaborations and internships. Reach out if you have an
          opportunity or a project you&apos;d like to discuss.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium"> Email</h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-muted-foreground break-all">
                      {contactEmail}
                    </span>
                    <button
                      type="button"
                      onClick={copyContactEmail}
                      className="inline-flex shrink-0 items-center gap-1 rounded-md border border-input bg-background px-2 py-1 text-xs font-medium text-foreground hover:bg-accent transition-colors"
                      aria-label="Copy email address"
                    >
                      {emailCopied ? (
                        <ClipboardCheck className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      {emailCopied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+918718958263"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 87189 58263
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <span className="text-muted-foreground">
                    India · open to remote / relocation
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub profile"
                >
                  <Code2 className="h-6 w-6 shrink-0" />
                  <span className="text-sm break-all">
                    github.com/jatin-pal-code
                  </span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Globe2 className="h-6 w-6 shrink-0" />
                  <span className="text-sm break-all">
                    linkedin.com/in/jatin-pal-55a22729a
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6 -mt-2">
              Sends straight to my inbox; your email app does not open.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
