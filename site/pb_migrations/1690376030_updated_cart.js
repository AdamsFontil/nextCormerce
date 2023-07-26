migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4h21xyxtjk13y4x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2jmzq2df",
    "name": "product",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "3kt5a3pmuymcdkx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "price"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4h21xyxtjk13y4x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2jmzq2df",
    "name": "product",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "3kt5a3pmuymcdkx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
