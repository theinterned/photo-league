import React from 'react';
import {shallow, mount} from 'enzyme';
import Request from './Request';

describe('Request', () => {
  let renderFunction;

  beforeEach(() => {
    fetch.resetMocks();
    renderFunction = jest.fn();
  })

  it('passes loading, error and data props to children', () => {
    shallow(
      <Request>{renderFunction}</Request>
    );
    expect(renderFunction.mock.calls.length).toBe(1)
    expect(renderFunction.mock.calls[0][0]).toEqual({loading: true, error: false, data: undefined});
  });

  it('Updates with data on a successful request', async() => {
    fetch.mockResponse(JSON.stringify('data'));

    const wrapper = mount(
      <Request>{renderFunction}</Request>
    );

    // note this calls componentDidMount twice
    await wrapper
      .instance()
      .componentDidMount();

    expect(renderFunction.mock.calls.length).toBe(3)
    expect(renderFunction.mock.calls[1][0]).toEqual({loading: false, error: false, data: 'data'});
    expect(renderFunction.mock.calls[2][0]).toEqual(renderFunction.mock.calls[1][0]);
  });

  it('handles rejected promises', () => {});
})