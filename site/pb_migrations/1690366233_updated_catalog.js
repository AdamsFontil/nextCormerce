migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3kt5a3pmuymcdkx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pikatepf",
    "name": "imageURL",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3kt5a3pmuymcdkx")

  // remove
  collection.schema.removeField("pikatepf")

  return dao.saveCollection(collection)
})
