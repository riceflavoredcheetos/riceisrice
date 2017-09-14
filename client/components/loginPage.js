import React from 'react';


export default class loginPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <form>
                    <label>
                        <input key="email" type="email" />
                        <input key="password" />
                    </label>
                        <input type="submit" />
                </form>
            </div>
        )
    }

}