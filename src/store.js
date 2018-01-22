export default {

  state: {
    boardList: [
      {
        index: 0,
        title: 'Winnie',
        titleColor: '#8E6E95',
        items: [
          { id: 0, message: 'Text 1' },
          { id: 1, message: 'Text 2' }
        ]
      },
      {
        index: 1,
        title: 'Bob',
        titleColor: '#39A59C',
        items: [
          { id: 2, message: 'Text 1' },
          { id: 3, message: 'Text 2' }
        ]
      },
      {
        index: 2,
        title: 'Thomas',
        titleColor: '#344759',
        items: [
          { id: 4, message: 'Text 1' },
          { id: 5, message: 'Text 2' }
        ]
      },
      {
        index: 3,
        title: 'George',
        titleColor: '#E8741E',
        items: [
          { id: 6, message: 'Text 1' },
          { id: 7, message: 'Text 2' }
        ]
      }
    ]
  },
  mutations: {
    moveItemleft(state, payload) {
      //console.log('moveleft', payload);

      var item = state.boardList[payload.boardIndex].items.splice(payload.itemIndex, 1);
      var newBoard = state.boardList[payload.boardIndex-1];

      newBoard.items.push({
        id: item[0].id,
        message: item[0].message
      });
    },
    moveItemRight(state, payload) {
      //console.log('moveright', payload);

      var item = state.boardList[payload.boardIndex].items.splice(payload.itemIndex, 1);
      var newBoard = state.boardList[payload.boardIndex+1];

      newBoard.items.push({
        id: item[0].id,
        message: item[0].message
      });
    }
  },
  actions: {
    moveItemLeft(context, payload) {
      context.commit('moveItemleft', payload);
    },
    moveItemRight(context, payload) {
      context.commit('moveItemRight', payload);
    }
  }
}
