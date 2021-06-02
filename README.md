
# OpenAPI and Codegen for typescript

Testing dotnet web api with OpenAPI spec and code gen for client side Typescript  
Including fix for `Enum`, see `server/EnumFilter.cs`

## OpenAPI spec

Using [Swashbuckle](https://www.nuget.org/packages/Swashbuckle.AspNetCore/) for OpenAPI spec gen

## Typescript gen

Using [openapi-typescript-codegen](https://www.npmjs.com/package/openapi-typescript-codegen) for TS gen

## Test

- run `dotnet run` in `server`
- Launch [http://localhost:5000/swagger](http://localhost:5000/swagger/index.html)
- in `client` run `npm run import-api` - (executes file `client/importAPI.mjs`)
- See result in `client/api`
