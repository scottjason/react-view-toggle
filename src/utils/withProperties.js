import React, { Component } from 'react';
import { getAll } from '../api';
import { reqUrl } from '../constants';

const WHITELISTED_FIELDS = ['id', 'mainImageUrl', 'address', 'physical', 'financial', 'resources'];

/**
*
*
* Higher Order Component: withProperties
*
* Responsible for fetching data from the api once per application load
*
*
*/

const withProperties = WrappedComponent => {
  class withProperties extends Component {
    constructor(props) {
      super(props);
      this.state = {
        properties: [],
      };
    }
    static defaultProps = {
      locale: 'en-US',
      formatOpts: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      },
      financialKey: 'financial',
    }
    componentDidMount() {
      getAll(reqUrl).then(this.onSuccess);
    }    
    formatter() {
      return new Intl.NumberFormat(this.props.locale, this.props.formatOpts);
    }
    isWhiteListed(k) {
      return WHITELISTED_FIELDS.includes(k);
    }
    disregardInvalids = property => {
      return property.mainImageUrl && property.financial;
    }
    getGrossYield(price) {
      let grossYield = (price.monthlyRent * 12) / price.listPrice;
      return `${(grossYield * 100).toFixed(2)}%`;
    }
    onSuccess = res => {
     const properties = res.data.properties
       .filter(this.disregardInvalids)
       .map(this.transform);
     this.setState({ properties });
    }
    formatFinancialData = price => {
      const formatter = this.formatter();
      const grossYield = this.getGrossYield(price);
      let { listPrice, monthlyRent } = price;
      listPrice = formatter.format(listPrice);
      monthlyRent = formatter.format(monthlyRent);
      return { listPrice, monthlyRent, grossYield };
    }
    transform = property => {
      let output = {}
      Object.keys(property).map(k => {
        if (this.isWhiteListed(k)) {
          const elem = property[k];
          const isFinancial = k === this.props.financialKey;
          if (isFinancial) {
            output[k] = this.formatFinancialData(elem)
          } else {
            output[k] = elem;
          }
        }
        return output;
      });
      return output;
    }
    render() {
      return(
        <WrappedComponent
          {...this.props}
          properties={this.state.properties}
        />
      )
    }
  }
  return withProperties;
};

export default withProperties;
