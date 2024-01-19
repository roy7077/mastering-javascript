Versioning is a crucial part of API design. It gives developers the ability to improve their API without breaking the client’s applications when new updates are rolled out.

1. Versioning through URI Path
http://www.example.com/api/1/products

2. Versioning through query parameters
http://www.example.com/api/products?version=1

3. Versioning through custom headers
curl -H “Accepts-version: 1.0”
http://www.example.com/api/products

