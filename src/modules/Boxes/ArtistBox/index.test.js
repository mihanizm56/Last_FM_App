import React from 'react'
import { shallow } from 'enzyme'
import { ArtistBox } from '.'

describe('ArtistBox', () => {
  it('Find component "div"', () => {
    expect(
      shallow(<ArtistBox />).find('div.artist-preview__block').length
    ).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(<ArtistBox name="test-name" image="test-image" />)

    expect(output).toMatchSnapshot()
  })

  it('Renders correct length of Name', () => {
    let output = shallow(<ArtistBox name="test-name-test-name-test-name-test-name-test-name-test-name" image="test-image" />)

    expect(output).toMatchSnapshot()
  })
})
