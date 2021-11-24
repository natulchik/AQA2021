{
	"info": {
		"_postman_id": "186d7158-e676-49d4-bf76-e2a23801ed31",
		"name": "AQA_2021",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "List of users",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{url}}?page=2",
					"host": [
						"{{url}}"
					],
					"query": [
						{
							"key": "page",
							"value": "2"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Create user",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"Kolyan\",\r\n    \"job\": \"driver\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}",
					"host": [
						"{{url}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete user",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "{{url}}/301",
					"host": [
						"{{url}}"
					],
					"path": [
						"301"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add user",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"Ihor\",\r\n    \"job\": \"tester\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/api/users?page=2",
					"host": [
						"{{url}}"
					],
					"path": [
						"api",
						"users"
					],
					"query": [
						{
							"key": "page",
							"value": "2"
						}
					]
				}
			},
			"response": []
		}
	]
}