import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function DashboardCard({ title, itemCount }) {
  return (
    <Container className="text-center my-5">
      <h3 className="h1">{itemCount}</h3>
      <h4>{title}</h4>
    </Container>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
};
