import { gql, useQuery } from "@apollo/client";

export const GET_CLIENTS = gql`
    query getClients {
        clients {
            name
            id
            email
            phone
        }
    }
`;
