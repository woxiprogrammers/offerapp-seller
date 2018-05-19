import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import {
  Container,
  Content,
  Spinner,
  View
} from 'native-base';
import { connect } from 'react-redux';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  colors,
 } from '../../styles';
import { offerStatus, offerList } from '../../actions';
import OfferCard from '../../components/OfferCard';

class AllTab extends Component {
  constructor(props) {
    super(props);
    this.autoBind(
      // 'onEndReached',
      // 'onRefresh',
      'renderRow',
    );
  }
  componentWillMount() {
    const {
      token,
    } = this.props;
    const status = 'disapprove'; 
    const page = 1;
    console.log('Mounting All Tab');
    this.props.offerStatus(status);
    this.props.offerList({
      token,
      status,
      page
    });
  }
  // onEndReached() {
  //   const {
  //     pagination,
  //     token,
  //     status
  //   } = this.props;
  //   const { page, perPage, pageCount, totalCount } = pagination;
  //   const lastPage = totalCount <= ((page - 1) * perPage) + pageCount;
  //   if (!lastPage) {
  //     this.props.offerList(
  //       token,
  //       status,
  //       page + 1
  //     );
  //   }
  // }
  // onRefresh() {
  //   const {
  //     token,
  //     status
  //   } = this.props;
  //   const page = 1;
  //   this.props.offerList({
  //     token,
  //     status,
  //     page
  //   });
  // }
  // autoBind(...methods) {
  //     methods.forEach(method => {
  //       this[method] = this[method].bind(this);
  //       return this[method];
  //     });
  // }
  keyExtractor = (item, index) => { return index; };
  renderRow(offerDetails) {
    // console.log('Rendering Row');
    // console.log(offerDetails);
    // console.log(offerDetails);
    const { item } = offerDetails;
    console.log(item)
    const {
      offer_id,
      seller_address_id,
      offer_type_id,
      offer_type_name,
      offer_status_id,
      offer_status_name,
      offer_description,
      valid_from,
      valid_to,
    } = item;
    return (
      <View>
        <OfferCard
          cardTitle={offer_type_name}
          offerID={offer_id}
          startDate={valid_from}
          endDate={valid_to}
          offerStatus={offer_status_name}
        />
      </View>
    );
  }
  render() {
    const {
      containerStyle
    } = styles;
    const { offer_list } = this.props;
    console.log(offer_list);
    return (
      <Container style={containerStyle}>
        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: responsiveHeight(1),
            paddingLeft: responsiveWidth(2.5),
          }}
        >
          <FlatList
            automaticallyAdjustContentInsets={false}
            data={offer_list}
            refreshing={false}
            renderItem={this.renderRow}
            keyExtractor={this.keyExtractor}
            // onRefresh={() => { return this.onRefresh(); }}
            // onEndReached={() => { return this.onEndReached(); }}
          />
        </Content>
       </Container>
     );
   }
 }

 const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps({ offerlist, user }) {
    const { token } = user;
    return {
        ...offerlist,
        token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        offerList: ({
          token,
          status,
          page
          }) => {
          return dispatch(offerList({
            token,
            status,
            page
            }));
        },
        offerStatus: (text) => {
          return dispatch(offerStatus(text));
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllTab);
