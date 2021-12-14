import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
             hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {hasError:true};
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    Something Went Wrong Please try again after some time
                </div>
            );
        }
        return this.props.children;
    }
}
