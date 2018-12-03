import React from 'react'
import { shallow } from 'enzyme'
import { AlbumBox } from '.'

describe('AlbumBox', () => {

  it('Renders correct props', () => {
    let output = shallow(<AlbumBox
      artistName=""
      image="test-img"
      is={true}
      name="testName"
    />)

    expect(output).toMatchSnapshot()
  })
})
