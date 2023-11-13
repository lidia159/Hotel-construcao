import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
      <img src="../../../public/duas camas.jpg" class="d-block w-100 " alt="..." />
   
        <Card.Body>
          <Card.Title>Duas Camas Luxo</Card.Title>
          <Card.Text>
          -Wifi
          -Café da manhã
          -Ar-condicionado
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Reserve agora!</small>
        </Card.Footer>
      </Card>
      <Card>
      <img src="../../../public/quarto luxo.jpg" class="d-block w-100 " alt="..." />
   
        <Card.Body>
          <Card.Title>Quarto Luxo</Card.Title>
          <Card.Text>
          -Wifi
          -Café da manhã
          -Ar-condicionado
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Reserve agora!</small>
        </Card.Footer>
      </Card>
      <Card>
      <img src="../../../public/suite luxo.jpeg" class="d-block w-100 " alt="..." />
   
        <Card.Body>
          <Card.Title>Suíte Luxo</Card.Title>
          <Card.Text>
          -Wifi
          -TV
          -Café da manhã
          -Ar-condicionado
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Reserve agora!</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;