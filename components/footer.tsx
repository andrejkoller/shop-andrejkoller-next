import { footerLinksConfig } from "@/configs/footer-links-config";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-(--color-background) before:block before:h-px before:w-full before:content-[''] before:bg-(--color-border)">
      <div className="grid w-full max-w-300 grid-cols-2 gap-10 sm:grid-cols-4 mx-auto px-6 py-9">
        {footerLinksConfig.map((section) => (
          <div key={section.title}>
            <h4 className="mb-4 text-sm font-medium text-(--color-primary)">
              {section.title}
            </h4>
            <ul>
              {section.links.map((link) => (
                <li key={link.key} className="mb-3">
                  <Link
                    href={link.href}
                    {...(link.isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-sm font-medium text-(--color-muted) transition-colors duration-200 hover:text-(--color-primary)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
