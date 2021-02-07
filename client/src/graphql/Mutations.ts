import { gql } from "@apollo/client";

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      deleted
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    createTodo(title: $title) {
      id
      title
    }
  }
`;
