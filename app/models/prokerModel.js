const conn = require('../../config/database')
const table = 'proker'

const Proker = function(proker){
  this.nama = proker.nama
  this.deskripsi = proker.deskripsi
  this.dokumentasi = proker.dokumentasi
  this.tanggal = proker.tanggal
  this.status = proker.status
}

Proker.findAll = result =>{
  conn.query(`SELECT * FROM ${table}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Proker.findById = (id, result) =>{
  conn.query(`SELECT * FROM ${table} WHERE id= ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Proker.create = (newProker, result) =>{
  conn.query(`INSERT INTO ${table} SET ?`, newProker, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Proker.update = (id, newData, result)=>{
  conn.query(`UPDATE ${table} SET nama= ?,
    deskripsi= ?, dokumentasi= ?, tanggal= ?, status= ?
    WHERE id= ?`,
    [newData.nama, newData.deskripsi, newData.dokumentasi, newData.tanggal, newData.status, id],
    (err, res)=>{
      if(err) result(null, err)
      result(null, res)
    }
    )
}

Proker.delete = (id, result) =>{
  conn.query(`DELETE FROM ${table} WHERE id= ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

module.exports = Proker