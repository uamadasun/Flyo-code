import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const {loading, error, data } = useQuery(gql`
        query GetProducts {
          products {
            data {
              attributes {
                product_name
              }
            }
            
          }
        }
        `);

    if (loading)  return "Loading...";
    if (error) return `Error! ${error.message}`;
    console.log()

  return (
    <div>
        <ul>
            {data.products.data.map(product => (
                <li key={product.id}>{product.attributes.product_name}</li>
             ))}
        </ul>
        Homepage

    </div>
  )
}

export default Homepage;