// mutations.js
import { gql } from '@apollo/client';
import { WordFindInput, Word } from "@/types/resolvers-types";


export const ADD_WORD_MUTATION = gql`
    mutation AddWord($word: String!, $language: ID) {
        createWord(args: { word: $word, language: $language }) {
            id
            word
            language {
                id
                name
            }
        }
    }
`;