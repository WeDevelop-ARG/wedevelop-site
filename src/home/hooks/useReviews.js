import { shuffle } from 'lodash'

import ExampleAvatar from 'assets/home/example_avatar.png'

const reviews = [
  {
    profileImageURL: ExampleAvatar,
    name: 'Kerry Hebert',
    quote: <>Eleifend nisl at lacus morbi nibh mattis mauris, commodo sit. <strong>Rhoncus amet mauris et morbi est.</strong></>,
    position: 'QA Manager',
    company: 'HSBC'
  },
  {
    profileImageURL: ExampleAvatar,
    name: 'Kerry Hebert',
    quote: <>Eleifend nisl at lacus morbi nibh mattis mauris, commodo sit. <strong>Rhoncus amet mauris et morbi est.</strong></>,
    position: 'QA Manager',
    company: 'HSBC'
  },
  {
    profileImageURL: ExampleAvatar,
    name: 'Kerry Hebert',
    quote: <>Eleifend nisl at lacus morbi nibh mattis mauris, commodo sit. <strong>Rhoncus amet mauris et morbi est.</strong></>,
    position: 'QA Manager',
    company: 'HSBC'
  },
  {
    profileImageURL: ExampleAvatar,
    name: 'Kerry Hebert',
    quote: <>Eleifend nisl at lacus morbi nibh mattis mauris, commodo sit. <strong>Rhoncus amet mauris et morbi est.</strong></>,
    position: 'QA Manager',
    company: 'HSBC'
  },
  {
    profileImageURL: ExampleAvatar,
    name: 'Kerry Hebert',
    quote: <>Eleifend nisl at lacus morbi nibh mattis mauris, commodo sit. <strong>Rhoncus amet mauris et morbi est.</strong></>,
    position: 'QA Manager',
    company: 'HSBC'
  }
]

function useReviews () {
  return {
    reviews: shuffle(reviews)
  }
}

export default useReviews
