import { useParams } from "react-router";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Personaje = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  const consultarAPI = async () => {
    const URL = `https://rickandmortyapi.com/api/character/${id}`;
    const response = await fetch(URL);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    consultarAPI();
  }, [id]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="d-flex flex-wrap">
          <Card key={data.id} style={{ width: "18rem", margin: "1rem" }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                <strong>Species:</strong> {data.species}
              </Card.Text>
              <Card.Text>
                <strong>Gender:</strong> {data.gender}
              </Card.Text>
              <Card.Text>
                <strong>Status:</strong> {data.status}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
