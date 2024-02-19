import { gql } from "@apollo/client";

export const ADD_CLIENT = gql`
    mutation addClient($name: String!, $email: String!, $phone: String!) {
        addClient(name: $name, email: $email, phone: $phone) {
            id
            name
            email
            phone
        }
    }
`;

export const DELETE_CLIENT = gql`
    mutation deleteClient($id: ID!) {
        deleteClient(id: $id) {
            id
            name
            email
            phone
        }
    }
`;

/* 

export const ADD_CLIENT = gql`
    mutation addClient($name: String!, $email: String!, $phone: String!) { // this 'addClient' need to be same as the name declared in the backend (server/schema/schema.js)
        addClient(name: $name, email: $email, phone: $phone) { // this 'addClient' need to be same as above
            id
            name
            email
            phone
        }
    }
`;

*/
