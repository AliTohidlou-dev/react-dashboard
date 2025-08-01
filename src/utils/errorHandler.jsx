function ErrorHandler({children}) {
  return <p className="errorMsg"><i className="fas fa-exclamation"></i>{children}</p>;
}

export default ErrorHandler;