import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { config, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();
const store = new Vuex.Store({});

// create global variables in global namespace
global.localVue = localVue;
global.router = router;
global.store = store;

// mock $store globally
config.mocks.$store = store;

// Mock Nuxt components
config.stubs.nuxt = { template: '<div />' };
config.stubs['nuxt-link'] = RouterLinkStub;
config.stubs['client-only'] = { template: '<span><slot /></span>' };
config.stubs.PaddingBox = { template: '<div><slot /></div>' };
