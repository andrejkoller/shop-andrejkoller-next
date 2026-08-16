import { footerLinksConfig } from "@/configs/footer-links-config";
import Link from "next/link";
import { ThemeSwitcher } from "./theme/theme-switcher";

export const Footer = () => {
  return (
    <footer className="bg-(--color-background) before:block before:h-px before:w-full before:content-[''] before:bg-(--color-border)">
      <div className="w-full max-w-300 mx-auto px-6 py-9">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
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

          <div className="lg:max-w-60 shrink-0">
            <h4 className="mb-4 text-sm font-medium text-(--color-primary)">
              Subscribe to my newsletter
            </h4>
            <p className="mb-4 text-sm text-(--color-muted)">
              Stay updated on new posts, book recommendations, and resources.
            </p>
            <form className="relative flex items-center rounded-md bg-(--color-muted-bg) focus-within:ring-1 focus-within:ring-(--color-primary)">
              <input
                type="email"
                placeholder="you@domain.com"
                className="min-w-0 flex-1 bg-transparent px-3 py-1.5 pr-24 text-sm text-(--color-primary) placeholder:text-(--color-muted) focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0.75 top-1/2 -translate-y-1/2 cursor-pointer rounded bg-(--color-muted-bg) border border-(--color-border) px-1.5 py-0.5 text-xs font-medium text-(--color-primary) transition-opacity hover:opacity-75"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};
