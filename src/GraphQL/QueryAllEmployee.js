import gql from "graphql-tag";

export default gql(`
  query listEmpoyeeTables(
  $filter: TableEmpoyeeTableFilterInput 
  $limit: Int 
  $nextToken: String) {
    listEmpoyeeTables(
    filter: $filter 
    limit: $limit 
    nextToken: $nextToken) {
    items {
      id 
      name
      email
      mobile_number
    }
  }

}`);
