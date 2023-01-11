const db = require('../models');
const Books = db.Books;
const fs = require('fs');

class Controller {
    static async addBook(req, res, next) {
    const { name , year, author, summary, publisher, pageCount, readPage} = req.body;
    const {id, createdAt, updatedAt} = req.params;
    const finished = pageCount === readPage;
    const reading =  readPage < pageCount;
   
    if (!name) return res.status(400).json ({ 
       status: "fail",
        message: "Gagal menambahkan buku. Mohon isi nama buku"
    });

    if (readPage > pageCount) return res.status(400).json ({ 
        status: "fail",
        message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
     });

    await Books.create({
        name: name,
        year: year,
        author: author,
        summary: summary,
        publisher: publisher,
        pageCount: pageCount,
        readPage: readPage,
        finished: finished,
        reading: reading
    })
    .then(book => {
        res.status(201).json({
            data: book,
            status: "success",
            message: "Buku berhasil ditambahkan"
        })
    })
        
    .catch((err) => {
        next(err);
    })

}
    static getAll(req, res, next) {
        return Books.findAll({
            attributes: [
                "id",
                "name",
                "publisher"
            ]
        })
        .then(book => {
            return res.status(200).json({
                status: "success",
                id: book
            }) 
        })
        .catch((err) => {
            next(err);
        })
    }
    
    static async getBook(req, res, next) {
        const id = req.params.id;
        try {
            await Books.findByPk(id)
            .then(results => {
                if (results) {
                    res.send(results);
                } 
                else {throw {
                        status : 'fail',
                        message: `Buku tidak ditemukan`
                   }
                };
            });
        } catch (err) {
                next(err);   
        }
    }


    static updateBooks = async (req, res, next) => {
        const { name , year, author, summary, publisher, pageCount, readPage} = req.body;
        const {id, createdAt, updatedAt} = req.params;
        const finished = pageCount === readPage;
        const reading =  readPage < pageCount;


        if (!name) return res.status(400).json ({ 
            status: "fail",
             message: "Gagal memperbarui buku. Mohon isi nama buku"
         });
         
         if (readPage > pageCount) return res.status(400).json ({ 
             status: "fail",
             message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
          });
          
          if (!id) return res.status(400).json ({ 
            status: "fail",
            message: "Gagal memperbarui buku. id tidak ditemukan"
         });


        try {
        
        const book = {
            name: name,
            year: year,
            author: author,
            summary: summary,
            publisher: publisher,
            pageCount: pageCount,
            readPage: readPage,
            reading: reading,
            finished: finished
        }
        
        return res.status(200).json(
            {
                data: book,
                status: "success",
                message: "Buku berhasil diperbarui"
            }
        );
    } catch (err){next(err)}
}
    static async deleteBooks(req, res, next) {
        const id = req.params.id;

        if (!id) return next ({ 
            status: "fail",
            message: "Buku gagal dihapus. id tidak ditemukan"
         });


        try {
            await Books.destroy({
                where: {
                    id: id
                }
            })
                return res.status(200).json({
                    status: "Success",
                    message: "Buku berhasil dihapus"
               
            })
        } catch (err) {
                console.log(err);  
        }
        }
}

module.exports = Controller;




