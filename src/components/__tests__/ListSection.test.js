/* @flow */

import * as React from 'react';
import renderer from 'react-test-renderer';
import ListSection from '../List/ListSection';
import ListItem from '../List/ListItem';

it('renders list section without title', () => {
  const tree = renderer
    .create(
      <ListSection>
        <ListItem title="First Item" icon="folder" />
        <ListItem title="Second Item" icon="folder" />
      </ListSection>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders list section with title', () => {
  const tree = renderer
    .create(
      <ListSection title="Some title">
        <ListItem title="First Item" icon="folder" />
        <ListItem title="Second Item" icon="folder" />
      </ListSection>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
