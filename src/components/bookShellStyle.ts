import styled from "styled-components";

export const BooksShell = styled.section`
  display: flex;
  justify-content: center;
  align-content: space-evenly;
  flex-direction: column;
  margin: 0 10rem;

  .book-container {
    display: flex;
    flex-wrap: wrap;

  }
`;

export const BooksShellLabel = styled.label`
position: absolute;
opacity: 0;
overflow: hidden;
`;
