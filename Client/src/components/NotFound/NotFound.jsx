import { useEffect } from 'react';
import '../../index.css';

const NotFound = () => {

  useEffect(() => {
    const toolbarElements = document.getElementsByClassName("MuiToolbar-root");
    if (toolbarElements.length > 0) {
      toolbarElements[0].style.display = "none";
    }
  }, []);

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <h3>Sorry, the page you are looking for does not exist.</h3>
    </div>
  );
};

export default NotFound;