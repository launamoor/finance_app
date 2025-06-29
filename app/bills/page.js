import React from "react";
import Wrapper from "@/components/Wrapper";
import ContextsWrapper from "@/components/shared/ContextsWrapper";
import BillsWrapper from "@/components/bills/BillsWrapper";

const page = () => {
  return (
    <ContextsWrapper>
      <>
        <Wrapper>
          <BillsWrapper />
        </Wrapper>
      </>
    </ContextsWrapper>
  );
};

export default page;
