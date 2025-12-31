import { Globe, Mail, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  product: [{ label: 'Features', href: '#features' }, { label: 'Pricing', href: '#pricing' }, { label: 'FAQ', href: '#faq' }],
  company: [{ label: 'About', href: '#' }, { label: 'Blog', href: '#' }, { label: 'Contact', href: '#' }],
  legal: [{ label: 'Privacy Policy', href: '#' }, { label: 'Terms of Service', href: '#' }],
};

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center"><span className="text-xl font-bold text-primary-foreground">N</span></div>
              <span className="text-xl font-bold text-foreground">NAME</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">AI-powered Local SEO Manager that helps businesses rank higher, automatically.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Globe className="w-4 h-4" /><span>Available worldwide</span></div>
          </div>
          <div><h4 className="text-sm font-semibold text-foreground mb-4">Product</h4><ul className="space-y-3">{footerLinks.product.map(link => <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</a></li>)}</ul></div>
          <div><h4 className="text-sm font-semibold text-foreground mb-4">Company</h4><ul className="space-y-3">{footerLinks.company.map(link => <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</a></li>)}</ul></div>
          <div><h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4><ul className="space-y-3">{footerLinks.legal.map(link => <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</a></li>)}</ul></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">© {new Date().getFullYear()} NAME. All rights reserved.</p>
          <div className="flex gap-4">{[Twitter, Linkedin, Mail].map((Icon, i) => <a key={i} href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground"><Icon className="w-5 h-5" /></a>)}</div>
        </div>
      </div>
    </footer>
  );
}
