import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_URL } from "@/data/content";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { lang } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: lang === "it" ? "Errore" : "Error",
        description: lang === "it" ? "Compila tutti i campi" : "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    // TODO: connect to email service / edge function
    setTimeout(() => {
      setSending(false);
      toast({
        title: lang === "it" ? "Messaggio inviato" : "Message sent",
        description: lang === "it"
          ? "Ti risponderò il prima possibile"
          : "I'll get back to you as soon as possible",
      });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Left: links */}
          <div className="space-y-6">
            <p className="text-sm font-body text-muted-foreground uppercase tracking-wider">
              {lang === "it" ? "Contatti" : "Contact"}
            </p>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground font-body text-sm hover:text-primary transition-colors"
              >
                WhatsApp →
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground font-body text-sm hover:text-primary transition-colors"
              >
                Instagram →
              </a>
            </div>
          </div>

          {/* Right: email form */}
          <div className="space-y-6">
            <p className="text-sm font-body text-muted-foreground uppercase tracking-wider">
              {lang === "it" ? "Scrivimi" : "Write to me"}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder={lang === "it" ? "Nome" : "Name"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="bg-background border-border font-body text-sm h-10 rounded-none focus-visible:ring-primary"
              />
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="bg-background border-border font-body text-sm h-10 rounded-none focus-visible:ring-primary"
              />
              <Textarea
                placeholder={lang === "it" ? "Messaggio" : "Message"}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="bg-background border-border font-body text-sm rounded-none resize-none focus-visible:ring-primary"
              />
              <Button
                type="submit"
                disabled={sending}
                className="font-body text-xs uppercase tracking-wider rounded-none h-10 px-8"
              >
                {sending
                  ? (lang === "it" ? "Invio..." : "Sending...")
                  : (lang === "it" ? "Invia" : "Send")}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
