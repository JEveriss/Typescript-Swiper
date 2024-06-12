import styled from "styled-components";

const StyledTag = styled.div`
  padding: 0.5rem 0;

  /* & span {
    margin-right: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: #666;
  } */
`;

const Tags = (props: { tags: string[] }) => {
  return (
    <StyledTag>
      {props.tags.map((tag: string, index: number) => (
        <ul>
          <li key={`tag-${index}-index`}>{tag}</li>
        </ul>
      ))}
    </StyledTag>
  );
};
export default Tags;
