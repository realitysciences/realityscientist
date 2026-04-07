import { Sidebar } from "@/components/sidebar";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="flex gap-10">
      <Sidebar />
      <div className="flex-1 min-w-0 max-w-2xl">
        <h1 className="serif italic text-4xl mb-6">Contact</h1>
        <div className="prose-serif">
          <p>
            For correspondence, collaboration, or comment on the work,
            email{" "}
            <a href="mailto:realitysciences@gmail.com">
              realitysciences@gmail.com
            </a>
            .
          </p>
          <p>
            Replies are not always immediate. Letters that engage with the
            ideas tend to get answered first.
          </p>
        </div>
      </div>
    </div>
  );
}
