import { Sidebar, SidebarLinks } from "@/components/sidebar";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      <Sidebar />
      <div className="flex-1 min-w-0 max-w-2xl">
        <h1 className="serif italic text-4xl mb-6">About</h1>
        <div className="prose-serif">
          <p>
            Dr. David Benson is a researcher and writer working at the intersection of
            philosophy of mind, cognitive science, and contemplative practice.
          </p>
          <p>
            He calls the work <em>reality science</em> , the careful study of how
            experience is structured: time, identity, memory, perception, and the
            language we use to talk about any of it.
          </p>
          <p>
            Alongside the writing here, he develops <a href="https://relohu.com">ReLoHu</a>,
            a practice grounded in these theories, and <a href="https://mindreport.ai">Mind Report</a>.
          </p>
        </div>
        <div className="md:hidden">
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
}
