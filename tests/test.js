import { expect } from 'chai';
import t from '../dist/index';

function aw10(key, value) {
	sessionStorage.setItem(key, JSON.stringify(value));
}

describe('global get', () => {
	it('get global value', () => {
		const key = 'mm';
		const value = 'studio'
		aw10(key, value);
		const v = t(key, 'mmstudio');
		expect(v).eq(value);
	});
});
