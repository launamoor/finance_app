import OverviewWrapper from "@/components/overview/OverviewWrapper";
import Sidebar from "@/components/shared/Sidebar";
import MainActivity from "@/components/overview/MainActivity";

export default function Home() {
  return (
    <main>
      <OverviewWrapper>
        <Sidebar />
        <MainActivity />
      </OverviewWrapper>
    </main>
  );
}
