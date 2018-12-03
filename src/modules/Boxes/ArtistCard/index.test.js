import React from 'react'
import { shallow } from 'enzyme'
import { AnimatedArtistCard } from '.'

describe('AnimatedArtistCard', () => {
  it('Renders correct props', () => {
    let output = shallow(
      <AnimatedArtistCard
        name=""
        is={true}
        genre="test-img"
        image="testName"
      />
    )

    expect(output).toMatchSnapshot()
  })
})
