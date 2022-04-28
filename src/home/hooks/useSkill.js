import React from 'assets/home/skills/react.component.svg'
import Node from 'assets/home/skills/node.component.svg'
import Python from 'assets/home/skills/python.component.svg'
import Aws from 'assets/home/skills/aws.component.svg'
import Ruby from 'assets/home/skills/ruby.component.svg'
import PostgreSQL from 'assets/home/skills/postgresql.component.svg'
import GraphQL from 'assets/home/skills/graphql.component.svg'
import MongoDB from 'assets/home/skills/mongodb.component.svg'

const skills = [{
  id: '1',
  name: 'React',
  renderedLogo: <React viewBox='0 0 47 53' />
},
{
  id: '2',
  name: 'Node.js',
  renderedLogo: <Node viewBox='0 0 47 53' />
},
{
  id: '3',
  name: 'Python',
  renderedLogo: <Python viewBox='0 0 53 53' />
},
{
  id: '4',
  name: 'AWS',
  renderedLogo: <Aws viewBox='0 0 69 53' />
},
{
  id: '5',
  name: 'Ruby on Rails',
  renderedLogo: <Ruby viewBox='0 0 128 53' />
},
{
  id: '6',
  name: 'PostgreSQL',
  renderedLogo: <PostgreSQL viewBox='0 0 51 53' />
},
{
  id: '7',
  name: 'GraphQL',
  renderedLogo: <GraphQL viewBox='0 0 46 53' />
},
{
  id: '8',
  name: 'MongoDB',
  renderedLogo: <MongoDB viewBox='0 0 47 53' />
}
]

function useSkill () {
  return skills
}

export default useSkill
