migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4h21xyxtjk13y4x")

  // remove
  collection.schema.removeField("d4hekzit")

  // remove
  collection.schema.removeField("mstshkok")

  // remove
  collection.schema.removeField("kg9uqcar")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4h21xyxtjk13y4x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d4hekzit",
    "name": "cartID",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mstshkok",
    "name": "createdAt",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kg9uqcar",
    "name": "updatedAt",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
