import { useCallback, useRef, useState } from "react";
import { Upload, X } from "lucide-react";

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/png"];
const ACCEPTED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png"];

const inputClass =
  "w-full bg-concrete/[0.05] px-3 py-3 md:py-2.5 text-concrete font-body text-base md:text-sm outline-none min-h-[48px]";
const inputStyle = { border: "1px solid hsl(var(--concrete) / 0.1)" } as const;
const labelClass = "text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1";

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getExtension(name: string): string {
  const idx = name.lastIndexOf(".");
  return idx >= 0 ? name.slice(idx).toLowerCase() : "";
}

function validateClientFile(file: File, existingCount: number): string | null {
  const ext = getExtension(file.name);
  if (!ACCEPTED_EXTENSIONS.includes(ext)) {
    return `"${file.name}" must be a PDF, JPG, or PNG file.`;
  }
  if (!ACCEPTED_TYPES.includes(file.type)) {
    return `"${file.name}" must be a PDF, JPG, or PNG file.`;
  }
  if (file.size > MAX_FILE_BYTES) {
    return `"${file.name}" is too large. Maximum size is 10 MB per file.`;
  }
  if (file.size === 0) {
    return `"${file.name}" is empty.`;
  }
  if (existingCount >= MAX_FILES) {
    return `You can upload up to ${MAX_FILES} files.`;
  }
  return null;
}

export default function ProjectDocumentUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    setError("");
    const next = [...files];
    for (const file of Array.from(incoming)) {
      if (next.length >= MAX_FILES) {
        setError(`You can upload up to ${MAX_FILES} files.`);
        break;
      }
      if (next.some((existing) => existing.name === file.name && existing.size === file.size)) {
        continue;
      }
      const validationError = validateClientFile(file, next.length);
      if (validationError) {
        setError(validationError);
        continue;
      }
      next.push(file);
    }
    setFiles(next);
  }, [files]);

  const removeFile = (index: number) => {
    setFiles((current) => current.filter((_, i) => i !== index));
    setError("");
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      setError("Please attach at least one PDF, JPG, or PNG file.");
      return;
    }
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError("Please fill in your name, phone, and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("phone", phone.trim());
      formData.append("email", email.trim());
      formData.append("address", address.trim());
      formData.append("details", details.trim());
      formData.append("company_website", honeypot);
      files.forEach((file) => formData.append("files", file));

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      if (!supabaseUrl || !supabaseKey) {
        throw new Error("Missing Supabase configuration");
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/submit-project-documents`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${supabaseKey}`,
          apikey: supabaseKey,
        },
        body: formData,
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Upload failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Document upload error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong uploading your files. Please try again or call (405) 458-4805."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-stone mt-3" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}>
        <div className="bg-orange p-4 flex justify-between items-center">
          <span className="font-display text-base font-extrabold tracking-[0.1em] uppercase text-white">Documents Received</span>
        </div>
        <div className="p-6 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-concrete mb-2">Thanks, {name}!</h3>
          <p className="text-muted-text text-sm mb-3">
            Thanks! We&apos;ll review your documents and get back to you within 24 hours.
          </p>
          <p className="text-muted-text text-sm">
            Or call us now at{" "}
            <a href="tel:4054584805" className="text-orange font-bold no-underline">(405) 458-4805</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone mt-3" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}>
      <div className="bg-orange p-4 flex justify-between items-center">
        <span className="font-display text-base font-extrabold tracking-[0.1em] uppercase text-white">Project Documents</span>
      </div>

      <div className="p-4 md:p-5">
        <p className="text-[0.82rem] text-muted-text leading-relaxed mb-4">
          Drop your blueprints or project documents here for a quick estimate.
          <span className="block mt-1 text-[0.75rem]">PDF, JPG, or PNG — up to 5 files, 10 MB each.</span>
        </p>

        <div
          className={`relative mb-4 p-6 text-center transition-colors cursor-pointer ${
            dragActive ? "bg-orange/10 border-orange" : "bg-concrete/[0.03] border-concrete/10"
          }`}
          style={{ border: `2px dashed hsl(var(${dragActive ? "orange" : "concrete"}) / ${dragActive ? "0.5" : "0.15"})` }}
          onDragEnter={(e) => { e.preventDefault(); e.stopPropagation(); setDragActive(true); }}
          onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setDragActive(true); }}
          onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);
            if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
        >
          <Upload className="w-8 h-8 text-orange mx-auto mb-3" strokeWidth={1.5} />
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.04em] text-concrete mb-1">
            Drop files here
          </p>
          <p className="text-[0.75rem] text-muted-text mb-3">or</p>
          <button
            type="button"
            className="btn-outline text-sm py-2.5 px-5 min-h-[44px]"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
          >
            Browse Files
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) addFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </div>

        {files.length > 0 && (
          <ul className="mb-4 space-y-2" style={{ listStyle: "none", padding: 0 }}>
            {files.map((file, index) => (
              <li
                key={`${file.name}-${file.size}-${index}`}
                className="flex items-center justify-between gap-3 bg-concrete/[0.03] px-3 py-2.5"
                style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
              >
                <div className="min-w-0">
                  <div className="text-sm text-concrete truncate">{file.name}</div>
                  <div className="text-[0.65rem] text-muted-text">{formatFileSize(file.size)}</div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="shrink-0 p-1 text-muted-text hover:text-orange transition-colors"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {files.length > 0 && (
          <>
            <div className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold mb-3 pt-1">
              Your contact info
            </div>

            <div className="mb-3">
              <label className={labelClass}>Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div className="mb-3">
              <label className={labelClass}>Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(405) 000-0000"
                type="tel"
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div className="mb-3">
              <label className={labelClass}>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                type="email"
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div className="mb-3">
              <label className={labelClass}>Project Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main St, Oklahoma City, OK"
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div className="mb-4">
              <label className={labelClass}>Project Details</label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Tell us about your project scope, timeline, special requirements..."
                rows={3}
                className={`${inputClass} resize-y`}
                style={inputStyle}
              />
            </div>
          </>
        )}

        <div
          className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="company_website">Company website</label>
          <input
            id="company_website"
            name="company_website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {error && (
          <div
            className="bg-destructive/20 text-destructive text-sm p-3 mb-4"
            style={{ border: "1px solid hsl(0 60% 40% / 0.3)" }}
          >
            {error}
          </div>
        )}

        {files.length > 0 && (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="btn-primary w-full text-sm py-3.5 min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Uploading..." : "Send Documents for Estimate →"}
          </button>
        )}
      </div>
    </div>
  );
}
