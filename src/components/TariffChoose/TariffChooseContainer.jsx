import React from "react";
import {connect} from "react-redux";
import TariffChoose from "./TariffChoose";
import {ChoosedTariffClick} from "../../redux/tariff-reducer";

class TariffChooseContainer extends React.Component {
    render() {
        return <TariffChoose {...this.props} sendChoosedTariff={this.props.ChoosedTariffClick} choosedTariff={this.props.choosedTariff} />
    }
}

const mapStateToProps = (state) => {
    return {
        choosedTariff: state.tariffPage.choosedTariff
    }
}

export default connect(mapStateToProps, {ChoosedTariffClick})(TariffChooseContainer)
