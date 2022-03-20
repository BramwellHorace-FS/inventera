import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export default function PrimaryButton({ children, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="d-flex justify-content-center align-items-center gap-2 btn-primary"
    >
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
