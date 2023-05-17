import React, { Component } from 'react';


const rawJournalData = [

    { title: "--Maid in the Back--", content: <h2>"Why did a fellow student say that I should blur out my background because he can see my house cleaner in the background, ha. No maid, just my <u>wife</u> who is from <i>Vera Cruz, Mexico.</i>"</h2>, status: "draft" },
    { title: "--Bad Memory--", content: <h2>"I have had a bad memory ever since <u>Kindergarten</u>, hardest <i>2 years of my life</i>."</h2>, status: "draft" },
    { title: "--Passport--", content: <h2>"Forgot my passport to travel to <i>Puerto Rico</i>, thought I would be good but <u>I wasn't</u>, I guess you need it to get to the BVI by boat from there. Luckily I didn't miss the boat but had to take a later flight and missed out on the first day on shore."</h2>, status: "draft" },
    { title: "--Sampson--", content: <h2>"My old cat used to go on walks with me, that is until I moved to <i>Florida</i>. He sure wasn't scared of that <u>Alligator</u> but the gator won that round."</h2>, status: "draft" }
    
];

const JournalEntry = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};

// Class Component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: 'MyJournalConstructor',
            isOpen: true
        };
    }

    clearEntries = () => {
        this.setState({ journalData: [], isOpen: false });
    }

    showAllEntries = () => {
        this.setState({ journalData: rawJournalData, isOpen: true });
    }

    toggleEntries = () => {
        if (this.state.isOpen) {
            this.setState({ journalData: [], isOpen: false });
        } else {
            this.setState({ journalData: rawJournalData, isOpen: true });
        }
    };

    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return (
                <div key={journalEntry.title}>
                    <JournalEntry 
                    title={journalEntry.title} 
                    content={journalEntry.content}
                    />
                </div>
            )
        })
        return (
            <div>
                <h1>{this.props.heading}</h1>
                {journalEntries}

                <button onClick={this.clearEntries}>-x-Clear All Stories-x-</button>
                <button onClick={this.showAllEntries}>-^-Show All Stories-^-</button>
                <button onClick={this.toggleEntries}>-^-Show/Hide-x-</button>
            </div>
        );
    }
}

