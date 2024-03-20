// Next.js supports the following HTTP methods:

// 1.   **GET**: Retrives data or resources from the server
// 2.   **POST**: Submits data to the server to create a new resource
// 3.   **PUT**: Updates or replace an existing resource on the server
// 4.   **PATCH**: Partially updates an existing resource on the server
// 5.   **DELETE**: Removes a specific resource from the server
// 6.   **HEAD**: Retrives the headers of a resource without fetching its body
// 7.   **OPTIONS**: Retrives the support HTPP methods and other communication options for a resource

// donc possibilité de modifier supprimer creer sur le serveur avec full POST

// la route de l'api :
// http://localhost:3000/api/users

export async function GET(req){
    const users = [
        {id : 1, name: 'Abdel', age: '22'},
        {id : 2, name: 'Nora', age: '21'},
        {id : 3, name: 'Reda', age: '20'},
        {id : 4, name: 'Yanis', age: '21'},
        {id : 5, name: 'Faty', age: '24'},
        {id : 6, name: 'Anta', age: '20'},
    ];

    return new Response(JSON.stringify(users))
}