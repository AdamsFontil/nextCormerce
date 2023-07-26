migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4h21xyxtjk13y4x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8mnwpjav",
    "name": "cartItems",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4h21xyxtjk13y4x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8mnwpjav",
    "name": "items",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
