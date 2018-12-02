import React from 'react'
import { shallow } from 'enzyme'
import { TracksListTracks } from '.'

describe('TracksListTracks', () => {

  it('Renders correct props', () => {
    const _list = [{
      name:"test-name-1",
      images:["1","2","3","4"]
    },{
      name:"test-name-2",
      images:["1","2","3","4"]
    },{
      name:"test-name-3",
      images:["1","2","3","4"]
    }]

    let output = shallow(
      <TracksListTracks
        list={_list}
      />
    )

    expect(output).toMatchSnapshot()
  })
})
