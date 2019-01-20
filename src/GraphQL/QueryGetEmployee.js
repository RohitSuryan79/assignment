import gql from "graphql-tag";

export default gql(`
query getEmpoyeeTable($id: ID!) {
  getEmpoyeeTable(id: $id) {
    id
    name
    email
    mobile_number
  }
}`);
