migrate((db) => {
  const collection = new Collection({
    "id": "3kt5a3pmuymcdkx",
    "created": "2023-07-26 09:42:09.997Z",
    "updated": "2023-07-26 09:42:09.997Z",
    "name": "catalog",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xuquayfl",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dckgdaik",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "hqbbbmxg",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3kt5a3pmuymcdkx");

  return dao.deleteCollection(collection);
})
