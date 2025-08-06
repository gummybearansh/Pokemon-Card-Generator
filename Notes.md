# REST API (Representational State Transfer Application Programming Interface)
- A set of rules for how two computers can communicate over the internet.
- A formal agreement on how to structure requests and responses 
- Basically manipulating resources using standard HTTP Requests 

GET - Retreive Data 
POST - Create new Data 
PUT - update existing data 
DELETE - remove data 


## Fetch API 
- A modern, promise-based way to make network requests 
- promise is a placeholder for a value that is not yet known (it will either be fulfilled (resolve) or failed (rejected) at some point)

- When the fetch call is successful, it returns a Response Object not the actual data. (contains info about request, headers, status codes, and body )
- need to call the response.json() which returns another promise -> so need to return respones.json()
- this resolves into the actual json data after being parsed. 


