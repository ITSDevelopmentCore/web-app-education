import React from 'react';

import buttonDowngrade from "../assets/images/button-downgrade.svg"
import buttonUpgrade from "../assets/images/button-upgrade.svg"

export default class ClassChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentclass: props.currentclass,
        }
    }

    handleUpgradeClick() {
        if (this.state.currentclass < 12) {
            this.setState(prevState => ({
                currentclass: prevState.currentclass + 1,
            }));
        }
    }

    handleDowngradeClick() {
        if (this.state.currentclass > 0) {
            this.setState(prevState => ({
                currentclass: prevState.currentclass - 1,
            }));
        }
    }

    render() {
        return (
            <div>

                <div
                    className={"flex justify-center items-center mb-3 h-8 upgrade-button bg-amber-200 rounded-xl"}
                    onClick={() => { this.handleUpgradeClick(); }}>
                    <img
                        className={"w-8 h-4"}
                        src={buttonUpgrade}/>
                </div>

                <div
                    className={"flex justify-center items-center current-class bg-amber-500	rounded-xl h-8 text-white"}
                    currentclass={this.state.currentclass}>{this.state.currentclass + " класс"}
                </div>

                <div
                    className={"flex justify-center items-center mt-3 h-8 downgrade-button bg-amber-200 rounded-xl"}
                    onClick={() => { this.handleDowngradeClick(); }}>
                    <img
                        className={"w-8 h-4"}
                        src={buttonDowngrade}/>
                </div>

            </div>
        )
    }
}
