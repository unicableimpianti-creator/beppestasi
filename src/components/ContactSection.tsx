import { useState } from "react";
import { WHATSAPP_URL } from "@/data/content";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "@/components/SectionTitle";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message sent",
        description: "I'll get back to you as soon as possible",
      });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="py-10 md:py-16 px-6 md:px-10 lg:px-14">
      <SectionTitle>CONTACTS</SectionTitle>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-8"
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground font-body text-sm hover:text-muted-foreground transition-colors border-b border-foreground pb-0.5 w-fit"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground font-body text-sm hover:text-muted-foreground transition-colors border-b border-foreground pb-0.5 w-fit"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Name"
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
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="bg-transparent border-border font-body text-sm rounded-none resize-none focus-visible:ring-foreground"
            />
            <Button
              type="submit"
              disabled={sending}
              className="font-nav text-[12px] tracking-[0.15em] rounded-none h-11 px-10 bg-foreground text-background hover:bg-muted-foreground"
            >
              {sending ? "SENDING..." : "SEND"}
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
