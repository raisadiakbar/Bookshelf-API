function errorHandler (err, req, res, next) {
    let message = 'Internal server error';
    let status = 500;
  
    if (err.error === 'Unauthenticated') {
      status = 401;
      message = 'Please login first to access this endpoint.'
    }
  
    else if (err.message ===  'id tidak ditemukan' ) {
      status = 404;
      message = `buku ${id} tidak ditemukan`;
    }

    else if (err.message ===  'id tidak ditemukan' ) {
      status = 404;
      message = `Buku gagal dihapus. ${id} tidak ditemukan`;
    }

    else if (err.message ===  'id tidak ditemukan' ) {
      status = 404;
      message = `Buku gagal diperbarui. ${id} tidak ditemukan`;
    }

    else if (err.message ===  'id tidak ditemukan' ) {
      status = 404;
      message = `Buku gagal dihapus. ${id} tidak ditemukan`;
    }

    
  return res.status(status).json({
    status: status,
    error: {
      message
  }
  })
}

module.exports = errorHandler;