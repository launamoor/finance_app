import Wrapper from "@/components/Wrapper";
import Sidebar from "@/components/shared/Sidebar";
import MainActivity from "@/components/overview/MainActivity";
import OverviewWrapper from "@/components/overview/OverviewWrapper";

// TODO: Context for navigation

export default function Home() {
  return (
    <main>
      <Wrapper>
        <Sidebar />
        <MainActivity>
          <OverviewWrapper />
        </MainActivity>
      </Wrapper>
    </main>
  );
}
