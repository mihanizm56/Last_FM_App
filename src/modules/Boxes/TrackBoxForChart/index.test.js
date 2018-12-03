import React from 'react'
import { shallow } from 'enzyme'
import { TrackBoxForChart } from '.'

describe('TrackBoxForChart', () => {
  it('Find component "artist-chartBlock-wrapper"', () => {
    expect(
      shallow(<TrackBoxForChart />).find('div.artist-chartBlock-wrapper')
        .length
    ).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(
      <TrackBoxForChart trackName="test" artistName="test" image="test" />
    )

    expect(output).toMatchSnapshot()
  })
})
