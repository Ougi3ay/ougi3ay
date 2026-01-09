import { Github, Linkedin, Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wusan. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank">
              <Github className="hover:text-primary" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <Linkedin className="hover:text-primary" />
            </a>
            <a href="mailto:you@email.com">
              <Mail className="hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}