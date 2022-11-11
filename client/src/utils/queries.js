import { gql } from '@apollo/client';

export const QUERY_POSTS = gql``;

export const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            posts {
                _id
                postText
                createdAt
                

            }
        }

    }
`;