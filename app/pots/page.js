import React from "react";
import Wrapper from "@/components/Wrapper";
import ContextsWrapper from "@/components/shared/ContextsWrapper";
import PotsWrapper from "@/components/pots/PotsWrapper";

const page = () => {
  return (
    <ContextsWrapper>
      <>
        <Wrapper>
          <PotsWrapper />
        </Wrapper>
      </>
    </ContextsWrapper>
  );
};

export default page;
