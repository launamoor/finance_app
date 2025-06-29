import React from "react";
import Wrapper from "@/components/Wrapper";
import ContextsWrapper from "@/components/shared/ContextsWrapper";
import BudgetsWrapper from "@/components/budgets/BudgetsWrapper";

const page = () => {
  return (
    <ContextsWrapper>
      <>
        <Wrapper>
          <BudgetsWrapper />
        </Wrapper>
      </>
    </ContextsWrapper>
  );
};

export default page;
