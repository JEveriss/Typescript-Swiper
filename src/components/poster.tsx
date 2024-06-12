import styled from "styled-components";

const StyledPoster = styled.div`
  box-shadow: 0px 0px 5px 2px gray;
  height: 600px;
  img {
    /* max-width: 100%; */
    max-height: 100%;
  }
`;

const Poster = (props: { image: string; title: string }) => {
  return (
    <StyledPoster>
      <img alt={`Theatre poster for ${props.title}`} src={props.image} />
    </StyledPoster>
  );
};
export default Poster;
