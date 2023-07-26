migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4h21xyxtjk13y4x")

  // remove
  collection.schema.removeField("z3wzt6zp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5daorkyr",
    "name": "productsss",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "product"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4h21xyxtjk13y4x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z3wzt6zp",
    "name": "items",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("5daorkyr")

  return dao.saveCollection(collection)
})
