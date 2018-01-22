
<template>
  <div class="board">
    <BoardList boardIndex="0" edge="true" position="left" />
    <BoardList boardIndex="1" />
    <BoardList boardIndex="2" />
    <BoardList boardIndex="3" edge="true" position="right" />
  </div>
</template>

<script>
  import BoardList from './BoardList';

  export default {
    name: 'Board',
    data: function() {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    components: {
      // <my-component> will only be available in parent's template
      'BoardList': BoardList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .board {
  }
</style>
