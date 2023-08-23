import {gql} from '@apollo/client';
import { __Directive } from 'graphql';

export const GET_ME = gql`
{
    me {
        _id
        username    
    }
    }
    `;