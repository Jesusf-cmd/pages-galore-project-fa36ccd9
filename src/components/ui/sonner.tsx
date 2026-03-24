import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";
import { useEffect } from "react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  // Sonner injects a <style> tag at import time. If Vite also extracts
  // the CSS into the stylesheet bundle, we end up with duplicates.
  // Remove extras so only one copy remains.
  useEffect(() => {
    const styles = document.querySelectorAll("style");
    const sonnerStyles: Element[] = [];
    styles.forEach((el) => {
      if (el.textContent?.includes("[data-sonner-toaster]")) {
        sonnerStyles.push(el);
      }
    });
    // Keep the first, remove the rest
    sonnerStyles.slice(1).forEach((el) => el.remove());
  }, []);

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
