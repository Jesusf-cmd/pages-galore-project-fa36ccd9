import { useEffect } from "react";

interface OGTags {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  og?: OGTags;
  noindex?: boolean;
}

function setMetaName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO({ title, description, canonical, og, noindex }: SEOProps) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    } else if (link) {
      link.remove();
    }

    if (og) {
      if (og.title) setMetaProperty("og:title", og.title);
      if (og.description) setMetaProperty("og:description", og.description);
      if (og.type) setMetaProperty("og:type", og.type);
      if (og.url) setMetaProperty("og:url", og.url);
    }

    if (noindex) {
      setMetaName("robots", "noindex, nofollow");
    } else {
      document.querySelector('meta[name="robots"]')?.remove();
    }
  }, [title, description, canonical, og, noindex]);
}
