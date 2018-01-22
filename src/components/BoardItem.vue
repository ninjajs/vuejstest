
<template>
  <li class="board-item">
    <span class="arrow left" v-bind:class="{ hidden: hideLeftArrow }" v-on:click="moveItemLeft(index)"><</span>
    {{item.message}}
    <span class="arrow right" v-bind:class="{ hidden: hideRightArrow }" v-on:click="moveItemRight(index)">></span>
  </li>
</template>

<script>
  export default {
    name: 'BoardItem',
    props: ['boardIndex', 'item', 'index', 'edge', 'position'],
    data: function() {
      return {
      }
    },
    computed: {
      hideLeftArrow: function() {
        if (this.position == "left") {
          return true;
        }

        return false;
      },
      hideRightArrow: function() {
        if (this.position == "right") {
          return true;
        }

        return false;
      }
    },
    methods: {
      moveItemLeft: function(index) {
        //console.log('a', this.boardIndex);
        this.$store.dispatch('moveItemLeft', { itemIndex: index, boardIndex: parseInt(this.boardIndex) });
      },
      moveItemRight: function(index) {
        this.$store.dispatch('moveItemRight', { itemIndex: index, boardIndex: parseInt(this.boardIndex) });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .board-item {

  }

  li {
    position: relative;
    margin: 5px 0;
    background-color: white;
    padding: 10px 30px;
    text-align: left;
  }

  .arrow {
    display: block;
    position: absolute;
    font-weight: bold;
    cursor: pointer;

    &.hidden {
      display: none;
    }

    &.left {
      top: 10px;
      left: 10px;
    }

    &.right {
      top: 10px;
      right: 10px;
    }
  }
</style>
