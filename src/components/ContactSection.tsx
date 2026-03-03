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
    <section className="py-16 md:py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left: info */}
          <div className="space-y-8">
            <h2 className="font-display text-xs tracking-[0.2em] text-muted-foreground">
              {lang === "it" ? "CONTATTI" : "CONTACTS"}
            </h2>
            <div className="space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground font-body text-sm hover:text-muted-foreground transition-colors"
              >
                WhatsApp →
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground font-body text-sm hover:text-muted-foreground transition-colors"
              >
                Instagram →
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="space-y-8">
            <h2 className="font-display text-xs tracking-[0.2em] text-muted-foreground">
              {lang === "it" ? "SCRIVIMI" : "WRITE TO ME"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                placeholder={lang === "it" ? "Nome" : "Name"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="bg-transparent border-border font-body text-sm h-11 rounded-none focus-visible:ring-foreground"
              />
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="bg-transparent border-border font-body text-sm h-11 rounded-none focus-visible:ring-foreground"
              />
              <Textarea
                placeholder={lang === "it" ? "Messaggio" : "Message"}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="bg-transparent border-border font-body text-sm rounded-none resize-none focus-visible:ring-foreground"
              />
              <Button
                type="submit"
                disabled={sending}
                className="font-display text-[11px] tracking-[0.15em] rounded-none h-11 px-10 bg-foreground text-background hover:bg-muted-foreground"
              >
                {sending
                  ? (lang === "it" ? "INVIO..." : "SENDING...")
                  : (lang === "it" ? "INVIA" : "SEND")}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
