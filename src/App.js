import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) => {
    if (page === "first") {
      return "flex-end";
    } else if (page === "middle") {
      return "space-between";
    } else {
      return "flex-start";
    }
  }};
`;
//Adding props to link
const Link = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: violet;
  font-size: 1.5rem;
`;

function App() {
  return (
    <div>
      <MainWrapper>
        <Button primary bgColor="violet" margin="5rem">
          My button
        </Button>
        <Button>My Button</Button>
        <PaginationWrapper page="middle">
          <Button>Page 1</Button>
          <Button>Page 2</Button>
        </PaginationWrapper>
        <Link href="https://www.google.com/">One Link</Link>
        <Link href="https://www.google.com/">Another Link</Link>
      </MainWrapper>
    </div>
  );
}

export default App;
