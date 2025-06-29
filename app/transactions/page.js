import React from "react";
import Wrapper from "@/components/Wrapper";
import ContextsWrapper from "@/components/shared/ContextsWrapper";
import TransactionsWrapper from "@/components/transactions/TransactionsWrapper";

const page = () => {
  return (
    <ContextsWrapper>
      <>
        <Wrapper>
          <TransactionsWrapper />
        </Wrapper>
      </>
    </ContextsWrapper>
  );
};

export default page;
