<template>
  <div class="workflowsTable">
    <Table>
      <template slot="columns"> COLUMNS CONTENT </template>

      <template slot="slotted" slot-scope="anything">
        SLOTTED CONTENT
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class WorkflowsTable extends Vue {}
</script>
