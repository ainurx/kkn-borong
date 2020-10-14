const conn = require('../../config/database')
const table = 'artikel'

const Artikel = function(artikel){
  this.judul = artikel.judul
  this.deskripsi = artikel.deskripsi
  this.gambar = artikel.gambar
} 

Artikel.findAll = result =>{
  conn.query(`SELECT * FROM ${table}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Artikel.findById = (id, result) =>{
  conn.query(`SELECT * FROM ${table} WHERE id= ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Artikel.create = (newArtikel, result)=>{
  conn.query(`INSERT INTO ${table} SET ?`, newArtikel, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Artikel.update = (id, newData, result)=>{
  conn.query(`UPDATE ${table} SET judul= ?, deskripsi= ?, gambar= ? WHERE id= ?`, 
    [newData.judul, newData.deskripsi, newData.gambar, id], (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Artikel.delete = (id, result)=>{
  conn.query(`DELETE FROM ${table} WHERE id= ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}


module.exports = Artikel