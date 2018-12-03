import React from 'react'
import { shallow } from 'enzyme'
import { AnimatedAlbumBox } from '.'

describe('AnimatedAlbumBox', () => {

  it('Renders correct props', () => {
    let output = shallow(<AnimatedAlbumBox
      artistName=""
      image="test-img"
      is={true}
      name="testName"
    />)

    expect(output).toMatchSnapshot()
  })
})
