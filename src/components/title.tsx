import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #d4d5c1;
`;

const Title = (props: { title: string }) => {
  return <StyledTitle>{props.title}</StyledTitle>;
};
export default Title;
