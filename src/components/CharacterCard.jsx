import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

export const CharacterCard = () => {
  const navigate = useNavigate();

  const irPersonaje = (id) => {
    navigate(`/personaje/${id}`);
  };

  const { data } = useContext(MyContext);

  return (
    <>
      <div>
        <h1>Rick and Morty Characters</h1>
        <div className="d-flex flex-wrap">
          {data.map((character) => (
            <Card key={character.id} style={{ width: "18rem", margin: "1rem" }}>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  <strong>Species:</strong> {character.species}
                </Card.Text>
                <Card.Text>
                  <strong>Gender:</strong> {character.gender}
                </Card.Text>
                <Card.Text>
                  <strong>Status:</strong> {character.status}
                </Card.Text>
              </Card.Body>
              <Button variant="dark" onClick={() => irPersonaje(character.id)}>
                Ver
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
