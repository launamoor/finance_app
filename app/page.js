import Wrapper from "@/components/Wrapper";
import Sidebar from "@/components/shared/Sidebar";
import MainActivity from "@/components/overview/MainActivity";
import ContextsWrapper from "@/components/shared/ContextsWrapper";

// TODO: Context for navigation

export default function Home() {
  return (
    <ContextsWrapper>
      <>
        <Wrapper>
          <Sidebar />
          <MainActivity />
        </Wrapper>
      </>
    </ContextsWrapper>
  );
}
