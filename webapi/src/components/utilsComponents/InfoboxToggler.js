export default class InfoboxToggler {
    static toggleInfoBox() {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
}