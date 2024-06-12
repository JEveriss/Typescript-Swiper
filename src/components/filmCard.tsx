import Title from "./title";
import Tags from "./tags";
import Poster from "./poster";
import data from "./data.json";
import styled from "styled-components";

console.log(data);

const FilmCardStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 5px;
  border: solid 2px black;
  padding: 5px;
  margin: 5px 0;
  background-color: #1e1e1e;
  color: #f8e2ba;
  font-size: 2rem;
  p {
    color: #878787;
  }
`;

function FilmCard(props: {
  image: string;
  title: string;
  year: number;
  tags: string[];
}) {
  return (
    <>
      <FilmCardStyle>
        <div>
          <Title title={props.title} />
          <p>{props.year}</p>
        </div>
        <Tags tags={props.tags} />
        <Poster title={props.title} image={props.image} />
      </FilmCardStyle>
    </>
  );
}

export default FilmCard;
