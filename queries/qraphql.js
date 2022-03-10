import { gql } from "@apollo/client"

export const GetData = gql`
  query GetData {
    getDeathStar {
      name
      length
    }
    getXWing {
      length
      name
    }
    rockets {
      cost_per_launch
      diameter {
        meters
      }
      height {
        meters
      }
      id
      mass {
        kg
      }
      name
    }
    units {
      cost_multiplier
      domain
      length_multiplier
      mass_multiplier
      stars
      unit
      id
    }
  }
`

export const SubStars = gql`
  subscription SubStars {
    pages(where: { page_name: { _eq: "index" } }) {
      upvotes
    }
  }
`

export const IncStars = gql`
  mutation IncStars($_inc: pages_inc_input) {
    update_pages(where: { page_name: { _eq: "index" } }, _inc: $_inc) {
      returning {
        upvotes
      }
    }
  }
`
