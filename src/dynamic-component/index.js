import React from 'react';
import DynamicCompo from './dynamic-compo';

function DynamicComponentExample(props) {

    const dummyData = {
        id: 's-1', type: "story", title: 'One Piece Story',
        decision: [
            {
                id: 'd-1', type: 'decision', title: 'decision-1',
                story: {
                    id: 's-2', type: "story", title: 'story-1',
                    decision: [
                        {
                            id: 'd-2', type: 'decision', title: 'decision-1', story: {
                                id: 's-3', title: 'story-1', decision: [
                                    { id: 'd-3', type: 'decision', title: 'decision-1', story: {} },
                                    { id: 'd-4', type: 'decision', title: 'decision-2', story: {} },
                                ]
                            }
                        },
                        { id: 'd-5', type: 'decision', title: 'decision-2', story: {} },
                    ]
                }
            },
            {
                id: 'd-6', type: 'decision', title: 'decision-2',
                story: {
                    id: 's-4', type: "story", title: 'story-1',
                    decision: [
                        {
                            id: 'd-7', type: 'decision', title: 'decision-1', story: {
                                id: 's-5', type: "story", title: 'story-1', decision: [
                                    {
                                        id: 'd-8', title: 'decision-1', story: {
                                            id: 's-6', type: "story", title: 'story-1', decision: [
                                                { id: 'd-9', type: 'decision', title: 'decision-1', story: {} },
                                                { id: 'd-10', type: 'decision', title: 'decision-2', story: {} },
                                            ]
                                        }
                                    },
                                    { id: 'd-11', type: 'decision', title: 'decision-2', story: {} },
                                ]
                            }
                        },
                        { id: 'd-12', type: 'decision', title: 'decision-2', story: {} },
                    ]
                }
            },
        ]
    }
    return (
        <div>
            <DynamicCompo data={dummyData} />
        </div>
    );
}

export default DynamicComponentExample;