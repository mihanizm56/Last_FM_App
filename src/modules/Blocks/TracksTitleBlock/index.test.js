import React from 'react'
import { shallow } from 'enzyme'
import { TracksTitleBlock } from '.'

describe('TracksTitleBlock', () => {
  it('Find component "div"', () => {
    expect(
      shallow(<TracksTitleBlock />).find('div.songs-main-wrapper').length
    ).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(
      <TracksTitleBlock callback={() => console.log('test-func')} />
    )

    expect(output).toMatchSnapshot()
  })
})
