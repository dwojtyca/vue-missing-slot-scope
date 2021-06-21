import { shallowMount } from '@vue/test-utils';
import WorkflowsTable from '@/components/WorkflowsTable/WorkflowsTable.vue';

describe('WorkflowsTable', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(WorkflowsTable, {
      localVue: global.localVue,
      router: global.router,
      stubs: ['Table']
    });
  });

  afterEach(() => {
    wrapper = undefined;
  });

  test.only('renders correctly', () => {
    // templates with slot-scope are missing in snapshots - why?
    expect(wrapper.element).toMatchSnapshot();
  });
});
