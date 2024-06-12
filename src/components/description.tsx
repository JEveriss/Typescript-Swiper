import styled from "styled-components";

const StyledDescription = styled.div`
  text-align: start;
  color: #666;
  display: -webkit-box;
  max-width: 50%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Description = (props: { description: string }) => (
  <StyledDescription>{props.description}</StyledDescription>
);

export default Description;
