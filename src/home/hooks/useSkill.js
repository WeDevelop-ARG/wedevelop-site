import React from 'assets/home/skills/react.svg'
import Node from 'assets/home/skills/node.svg'
import Python from 'assets/home/skills/python.svg'
import Aws from 'assets/home/skills/aws.svg'
import Ruby from 'assets/home/skills/ruby.svg'
import PostgreSQL from 'assets/home/skills/postgresql.svg'
import GraphQL from 'assets/home/skills/graphql.svg'
import MongoDB from 'assets/home/skills/mongodb.svg'

const skills = [{
  id: '1',
  name: 'React',
  photo: React
},
{
  id: '2',
  name: 'Node.js',
  photo: Node
},
{
  id: '3',
  name: 'Python',
  photo: Python
},
{
  id: '4',
  name: 'AWS',
  photo: Aws
},
{
  id: '5',
  name: 'Ruby on Rails',
  photo: Ruby
},
{
  id: '6',
  name: 'PostgreSQL',
  photo: PostgreSQL
},
{
  id: '7',
  name: 'GraphQL',
  photo: GraphQL
},
{
  id: '8',
  name: 'MongoDB',
  photo: MongoDB
}
]

function useSkill () {
  return skills
}

export default useSkill
