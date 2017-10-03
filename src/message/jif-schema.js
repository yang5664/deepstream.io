module.exports = {
  "title": "JSON Interchange Format",
  "description": "A JSON format for interaction with DeepstreamIO.",
  "type": "object",
  "anyOf": [
    {
      "properties": {
        "topic": {
          "const": "event"
        },
        "action": {
          "const": "emit"
        },
        "eventName": {
          "type": "string",
          "minLength": 1
        },
        "data": {}
      },
      "required": [
        "topic",
        "action",
        "eventName"
      ],
      "additionalProperties": false
    },
    {
      "title": "RPC",
      "description": "Make RPC requests.",
      "properties": {
        "topic": {
          "const": "rpc"
        },
        "action": {
          "const": "make"
        },
        "rpcName": {
          "type": "string",
          "minLength": 1
        },
        "data": {}
      },
      "required": [
        "topic",
        "action",
        "rpcName"
      ],
      "additionalProperties": false
    },
    {
      "title": "Record",
      "description": "Fetch and delete records.",
      "properties": {
        "topic": {
          "const": "record"
        },
        "action": {
          "enum": [
            "read",
            "head",
            "delete"
          ]
        },
        "recordName": {
          "type": "string",
          "minLength": 1
        }
      },
      "required": [
        "topic",
        "action",
        "recordName"
      ],
      "additionalProperties": false
    },
    {
      "title": "Record Writes",
      "description": "Create or update a record. The full object must be specified.",
      "properties": {
        "topic": {
          "const": "record"
        },
        "action": {
          "const": "write"
        },
        "recordName": {
          "type": "string",
          "minLength": 1
        },
        "data": {
          "type": ["object", "array"]
        },
        "version": {
          "type": "integer",
          "minimum": -1
        }
      },
      "required": [
        "topic",
        "action",
        "recordName",
        "data"
      ],
      "additionalProperties": false
    },
    {
      "title": "Record Write With Path",
      "description": "If a path is specified, a patching update will occur.",
      "properties": {
        "topic": {
          "const": "record"
        },
        "action": {
          "const": "write"
        },
        "recordName": {
          "type": "string",
          "minLength": 1
        },
        "data": {},
        "path": {
          "type": "string"
        },
        "version": {
          "type": "integer",
          "minimum": -1
        }
      },
      "required": [
        "topic",
        "action",
        "recordName",
        "data",
        "path"
      ],
      "additionalProperties": false
    },
    {
      "title": "Presence",
      "description": "Query presence.",
      "properties": {
        "topic": {
          "const": "presence"
        },
        "action": {
          "enum": [
            "query"
          ]
        }
      },
      "required": [
        "topic",
        "action"
      ],
      "additionalProperties": false
    }
  ]
}