function errorHandler (err, req, res, next) {
    let message = 'Internal server error';
    let status = 500;
  
    if (err.error === 'Unauthenticated') {
      status = 401;
      message = 'Please login first to access this endpoint.'
    }
  
    else if (err.message === 'Unsupport file format') {
      status = 400;
      message = `Unsupport file format. Can only accept ${err.support} format.`;
    }

    
  return res.status(status).json({
    status: status,
    message
  })
}

module.exports = errorHandler;