import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 font-poppins bg-gradient-to-br from-black via-[#111] to-black">
          <h1 className="text-5xl font-bold mb-4 text-white">Something went wrong</h1>
          <p className="mb-6 text-neutral-600">
            An unexpected error occurred. Please refresh the page.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Reload App or Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
