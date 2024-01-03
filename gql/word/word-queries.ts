// mutations.js
import { gql } from '@apollo/client';
import { WordFindInput, Word  } from "@/types/resolvers-types";


export const WORDS_QUERY = gql`
    query GetWords {
        words {
            id
            word
            language {
                id
                name
            }
        }
    }
`;