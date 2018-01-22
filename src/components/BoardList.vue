
<template>
  <div class="board-list">
    <div class="title" v-bind:style="{ backgroundColor: titleColor }">{{title}}</div>

    <ul>
      <BoardItem v-for="(item, index) in items" v-bind:boardIndex="boardIndex" v-bind:key="item.id" v-bind:index="index" v-bind:item="item" v-bind:edge="edge" v-bind:position="position"></BoardItem>
    </ul>

    <div class="add" v-on:click="add">+ Add a card</div>
  </div>
</template>

<script>
  import BoardItem from './BoardItem';

  export default {
    name: 'BoardList',
    props: ['boardIndex', 'edge', 'position'],
    data: function() {
      return {
        /*items: [
          { id: 0, message: 'Text 1' },
          { id: 1, message: 'Text 2' }
        ]*/
      }
    },
    computed: {
      title: function() {
        return this.$store.state.boardList[this.boardIndex].title;
      },
      titleColor: function() {
        return this.$store.state.boardList[this.boardIndex].titleColor;
      },
      items: function() {
        return this.$store.state.boardList[this.boardIndex].items;
      }
    },
    watch: {
    },
    methods: {
      add: function() {
        //console.log('add', this.items);
        var text = prompt("Add a card");

        if (text) {
          this.items.push({
            id: Date.now(),
            message: text
          })
        }

      }
    },
    components: {
      // <my-component> will only be available in parent's template
      'BoardItem': BoardItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .board-list {
    width: 22%;
    display: inline-block;
    vertical-align: top;
    margin: 0 10px;

    .title {
      color: white;
      padding: 10px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .add {
      text-align: left;
      color: #999;
      font-size: 12px;
      margin: 10px 0;
    }
  }
</style>
