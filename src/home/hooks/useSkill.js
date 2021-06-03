import react from '../../assets/home/react.svg'
import node from '../../assets/home/node.svg'
import python from '../../assets/home/python.svg'
import aws from '../../assets/home/aws.svg'
import ruby from '../../assets/home/ruby.svg'
import postgresql from '../../assets/home/postgresql.svg'
import graphql from '../../assets/home/graphql.svg'
import mongodb from '../../assets/home/mongodb.svg'

const skills = [{
  id: 1,
  name: 'React',
  photo: react
},
{
  id: 2,
  name: 'Node.js',
  photo: node
},
{
  id: 3,
  name: 'Python',
  photo: python
},
{
  id: 4,
  name: 'Amazon Web Services',
  photo: aws
},
{
  id: 5,
  name: 'Ruby on Rails',
  photo: ruby
},
{
  id: 6,
  name: 'PostgreSQL',
  photo: postgresql
},
{
  id: 7,
  name: 'GraphQL',
  photo: graphql
},
{
  id: 8,
  name: 'MongoDB',
  photo: mongodb
}
]

function useSkill () {
  return skills
}

export default useSkill
