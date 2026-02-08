import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p>El mapa no pudo cargarse. <a href="https://goo.gl/maps/tu-link" target="_blank" className="text-orange-500 underline">Ver en Google Maps</a></p>
        </div>
      );
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;