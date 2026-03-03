const Footer = () => {
  return (
    <footer className="py-12 px-8 md:px-12 border-t border-border">
      <p className="text-[11px] text-muted-foreground font-body tracking-wider">
        © {new Date().getFullYear()} Beppe Stasi
      </p>
    </footer>
  );
};

export default Footer;
