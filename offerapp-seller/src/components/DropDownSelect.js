// import React, { Component } from 'react';
// import {
//   View
// } from 'react-native';
// import SectionedMultiSelect from 'react-native-sectioned-multi-select';
 
// // const items = [
// //   {  
// //     name: "Fruits",
// //     id: 0,
// //     children: [{
// //         name: "Apple",
// //         id: 10,
// //       },{
// //         name: "Strawberry",
// //         id: 17,
// //       },{
// //         name: "Pineapple",
// //         id: 13,
// //       },{
// //         name: "Banana",
// //         id: 14,
// //       },{
// //         name: "Watermelon",
// //         id: 15,
// //       },{
// //         name: "Kiwi fruit",
// //         id: 16,
// //       }]
// //   },
// //   {
// //     name: "Gems",
// //     id: 1,
// //     children: [{
// //         name: "Quartz",
// //         id: 20,
// //       },{
// //         name: "Zircon",
// //         id: 21,
// //       },{
// //         name: "Sapphire",
// //         id: 22,
// //       },{
// //         name: "Topaz",
// //         id: 23,
// //       }]
// //   },
// //   {
// //     name: "Plants",
// //     id: 2,
// //     children: [{
// //         name: "Mother In Law\'s Tongue",
// //         id: 30,
// //       },{
// //         name: "Yucca",
// //         id: 31,
// //       },{
// //         name: "Monsteria",
// //         id: 32,
// //       },{
// //         name: "Palm",
// //         id: 33,
// //       }]
// //   },
// // ]

// const {
//   select_groups
// } = this.props;
 
// export default class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       selectedItems: [],
//     }
//   }
//   onSelectedItemsChange = (selectedItems) => {
//     this.setState({ selectedItems });
//   }
 
//   render() {
//     return (
//       <View>
      
//         <SectionedMultiSelect
//           items={select_groups} 
//           uniqueKey='select_groups'
//           subKey='group_id'
//           selectText='Select the groups to promote the offer'
//           showDropDowns={true}
//           readOnlyHeadings={true}
//           onSelectedItemsChange={this.onSelectedItemsChange}
//           selectedItems={this.state.selectedItems}
//         />
 
//       </View>
//     );
//   }
// }
