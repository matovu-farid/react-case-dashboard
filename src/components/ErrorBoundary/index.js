import { Component } from 'react';
import propTypes from 'prop-types';
import { Container, Typography } from '@mui/material';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '', errorInfo: '' };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    const { message } = error;
    this.setState((state) => ({
      ...state, message, errorInfo,

    }));
  }

  render() {
    const { hasError, message } = this.state;

    if (hasError) {
      // You can render any custom fallback UI

      return (
        <Container>
          <Typography color="primary" variant="h2">Something went wrong.</Typography>
          <Typography variant="h4">{message}</Typography>

        </Container>
      );
    }
    const { children } = this.props;
    return children;
  }
}
ErrorBoundary.propTypes = {
  children: propTypes.instanceOf(Object).isRequired,
};
export default ErrorBoundary;
