# Gql

Folder to store your queries and mutations from your graphql server

## File example

```ts
// word-mutations.ts

import {gql} from 'graphql-request';

import { COMMON_ACTIVE_ORDER } from './order-fragments';

export const ACTIVE_ORDER_QUERY = gql`
  ${COMMON_ACTIVE_ORDER}

  query ActiveOrder {
    activeOrder {
      ...CommonActiveOrder
    }
  }
`;

```


## Structure example

```
|-- gql
    |-- orders
        |-- index.ts
        |-- word-mutations.ts
        |-- order-mutations.ts
        |-- order-fragments.ts
```