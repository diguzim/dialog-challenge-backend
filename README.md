# Dialog Challenge - Backend

Hello, this is the backend part of the challenge for a job interview, a very interesting one btw.

Pretty much this backend has to be an apollo(graphql) server with express that logs all the requests, written in typescript.

The apollo server will return an list of users, which can be optionally queried by `userId` or `searchTerm`. The searchTerm parameter applies a case insensitive regex search on the user name.

## How to run this

It's pretty simple:

1. Clone this repo and navigate to it's folder
2. Install the dependencies with `yarn install`
3. Run `yarn dev` to run it locally on port 4000

## CURL examples

Here are some curl examples of how to consume this API.

### Get the whole user list

`curl 'http://localhost:4000/graphql' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0' -H 'Accept: */*' -H 'Accept-Language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3' --compressed -H 'Referer: http://localhost:3000/' -H 'content-type: application/json' -H 'Origin: http://localhost:3000' -H 'Connection: keep-alive' --data-raw '{"operationName":"GetUserList","variables":{},"query":"query GetUserList($searchTerm: String) {\n list(name: $searchTerm) {\n _id\n name\n age\n eyeColor\n company\n email\n picture\n __typename\n }\n}\n"}'`

### Get the list but filtering with an userId

`curl 'http://localhost:4000/graphql' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0' -H 'Accept: */*' -H 'Accept-Language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3' --compressed -H 'Referer: http://localhost:3000/5f1d7f3e5dc58af42fc39242' -H 'content-type: application/json' -H 'Origin: http://localhost:3000' -H 'Connection: keep-alive' --data-raw '{"operationName":"GetUserListAndItsFriends","variables":{"userId":"5f1d7f3e5dc58af42fc39242"},"query":"query GetUserListAndItsFriends($userId: String!) {\n list(_id: $userId) {\n _id\n name\n age\n email\n picture\n friends {\n _id\n name\n age\n eyeColor\n company\n email\n picture\n __typename\n }\n __typename\n }\n}\n"}'`

### Get the list but filtering with an searchTerm

`curl 'http://localhost:4000/graphql' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0' -H 'Accept: */*' -H 'Accept-Language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3' --compressed -H 'Referer: http://localhost:3000/search/Dot' -H 'content-type: application/json' -H 'Origin: http://localhost:3000' -H 'Connection: keep-alive' --data-raw '{"operationName":"GetUserList","variables":{"searchTerm":"Dot"},"query":"query GetUserList($searchTerm: String) {\n list(name: $searchTerm) {\n _id\n name\n age\n eyeColor\n company\n email\n picture\n __typename\n }\n}\n"}'`
