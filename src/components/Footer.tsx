import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socials = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/azeem2504' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/arshilazeem5' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/aazeem_5' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/aazeem_5' },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arshil. All rights reserved.
          </p>
          {/* <p className="text-xs text-muted-foreground/60 mt-1">
            Made with ❤️ and lots of coffee
          </p> */}
        </motion.div>

        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
