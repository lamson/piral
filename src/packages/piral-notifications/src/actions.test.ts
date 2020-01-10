import { Atom, deref } from '@dbeining/react-atom';
import { openNotification, closeNotification } from './actions';
import { createActions, createListener } from 'piral-core';

describe('Notifications Actions Module', () => {
  it('openNotification prepends a new notification', () => {
    const state = Atom.of({
      foo: 5,
      notifications: ['b'],
    });
    const ctx = createActions(state, createListener({}));
    openNotification(ctx, 'a');
    expect(deref(state)).toEqual({
      foo: 5,
      notifications: ['a', 'b'],
    });
  });

  it('closeNotification removes an existing notification', () => {
    const state = Atom.of({
      foo: 5,
      notifications: ['a', 'b', 'c'],
    });
    const ctx = createActions(state, createListener({}));
    closeNotification(ctx, 'b');
    expect(deref(state)).toEqual({
      foo: 5,
      notifications: ['a', 'c'],
    });
  });
});
