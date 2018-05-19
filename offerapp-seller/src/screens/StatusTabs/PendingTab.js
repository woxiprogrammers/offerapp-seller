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

class PendingTab extends Component {
  constructor(props) {
    super(props);
    this.autoBind(
     'onEndReached',
     'onRefresh',
      'renderRow',
    );
  }
  componentWillMount() {
    const {
      token,
    } = this.props;
    const status = 'pending'; 
    const page = 1;
    console.log('Mounting All Tab');
    this.props.offerStatus(status);
    this.props.offerList({
      token,
      status,
      page
    });
  }
  onEndReached() {
    const {
      pagination,
      token,
      status
    } = this.props;
    const { page, perPage, pageCount, totalCount } = pagination;
    const lastPage = totalCount <= ((page - 1) * perPage) + pageCount;
    if (!lastPage) {
      this.props.offerList(
        token,
        status,
        page + 1
      );
    }
  }
  onRefresh() {
    const {
      token,
      status
    } = this.props;
    const page = 1;
    this.props.offerList({
      token,
      status,
      page
    });
  }
  autoBind(...methods) {
      methods.forEach(method => {
        this[method] = this[method].bind(this);
        return this[method];
      });
  }
  keyExtractor = (item, index) => { return index; };
  renderRow(offerDetails) {
    console.log('Rendering Row');
    const { item } = offerDetails;
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
    //   wishlist_count,
    //   interested_count,
    //   grabbed_count
    } = item;
    return (
      <View>
        <OfferCard
          cardTitle={offer_type_name}
          offerID={offer_id}
          startDate={valid_from}
          endDate={valid_to}
        //   likeCount={interested_count}
        //   grabCount={grabbed_count}
        //   wishlistCount={wishlist_count}
          offerStatus={offer_status_name}
        />
      </View>
    );
  }
  renderOfferList() {
    if (this.props.isLoading) {
      return (
        <View style={{ paddingTop: '25%' }}>
          <Spinner color='black' />
        </View>
      )
    } else {
      return (
        <FlatList
          automaticallyAdjustContentInsets={false}
          data={this.props.offer_list}
          refreshing={false}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
        // onRefresh={() => { return this.onRefresh(); }}
        // onEndReached={() => { return this.onEndReached(); }}
        />
      )
    }
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
          {this.renderOfferList()}
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
)(PendingTab);
